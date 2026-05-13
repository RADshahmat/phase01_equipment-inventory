import type { Equipment } from "../types/equipment";
import { useEquipment } from "../hooks/useEquipment";

type Props = {
  types: string[];
  makes: string[];
  search: string;

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

export default function EquipmentTable({ types, makes, search, onRowClick }: Props) {
  // fetch data
  const { data = [], isLoading, isError } = useEquipment({ types, makes, search });

  // loading state
  if (isLoading) {
    return (
      <div className=" min-h-screen flex items-center justify-center text-lg font-medium text-slate-600 dark:bg-gray-900 dark:text-white ">
        Loading equipment...
      </div>
    );
  }

  // error state
  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 dark:bg-gray-900 ">
        Failed to fetch equipment data.
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="mt-10 text-center">
        <p className="text-gray-500 text-lg font-medium">No results found</p>
        <p className="text-sm text-gray-400 mt-1">
          Try changing filters or search
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 overflow-x-auto">
      <div
        className="
                bg-white
                dark:bg-gray-800
                shadow-md
                rounded-xl
                border border-gray-100
                dark:border-gray-700
            "
      >
        <table
          className="
                    w-full
                    text-sm
                    text-left
                "
        >
          <thead
            className="
                        bg-gray-50
                        dark:bg-gray-900
                        text-gray-600
                        dark:text-gray-300
                        uppercase
                        text-xs
                    "
          >
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Make</th>
              <th className="px-6 py-4">Rack</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>

          <tbody
            className="
                        divide-y divide-gray-100
                        dark:divide-gray-700
                    "
          >
            {data.map((item) => (
              <tr
                key={item.id}
                onClick={() => onRowClick(item)}
                className="
                                    hover:bg-gray-50
                                    dark:hover:bg-gray-700
                                    cursor-pointer
                                    transition
                                "
              >
                <td
                  className="
                                    px-6 py-4
                                    font-medium
                                    text-gray-800
                                    dark:text-white
                                "
                >
                  {item.name}
                </td>

                <td
                  className="
                                    px-6 py-4
                                    text-gray-600
                                    dark:text-gray-300
                                    capitalize
                                "
                >
                  {item.type}
                </td>

                <td
                  className="
                                    px-6 py-4
                                    text-gray-600
                                    dark:text-gray-300
                                "
                >
                  {item.make}
                </td>

                <td
                  className="
                                    px-6 py-4
                                    text-gray-600
                                    dark:text-gray-300
                                "
                >
                  {item.rack}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`
                                            px-3 py-1
                                            rounded-full
                                            text-xs
                                            font-semibold
                                            ${getStatusStyle(item.status)}
                                        `}
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
