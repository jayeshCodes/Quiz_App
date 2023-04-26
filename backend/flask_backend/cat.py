import io
import os

# Imports the Google Cloud client library
from google.cloud import vision


# os.environ['GOOGLE_APPLICATION_CREDENTIALS']=r'key.json'

# API_KEY = "AIzaSyDH4zke2oTyiXcGYrHt_O14bVO5iogGDdU"

key = "AIzaSyDH4zke2oTyiXcGYrHt_O14bVO5iogGDdU"

# Instantiates a client
client = vision.ImageAnnotatorClient()

# The name of the image file to annotate
file_name = os.path.abspath('resources/handwriting3.jpg')

# Loads the image into memory
with io.open(file_name, 'rb') as image_file:
    content = image_file.read()

image = vision.Image(content=content)

# Performs label detection on the image file
response = client.document_text_detection(image=image)
for page in response.full_text_annotation.pages:
        for block in page.blocks:
            # print('\nBlock confidence: {}\n'.format(block.confidence))

            for paragraph in block.paragraphs:
                # print('Paragraph confidence: {}'.format(
                #     paragraph.confidence))

                for word in paragraph.words:
                    word_text = ''.join([
                        symbol.text for symbol in word.symbols
                    ])
                print(word_text)

                    # for symbol in word.symbols:
                    #     # print('\tSymbol: {} (confidence: {})'.format(
                    #     #     symbol.text, symbol.confidence))

if response.error.message:
    raise Exception(
        '{}\nFor more info on error messages, check: '
        'https://cloud.google.com/apis/design/errors'.format(
        response.error.message))
