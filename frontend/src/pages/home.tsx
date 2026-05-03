import { useEffect, useMemo, useState } from "react";
import { fetchEquipment } from "../api/equipmentApi";
import type { Equipment } from "../types/equipment";
import EquipmentTable from "../components/EquipmentTable";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import EquipmentDetail from "../components/EquipmentDetail";

export default function Home() {
    // state lifting from filterBar and searchBar
    const [data, setData] = useState<Equipment[]>([]);
    const [type, setType] = useState("");
    const [make, setMake] = useState("");
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState<Equipment | null>(null);

    useEffect(() => {
        fetchEquipment().then((res) => {
            setData(res);
        });
    }, []);

    const filtered = useMemo(() => {
        return data.filter((e) => {
            if (type && e.type !== type) return false;
            if (make && e.make !== make) return false;

            const tags = e.tags ?? [];
            if (search) {
                const match = tags.some((tag) =>
                    tag.toLowerCase().includes(search.toLowerCase())
                );
                if (!match) return false;
            }

            return true;         
        });
    }, [data, type, make, search]);

    return (
        <div className="w-full  p-6">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <h1 className="text-red-500 text-2xl font-bold mb-6">
                    Equipment Inventory
                </h1>

                {/* Filters Card */}
                <div className="bg-white p-4 rounded-2xl shadow-sm mb-4">
                    <SearchBar value={search} onChange={setSearch} />
                    <FilterBar
                        type={type}
                        make={make}
                        onTypeChange={setType}
                        onMakeChange={setMake}
                    />
                </div>

                {/* Table */}
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                    <EquipmentTable data={filtered} onRowClick={setSelected} />
                </div>

                {/* Detail */}
                <EquipmentDetail item={selected} onClose={() => setSelected(null)} />
            </div>
        </div>
    );
}