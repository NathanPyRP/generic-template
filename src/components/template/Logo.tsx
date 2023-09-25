export default function Logo() {
    const circleStyles = {
      background: "white",
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
  
    const gradient = "linear-gradient(135deg, #4F46E5, #C634E2)";
  
    const textStyles = {
      backgroundImage: gradient,
      WebkitBackgroundClip: "text",
      color: "transparent",
      fontSize: "24px",
      fontWeight: "bold", // Defina o peso da fonte aqui
    };
  
    return (
      <div className="flex items-center justify-center">
        <div style={circleStyles}>
          <div style={textStyles}>
            N
          </div>
          <div style={textStyles}>
            Q
          </div>
        </div>
      </div>
    );
  }
  