import { fakeAsync, flush } from "@angular/core/testing";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000

fdescribe('Async Tests', () => {
    describe('Testing callbacks', () => {
        function addAsync(x : number,y : number, callback : (result : number) => void) {
            setTimeout(() => {
                const result = x + y;
                callback(result);
            }, 1000);
        }

        it('should add the given numbers', (done) => {
            const 
                n1 = 100,
                n2 = 200,
                expectedResult = 300;

            addAsync(n1,n2, (result) => {
                expect(result).toBe(expectedResult);
                done();
            })
        })

        function dummyAsync(timeout : number, callback : () => void){
             setTimeout(() => {
                callback();
            }, timeout);
        }
        it('should test multiple async operations', fakeAsync(() => {
            let test1 = false;
            dummyAsync(2000, () => {
                test1 = true
            });

            let test2 = false;
            dummyAsync(4000, () => {
                test2 = true
            });
            
            flush() //wait for all the async operations to complete before the assertions are executed
            
            expect(test1).toBeTrue()
            expect(test2).toBeTrue()
        }))
    })

    
        
    
})