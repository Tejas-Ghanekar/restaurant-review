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

def get_reviews(event,context):
  request = json.dumps(event)
  data = json.loads(request)
  try:
    result=[]
    conn = pymysql.connect(host,user=user_name,passwd=password,db=db_name,connect_timeout=5)
    with conn.cursor() as cur:
      sql = "SELECT * from review WHERE restaurant_id = %s"
      val = data['restaurant_id']
      cur.execute(sql,val)
      rows=cur.fetchall()
      for row in rows:
        result.append({'id':row[0], 'restaurant_id':row[1], 'customer_id':row[2], 'review_text':row[3], 'rating':row[4]})
  finally:
    cur.close()
  return result


  
