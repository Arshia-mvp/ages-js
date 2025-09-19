alert('سلام به همگی 👋😃');

let userName = prompt('اسمت چیست ؟');

alert('سلام ' + userName + ' 👋😃 ');

let userAge = prompt(userName + ' چند سالته ؟ ');

if (userAge > 0 && userAge <= 5) {
    alert(userName + ' هنوز بچه ای کوچولو 😭 ');
}

else if (userAge == 0) {
    alert('سن وارد شده نامعتبر است 😒');
}

else if (userAge >= 6 && userAge <= 15) {
    alert(userName + ' کم کم داری بزرگ میشی ولی هنوز ی زره بچه ای 🙂 ');
}

else if (userAge >= 16 && userAge <= 45) {
    alert(userName + ' خوبه بزرگ شدیا ، هنوز خیلی جوونی 😊 ');
}

else if (userAge >= 46 && userAge <= 59) {
    alert(userName + ' داری کم کم پیر میشی ها 😥 ');
}

else if (userAge >= 60 && userAge <= 100) {
    alert(userName + ' دیگه پیر شدی رفت 😔 ');
}

else if (userAge >= 101 && userAge <= 150) {
    alert(userName + ' اینقد پیر شدی که داری میمیری 😟😞 ');
}

else {
    alert('متاسفانه اشتباه وارد کردی یا چیزی وارد نکردی 😒');
}