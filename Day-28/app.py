from crypt import methods
from flask import Flask, render_template, jsonify

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
    return 'A new bug is created'

app.run(port=8080, debug=True)