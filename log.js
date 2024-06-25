const fs = require("fs");

fs.readdir("./", (err, files) => {
  alert(files.length)
})
