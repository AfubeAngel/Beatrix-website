  type Props = {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder: string;
  };
  
  export default function InputField({ label, name, value, onChange, type = "text", placeholder }: Props) {
    return (
      <div className="flex flex-col gap-4 w-full">
        <label className="block text-black text-base lg:text-lg  ">{label}</label>
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
          placeholder={placeholder}
        />
      </div>
    );
  }
  