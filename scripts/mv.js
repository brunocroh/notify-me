import fs from "fs";

const filesToCopy = ["lib/Show-Notification.ps1"];
const dirsToCreate = ["dist/lib"];

export const moveFiles = () => {
  for (const dir of dirsToCreate) {
    if (fs.existsSync(dir)) {
      continue;
    }

    fs.mkdirSync(`${process.cwd()}/${dir}`);
  }

  for (const file of filesToCopy) {
    const from = `${process.cwd()}/${file}`;
    const to = `${process.cwd()}/dist/${file}`;
    fs.createReadStream(from).pipe(fs.createWriteStream(to));
    console.info(`file ${file} move to dist with success`);
  }
};
