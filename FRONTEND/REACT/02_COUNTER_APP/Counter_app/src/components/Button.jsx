function Button({ logo, text, func }) {
  return (
    <button onClick={func}>
      {logo}
      {text}
    </button>
  );
}

export default Button;
