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
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        fetchEquipment().then((res) => {
            setData(res);
        });
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

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
        <div className="w-full ">
            <div className=" mx-auto bg-teal-500 dark:bg-gray-900 min-h-screen p-6">

                {/* Header */}
                <h1 className=" text-2xl font-bold mb-6">
                   Static Equipment Inventory
                </h1>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="mb-3 px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:scale-105 transition"
                >
                    {darkMode ? "☀ Light" : "🌙 Dark"}
                </button>
                {/* Filters Card */}
                <div className="flex items-center gap-4 bg-white  rounded-2xl shadow-sm mb-4 pl-5">
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