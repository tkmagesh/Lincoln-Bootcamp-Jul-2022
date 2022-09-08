import boto3
import os


def delivery_handler(event, context):
    queue_client = boto3.client('sqs')
    queue = os.environ.get('RECORD_DELIVERY_QUEUE')

    message = event['Records'][0]['Sns']['Message']
    queue_client.send_message(QueueUrl=queue, MessageBody="please record delievery for the order")