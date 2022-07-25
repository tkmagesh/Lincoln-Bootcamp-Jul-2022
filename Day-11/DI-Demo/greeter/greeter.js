/* greet the user based on the time of the day */
/* 
    before 12
        Hi <username>, Good Morning!
    after 12
        Hi <username>, Good Afternoon!
*/

class DateService{
    getCurrent(){
        return new Date();
    }
}

class Greeter{
    //dateService = new DateService(); //tightly coupled

    dateService = null;

    constructor(dateService){
        this.dateService = dateService;
    }

    greet(userName){
        if (this.dateService.getCurrent().getHours() < 12){
            return `Hi ${userName}, Good Morning!`
        } else {
            return `Hi ${userName}, Good Afternoon!`
        }
    }
}

module.exports = Greeter;