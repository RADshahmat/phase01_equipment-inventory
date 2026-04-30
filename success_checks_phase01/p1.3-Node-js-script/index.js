import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  try {
    const res = await fetch(process.env.API_URL);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    fs.writeFileSync("output.json", JSON.stringify(data, null, 2));

    console.log("Data saved!");
  } catch (err) {
    console.error(err);
  }
}

main();