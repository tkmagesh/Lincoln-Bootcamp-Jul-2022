
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000

fdescribe('Async Tests', () => {
    describe('Testing callbacks', () => {
        function addAsync(x : number,y : number, callback : (result : number) => void) {
            setTimeout(() => {
                const result = x + y;
                callback(result);
            }, 6000);
        }

        it('should add the given numbers', (done) => {
            const 
                n1 = 100,
                n2 = 200,
                expectedResult = 300;

            addAsync(100,200, (result) => {
                expect(result).toBe(expectedResult);
                done();
            })
        })
    })
})