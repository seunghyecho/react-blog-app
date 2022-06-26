interface ButtonProp {
  type?: "button" | "submit" | "reset";
  label: string;
}

function Button({ type, label }: ButtonProp) {
  return <button type={type}>{label}</button>;
}

export default Button;
