# catsim imports

# this function generates an item bank, in case the user cannot provide one
from catsim.cat import generate_item_bank
# simulation package contains the Simulator and all abstract classes
from catsim.simulation import *
# initialization package contains different initial proficiency estimation strategies
from catsim.initialization import *
# selection package contains different item selection strategies
from catsim.selection import *
# estimation package contains different proficiency estimation methods
from catsim.estimation import *
# stopping package contains different stopping criteria for the CAT
from catsim.stopping import *
import catsim.plot as catplot
from catsim.irt import icc
from catsim.irt import detect_model
from catsim.irt import see

import random

from model import *

# flask imports

import io
import os

import json

from flask_cors import CORS

# Imports the Google Cloud client library
from google.cloud import vision

from flask import Flask, render_template, jsonify, request, Response
from werkzeug.utils import secure_filename


app = Flask(__name__)

UPLOAD_FOLDER = 'C:/Quiz_App/backend/flask_backend/resources'
ALLOWED_EXTENTIONS = set(['txt', 'pdf', 'jpg', 'png', 'jpeg'])

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.',1)[1].lower() in ALLOWED_EXTENTIONS

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

key = "AIzaSyDH4zke2oTyiXcGYrHt_O14bVO5iogGDdU"

upload_name=""
filepath=""


@app.route("/")
def index():
    return "<div>hello</div>"


@app.route("/upload_image", methods=['POST'])
def upload_image():
    global filepath
    if 'file' not in request.files:
        return jsonify({'error': 'media not provided'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'no file selected'}), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        upload_name=file.filename
        filepath="resources/"+upload_name
        print(upload_name)
        return jsonify({'msg': 'media uploaded successfully'})
    else:
        return jsonify({'error': 'file type not allowed'}), 400
    # file = request.files["file"]
    # file_contents = file.read()




@app.route("/image")
def imageToText():
    # Instantiates a client
    client = vision.ImageAnnotatorClient()

    # The name of the image file to annotate
    file_name = os.path.abspath(filepath)

    # Loads the image into memory
    with io.open(file_name, 'rb') as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    # members = ["Member1", "Member2", "Member3"]
    # return jsonify(members=members)
    s = ""
    response = client.document_text_detection(image=image)
    for page in response.full_text_annotation.pages:
            for block in page.blocks:
                for paragraph in block.paragraphs:
                    for word in paragraph.words:
                        word_text = ''.join([
                        symbol.text for symbol in word.symbols
                        ])
                        s = s+word_text+" "

    json_text = '{"text" :' + '"' + s + '"' + "}"

    if response.error.message:
        raise Exception(
        '{}\nFor more info on error messages, check: '
        'https://cloud.google.com/apis/design/errors'.format(
        response.error.message))
    
    json_object = json.loads(json_text)
    print("JSON object:", json_object)

    return json_object


def item_generator():
    bank_size = 100
    items = generate_item_bank(bank_size, itemtype='3PL')
    return items

# Initialize variables
items = item_generator()
administered_items = []
responses = []
est_theta = 0.0
selector = MaxInfoSelector()
estimator = NumericalSearchEstimator()
stopper = MinErrorStopper(0.2)


# @app.route('/CAT/<boolean:res>')
@app.route('/CAT/<res>')
def CAT(res):
    global items, administered_items, responses, est_theta

    # Estimate proficiency
    est_theta = estimator.estimate(items=items, administered_items=administered_items, response_vector=responses, est_theta=est_theta)
    print('Estimated proficiency, given answered items:', est_theta)

    # Stop check
    _stop = stopper.stop(administered_items=items[administered_items], theta=est_theta)
    print('Should the test be stopped:', _stop)
    print(see(est_theta, items[administered_items]))

    if _stop:
        return "STOP"
    else:
        # Item selection
        item_index = selector.select(items=items, administered_items=administered_items, est_theta=est_theta)
        print('Next item to be administered:', item_index)
        # Add the administered question
        administered_items.append(item_index)
        # Append the response
        responses.append(res)
        return str(item_index)

CORS(app)

if __name__ == '__main__':
    app.run(debug=True)