import { expect } from 'chai';
import DateService from '../../services/DateService';

describe('DateService', function () {
    let service;
    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    beforeEach(() => {
        service = new DateService();
    });

    it('should return the current year', () => {
        expect(service.currentYear).to.equal(today.getFullYear());
    });

    it('should return the year of a given date', () => {
        expect(service.getYear(today)).to.equal(today.getFullYear());
    });

    it('should return the current month', () => {
        expect(service.currentMonth).to.equal(today.getMonth());
    });

    it('should return the month of a given date', () => {
        expect(service.getMonth(today)).to.equal(today.getMonth());
    });

    it('should return the current date', () => {
        expect(service.currentDate).to.equal(today.getDate());
    });

    it('should return the date of a given date', () => {
        expect(service.getDate(today)).to.equal(today.getDate());
    });

    it('should return the current day as a string', () => {
        expect(service.currentDay).to.equal(days[today.getDay()]);
    });

    it('should return a day as a string for a given date', () => {
        expect(service.getDay(today)).to.equal(days[today.getDay()]);
    });
});
