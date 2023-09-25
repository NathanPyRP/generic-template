export default function Logo() {
    const gradient = "linear-gradient(135deg, #4F46E5, #C634E2)";
  
    return (
      <div
        className={`
          flex flex-col items-center justify-center
          h-12 w-12 rounded-full
        `}
        style={{ background: gradient }}
      >
        <div className="text-white font-bold text-lg">
          <span style={{ backgroundImage: gradient, WebkitBackgroundClip: "text" }}>
            N
          </span>
          <span style={{ backgroundImage: gradient, WebkitBackgroundClip: "text" }}>
            Q
          </span>
        </div>
      </div>
    );
  }