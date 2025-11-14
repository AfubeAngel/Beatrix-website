type Props = {
    label: string;
    name: string;
    value: string;
    placeholder?: string;
    rows?: number;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  };
  
  export default function Textarea({ label, name, value, rows, placeholder, onChange }: Props) {
    return (
      <div className="w-full">
        <label className="block text-black text-base lg:text-lg mb-3 ">{label}</label>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          className="w-full p-4 border-[1px] shadow-sm rounded-md border-[#E7E7E7] bg-[#F6F6F6]"
          placeholder={placeholder}
        ></textarea>
      </div>
    );
  }
  