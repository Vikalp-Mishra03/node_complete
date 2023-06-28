// JSON stand for Javascript Object Notation. JSON is a light weight format for starting and transporting data

// JSON is often used when data is sent from a server to a web page

const fs = require('fs')

const bioData = {
    name: 'Vikalp',
    age: 26,
    channel: 'Vikalp',
};


// // object ko jab JSON mai create krna hai tab stringify function ka use karenge 
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData)

// // JSON ko object mai convert krne ke liye parse function ka use karenge
// const objData = JSON.parse(jsonData)
// console.log(objData)


// challenge 

/*
1) convert to JSOn
2) dusre file mai add krna
3) readfile
4) again convert back to js abj original
5) console.log 
*/

// first step
const jsonData = JSON.stringify(bioData)

// second step 
fs.writeFile('JSON1.json', jsonData, (err) => {
    console.log(err)
    console.log('done')
})

