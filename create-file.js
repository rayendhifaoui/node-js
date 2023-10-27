const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.log("Error creating the file:", err);
  } else {
    console.log("File created successfully: welcome.txt");
  }
});
