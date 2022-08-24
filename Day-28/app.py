
from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

bugs = [
    {
        'id' : 1,
        'name' : 'Bug - 1',
        'isClosed' : False
    },
    {
        'id': 2,
        'name': 'Bug - 2',
        'isClosed': True
    },
    {
        'id': 3,
        'name': 'Bug - 3',
        'isClosed': False
    }
]

@app.route('/')
def home():
    #return "Hi there!"
    return render_template('index.html')

@app.route('/bugs')
def get_bugs():
    return jsonify(bugs)

@app.route('/bugs', methods=['POST'])
def save_new_bug():
    request_data = request.get_json()
    new_bug_id = max(bug['id'] for bug in bugs) + 1
    new_bug = {
        'id' : new_bug_id,
        'name' : request_data['name'],
        'isClosed' : request_data['isClosed']
    }
    bugs.append(new_bug)
    return new_bug, 201

app.run(port=8080, debug=True)