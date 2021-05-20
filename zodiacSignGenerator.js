

const getZodiacSign = (birthMonth, birthDate) => {

    if (birthMonth == 'January' && birthDate >= 20 && birthDate <= 31 || birthMonth == 'February' && birthDate > 0 && birthDate <= 18) {
        return "Aquarius";
    }
    else if (birthMonth == 'February' && birthDate >= 19 && birthDate <= 29 || birthMonth == 'March' && birthDate > 0 && birthDate < 20) {
        return "Pisces";
    } 
    else if (birthMonth == 'March' && birthDate >= 21 && birthDate < 31 || birthMonth == 'April' && birthDate > 0 && birthDate <= 19) {
        return "Aries";
    }
    else if (birthMonth == 'April' && birthDate >= 20 && birthDate <= 30 || birthMonth == 'May' && birthDate > 0 && birthDate <= 20) {
        return "Taurus";
    }
    else if (birthMonth == 'May' && birthDate >= 21 && birthDate <= 31 || birthMonth == 'June' && birthDate > 0 && birthDate <= 20) {
        return  "Gemini";
    }
    else if (birthMonth == 'June' && birthDate >= 21 && birthDate <= 30 || birthMonth == 'July' && birthDate > 0 && birthDate <= 22) {
        return "Cancer";
    }
    else if (birthMonth == 'July' && birthDate >= 23 && birthDate <= 31 || birthMonth == 'August' && birthDate > 0 && birthDate <= 22) {
        return "Leo";
    }
    else if (birthMonth == 'August' && birthDate >= 23 && birthDate <= 31 || birthMonth == 'September' && birthDate > 0 && birthDate <= 22) {
        return "Virgo";
    }
    else if (birthMonth == 'September' && birthDate >= 23 && birthDate <= 30 || birthMonth == 'October' && birthDate > 0 && birthDate <= 22) {
        return "Libra";
    }
    else if (birthMonth == 'October' && birthDate >= 23 && birthDate <= 31 || birthMonth == 'November' && birthDate > 0 && birthDate <= 21) {
        return "Scorpio";
    }
    else if (birthMonth == 'November' && birthDate >= 22 && birthDate <=30 || birthMonth == 'December' && birthDate > 0 && birthDate <= 21) {
        return "Sagittarius";
    }
    else if (birthMonth == 'December' && birthDate >= 22 && birthDate <= 31 || birthMonth == 'January' && birthDate > 0 && birthDate <= 19) {
        return "Capricorn";
    } else {return "Error!"};
} 


  
