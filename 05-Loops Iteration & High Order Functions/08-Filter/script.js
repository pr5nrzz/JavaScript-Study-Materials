// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers);

const companies = [
    { name: "Company1", category: "Auto", start: 1981, end: 2024 },
    { name: "Company2", category: "Retail", start: 1980, end: 1995 },
    { name: "Company3", category: "Motor", start: 1990, end: 2020 },
    { name: "Company4", category: "Auto", start: 1991, end: 2024 },
    { name: "Company5", category: "Retail", start: 1985, end: 2024 },
    { name: "Company6", category: "Pharma", start: 1980, end: 1995 },
    { name: "Company7", category: "Auto", start: 1982, end: 2024 },
    { name: "Company8", category: "Pharma", start: 1990, end: 2024 },
    { name: "Company9", category: "Motor", start: 1995, end: 2024 },
    { name: "Company10", category: "Retail", start: 2000, end: 2024 },
    { name: "Company11", category: "Pharma", start: 2021, end: 2024 },
    { name: "Company12", category: "Motor", start: 1982, end: 2000 },
    { name: "Company13", category: "Retail", start: 1980, end: 2020 },
    { name: "Company14", category: "Motor", start: 1997, end: 2024 }
];

// const retailCompanies = companies.filter(company =>
//     company.category === "Retail"
// );
// console.log(retailCompanies);

// const cmpns = companies.filter(company => 
//     company.start >= 1980 && company.end <= 1995
// );
// console.log(cmpns);

const cmpns1 = companies.filter(company => 
    company.end - company.start >= 10
);
console.log(cmpns1);
