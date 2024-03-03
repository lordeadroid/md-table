import fs from "fs";

const readFile = (fileName, encoding = "utf-8") => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, encoding, (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
};

export default readFile;
