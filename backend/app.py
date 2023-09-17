from flask import Flask, jsonify, request
from flask_cors import CORS
from helpers.utils import Blockchain 
import qrcode
import io
import difflib

app = Flask(__name__)
app.config['CORS_ORIGINS'] = '*'
app.config['CORS_SEND_WILDCARD'] = False
app.config['CORS_HEADERS'] = 'Content-Type'

CORS(app)

@app.route('/')
def home():
    return jsonify(success=True)

@app.route('/make', methods=['POST'])
def make():
    data = request.json
    print(data)
    productName = data['productName']
    productAmount = data['amount']
    location = data['location']
    for i in range(productAmount):
        blockchain.add_block(productName)
    
    chain_data = []
    for i in blockchain.chain[len(blockchain.chain)-productAmount:]:
        chain_data.append({
            "block": i.index,
            "productName": i.product_name,
            "productId": i.product_id,
            "hashes": i.hash,
            "previous_hash": i.previous_hash,
            "qrcode": str(i.qr_code_data)
        })
    return jsonify(data=chain_data)
    

@app.route('/scan', methods=['POST'])
def scan():

    data = request.json["data"]
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    img = qr.make_image(fill_color="black", back_color="white")
    # Convert the QR code image data to bytes
    qr_byte_io = io.BytesIO()
    img.save(qr_byte_io)
    qr_byte_data = str(qr_byte_io.getvalue())
    for block in blockchain.chain:
        if str(block.qr_code_data) == qr_byte_data:
            return jsonify(found=True)
    return jsonify(found=False)

if __name__ == "__main__":
    # create blockchain
    blockchain = Blockchain()
    app.run(host='0.0.0.0', port=8080, debug=True)