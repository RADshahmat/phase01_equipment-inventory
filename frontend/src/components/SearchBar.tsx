type Props = {
    value: string;
    onChange: (v: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
    return (
        <input
            type="text"
            placeholder="Search by tags..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}