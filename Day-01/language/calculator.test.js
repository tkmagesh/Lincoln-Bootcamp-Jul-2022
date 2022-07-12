
var add = require('./calculator');

test('sample test', function(){
    expect(true).toBe(true);
}); 

test('Should add 2 numbers', function(){
    //Arrange
    var expectedResult = 30;

    //Act
    var actualResult = add(10,20);

    //Assert
    expect(actualResult).toBe(expectedResult);
})

test('Should add numbers in string format', function(){
    //Arrange
    var expectedResult = 30;

    //Act
    var actualResult = add("10",20);

    //Assert
    expect(actualResult).toBe(expectedResult);
})



test('Should ignore strings that cannot be converted to numbers', function(){
    //Arrange
    var expectedResult = 20;

    //Act
    var actualResult = add("abc",20);

    //Assert
    expect(actualResult).toBe(expectedResult);
})

test('Should add functions return numbers', function(){
    //Arrange
    var expectedResult = 30;

    //Act
    var actualResult = add(function(){ return 10;}, function(){ return 20;}) 

    //Assert
    expect(actualResult).toBe(expectedResult);
})

test('Should add functions returning numbers in string format', function(){
    //Arrange
    var expectedResult = 30;

    //Act
    var actualResult = add(function(){ return 10;}, function(){ return "20";}) 

    //Assert
    expect(actualResult).toBe(expectedResult);
})

test('Should return 0 when invoked with no arguments', function(){
    //Arrange
    var expectedResult = 0;

    //Act
    var actualResult = add() 

    //Assert
    expect(actualResult).toBe(expectedResult);
})

test('Should varying number of arguments', function(){
    //Arrange
    var expectedResult = 150;

    //Act
    var actualResult = add(10,20,30,40,50);

    //Assert
    expect(actualResult).toBe(expectedResult);
})

test('Should add array of numbers', function(){
    //Arrange
    var expectedResult = 100;

    //Act
    var actualResult = add([10,20],[30,40]);

    //Assert
    expect(actualResult).toBe(expectedResult);
})

test('Should add array of numbers in string format', function(){
    //Arrange
    var expectedResult = 100;

    //Act
    var actualResult = add([10,20],[30,"40"]);

    //Assert
    expect(actualResult).toBe(expectedResult);
})

test('Should add nested array of numbers and numbers in string format', function(){
    //Arrange
    var expectedResult = 150;

    //Act
    var actualResult = add([10,20],[[30,"40"],50]);

    //Assert
    expect(actualResult).toBe(expectedResult);
})

test('Should add arrays with strings that cannot be converted to numbers', function(){
    //Arrange
    var expectedResult = 60;

    //Act
    var actualResult = add([10,20], [30,"abc"]);

    //Assert
    expect(actualResult).toBe(expectedResult);
})

test('Should add functions return array of numbers and strings', function(){
    //Arrange
    var expectedResult = 60;

    //Act
    var actualResult =add(function(){ return 10;}, function(){ return ["20", 30];});

    //Assert
    expect(actualResult).toBe(expectedResult);
})

test('Should add array of functions return array of numbers and strings', function(){
    //Arrange
    var expectedResult = 60;

    //Act
    var actualResult = add([function(){ return 10;}, function(){ return ["20", 30];}])

    //Assert
    expect(actualResult).toBe(expectedResult);
})

test('Should add functions returning array of functions return array of numbers and strings', function(){
    //Arrange
    var expectedResult = 60;

    //Act
    var actualResult = add(function(){ return [function(){ return 10;}, function(){ return ["20", 30];}]; })

    //Assert
    expect(actualResult).toBe(expectedResult);
})

