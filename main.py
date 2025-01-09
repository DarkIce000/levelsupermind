from flask import Flask
from flask import Flask, request
import json
from flask_cors import CORS
from langflow_socialstats import main
from flask import render_template

# add your langflow api key in the keys.py file 
from keys import API_KEY


app = Flask(__name__)
CORS(app)

@app.route("/api/", methods=['POST'])
def call():
    data = json.loads(request.data)
    args_list = [data['message']]
    get_response = main(args_list)
    print(get_response)
    return get_response

@app.route("/", methods=['GET'])
def home():
    return render_template('index.html')
    

if __name__ == '__main__':  
   app.run() 