function Logo() {
  return (
    <svg
      className="logo-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pawse Furlife Furever logo"
      role="img"
    >
      <circle cx="50" cy="50" r="45" fill="#7a968a" />
      <path d="M30 50 L50 30 L70 50 V72 H30 Z" fill="white" />
      <circle cx="50" cy="61" r="6" fill="#7a968a" />
      <circle cx="42" cy="53" r="3.2" fill="#7a968a" />
      <circle cx="50" cy="49" r="3.2" fill="#7a968a" />
      <circle cx="58" cy="53" r="3.2" fill="#7a968a" />
    </svg>
  );
}

export default Logo;