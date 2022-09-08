import json


def hello_name_handler(event, content):
    print(event)
    return {
        "statusCode" : 200,
        "body" : json.dumps({
            "message" : f"Hi {event['pathParameters']['name']}!"
        })
    }