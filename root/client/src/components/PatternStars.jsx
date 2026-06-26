const starSvg = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
    <polygon points="0,-6 1.4,-1.4 6,0 1.4,1.4 0,6 -1.4,1.4 -6,0 -1.4,-1.4"
      fill="white" opacity="1" transform="translate(0,0)"/>
    <polygon points="0,-6 1.4,-1.4 6,0 1.4,1.4 0,6 -1.4,1.4 -6,0 -1.4,-1.4"
      fill="white" opacity="1" transform="translate(80,0)"/>
    <polygon points="0,-6 1.4,-1.4 6,0 1.4,1.4 0,6 -1.4,1.4 -6,0 -1.4,-1.4"
      fill="white" opacity="1" transform="translate(0,80)"/>
    <polygon points="0,-6 1.4,-1.4 6,0 1.4,1.4 0,6 -1.4,1.4 -6,0 -1.4,-1.4"
      fill="white" opacity="1" transform="translate(80,80)"/>
    <polygon points="0,-6 1.4,-1.4 6,0 1.4,1.4 0,6 -1.4,1.4 -6,0 -1.4,-1.4"
      fill="white" opacity="1" transform="translate(40,40)"/>
  </svg>
`);

export default function PatternStars({ children, className = "" }) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={{
        backgroundColor: "var(--color-secondary-light)",
        backgroundImage: `url("data:image/svg+xml,${starSvg}")`,
        backgroundSize: "80px 80px",
        backgroundPosition: "0 0",
      }}
    >
      {children}
    </div>
  );
}