import client from "@repo/db/dist";
import fs from "fs";

const MOUNT_PATH = "../../apps/problems";

async function main(problemName: string) {
  const problemStatement = fs.readFileSync(
    `${MOUNT_PATH}/${problemName}/Problem.md`,
    "utf-8"
  );

  const problem = await client.problem.upsert({
    where: { title: problemName },
    create: { title: problemName, description: problemStatement },
    update: { description: problemStatement },
  });
}
