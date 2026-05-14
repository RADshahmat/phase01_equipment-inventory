import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import EquipmentDetail from "./EquipmentDetail";
import type { Equipment } from "../types/equipment";

const mockItem: Equipment = {
    id: 1,
    name: "Dell PowerEdge R740",
    type: "server",
    make: "Dell",
    model: "R740",
    rack: "Rack-A1",
    unitposition: 12,
    status: "active",
    tags: ["production", "core"],
};

describe("EquipmentDetail", () => {

    test("renders equipment details correctly", () => {
        render(
            <EquipmentDetail
                item={mockItem}
                onClose={() => { }}
            />
        );

        expect(screen.getByText("Dell PowerEdge R740")).toBeInTheDocument();
        expect(screen.getByText("server")).toBeInTheDocument();
        expect(screen.getByText("Dell")).toBeInTheDocument();
        expect(screen.getByText("R740")).toBeInTheDocument();
        expect(screen.getByText("Rack-A1")).toBeInTheDocument();
        expect(screen.getByText("active")).toBeInTheDocument();
    });

    test("renders tags correctly", () => {
        render(
            <EquipmentDetail
                item={mockItem}
                onClose={() => { }}
            />
        );

        expect(screen.getByText("#production")).toBeInTheDocument();
        expect(screen.getByText("#core")).toBeInTheDocument();
    });

    test("calls onClose when close button clicked", () => {
        const handleClose = vi.fn();

        render(
            <EquipmentDetail
                item={mockItem}
                onClose={handleClose}
            />
        );

        fireEvent.click(screen.getByText("✕"));

        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    test("returns null when item is null", () => {
        const { container } = render(
            <EquipmentDetail
                item={null}
                onClose={() => { }}
            />
        );

        expect(container).toBeEmptyDOMElement();
    });

});