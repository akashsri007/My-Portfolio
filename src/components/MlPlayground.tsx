import { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Activity, Cpu } from 'lucide-react';

interface MetricPoint {
  epoch: number;
  trainLoss: number;
  valLoss: number;
  accuracy: number;
}

export const MlPlayground: React.FC = () => {
  const [modelType] = useState<string>('Object Detection & Vision');
  const [optimizer, setOptimizer] = useState<'AdamW' | 'SGD' | 'RMSprop'>('AdamW');
  const [learningRate, setLearningRate] = useState<number>(0.001);
  const [currentEpoch, setCurrentEpoch] = useState<number>(45);
  const [isTraining, setIsTraining] = useState<boolean>(false);
  const animationRef = useRef<number | null>(null);

  // Generate loss curve data based on hyperparameters
  const generateHistory = (maxEp: number, lr: number, opt: string): MetricPoint[] => {
    const points: MetricPoint[] = [];
    const lrFactor = lr === 0.1 ? 1.4 : lr === 0.01 ? 1.0 : 0.8;
    const optNoise = opt === 'SGD' ? 0.04 : opt === 'RMSprop' ? 0.025 : 0.015;

    for (let e = 1; e <= maxEp; e++) {
      // Exponential decay + realistic stochastic noise
      const decay = Math.exp(-e / (16 * lrFactor));
      const noise = (Math.sin(e * 1.5) * optNoise) + ((e % 3 === 0 ? 0.01 : -0.01) * optNoise);
      const trainLoss = Math.max(0.04, Number((decay * 1.8 + noise).toFixed(4)));
      const valLoss = Math.max(0.065, Number((decay * 1.9 + (e > 35 ? (e - 35) * 0.0015 : 0) + noise * 1.3).toFixed(4)));
      const accuracy = Math.min(98.6, Number((92 * (1 - decay * 0.9) + (e % 2 === 0 ? 0.4 : -0.3)).toFixed(1)));

      points.push({ epoch: e, trainLoss, valLoss, accuracy });
    }
    return points;
  };

  const [points, setPoints] = useState<MetricPoint[]>(() => generateHistory(45, 0.001, 'AdamW'));

  // Update points when hyperparameters change
  useEffect(() => {
    setPoints(generateHistory(currentEpoch, learningRate, optimizer));
  }, [currentEpoch, learningRate, optimizer]);

  // Handle live training toggle
  const toggleTraining = () => {
    if (isTraining) {
      setIsTraining(false);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    } else {
      setIsTraining(true);
    }
  };

  useEffect(() => {
    if (!isTraining) return;

    const interval = setInterval(() => {
      setCurrentEpoch((prev) => {
        if (prev >= 100) {
          setIsTraining(false);
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [isTraining]);

  const handleReset = () => {
    setIsTraining(false);
    setCurrentEpoch(10);
  };

  // Convert points to SVG coordinates
  // SVG viewBox: 0 0 680 180
  const width = 680;
  const height = 180;
  const paddingX = 40;
  const paddingY = 24;

  const maxVal = 2.0;
  const minVal = 0.0;

  const getCoordinates = (index: number, val: number, total: number) => {
    const x = paddingX + (index / Math.max(1, total - 1)) * (width - paddingX * 2);
    const normalizedY = (val - minVal) / (maxVal - minVal);
    const y = height - paddingY - normalizedY * (height - paddingY * 2);
    return { x, y };
  };

  const trainPath = points
    .map((p, i) => {
      const { x, y } = getCoordinates(i, p.trainLoss, points.length);
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  const valPath = points
    .map((p, i) => {
      const { x, y } = getCoordinates(i, p.valLoss, points.length);
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  const lastPoint = points[points.length - 1] || { epoch: 1, trainLoss: 1.2, valLoss: 1.3, accuracy: 50 };
  const lastTrainCoord = getCoordinates(points.length - 1, lastPoint.trainLoss, points.length);

  return (
    <div className="ml-playground-container">
      {/* Top Console Bar */}
      <div className="ml-header">
        <div className="ml-title-block">
          <Activity size={15} color="var(--teal)" />
          <span className="ml-console-tag">NEURAL-RUN // TRAIN_TELEMETRY</span>
          <span className="ml-model-name">[{modelType}]</span>
        </div>
        <div className="ml-status-badge">
          <span className={`live-pulse-dot ${isTraining ? 'active' : ''}`}></span>
          <span>{isTraining ? 'TRAINING CONVERGENCE...' : 'STANDBY / READY'}</span>
        </div>
      </div>

      {/* Metrics Header Display */}
      <div className="ml-metrics-strip">
        <div className="metric-cell">
          <span className="metric-label">EPOCH</span>
          <span className="metric-val">{lastPoint.epoch} / 100</span>
        </div>
        <div className="metric-cell">
          <span className="metric-label">TRAIN LOSS</span>
          <span className="metric-val amber-val">{lastPoint.trainLoss.toFixed(4)}</span>
        </div>
        <div className="metric-cell">
          <span className="metric-label">VAL LOSS</span>
          <span className="metric-val cyan-val">{lastPoint.valLoss.toFixed(4)}</span>
        </div>
        <div className="metric-cell">
          <span className="metric-label">mAP / ACCURACY</span>
          <span className="metric-val teal-val">{lastPoint.accuracy}%</span>
        </div>
      </div>

      {/* Interactive SVG Loss Canvas */}
      <div className="ml-canvas-wrap">
        <svg viewBox={`0 0 ${width} ${height}`} className="ml-svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="trainLossGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--amber)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="var(--amber)" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="valLossGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--teal)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="var(--teal)" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1={paddingX} y1={paddingY} x2={width - paddingX} y2={paddingY} stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
          <line x1={paddingX} y1={height / 2} x2={width - paddingX} y2={height / 2} stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
          <line x1={paddingX} y1={height - paddingY} x2={width - paddingX} y2={height - paddingY} stroke="rgba(255,255,255,0.12)" />

          {/* Y Axis labels */}
          <text x="12" y={paddingY + 4} fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">2.0</text>
          <text x="12" y={height / 2 + 3} fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">1.0</text>
          <text x="12" y={height - paddingY + 3} fill="var(--muted)" fontSize="9" fontFamily="var(--font-mono)">0.0</text>

          {/* Validation Curve */}
          <path d={valPath} fill="none" stroke="var(--teal)" strokeWidth="2" strokeDasharray="4 2" opacity="0.85" />

          {/* Train Curve */}
          <path d={trainPath} fill="none" stroke="var(--amber)" strokeWidth="2.5" />

          {/* Animated Glowing Head */}
          <circle
            cx={lastTrainCoord.x}
            cy={lastTrainCoord.y}
            r="4.5"
            fill="var(--amber)"
            stroke="#fff"
            strokeWidth="1.5"
          />
        </svg>

        {/* Legend */}
        <div className="ml-legend">
          <span className="legend-item"><span className="legend-line amber"></span> Train Loss</span>
          <span className="legend-item"><span className="legend-line teal-dashed"></span> Val Loss</span>
        </div>
      </div>

      {/* Controls & Hyperparameters Bar */}
      <div className="ml-controls-bar">
        <div className="control-group">
          <label className="ctrl-label">
            <Cpu size={13} />
            <span>Optimizer:</span>
          </label>
          <div className="pill-group">
            {(['AdamW', 'SGD', 'RMSprop'] as const).map((opt) => (
              <button
                key={opt}
                className={`pill-btn ${optimizer === opt ? 'active' : ''}`}
                onClick={() => setOptimizer(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <label className="ctrl-label">
            <span>LR:</span>
          </label>
          <div className="pill-group">
            {[0.001, 0.01, 0.1].map((lr) => (
              <button
                key={lr}
                className={`pill-btn ${learningRate === lr ? 'active' : ''}`}
                onClick={() => setLearningRate(lr)}
              >
                {lr}
              </button>
            ))}
          </div>
        </div>

        <div className="control-actions">
          <button
            className={`btn-play ${isTraining ? 'running' : ''}`}
            onClick={toggleTraining}
            title={isTraining ? 'Pause Training' : 'Run Live Epoch Steps'}
          >
            <Play size={13} fill={isTraining ? 'currentColor' : 'none'} />
            <span>{isTraining ? 'Pause' : 'Train Step'}</span>
          </button>
          <button className="btn-reset" onClick={handleReset} title="Reset Simulation">
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      <style>{`
        .ml-playground-container {
          background: #0a1122;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-top: 40px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
          transition: border-color 0.25s;
        }
        .ml-playground-container:hover {
          border-color: rgba(77, 224, 193, 0.35);
        }
        .ml-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          background: #0f192f;
          border-bottom: 1px solid var(--border);
          font-family: var(--font-mono);
          font-size: 0.74rem;
          flex-wrap: wrap;
          gap: 10px;
        }
        .ml-title-block {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ml-console-tag {
          color: var(--teal);
          font-weight: 600;
        }
        .ml-model-name {
          color: var(--muted);
        }
        .ml-status-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--muted);
          font-size: 0.7rem;
        }
        .live-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--muted);
        }
        .live-pulse-dot.active {
          background: var(--teal);
          box-shadow: 0 0 8px var(--teal);
          animation: blink 1.2s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .ml-metrics-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: rgba(14, 23, 44, 0.85);
          border-bottom: 1px solid rgba(32, 46, 77, 0.6);
        }
        .metric-cell {
          padding: 8px 16px;
          border-right: 1px solid rgba(32, 46, 77, 0.6);
          font-family: var(--font-mono);
        }
        .metric-cell:last-child {
          border-right: none;
        }
        .metric-label {
          display: block;
          font-size: 0.64rem;
          color: var(--muted);
          letter-spacing: 0.05em;
        }
        .metric-val {
          font-size: 0.92rem;
          font-weight: 600;
          color: #fff;
        }
        .amber-val { color: var(--amber); }
        .cyan-val { color: var(--cyan); }
        .teal-val { color: var(--teal); }

        .ml-canvas-wrap {
          position: relative;
          padding: 12px 14px 4px;
          background: #080d1a;
        }
        .ml-svg {
          width: 100%;
          height: 140px;
          display: block;
        }
        .ml-legend {
          display: flex;
          gap: 16px;
          justify-content: flex-end;
          padding: 4px 12px 8px;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--muted);
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .legend-line {
          width: 14px;
          height: 2px;
          border-radius: 2px;
          display: inline-block;
        }
        .legend-line.amber {
          background: var(--amber);
        }
        .legend-line.teal-dashed {
          background: var(--teal);
          border-top: 1px dashed var(--teal);
        }

        .ml-controls-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          background: #0d162b;
          border-top: 1px solid var(--border);
          font-family: var(--font-mono);
          font-size: 0.74rem;
          gap: 12px;
          flex-wrap: wrap;
        }
        .control-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ctrl-label {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--muted);
        }
        .pill-group {
          display: flex;
          gap: 4px;
          background: var(--panel-2);
          padding: 2px;
          border-radius: 5px;
          border: 1px solid var(--border);
        }
        .pill-btn {
          padding: 3px 8px;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--muted);
          transition: all 0.15s;
        }
        .pill-btn:hover {
          color: #fff;
        }
        .pill-btn.active {
          background: var(--teal);
          color: #070b18;
          font-weight: 600;
        }
        .control-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: auto;
        }
        .btn-play {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 5px;
          background: rgba(77, 224, 193, 0.15);
          color: var(--teal);
          border: 1px solid rgba(77, 224, 193, 0.35);
          font-size: 0.72rem;
          font-weight: 600;
          transition: all 0.18s;
        }
        .btn-play:hover {
          background: var(--teal);
          color: #070b18;
        }
        .btn-play.running {
          background: rgba(255, 189, 89, 0.2);
          color: var(--amber);
          border-color: var(--amber);
        }
        .btn-reset {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 5px 8px;
          border-radius: 5px;
          background: var(--panel-2);
          color: var(--muted);
          border: 1px solid var(--border);
          transition: all 0.18s;
        }
        .btn-reset:hover {
          color: #fff;
          border-color: var(--muted);
        }
        @media (max-width: 640px) {
          .ml-metrics-strip {
            grid-template-columns: repeat(2, 1fr);
          }
          .metric-cell:nth-child(2) {
            border-right: none;
          }
          .metric-cell:nth-child(1), .metric-cell:nth-child(2) {
            border-bottom: 1px solid rgba(32, 46, 77, 0.6);
          }
          .control-actions {
            width: 100%;
            justify-content: flex-end;
          }
        }
      `}</style>
    </div>
  );
};
