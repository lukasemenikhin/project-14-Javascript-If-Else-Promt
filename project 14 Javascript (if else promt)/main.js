const avto = [
    'avto',
    'gagloshvili',
    2022 - 1990,
    'teacher',
    ['giorgi', 'salome', 'soso', 'luka',]
];

// console.log(avto);

const avtoObj = {
    firstName: "avto",
    lastName: "gogliashvili",
    age: 2022 - 1990,
    job: "teacher",
    friends: ['giorgi', 'salome', 'soso', 'luka',]
}

// console.log(avtoObj);

const nameKey = "Name";

console.log(avtoObj['first' + nameKey]);
console.log(avtoObj['last' + nameKey]);


const name = prompt('Do you want to know more about Avto? age, job, friends');

if (avtoObj[name]) {
    console.log(avtoObj[name]);
}else{
    console.log(arvici);
}