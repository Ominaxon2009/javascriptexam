
// Foydalanuvchidan ma'lumot olish
let one = Number(prompt("1-sonni kiriting:"));
let znak = prompt("Tanlang: \n1) - \n2) + \n3) / \n4) *");
let two = Number(prompt("2-sonni kiriting:"));

// To‘g‘ri ID-larga qiymatlarni joylash
document.getElementById("firstNumber").value = one;
document.getElementById("secondNumber").value = two;

// Znakni mos formatga o'tkazish
let operationSelect = document.getElementById("operation");

if (znak === "1") {
    operationSelect.value = "minus";
} else if (znak === "2") {
    operationSelect.value = "plus";
} else if (znak === "3") {
    operationSelect.value = "divide";
} else if (znak === "4") {
    operationSelect.value = "multiply";
} else {
    alert("Noto‘g‘ri amal tanlandi! Standart amal qo‘llaniladi.");
}

// Hisoblash funksiyasi
function calculate() {
    let one = Number(document.getElementById("firstNumber").value);
    let znak = document.getElementById("operation").value;
    let two = Number(document.getElementById("secondNumber").value);
    let resultElement = document.getElementById("result");
    
    if (!isNaN(one) && !isNaN(two)) { 
        let natija;
        
        if (znak === "minus") {
            natija = one - two;
        } else if (znak === "plus") {
            natija = one + two;
        } else if (znak === "divide") {
            natija = two !== 0 ? one / two : "0 ga bo‘lish mumkin emas!";
        } else if (znak === "multiply") {
            natija = one * two;
        } else {
            natija = "Noto‘g‘ri amal tanlandi!";
        }

        // Natijani qizil tugmaga yozish
        resultElement.textContent = "Natija: " + natija;
    } else {
        resultElement.textContent = "Iltimos, faqat raqam kiriting!";
    }
}
