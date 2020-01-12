import pymysql
import sys
import os
import logging
import json

logger = logging.getLogger()
logger.setLevel(logging.INFO)

REGION = 'us-east-1'

host = os.environ['HOST']
user_name = os.environ['USER']
password = os.environ['PASSWORD']
db_name = os.environ['DB_NAME']

def lambda_handler(event, context):
    # TODO implement
    request = json.dumps(event)
    data = json.loads(request)
    try:
        conn = pymysql.connect(host,user=user_name,passwd=password,db=db_name,connect_timeout=5)
        sql="INSERT INTO review (restaurant_id,customer_id,review_text,rating,timestamp) VALUES (%s, %s, %s, %s, %s)"
        val = (data['body']['restaurant_id'],data['body']['customer_id'],data['body']['resReviewText'],data['body']['rating'],data['body']['timestamp'])
        with conn.cursor() as cur:
            cur.execute(sql,val)
            conn.commit()
            print("success")
    finally:
        cur.close()
        conn.close()
    return event
