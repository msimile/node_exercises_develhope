import * as fs from "fs/promises";

const data = "Hello, World!";

fs.writeFile("message.txt", data, { encoding: "utf-8" }, (error) => {
  if (error) {
    console.error("An error has occured");
    // console.error(error);
    return;
  }
  console.log("The file has been saved!");
});
