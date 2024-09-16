const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const calendarDatesElement = document.getElementById('calendar-dates');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];


function renderCalendar(month, year) {
    calendarDatesElement.innerHTML = '';

    monthElement.textContent = months[month];
    yearElement.textContent = year;

    const firstDay = new Date(year, month, 1).getDay();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const today = new Date();

    for (let i = 0; i < firstDay; i++) {
        const emptyBox = document.createElement('div');
        calendarDatesElement.appendChild(emptyBox);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateElement = document.createElement('div');
        dateElement.classList.add('date', 'p-2', 'rounded-full', 'hover:bg-blue-100');
        dateElement.textContent = day;

        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dateElement.classList.add('today');
        }

        dateElement.addEventListener('click', () => {
            if (document.querySelector('.selected-date')) {
                document.querySelector('.selected-date').classList.remove('selected-date');
            }
            dateElement.classList.add('selected-date');

            speakNumber(day);
        });

        calendarDatesElement.appendChild(dateElement);
    }
}

renderCalendar(currentMonth, currentYear);


document.getElementById('prev').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

document.getElementById('next').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

function speakNumber(number) {
    const msg = new SpeechSynthesisUtterance();

    switch (number) {
        case 1:
            msg.text = `Number one is amazing!`;
            msg.pitch = 1.5;
            msg.rate = 1;
            break;
        case 2:
            msg.text = `Number two, balance and harmony!`;
            msg.pitch = 1.2;
            msg.rate = 0.9;
            break;
        case 3:
            msg.text = `Three is the magic number!`;
            msg.pitch = 1.8;
            msg.rate = 1.1;
            break;
        case 4:
            msg.text = `Number four, solid as a rock!`;
            msg.pitch = 0.9;
            msg.rate = 1;
            break;
        case 5:
            msg.text = `High five!`;
            msg.pitch = 1.4;
            msg.rate = 1;
            break;
        case 6:
            msg.text = `Six is for balance!`;
            msg.pitch = 1.1;
            msg.rate = 0.95;
            break;
        case 7:
            msg.text = `Seven, Thaala for a reason.`;
            msg.pitch = 1.2;
            msg.rate = 0.8;
            break;
        case 8:
            msg.text = `Eight, the number of infinity!`;
            msg.pitch = 1.3;
            msg.rate = 1.2;
            break;
        case 9:
            msg.text = `Number nine, almost there!`;
            msg.pitch = 1;
            msg.rate = 1.1;
            break;
        case 10:
            msg.text = `Ten out of ten! Sachin Tendulkar.`;
            msg.pitch = 1.6;
            msg.rate = 1;
            break;
        case 13:
            msg.text = `Watch out, it's the number 13!`;
            msg.pitch = 0.8;
            msg.rate = 1.2;
            break;
        case 20:
            msg.text = `You've reached number 20!`;
            msg.pitch = 1.2;
            msg.rate = 1;
            break;
        case 25:
            msg.text = `Number 25, keep going!`;
            msg.pitch = 1.3;
            msg.rate = 1;
            break;
        case 30:
            msg.text = `Thirty, almost done!`;
            msg.pitch = 1.4;
            msg.rate = 1;
            break;
        case 31:
            msg.text = `You've reached the last day of the month!`;
            msg.pitch = 1.5;
            msg.rate = 1.1;
            break;
        default:
            msg.text = `You clicked on the number ${number}`;
            msg.pitch = 1;
            msg.rate = 1;
            break;
    }

    window.speechSynthesis.speak(msg);
}