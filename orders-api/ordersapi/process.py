import json
import boto3
import os

""" 
dynamodb = boto3.resource('dynamodb')
table_name = os.environ.get('ORDERS_TABLE')
"""

s3 = boto3.client('s3')

def process_handler(event, context):
    bucket_name = event['Records'][0]['s3']['bucket']['name']
    file_key = event['Records'][0]['s3']['object']['key']
    obj = s3.get_object(Bucket=bucket_name, Key=file_key)
    file_content = obj['Body'].read().decode("utf-8")
    orders_to_process = json.loads(file_content)
    for each_order in orders_to_process:
        print('processing : ', json.dumps(each_order))