#import json
import simplejson as json
import boto3
import os
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource('dynamodb')
table_name = os.environ.get('ORDERS_TABLE')

def read_handler(event, context):
    order_id = int(event['pathParameters']['id'])
    orders_table = dynamodb.Table(table_name)
    print(f"Order id = {order_id}")
    response = orders_table.query(KeyConditionExpression=Key('id').eq(order_id))
    print("response", response)
    return {
        'statusCode' : 200,
        'body' : json.dumps(response['Items'])
    }

# table.query(KeyConditionExpression=Key('id').eq(order_id))