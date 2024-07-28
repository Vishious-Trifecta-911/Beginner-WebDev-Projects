import fsp from "fs/promises";
import fs from "fs";
import path from "path";

const basePath = "D:\\Development\\Beginner-WebDev-Projects\\ClearClutter";

let files = await fsp.readdir(basePath);

for (const file of files) {
  console.log("running for", file);
  let ext = file.split(".")[file.split(".").length - 1];

  if (ext != "json" && ext != "js" && file.split(".").length > 1) {
    if (fs.existsSync(path.join(basePath, ext))) {
      fsp.rename(path.join(basePath, file), path.join(basePath, ext, file));
    } else {
      fsp.mkdir(ext);
      fsp.rename(path.join(basePath, file), path.join(basePath, ext, file));
    }
  }
}
