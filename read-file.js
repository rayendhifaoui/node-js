const fs = require("fs");

fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading the file", err);
  } else {
    console.log("Content of hello.txt:", data);
  }
});
