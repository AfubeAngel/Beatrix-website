type SelectProps = {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
  };
  
  export default function SelectField({ label, name, value, onChange, options }: SelectProps) {
    return (
      <div className="flex flex-col gap-4">
        <label className="block text-black ">{label}</label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
  