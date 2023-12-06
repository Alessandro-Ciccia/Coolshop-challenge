// SELECT OPERATORE MATEMATICO
const Select = ({ disabled, value, onChange }) => {
  return (
    <select
      className="border-2 rounded-md p-1"
      disabled={disabled}
      value={value}
      onChange={onChange}
    >
      <option value="+">+</option>
      <option value="-">-</option>
    </select>
  );
};

export default Select;
