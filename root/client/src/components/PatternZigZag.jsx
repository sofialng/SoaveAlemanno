export default function PatternZigZag({ children, className = "" }) {
  return (
    <div
      className={className}
      style={{
        "--stripe": "white",
        "--bg": "var(--color-secondary-light)",
        background: `
          linear-gradient(135deg, var(--bg) 25%, transparent 25%) -50px 0,
          linear-gradient(225deg, var(--bg) 25%, transparent 25%) -50px 0,
          linear-gradient(315deg, var(--bg) 25%, transparent 25%),
          linear-gradient(45deg, var(--bg) 25%, transparent 25%)
        `,
        backgroundSize: "100px 100px",
        backgroundColor: "var(--stripe)",
      }}
    >
      {children}
    </div>
  );
}