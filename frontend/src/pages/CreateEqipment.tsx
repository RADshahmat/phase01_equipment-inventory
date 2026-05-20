import { useNavigate } from "react-router-dom";

export default function CreateEquipment() {

    const navigate = useNavigate();

    function handleSubmit(
        e: React.FormEvent
    ) {
        e.preventDefault();

        // fake mutation success

        navigate("/");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-md  pt-6"
        >

            <h1 className="text-2xl font-bold">
                Create Equipment
            </h1>

            <input
                placeholder="Equipment name"
                className="border p-2 w-full"
            />

            <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
            >
                Create
            </button>

        </form>
    );
}