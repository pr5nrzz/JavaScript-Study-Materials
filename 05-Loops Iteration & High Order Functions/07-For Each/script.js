const socials = ["Twitter", "LinkedIn", "Facebook", "Instagram"];

// socials.forEach((social, index, socials) => 
//     console.log(`${index} - ${social} - ${socials}`));

const logSocial = social => console.log(social);

socials.forEach(logSocial);

const socialsArr = [
    { name: "Twitter", url: "https://www.twitter.com" },
    { name: "LinkedIn", url: "https://www.linkedin.com" },
    { name: "Facebook", url: "https://www.facebook.com" },
    { name: "Instagram", url: "https://www.instagram.com" }
];

socialsArr.forEach(social => console.log(social.name, social.url));