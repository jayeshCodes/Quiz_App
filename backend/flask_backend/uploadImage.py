import os
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = './uploadImage.py'
ALLOWED_EXTENTIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.',1)[1].lower() in ALLOWED_EXTENTIONS

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/media/upload', methods=['POST'])
def upload_media():
    if 'file' not in request.files:
        return jsonify({'error': 'media not provided'}), 400
    file - request.files['files']
    if file.filename == '':
        return jsonify({'error': 'no file selected'}), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    return jsonify({'msg': 'media uploaded successfully'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)