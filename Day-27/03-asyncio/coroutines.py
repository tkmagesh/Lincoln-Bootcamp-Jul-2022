import asyncio
from random import randint
import time

def randn_s():
    time.sleep(3)
    return randint(1,10)


async def randn():
    await asyncio.sleep(3)
    return randint(1, 10)

async def main():
    value = await randn()
    print(f'result = {value}')

if __name__ == '__main__':
    asyncio.run(main())
