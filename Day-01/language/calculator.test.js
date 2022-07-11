
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