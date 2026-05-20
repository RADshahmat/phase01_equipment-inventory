import { useState } from "react";
import type { Equipment } from "../types/equipment";
import EquipmentTable from "../components/EquipmentTable";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import EquipmentDetail from "../components/EquipmentDetail";
import useDebounce from "../hooks/useDebounce";



export default function Home() {
  // filter states
  const [types, setTypes] = useState<string[]>([]);
  const [makes, setMakes] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  // selected item
  const [selected, setSelected] = useState<Equipment | null>(null);


  // toggle type
  function toggleType(value: string) {
    setTypes((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value],
    );
  }

  // toggle make
  function toggleMake(value: string) {
    setMakes((prev) =>
      prev.includes(value) ? prev.filter((m) => m !== value) : [...prev, value],
    );
  }


  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900 transition-colors ">
      <div className="max-w-7xl mx-auto p-6">
        {/* HEADER */}
        <div className=" flex flex-col md:flex-row md:items-center  md:justify-between gap-4 mb-6 ">
          <div>
            <h1 className=" text-3xl font-bold ">
              Static Equipment Inventory
            </h1>
          </div>


        </div>

        {/* FILTER BAR */}
        <div className=" flex items-center gap-4 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-2xl shadow-sm p-4 mb-5 " >
          <FilterBar
            selectedTypes={types}
            selectedMakes={makes}
            onTypeChange={toggleType}
            onMakeChange={toggleMake}
          />

          <div className="flex-1">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white dark:bg-gray-800  border border-slate-200 dark:border-gray-700 rounded-2x shadow-sm p-4 ">
          <EquipmentTable
            types={types}
            makes={makes}
            search={debouncedSearch}
            onRowClick={setSelected}
          />
        </div>

        {/* DETAIL MODAL */}
        <EquipmentDetail item={selected} onClose={() => setSelected(null)} />
      </div>
    </div>
  );
}
