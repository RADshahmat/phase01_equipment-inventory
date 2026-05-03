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
        <div className="flex gap-2">
            <select value={type} onChange={(e) => onTypeChange(e.target.value)}>
                <option value="">All Types</option>
                <option value="server">Server</option>
                <option value="switch">Switch</option>
                <option value="router">Router</option>
                <option value="ups">UPS</option>
            </select>

            <select value={make} onChange={(e) => onMakeChange(e.target.value)}>
                <option value="">All Makes</option>
                <option value="Dell">Dell</option>
                <option value="Cisco">Cisco</option>
                <option value="HP">HP</option>
                <option value="APC">APC</option>
            </select>
        </div>
    );
}