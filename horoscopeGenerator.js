const getZodiacSign = (birthMonth, birthDate) => {

    if (birthMonth = 'January' && birthDate >= 20 && birthDate <= 31 || birthMonth == 'February' && birthDate > 0 && birthDate <= 18) {
        return "Zodiac Sign: Aquarius";
    }
     else if (birthMonth = 'February' && birthDate >= 19 && birthDate <= 29 || birthMonth == 'March' && birthDate > 0 && birthDate < 20) {
        return "Zodiac Sign: Pisces";
    } 
    else if (birthMonth = 'March' && birthDate >= 21 && birthDate < 31 || birthMonth == 'April' && birthDate > 0 && birthDate <= 19) {
        return "Zodiac Sign: Aries";
    }
    else if (birthMonth = 'April' && birthDate >= 20 && birthDate <= 30 || birthMonth == 'May' && birthDate > 0 && birthDate <= 20) {
        return "Zodiac Sign: Taurus";
    }
    else if (birthMonth = 'May' && birthDate >= 21 && birthDate <= 31 || birthMonth == 'June' && birthDate > 0 && birthDate <= 20) {
        return  "Zodiac Sign: Gemini";
    }
    else if (birthMonth = 'June' && birthDate >= 21 && birthDate <= 30 || birthMonth == 'July' && birthDate > 0 && birthDate <= 22) {
        return "Zodiac Sign: Cancer";
    }
    else if (birthMonth = 'July' && birthDate >= 23 && birthDate <= 31 || birthMonth == 'August' && birthDate > 0 && birthDate <= 22) {
        return "Zodiac Sign: Leo";
    }
    else if (birthMonth = 'August' && birthDate >= 23 && birthDate <= 31 || birthMonth == 'September' && birthDate > 0 && birthDate <= 22) {
        return "Zodiac Sign: Virgo";
    }
    else if (birthMonth = 'September' && birthDate >= 23 && birthDate <= 30 || birthMonth == 'October' && birthDate > 0 && birthDate <= 22) {
        return "Zodiac Sign: Libra";
    }
    else if (birthMonth = 'October' && birthDate >= 23 && birthDate <= 31 || birthMonth == 'November' && birthDate > 0 && birthDate <= 21) {
        return "Zodiac Sign: Scorpio";
    }
    else if (birthMonth = 'November' && birthDate >= 22 && birthDate <=30 || birthMonth == 'December' && birthDate > 0 && birthDate <= 21) {
        return "Zodiac Sign: Sagittarius";
    }
    else if (birthMonth = 'December' && birthDate >= 22 && birthDate <= 31 || birthMonth == 'January' && birthDate > 0 && birthDate <= 19) {
        return "Capricorn";
    } else {return "Error! Invalid Birthday"};

    }
  
const getRandomFortune() {
    currentOutlookMessageArray = ['You are having good luck','You are going through a tough time', 'You are in limbo', 'You feel restless','You are hopeful','Your sense of hope is waning','You feel emotionally exhausted','You are excited about an upcoming opportunity'];
    futureOutlookMessageArray = ['There are happier times ahead, keep pushing forward', 'There is trouble ahead, beware', 'You will be tested, but you will overcome', 'If you do not correct course, you will suffer for it in the future', 'Your future goal is attainable, keep working', 'Life will soon get tough, but once the storm has passed, clear skies ahead' ];

    return {
        currentOutlookMessageArray[i * Math.floor(Math.random() * 8)];
        futureOutlookMeesageArray[i * Math.floor(Math.random() * 7)]
    }
}
 

let testHoroscope = getZodiacSign('January', 23);

console.log(testHoroscope);
console.log(getRandomFortune);
