import hashlib
import time
import qrcode
import io
import random
import os

class Block:
    def __init__(self, index, previous_hash, product_name, product_id):
        self.index = index
        self.previous_hash = previous_hash
        self.timestamp = time.time()
        self.product_name = product_name
        self.product_id = product_id
        self.nonce = 0
        self.hash = self.calculate_hash()
        self.qr_code_data = self.generate_qr_code_data()  # Generate QR code data for this block

    def calculate_hash(self):
        data = str(self.index) + self.previous_hash + str(self.timestamp) + self.product_name + self.product_id + str(self.nonce)
        return hashlib.sha256(data.encode()).hexdigest()

    def generate_qr_code_data(self):
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        text = "The product is real. The product name is " + self.product_name + " The product id is " + self.product_id
        print(text)
        qr.add_data(text)
        qr.make(fit=True)
        img = qr.make_image(fill_color="black", back_color="white")
        img = qr.make_image(fill_color="black", back_color="white")
        img.save(f"static/block_{self.product_id}_qr.png")  # Save the QR code as an image file
        
        # Convert the QR code image data to bytes
        qr_byte_io = io.BytesIO()
        img.save(qr_byte_io)
        qr_byte_data = qr_byte_io.getvalue()
        
        return qr_byte_data  # Return the QR code data as bytes

class Blockchain:
    def __init__(self):
        self.chain = [self.create_genesis_block()]
        self.difficulty = 4  # Adjust the difficulty by changing the number of leading zeros in the hash
        # self.product_name = self.get_product_name()  # Ask for the product name

    def create_genesis_block(self):
        return Block(0, "0", "Genesis Product", "0")

    # def get_product_name(self):
    #     return input("Enter the name of the product: ")

    def add_block(self, product_name):
        previous_block = self.chain[-1]
        product_id = os.urandom(30).hex()
        new_block = Block(len(self.chain), previous_block.hash, product_name, product_id)
        while new_block.hash[:self.difficulty] != "0" * self.difficulty:
            new_block.nonce += 1
            new_block.hash = new_block.calculate_hash()
        self.chain.append(new_block)

# def main():
#     blockchain = Blockchain()

#     # Add initial block (genesis block)
#     \("Mining Genesis Block...")
#     blockchain.add_block()

#     num_blocks = int(input("Enter the number of additional blocks to create: "))
    
#     # Add the specified number of blocks with the same product name
#     for _ in range(num_blocks):
#         print(f"Mining Block {len(blockchain.chain) + 1}...")
#         blockchain.add_block()

#     # Print the entire blockchain, including QR code data
#     for block in blockchain.chain:
#         print(f"Block {block.index}")
#         print(f"Timestamp: {block.timestamp}")
#         print(f"Product Name: {block.product_name}")
#         print(f"Product ID: {block.product_id}")
#         print(f"Previous Hash: {block.previous_hash}")
#         print(f"Hash: {block.hash}")
#         print(f"QR Code data (as bytes): {block.qr_code_data}\n")

# # if __name__ == "__main__":
# #     main()