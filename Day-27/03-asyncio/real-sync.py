import requests
import time
import json

def worker(name, n):
    print(f'worker-{name}')
    session = requests.Session()
    url = f'https://qrng.anu.edu.au/API/jsonI.php?length={n}&type=uint16'
    with session.get(url) as response:
        response_str = response.text
        result = json.loads(response_str)
        values = result['data']
        return sum(values)

def main():
    print(worker('task-1', 10))
    print(worker('task-2', 10))
    print(worker('task-3', 10))

if __name__ == '__main__':
    start = time.perf_counter()
    main()
    elapsed = time.perf_counter() - start
    print(f'time taken = {elapsed:0.2f} seconds')