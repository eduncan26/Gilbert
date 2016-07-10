let _date;

const WEEKDAY = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

export default class DateService {
    constructor() {
        _date = new Date();
    }

    get currentYear() {
        return this.getYear.call(this, _date);
    }

    get currentMonth() {
        return this.getMonth.call(this, _date);
    }

    get currentDate() {
        return this.getDate.call(this, _date);
    }

    get currentDay() {
        return this.getDay.call(this, _date);
    }

    getYear(date) {
        return date.getFullYear();
    }

    getMonth(date) {
        return date.getMonth();
    }

    getDate(date) {
        return date.getDate();
    }

    getDay(date) {
        return WEEKDAY[date.getDay()];
    }
}
