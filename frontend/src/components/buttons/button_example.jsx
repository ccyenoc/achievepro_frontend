function Button({ text, onClick, variant = "primary", className = "" }) {
  return (
    <button
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;