const fs = require('fs')

// to create file and to print message
// fs.writeFileSync("read.txt", "Welcome to vampire world ")

// to add data to the file
// fs.appendFileSync("read.txt", "you gonna die here and now")

// // to read the file data  
// const buf_data = fs.readFileSync("read.txt")
// const org_data = buf_data.toString();
// console.log(org_data)

// to rename the file
fs.renameSync("read.txt", "write.txt")