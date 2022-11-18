import path from "path";
import fs from "fs";

export const removeFile = (filename: string) => {
  const localFilePath = path.join(
    process.cwd(),
    "public/images/",
    filename,
  );

  fs.unlinkSync(localFilePath);
};
