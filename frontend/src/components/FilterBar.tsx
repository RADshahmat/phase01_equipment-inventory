type Props = {
    type: string;
    make: string;
    onTypeChange: (v: string) => void;
    onMakeChange: (v: string) => void;
};

export default function FilterBar({
    type,
    make,
    onTypeChange,
    onMakeChange,
}: Props) {
    return (
        <div className=" bg-white w-full rounded-xl p-3 flex flex-col md:flex-row gap-3 md:items-center">

            {/* Type */}
            <select
                value={type}
                onChange={(e) => onTypeChange(e.target.value)}
                className=" w-full px-3 py-2 border border-gray-200 rounded-lg text-sm 
                           focus:outline-none focus:ring-2 focus:ring-blue-200 
                           bg-white hover:border-gray-300 transition w-full md:w-1/4"
            >
                <option value="">All Types</option>
                <option value="server">Server</option>
                <option value="switch">Switch</option>
                <option value="router">Router</option>
                <option value="ups">UPS</option>
            </select>

            {/* Make */}
            <select
                value={make}
                onChange={(e) => onMakeChange(e.target.value)}
                className=" w-full px-3 py-2 border border-gray-200 rounded-lg text-sm 
                           focus:outline-none focus:ring-2 focus:ring-blue-200 
                           bg-white hover:border-gray-300 transition w-full md:w-1/4"
            >
                <option value="">All Makes</option>
                <option value="Dell">Dell</option>
                <option value="Cisco">Cisco</option>
                <option value="HP">HP</option>
                <option value="APC">APC</option>
            </select>
        </div>
    );
}