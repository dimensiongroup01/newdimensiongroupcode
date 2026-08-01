"use client";

export default function Hero3D() {
  return (
    <div className="scene">
      <div className="float">
        <div className="glow" />
        <div className="coin">
          <div className="face front">
            <div className="shine" />
            <div className="logo">
              <img
                src="https://dimensiongroup.co.in/wp-content/uploads/2019/05/dimesnion-logo-s.png"
                alt="Dimension Group logo"
                className="brandLogo frontLogo"
              />
            </div>
          </div>

          <div className="face back">
            <div className="shine" />
            <div className="logo">
              <img
                src="https://bondsadda.com/img/logo.png"
                alt="BondsAdda logo"
                className="brandLogo backLogo"
              />
            </div>
          </div>

          <div className="rim" />
        </div>
        <div className="shadow" />
      </div>

      <style jsx>{`
        .scene {
          width: 100%;
          height: 100%;
          margin: 0 auto;
          perspective: 1400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .float {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: bob 4.5s ease-in-out infinite;
        }

        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }

        /* soft ambient glow pulsing behind the coin */
        .glow {
          position: absolute;
          inset: -10%;
          border-radius: 50%;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(255, 107, 53, 0.35),
            rgba(0, 119, 255, 0.25) 45%,
            transparent 70%
          );
          filter: blur(40px);
          animation: pulse 4.5s ease-in-out infinite;
          z-index: 0;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.55; transform: scale(0.92); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }

        .coin {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: rotateCoin 7s cubic-bezier(0.45, 0, 0.55, 1) infinite;
          z-index: 1;
        }

        .coin:hover {
          animation-play-state: paused;
        }

        .face {
          position: absolute;
          inset: 0;
          border-radius: 2rem;
          backface-visibility: hidden;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          background:
            radial-gradient(circle at 30% 20%, rgba(255,255,255,0.95), transparent 55%),
            linear-gradient(145deg, #ffffff 0%, #eceff3 45%, #cfd4db 100%);
          border: 8px solid transparent;
          background-clip: padding-box;
          box-shadow:
            0 0 0 2px rgba(255, 255, 255, 0.6) inset,
            0 0 45px rgba(255, 107, 53, 0.18),
            0 25px 70px rgba(0, 0, 0, 0.4),
            inset 0 0 30px rgba(255, 255, 255, 0.85);
        }

        .front {
          transform: translateZ(12px);
        }

        .back {
          transform: rotateY(180deg) translateZ(12px);
        }

        /* rim highlight ring, gives it a metallic coin edge */
        .rim {
          position: absolute;
          inset: -3px;
          border-radius: 2.15rem;
          background: linear-gradient(135deg, #fff, #ff6b35 35%, #0077ff 70%, #fff);
          z-index: -1;
          filter: blur(0.5px);
          opacity: 0.9;
        }

        /* moving light sweep across each face */
        .shine {
          position: absolute;
          top: -50%;
          left: -60%;
          width: 60%;
          height: 200%;
          background: linear-gradient(
            75deg,
            transparent 0%,
            rgba(255, 255, 255, 0) 35%,
            rgba(255, 255, 255, 0.75) 50%,
            rgba(255, 255, 255, 0) 65%,
            transparent 100%
          );
          transform: rotate(8deg);
          animation: sweep 3.2s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes sweep {
          0% { left: -60%; }
          55% { left: 130%; }
          100% { left: 130%; }
        }

        .logo {
          text-align: center;
          z-index: 2;
        }

        .brandLogo {
          width: 300px;
          height: 250px;
          object-fit: contain;
          margin: 0 auto;
          display: block;
          filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.15));
        }

        /* contact shadow on the "floor" beneath the coin, breathes with the bob */
        .shadow {
          position: absolute;
          left: 50%;
          bottom: 4%;
          width: 55%;
          height: 30px;
          transform: translateX(-50%);
          background: radial-gradient(ellipse at center, rgba(0,0,0,0.28), transparent 70%);
          border-radius: 50%;
          animation: shadowPulse 4.5s ease-in-out infinite;
          z-index: 0;
        }

        @keyframes shadowPulse {
          0%, 100% { opacity: 0.55; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.3; transform: translateX(-50%) scale(0.8); }
        }

        @keyframes rotateCoin {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}