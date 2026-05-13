import { useEffect, useState } from "react";
import type { Equipment } from "../types/equipment";
import EquipmentTable from "../components/EquipmentTable";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import EquipmentDetail from "../components/EquipmentDetail";



export default function Home() {
  // filter states
  const [types, setTypes] = useState<string[]>([]);
  const [makes, setMakes] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  // selected item
  const [selected, setSelected] = useState<Equipment | null>(null);

  // dark mode
  const [darkMode, setDarkMode] = useState(false);

  // dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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
            <h1 className=" text-3xl font-bold text-slate-800 dark:text-white ">
              Static Equipment Inventory
            </h1>

            <p className=" text-slate-500 dark:text-slate-400 mt-1 ">
              Infrastructure asset management dashboard
            </p>
          </div>

          {/* DARK MODE BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className=" px-4 py-2 rounded-xl  bg-white dark:bg-gray-800  border border-slate-200 dark:border-gray-700 shadow-sm hover:scale-105  transition  text-sm font-medium   dark:text-white " >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
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
                      search={search}
                      onRowClick={setSelected}
                  />
        </div>

        {/* DETAIL MODAL */}
        <EquipmentDetail item={selected} onClose={() => setSelected(null)} />
      </div>
    </div>
  );
}
