import type { Equipment } from "../types/equipment";

type Props = {
    item: Equipment | null;
    onClose: () => void;
};

export default function EquipmentDetail({ item, onClose }: Props) {
    if (!item) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            {/* Modal Card */}
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
                >
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-4">{item.name}</h2>

                {/* Content */}
                <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">Type:</span> {item.type}</p>
                    <p><span className="font-semibold">Make:</span> {item.make}</p>
                    <p><span className="font-semibold">Model:</span> {item.model}</p>
                    <p><span className="font-semibold">Rack:</span> {item.rack}</p>
                    <p><span className="font-semibold">Unit:</span> {item.unitPosition}</p>

                    {/* Status badge */}
                    <p>
                        <span className="font-semibold">Status:</span>{" "}
                        <span
                            className={`px-2 py-1 rounded text-sm ${item.status === "active"
                                    ? "bg-green-100 text-green-700"
                                    : item.status === "offline"
                                        ? "bg-red-100 text-red-700"
                                        : "bg-yellow-100 text-yellow-700"
                                }`}
                        >
                            {item.status}
                        </span>
                    </p>

                    {/* Tags */}
                    <div>
                        <span className="font-semibold">Tags:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {item.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}