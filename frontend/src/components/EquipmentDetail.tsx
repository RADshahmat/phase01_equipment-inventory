import type { Equipment } from "../types/equipment";

type Props = {
    item: Equipment | null;
    onClose: () => void;
};

export default function EquipmentDetail({ item, onClose }: Props) {
    if (!item) return null;

    const statusStyle =
        item.status === "active"
            ? "bg-green-100 text-green-700"
            : item.status === "offline"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">

            {/* Modal Card */}
            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="flex items-center align-items justify-between px-6 py-4 border-b">
                
                        <h2 className="color-blue-500 text-xl font-bold text-gray-800">
                            {item.name}
                        </h2>
     
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-black text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">

                    {/* Top Info Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-gray-500">Type</p>
                            <p className="font-semibold capitalize">{item.type}</p>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-gray-500">Make</p>
                            <p className="font-semibold">{item.make}</p>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-gray-500">Model</p>
                            <p className="font-semibold">{item.model}</p>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-gray-500">Rack</p>
                            <p className="font-semibold">{item.rack}</p>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-gray-500">Unit Position</p>
                            <p className="font-semibold">{item.unitposition}</p>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-gray-500">Status</p>
                            <span className={`inline-block mt-1 px-2 py-1 rounded text-xs font-medium ${statusStyle}`}>
                                {item.status}
                            </span>
                        </div>
                    </div>

                    {/* Tags Section */}
                    <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">
                            Tags
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 border border-blue-100"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}