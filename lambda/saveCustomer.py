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

def saveCustomer(event, context):
    request = json.dumps(event)
    data = json.loads(request)
    try:
        conn = pymysql.connect(host,user=user_name,passwd=password,db=db_name,connect_timeout=5)
        sql="INSERT INTO customer (email,phone,user_name) VALUES (%s, %s, %s, %s,%s)"
        val = (data['request']['userAttributes']['email'],data['request']['userAttributes']['phone_number'],data['userName'])
        with conn.cursor() as cur:
            cur.execute(sql,val)
    finally:
        cur.close()
    return event
