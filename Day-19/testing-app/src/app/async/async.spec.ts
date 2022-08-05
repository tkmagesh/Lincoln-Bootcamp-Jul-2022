import { fakeAsync, flush, flushMicrotasks, tick } from "@angular/core/testing";
import { of } from "rxjs";
import {delay, switchMap } from 'rxjs/operators';


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

    describe('Testing promises', () => {
        it('should test after resolving a promise', fakeAsync(() => {
            let test1 = false;

            let promise = new Promise((resolveFn, rejectFn) => {
                test1 = true
                resolveFn(100)
            })

            expect(test1).toBeTrue();
        }));

        it('should test promises & timeout', fakeAsync(() => {
            let counter = 0;
            Promise
                .resolve()
                .then(() => {
                    counter = 10;
                    setTimeout(() => {
                        counter += 1;
                    }, 2000);
                })

            expect(counter).toBe(0);
            flushMicrotasks() // wait for the promise to be resolved / rejected
            expect(counter).toBe(10);
            flush();
            expect(counter).toBe(11);
        }))
    });
        
    describe('testing observables', () => {
        it('should assert on the observables', fakeAsync(() => {
            let test = false;

            const test$ = of(test).pipe(
                delay(2000),
                switchMap(test => of(true))
            );

            test$.subscribe(val => {
                console.log('val = ', val)
                test = val;
            })

            tick(2000);
            expect(test).toBeTrue();
        }))
    })
    
})