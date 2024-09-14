const months = [
    {
        name: "July 2024",
        days: 31,
        events: { 9: "Faculty Rejoins", 15: "Term Begins", 20: "FSS" }
    },
    {
        name: "August 2024",
        days: 31,
        events: { 6: "FSS", 15: "Independence Day", 24: "Narali Pournima" }
    },
    {
        name: "September 2024",
        days: 30,
        events: { 6: "Ganesh Chaturthi", 28: "Mid Term Submission" }
    },
    {
        name: "October 2024",
        days: 31,
        events: { 2: "Gandhi Jayanti", 20: "Dashera" }
    },
    {
        name: "November 2024",
        days: 30,
        events: { 1: "Diwali", 12: "Guru Nanak Jayanti" }
    },
    {
        name: "December 2024",
        days: 31,
        events: { 25: "Christmas", 28: "SE Result" }
    }
];

let currentMonthIndex = 0;
const monthTitle = document.getElementById("monthTitle");
const calendarBody = document.getElementById("calendarBody");

function generateCalendar(month) {
    calendarBody.innerHTML = ""; // Clear previous data
    let day = 1;
    const firstDayOfMonth = new Date(month.name).getDay(); // Get first day
    let row = document.createElement("tr");

    // Add empty cells till first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        let emptyCell = document.createElement("td");
        row.appendChild(emptyCell);
    }

    // Fill in the days of the month
    for (let i = firstDayOfMonth; i < 7; i++) {
        let cell = document.createElement("td");
        cell.textContent = day;

        if (month.events[day]) {
            cell.classList.add("event"); // Highlight event days
            cell.innerHTML += `<br><small>${month.events[day]}</small>`;
        }
        row.appendChild(cell);
        day++;
    }

    calendarBody.appendChild(row);

    // Fill remaining days
    while (day <= month.days) {
        let row = document.createElement("tr");
        for (let i = 0; i < 7; i++) {
            let cell = document.createElement("td");
            if (day <= month.days) {
                cell.textContent = day;

                if (month.events[day]) {
                    cell.classList.add("event");
                    cell.innerHTML += `<br><small>${month.events[day]}</small>`;
                }
            } else {
                cell.innerHTML = "";
            }
            row.appendChild(cell);
            day++;
        }
        calendarBody.appendChild(row);
    }
}

// Initial load
generateCalendar(months[currentMonthIndex]);

// Navigation buttons
document.getElementById("prevMonth").addEventListener("click", function() {
    if (currentMonthIndex > 0) {
        currentMonthIndex--;
        monthTitle.textContent = months[currentMonthIndex].name;
        generateCalendar(months[currentMonthIndex]);
    }
});

document.getElementById("nextMonth").addEventListener("click", function() {
    if (currentMonthIndex < months.length - 1) {
        currentMonthIndex++;
        monthTitle.textContent = months[currentMonthIndex].name;
        generateCalendar(months[currentMonthIndex]);
    }
});
