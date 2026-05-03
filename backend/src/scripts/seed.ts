import { pool } from "../db/dbconnection";
import { Equipment, EquipmentStatus } from "../types/equipmentType";

const tagPool = [
    "production",
    "core",
    "edge",
    "backup",
    "critical",
    "rack-mounted",
    "network",
    "compute",
    "power-source"
];

function getTags(): string[] {
    const count = Math.floor(Math.random() * 3) + 2;
    const shuffled = [...tagPool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

async function seed(): Promise<void> {
    console.log("Starting seed...");

    await pool.query(`
  CREATE TABLE IF NOT EXISTS equipment (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    type TEXT NOT NULL,
    make TEXT NOT NULL,
    model TEXT NOT NULL,
    rack TEXT NOT NULL,
    unit_position INT NOT NULL,
    status TEXT NOT NULL DEFAULT 'active',
    tags JSONB NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
  );
`);

    console.log("Table ready");

    const types = ["server", "switch", "router", "ups"] as const;
    const makes = ["Dell", "Cisco", "HP", "APC"];

    const statuses: EquipmentStatus[] = ["active", "offline", "maintenance"] as const;

    const racks = ["Rack-A1", "Rack-A2", "Rack-B1", "Rack-B2", "Rack-C1"];

    const models: Record<string, string[]> = {
        Dell: ["PowerEdge R740", "PowerEdge R640"],
        Cisco: ["Catalyst 9300", "Nexus 9000", "ISR 4451"],
        HP: ["ProLiant DL380", "ProLiant DL360"],
        APC: ["Smart-UPS 3900", "Smart-UPS 1500"],
    };

    const pick = <T,>(arr: readonly T[]): T =>
        arr[Math.floor(Math.random() * arr.length)];

    let insertedrow = 0;

    for (let i = 1; i <= 50; i++) {
        const type = pick(types);
        const make = pick(makes);
        const model = pick(models[make]);
        const rack = pick(racks);
        const status = pick(statuses);

        const equipment: Equipment = {
            name: `${make}-${model}-${i}`,
            type: type as Equipment["type"],
            make,
            model,
            rack,
            unitPosition: Math.floor(Math.random() * 42) + 1,
            status: status as Equipment["status"],
            tags: getTags(),
        };

        const result = await pool.query(
            `INSERT INTO equipment 
   (name, type, make, model, rack, unit_position, status, tags)
   VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
   ON CONFLICT (name) DO NOTHING`,
            [
                equipment.name,
                equipment.type,
                equipment.make,
                equipment.model,
                equipment.rack,
                equipment.unitPosition,
                equipment.status,
                JSON.stringify(equipment.tags)
            ]
        );

        if (result.rowCount === 1) {
            insertedrow++;
        };

    }

    console.log(`Successfully inserted ${insertedrow} records`);

    await pool.end();
}

seed().then(() => {
    console.log("Seed completed successfully");
    process.exit(0);
}).catch((err: Error) => {
    console.error("Seed failed:", err.message);
    process.exit(1);
});