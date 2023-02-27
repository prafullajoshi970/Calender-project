var dt = new Date();

const calender = () => {

    document.getElementById("year").innerHTML = dt.getFullYear();

    dt.setDate(1);
    var dayss = dt.getDay();
    const endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
    const today = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    document.getElementById("month").innerHTML = months[dt.getMonth()];

    var cell = "";
    for (x = dayss; x > 0; x--) {
        cell += "<div class='prevMonthsDate'>" + (prevDate - x +1) + "</div>";
    }
    for (i = 1; i <= endDate; i++) {
        if (i == today.getDate() && dt.getMonth() == today.getMonth()) {
            cell += "<div class='today1'>" + i + " " + "Today" + "</div>";
        }
        else {
            cell += "<div>" + i + "</div>";
        }
        document.getElementsByClassName("dates")[0].innerHTML = cell;
    }

}

const prevNext = (para) => {
    if (para == 'prev') {
        dt.setMonth(dt.getMonth() - 1);
    }
    else if (para == 'next') {
        dt.setMonth(dt.getMonth() + 1);
    }
    calender();

}

const prevyear = (para) => {
    if (para == 'prev') {
        dt.setFullYear(dt.getFullYear() - 1);
    }
    else if (para == 'next') {
        dt.setFullYear(dt.getFullYear() + 1);
    }
    calender();

}
