// COMPONENTE BOTTONE ADATTABILE

const ButtonVariants = {
  add: "bg-blue-600 hover:bg-blue-700 transition-all p-2 rounded-md text-white",
  enabled:
    "bg-green-600 hover:bg-green-700 transition-all p-2 rounded-md text-white",
  disabled:
    "bg-gray-600 hover:bg-gray-700 transition-all p-2 rounded-md text-white",
  delete:
    "bg-red-600 hover:bg-red-700 transition-all p-2 rounded-md text-white",
};
const Button = ({ label, onClick, variant }) => {
  return (
    <>
      <button onClick={onClick} className={ButtonVariants[variant]}>
        {label}
      </button>
    </>
  );
};

export default Button;
