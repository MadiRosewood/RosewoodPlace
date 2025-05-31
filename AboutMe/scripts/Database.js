const birthYear1 = 2002;  // Your birth year
const birthMonth1 = 5;    // Your birth month (1 = Jan, 12 = Dec)
const birthDay1 = 3;     // Your birth day

const today = new Date();
let age1 = today.getFullYear() - birthYear1;

// If birthday hasn't occurred yet this year
if (
    today.getMonth() + 1 < birthMonth1 ||
    (today.getMonth() + 1 === birthMonth1 && today.getDate() < birthDay1)
) {
    age1--;
}
const birthYear2 = 2004;  // Your birth year
const birthMonth2 = 4;    // Your birth month (1 = Jan, 12 = Dec)
const birthDay2 = 27;     // Your birth day


let age2 = today.getFullYear() - birthYear2;

// If birthday hasn't occurred yet this year
if (
    today.getMonth() + 1 < birthMonth2 ||
    (today.getMonth() + 1 === birthMonth2 && today.getDate() < birthDay2)
) {
    age2--;
}
const birthYear3 = 1983;  // Your birth year
const birthMonth3 = 9;    // Your birth month (1 = Jan, 12 = Dec)
const birthDay3 = 8;     // Your birth day


let age3 = today.getFullYear() - birthYear3;

// If birthday hasn't occurred yet this year
if (
    today.getMonth() + 1 < birthMonth3 ||
    (today.getMonth() + 1 === birthMonth3 && today.getDate() < birthDay3)
) {
    age3--;
}

const data = {
    "users": {
        "Madi": {
            "name": "Madi",
            "quote": "Meow!",
            "prn": "Female",
            "age": age1,
            "ht": "5'0\"",
            "bio": "Hello! I’m Madison Rosewood, a 23-year-old visual artist from Quebec.",
            "image": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-5AA80D0F091CF9C283BF0F516A2562FE-Png/150/150/AvatarHeadshot/Webp/noFilter" // Add an image URL here
        },
        "Moon": {
            "name": "𝖒𝖔𝖔𝖓",
            "quote": "Expect the unexpected!",
            "prn": "Female",
            "age": age2,
            "ht": "N/A",
            "bio": "𝕮𝖆𝖑𝖑 𝖒𝖊 𝖒𝖔𝖔𝖓~",
            "image": "./AboutMe/img/moon.jpg"
        },
        "Abby": {
            "name": "Abby",
            "quote": "BabyBoo!",
            "prn": "Female",
            "age": age3,
            "ht": "5'9\"",
            "bio": ":3",
            "image": "https://placehold.co/150x150"
        }
    }
};
