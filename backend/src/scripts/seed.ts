import { pool } from '../db/dbconnection';
import { Equipment } from '../types/equipmentType';

const types: Equipment['type'][] = ['server', 'switch'];
const makes = ['Dell', 'Cisco', 'HP', 'Juniper'];

function randomItem<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateFakeEquipment(i: number): Equipment {
    return {
        name: `Device-${i}`,
        type: randomItem(types),
        make: randomItem(makes),
        tag: `tag-${Math.floor(Math.random() * 10)}`
    };
}

async function seed() {
    try {
        console.log('Seeding started...');

        await pool.query(`
      CREATE TABLE IF NOT EXISTS equipment (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        type TEXT CHECK (type IN ('server', 'switch')) NOT NULL,
        make TEXT NOT NULL,
        tag TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

        // simple reset (OK for proficient level)
        await pool.query('DELETE FROM equipment');

        for (let i = 1; i <= 50; i++) {
            const item = generateFakeEquipment(i);

            await pool.query(
                `INSERT INTO equipment (name, type, make, tag)
         VALUES ($1, $2, $3, $4)`,
                [item.name, item.type, item.make, item.tag]
            );
        }

        console.log('Seeding completed!');
    } catch (err) {
        console.error(err);
    } finally {
        await pool.end();
    }
}

seed();