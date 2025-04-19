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
      <div className="md:col-span-2">
        <label className="block text-black mb-1 ">{label}</label>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          className="w-full px-3 py-2 border rounded"
          placeholder={placeholder}
        ></textarea>
      </div>
    );
  }
  