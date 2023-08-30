const fs = require("fs");

const readFile = async (filePath) => {
  try {
    const data = await fs.promises.readFile("simple.txt", "utf8");
    return console.log(data);
  } catch (err) {
    console.log(err);
  }
};

readFile();

setTimeout(() => {
  console.log("This message will be printed after 1 seconds.");
}, 1); // 2000 milliseconds = 2 seconds
