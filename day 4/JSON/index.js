// JSON stand for Javascript Object Notation. JSON is a light weight format for starting and transporting data

// JSON is often used when data is sent from a server to a web page

const bioData = {
    name: 'Vikalp',
    age: 26,
    channel: 'Vikalp',
};


// object ko jab JSON mai create krna hai tab stringify function ka use karenge 
const jsonData = JSON.stringify(bioData);
console.log(jsonData)

// JSON ko object mai convert krne ke liye parse function ka use karenge
const objData = JSON.parse(jsonData)
console.log(objData)