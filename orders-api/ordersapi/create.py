import json
import boto3
import os

dynamodb = boto3.resource('dynamodb')
table_name = os.environ.get('ORDERS_TABLE')

def create_handler(event, context):
    order = json.loads(event['body'])    
    orders_table = dynamodb.Table(table_name)
    orders_table.put_item(TableName=table_name, Item=order)
    return {
        'statusCode' : 201,
        'body' : json.dumps({'message' : f'order [id = {order["id"]}] created'})
    }