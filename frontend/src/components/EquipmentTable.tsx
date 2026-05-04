import type { Equipment } from "../types/equipment";

type Props = {
    data: Equipment[];
    onRowClick: (item: Equipment) => void;
};

function getStatusStyle(status: string) {
    switch (status) {
        case "active":
            return "bg-green-100 text-green-700";
        case "offline":
            return "bg-red-100 text-red-700";
        case "maintenance":
            return "bg-yellow-100 text-yellow-700";
        default:
            return "bg-gray-100 text-gray-600";
    }
}

export default function EquipmentTable({ data, onRowClick }: Props) {
    if (data.length === 0) {
        return (
            <div className="mt-10 text-center">
                <p className="text-gray-500 text-lg font-medium">
                    No results found
                </p>
                <p className="text-sm text-gray-400 mt-1">
                    Try changing filters or search
                </p>
            </div>
        );
    }

    return (
        <div className="mt-6 overflow-x-auto">
            <div className="bg-white shadow-md rounded-xl border border-gray-100">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Type</th>
                            <th className="px-6 py-4">Make</th>
                            <th className="px-6 py-4">Rack</th>
                            <th className="px-6 py-4">Status</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {data.map((item) => (
                            <tr
                                key={item.id}
                                onClick={() => onRowClick(item)}
                                className="hover:bg-gray-50 cursor-pointer transition"
                            >
                                <td className="px-6 py-4 font-medium text-gray-800">
                                    {item.name}
                                </td>

                                <td className="px-6 py-4 text-gray-600 capitalize">
                                    {item.type}
                                </td>

                                <td className="px-6 py-4 text-gray-600">
                                    {item.make}
                                </td>

                                <td className="px-6 py-4 text-gray-600">
                                    {item.rack}
                                </td>

                                <td className="px-6 py-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                                            item.status
                                        )}`}
                                    >
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}