import { Date, hasConstructor } from "angular2/src/facade/lang";

export class Datepicker{
    today: Date;
    firstDayOfCurrentMonth: Date;
    currentYear: number;
    currentMonth: number;
    startingDay: number;
    datePickerEnabled = false;
    public selectedYear: number;
    public selectedMonth: number;
    public selectedDay: number;
    selectedDate: Date = new Date();
    
    week1 = [];
    week2 = [];
    week3 = [];
    week4 = [];
    week5 = [];
    week6 = [];
    weeksInCurrentMonth = [this.week1,this.week2,this.week3,this.week4,this.week5,this.week6];
    months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    daysInMonths = [31,28,31,30,31,30,31,31,30,31,30,31];
    // january = [1,31];
    // february = [1,28];
    // march = [1,31];
    // april = [1,30];
    // may = [1,31];
    // june = [1,30];
    // july = [1,31];
    // august = [1,31];
    // september = [1,30];
    // october = [1,31];
    // november = [1,30];
    // december = [1,31];
    constructor(){
        this.today = new Date();
        this.currentYear = this.today.getFullYear();
        this.currentMonth = this.today.getMonth(); 

        this.firstDayOfCurrentMonth = new Date(this.currentYear,this.currentMonth,1);
        this.startingDay = this.firstDayOfCurrentMonth.getDay();

        for (let index = 0; index < this.startingDay; index++) { 
            this.weeksInCurrentMonth[0].push(' ');
        }
        for (let index = 1; index <= this.daysInMonths[this.currentMonth]; index++) {
            for (let j = 0; j < this.weeksInCurrentMonth.length; j++) {
                while(this.weeksInCurrentMonth[j].length < 7 && index <= this.daysInMonths[this.currentMonth]){
                    this.weeksInCurrentMonth[j].push(index++);
                }
                
            }
            
           
            
        }
        if (this.weeksInCurrentMonth[5].length === 0){
            this.weeksInCurrentMonth.pop();
        }

    }

    nextMonth(){
        this.currentMonth++;
        if (this.currentMonth > 11){
            this.currentMonth = 0;
            this.currentYear++;
        }
        this.week1 = [];
        this.week2 = [];
        this.week3 = [];
        this.week4 = [];
        this.week5 = [];
        this.week6 = [];
        this.weeksInCurrentMonth = [this.week1,this.week2,this.week3,this.week4,this.week5,this.week6];
        for (let index = 0; index < this.weeksInCurrentMonth.length; index++) {
            this.weeksInCurrentMonth[index] = [];
            
        }
        
        this.firstDayOfCurrentMonth = new Date(this.currentYear,this.currentMonth,1);
        this.startingDay = this.firstDayOfCurrentMonth.getDay();

        for (let index = 0; index < this.startingDay; index++) {  // fill empty spaces
            this.weeksInCurrentMonth[0].push(' ');
        }
        for (let index = 1; index <= this.daysInMonths[this.currentMonth]; index++) { // fill month with days
            for (let j = 0; j < this.weeksInCurrentMonth.length; j++) {
                while(this.weeksInCurrentMonth[j].length < 7 && index <= this.daysInMonths[this.currentMonth]){
                    this.weeksInCurrentMonth[j].push(index++);
                }
                
            }
            
           
            
        }
        if (this.weeksInCurrentMonth[5].length === 0){
            this.weeksInCurrentMonth.pop();
        }
    }

    previousMonth(){
        this.currentMonth--;
        if (this.currentMonth < 0){
            this.currentMonth = 11;
            this.currentYear--;
        }
        this.week1 = [];
        this.week2 = [];
        this.week3 = [];
        this.week4 = [];
        this.week5 = [];
        this.week6 = [];
        this.weeksInCurrentMonth = [this.week1,this.week2,this.week3,this.week4,this.week5,this.week6];
        
        for (let index = 0; index < this.weeksInCurrentMonth.length; index++) {
            this.weeksInCurrentMonth[index] = [];
            
        }
        this.firstDayOfCurrentMonth = new Date(this.currentYear,this.currentMonth,1);
        this.startingDay = this.firstDayOfCurrentMonth.getDay();
        for (let index = 0; index < this.startingDay; index++) { 
            this.weeksInCurrentMonth[0].push(' ');
        }
        for (let index = 1; index <= this.daysInMonths[this.currentMonth]; index++) {
            for (let j = 0; j < this.weeksInCurrentMonth.length; j++) {
                while(this.weeksInCurrentMonth[j].length < 7 && index <= this.daysInMonths[this.currentMonth]){
                    this.weeksInCurrentMonth[j].push(index++);
                }
                
            }
            
           
            
        }
        if (this.weeksInCurrentMonth[5].length === 0){
            this.weeksInCurrentMonth.pop();
        }
    }

    toggleDatePicker(){
        this.datePickerEnabled = this.datePickerEnabled ? false : true;
    }

    onSelectDay(day){
        if (day != ' '){
          this.selectedDay = day;
          this.selectedMonth = this.currentMonth;
          this.selectedYear = this.currentYear;
          
          this.selectedDate = new Date(this.selectedYear,this.selectedMonth,this.selectedDay);
          setTimeout(([]) => {      this.datePickerEnabled = false;},200);
    
        }
    
        }

        currentMonthName(){
            return this.months[this.currentMonth] + " " + this.currentYear;
          }

          getDatePickerHeight(){
            if (this.weeksInCurrentMonth.length === 6){
              return "410px";
            } else{
              return "360px";
            }
          }

          getTableItemStyle(day){
            return day == ' ' ? 'hidden' : '';
             
           }
}