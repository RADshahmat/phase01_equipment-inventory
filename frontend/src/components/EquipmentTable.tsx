import type { Equipment } from "../types/equipment";

type Props = {
    data: Equipment[];
    onRowClick: (item: Equipment) => void;
};

export default function EquipmentTable({ data, onRowClick }: Props) {
    if (data.length === 0) {
        return (
            <div className="mt-6 text-center">
                <p className="text-gray-500 text-lg">No results found</p>
                <p className="text-sm text-gray-400">
                    Try changing filters or search
                </p>
            </div>
        );
    }
    return (
        <table className="w-full border mt-4">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Make</th>
                    <th>Rack</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr
                        key={item.id}
                        onClick={() => onRowClick(item)}
                        className="cursor-pointer hover:bg-gray-100"
                    >
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.make}</td>
                        <td>{item.rack}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}