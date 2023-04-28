import io
import os

import json

from flask_cors import CORS

# Imports the Google Cloud client library
from google.cloud import vision

from flask import Flask, render_template, jsonify, request, Response


app = Flask(__name__)

key = "AIzaSyDH4zke2oTyiXcGYrHt_O14bVO5iogGDdU"

# Instantiates a client
client = vision.ImageAnnotatorClient()

# The name of the image file to annotate
file_name = os.path.abspath('resources/handwriting.jpg')

# Loads the image into memory
with io.open(file_name, 'rb') as image_file:
    content = image_file.read()

image = vision.Image(content=content)


@app.route("/")
def index():
    return "<div>hello</div>"


@app.route("/upload_image", methods=["POST"])
def upload_image():
    # file = request.files["file"]
    # file_contents = file.read()
    return {"status": "success"}


@app.route("/image")
def imageToText():

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

CORS(app)

if __name__ == '__main__':
    app.run(debug=True)

