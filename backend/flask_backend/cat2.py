import io
import os

# Imports the Google Cloud client library
from google.cloud import vision
from google.cloud.vision_v1p3beta1 import types
import pandas as pd

key = "AIzaSyDH4zke2oTyiXcGYrHt_O14bVO5iogGDdU"
client = vision.ImageAnnotatorClient()

FOLDER_PATH = r'C:/Quiz_App/backend/flask_backend/resources'
IMAGE_FILE = 'handwriting.jpg'
FILE_PATH = os.path.join(FOLDER_PATH, IMAGE_FILE)

with io.open(FILE_PATH, 'rb') as image_file:
    content = image_file.read()

image = vision.types.Image(content=content)
response = client.document_text_detection(image=image)
