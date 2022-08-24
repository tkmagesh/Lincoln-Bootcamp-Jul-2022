import aiohttp
import time
import json
import asyncio

async def worker(name, n, session):
    print(f'worker-{name}')
    url = f'https://qrng.anu.edu.au/API/jsonI.php?length={n}&type=uint16'
    response = await session.request(method='GET', url=url)
    response_str = await response.text()
    result = json.loads(response_str)
    values = result['data']
    return sum(values)

async def main():
    async with aiohttp.ClientSession() as session:
        """ 
        sums = await worker('Task-1', 10, session)
        print(sums) 
        """
        """ 
        results = await asyncio.gather(
            worker('Task - 1', 10, session), worker('Task - 2', 10, session), worker('Task - 3', 10, session)) 
        """
        results = await asyncio.gather(*(worker(f'Task-{n}', 10, session) for n in range(3)))
        print(results)

if __name__ == '__main__':
    start = time.perf_counter()
    asyncio.run(main())
    elapsed = time.perf_counter() - start
    print(f'time taken = {elapsed:0.2f} seconds')