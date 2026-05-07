import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import EquipmentTable from "./EquipmentTable";
import type { Equipment } from "../types/equipment";

const mockData: Equipment[] = [
    {
        id: 1,
        name: "Dell PowerEdge R740",
        type: "server",
        make: "Dell",
        model: "R740",
        rack: "Rack-A1",
        unitposition: 12,
        status: "active",
        tags: ["production", "core"],
    },
];

describe("EquipmentTable", () => {

    test("renders equipment data", () => {
        render(
            <EquipmentTable
                data={mockData}
                onRowClick={() => { }}
            />
        );

        expect(
            screen.getByText("Dell PowerEdge R740")
        ).toBeInTheDocument();

        expect(
            screen.getByText("server")
        ).toBeInTheDocument();
    });

    test("shows empty state", () => {
        render(
            <EquipmentTable
                data={[]}
                onRowClick={() => { }}
            />
        );

        expect(
            screen.getByText(/no results found/i)
        ).toBeInTheDocument();
    });

    test("calls row click handler", () => {
        const handleClick = vi.fn();

        render(
            <EquipmentTable
                data={mockData}
                onRowClick={handleClick}
            />
        );

        fireEvent.click(
            screen.getByText("Dell PowerEdge R740")
        );

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});