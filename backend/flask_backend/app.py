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

CORS(app)

if __name__ == '__main__':
    app.run(debug=True)