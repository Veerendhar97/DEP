const fs = require("fs");
const crypto = require("crypto");
const paths = require("path");

const recFileRead = (res, dir) => {
  if (res.isDirectory()) {
    //Identifing directory and reading files in it
    fs.readdir(dir, (err, files) => {
      for (let file of files) {
        path = `${dir}/${file}`;
        pathObj = paths.resolve(path);
        const res2 = fs.statSync(pathObj);
        if (res2.isFile()) {
          //Reading File
          var read = fs.readFileSync(pathObj).toString();
          console.log(read);

          //Creating hash for file content
          const hash1 = crypto.createHmac("sha1", pathObj).digest("hex");
          const hash2 = crypto.createHmac("md5", pathObj).digest("hex");

          //Appending it to Result.txt
          data = `${pathObj}\n  sha1: ${hash1}  md5: ${hash2}\n\n`;
          fs.appendFileSync("Result.txt", data);
        } else recFileRead(res2, pathObj);
      }
    });
  }
};

var args = process.argv.slice(2);

var data = "";

//Clearing the previous content of result.txt
fs.writeFile("Result.txt", "", (err) => {
  if (err) console.log(err);
});

if (args[0]) {
  const res = fs.statSync(args[0]);
  recFileRead(res, `${args[0]}`);
} else console.log("Plz give a directory name as argument....");
