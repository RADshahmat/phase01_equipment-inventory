import { useState } from "react";

type Props = {
    selectedTypes: string[];
    selectedMakes: string[];

    onTypeChange: (value: string) => void;
    onMakeChange: (value: string) => void;
};

const types = [
    "server",
    "switch",
    "router",
    "ups",
];

const makes = [
    "Dell",
    "Cisco",
    "HP",
    "APC",
];

export default function FilterBar({
    selectedTypes,
    selectedMakes,
    onTypeChange,
    onMakeChange,
}: Props) {

    const [open, setOpen] = useState(false);

    const [typeOpen, setTypeOpen] =
        useState(true);

    const [makeOpen, setMakeOpen] =
        useState(true);

    return (
        <div className="relative">

            {/* Filter Button */}
            <button
                onClick={() => setOpen(!open)}
                className="
                    h-12 px-4
                    rounded-xl
                    border border-slate-300
                    bg-white
                    hover:bg-slate-50
                    shadow-sm
                    flex items-center gap-2
                    transition
                "
            >
                <span className="text-lg">
                    ⚙️
                </span>

                <span className="font-medium">
                    Filters
                </span>
            </button>

            {/* Panel */}
            {open && (
                <div
                    className="
                        absolute left-0 top-14
                        w-72
                        bg-white
                        border border-slate-200
                        rounded-2xl
                        shadow-xl
                        p-4
                        z-50
                    "
                >

                    {/* TYPE SECTION */}
                    <div className="mb-4">

                        <button
                            onClick={() =>
                                setTypeOpen(!typeOpen)
                            }
                            className="
                                w-full
                                flex items-center
                                justify-between
                                font-semibold
                                text-slate-700
                                mb-2
                            "
                        >
                            <span>Type</span>

                            <span>
                                {typeOpen ? "−" : "+"}
                            </span>
                        </button>

                        {typeOpen && (
                            <div className="space-y-2">

                                {types.map((type) => (

                                    <label
                                        key={type}
                                        className="
                                            flex items-center gap-2
                                            text-sm text-slate-600
                                            cursor-pointer
                                        "
                                    >

                                        <input
                                            type="checkbox"
                                            checked={selectedTypes.includes(type)}
                                            onChange={() =>
                                                onTypeChange(type)
                                            }
                                        />

                                        {type}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* MAKE SECTION */}
                    <div>

                        <button
                            onClick={() =>
                                setMakeOpen(!makeOpen)
                            }
                            className="
                                w-full
                                flex items-center
                                justify-between
                                font-semibold
                                text-slate-700
                                mb-2
                            "
                        >
                            <span>Make</span>

                            <span>
                                {makeOpen ? "−" : "+"}
                            </span>
                        </button>

                        {makeOpen && (
                            <div className="space-y-2">

                                {makes.map((make) => (

                                    <label
                                        key={make}
                                        className="
                                            flex items-center gap-2
                                            text-sm text-slate-600
                                            cursor-pointer
                                        "
                                    >

                                        <input
                                            type="checkbox"
                                            checked={selectedMakes.includes(make)}
                                            onChange={() =>
                                                onMakeChange(make)
                                            }
                                        />

                                        {make}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}