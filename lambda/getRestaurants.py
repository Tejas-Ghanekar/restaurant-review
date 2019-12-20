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

def get_restaurants(event,context):
  try:
    result=[]
    conn = pymysql.connect(host,user=user_name,passwd=password,db=db_name,connect_timeout=5)
    with conn.cursor() as cur:
      cur.execute("""select * from restaurant""")
      rows=cur.fetchall()
      for row in rows:
        result.append({'id':row[0], 'name':row[1], 'address':row[2], 'city':row[3], 'state':row[4], 'area':row[5], 'postal_code':row[6], 'phone':row[7], 'price':row[8]})
  finally:
    cur.close()
  return result
