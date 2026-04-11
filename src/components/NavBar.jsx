function BrandIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* background circle */}
      <circle cx="32" cy="32" r="30" fill="#7a968a" />

      {/* house outline */}
      <path
        d="M20 30 L32 20 L44 30"
        fill="none"
        stroke="#f4f7f5"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="24"
        y="30"
        width="16"
        height="14"
        fill="none"
        stroke="#f4f7f5"
        strokeWidth="3"
        rx="2"
      />

      {/* heart INSIDE the house */}
      <path
        d="M32 36 
           C30 33, 26 33, 26 36 
           C26 39, 32 43, 32 43 
           C32 43, 38 39, 38 36 
           C38 33, 34 33, 32 36 Z"
        fill="#f4f7f5"
      />
    </svg>
  );
}