let teacher = {
    1: {
        name: "Michael",
        surname: "Jackson",
        type: "Music",
        phoneNumber: +99899654656,
        address: "Parkwood street, 23",
        salary: 30000,
    },
    2: {
        name: "Leo",
        surname: "Messi",
        type: "Art",
        phoneNumber: +998996545485,
        address: "Wood street, 213",
        salary: 50000,
    },
    3: {
        name: "Conor",
        surname: "Mcgreggor",
        type: "Sport",
        phoneNumber: +99899615156,
        address: "ireland street, 423",
        salary: 70000,
    }
};

let teachers = {
    "Michael Jakcson": teacher[1].name + " " + teacher[1].surname,
    "Leo Messi": teacher[2].name + " " + teacher[2].surname,
    "Conor Mcgreggor": teacher[3].name + " " + teacher[3].surname,
}

console.log(teachers["Michael Jakcson"]);
console.log(teachers["Leo Messi"]);
console.log(teachers["Conor Mcgreggor"]);