type Props = {
    value: string;
    onChange: (v: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
    return (
        <div className="relative w-full">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search by tags (e.g. production, core, backup...)"
                className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm
                           bg-white shadow-sm
                           focus:outline-none focus:ring-2 focus:ring-indigo-200
                           focus:border-indigo-300
                           hover:border-gray-300 transition"
            />

            {/* search icon */}
            <svg
                className="w-4 h-4 text-gray-400 absolute left-3 top-2.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </div>
    );
}