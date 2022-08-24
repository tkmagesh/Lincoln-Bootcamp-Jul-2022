import asyncio
from random import randint
import time

def randn_s():
    time.sleep(3)
    return randint(1,10)


def odds(start, stop):
    for odd in range(start, stop+1, 2):
        yield odd

async def square_odds(start, stop):
    for odd in odds(start, stop):
        await asyncio.sleep(2)
        yield odd ** 2

async def randn():
    await asyncio.sleep(3)
    return randint(1, 10)

async def main():
    """ 
    value1 = await randn()
    print(f'result = {value1}')

    value2 = await randn()
    print(f'result = {value2}')

    value3 = await randn()
    print(f'result = {value3}') 
    """

    """ 
    start = time.perf_counter()
    value1 = await randn()
    elapsed = time.perf_counter() - start
    print(f'result-1 = {value1}, time taken = {elapsed}')
    """

    """ 
    start = time.perf_counter()
    #values = await asyncio.gather(randn(), randn(), randn())
    values = await asyncio.gather(*(randn() for _ in range(10)))
    elapsed = time.perf_counter() - start
    print(f'result_all = {values} , time taken = {elapsed}')  
    """

    async for sq_odd in square_odds(11,20):
        print(sq_odd)
   

if __name__ == '__main__':
    asyncio.run(main())
