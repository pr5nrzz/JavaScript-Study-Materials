const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubledNums = numbers.map(num => num * 2);
// console.log(doubledNums);


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

const companyNames = companies.map(company => company.name);
// console.log(companyNames);

// const companiesInfo = companies.map(company => (
//     {
//         name: company.name,
//         category: company.category
//     }
// ));
// console.log(companiesInfo);

// const companiesDuration = companies.map(company => (
//     {
//         name: company.name,
//         duration: `${company.end - company.start} years`
//     }
// ));
// console.log(companiesDuration);

// const sqrtDoubled = numbers
//     .map(number => Math.sqrt(number))
//     .map(sqrt => sqrt * 2)
//     .map(sqrtDoubled => sqrtDoubled * 2);

// console.log(sqrtDoubled);

const evenDoubled = numbers
    .filter(number => number % 2 === 0)
    .map(evenNumber => evenNumber * 2);

console.log(evenDoubled);
