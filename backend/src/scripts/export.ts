import { pool } from "../db/dbconnection";
import { ApiResponse } from "../types/ApiResponse";
import { Equipment } from "../types/equipmentType";
import fs from "fs";
import path from "path";

async function exportData(): Promise<void> {
  try {
    console.log("Starting export...");
    const result = await pool.query(
      `SELECT id, name , type, make, model, rack, unit_position AS unitPosition, status, tags FROM equipment ORDER BY id ASC`,
    );
    const data: Equipment[] = result.rows;
    const response: ApiResponse<Equipment> = {
      success: true,
      count: data.length,
      data,
    };

      const filePath = path.join(__dirname, "../../../frontend/public/equipment.json");
    fs.writeFileSync(filePath, JSON.stringify(response, null, 2));
    console.log(`Exported ${data.length} records`);
  } catch (err) {
    console.error("Export failed:", (err as Error).message);
  }
}
exportData()
    .catch((err: Error) => {
    console.error("Export failed:", err.message);
    process.exit(1);
  });
