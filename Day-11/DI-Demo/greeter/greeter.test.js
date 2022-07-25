let Greeter = require('./greeter')


//Fake DateService for morning 
class MorningDateService {
    getCurrent(){
        return new Date(2022, 6, 25, 9, 0, 0);
    }
}

//Fake DateService for afternoon 
class AfternoonDateService {
    getCurrent(){
        return new Date(2022, 6, 25, 15, 0, 0);
    }
}


test('Greets with "Good Morning" before 12', () => {
    //arrange
    let morningDateService = new MorningDateService(); //Mock
    let greeter = new Greeter(morningDateService);
    let userName = 'Magesh'
    let expectedResult = 'Hi Magesh, Good Morning!'

    //act
    let actualResult = greeter.greet(userName);

    //assert
    expect(actualResult).toBe(expectedResult)
})

test('Greets with "Good Afternoon" after 12', () => {
    //arrange
    let afternoonDateService = new AfternoonDateService(); //Mock
    let greeter = new Greeter(afternoonDateService);
    let userName = 'Magesh'
    let expectedResult = 'Hi Magesh, Good Afternoon!'

    //act
    let actualResult = greeter.greet(userName);

    //assert
    expect(actualResult).toBe(expectedResult)
})