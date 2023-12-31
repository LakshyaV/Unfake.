# **Unfake**

**Unfake** is a versatile website and mobile app designed to assist users in identifying counterfeit versions of products quickly and efficiently. Our intuitive scanning process utilizes QR codes to verify the authenticity of real products, helping you make informed purchasing decisions and avoid falling victim to counterfeit goods.

## **Table of Contents**
- [**Introduction**](#introduction)
- [**Key Features**](#key-features)
- [**How It Works**](#how-it-works)

## **Introduction**

In today's market, counterfeit products have become increasingly sophisticated, making it challenging for consumers to distinguish genuine items from fakes. **Unfake** aims to bridge this gap by offering a reliable and user-friendly solution. Our platform empowers users to scan QR codes on products and receive instant verification, ensuring that what they are buying is authentic.

## **Key Features**

- **QR Code Scanning**: **Unfake** simplifies the verification process by allowing users to scan QR codes on products to check their authenticity.

- **Database of Authentic Products**: We maintain an extensive database of genuine products, enabling us to provide accurate verification results.

- **User-Friendly Interface**: Our website and app feature an intuitive and user-friendly interface, making it accessible to users of all technical levels.

- **Instant Verification**: Within seconds, **Unfake** confirms whether a scanned product is genuine or fake, offering peace of mind to shoppers.

- **Product Information**: In addition to authentication, **Unfake** provides essential information about the product, such as manufacturer details and user reviews.

## **How It Works**

**Unfake** uses advanced algorithms and our extensive product database to determine whether a scanned item is genuine or counterfeit. Here's a brief overview of how the process works:

1. **Scan the QR Code**: Using your smartphone's camera, scan the QR code on the product's label or packaging.

2. **Authentication Check**: **Unfake** instantly checks the scanned QR code against its database of genuine products.

3. **Verification Result**: You will receive immediate feedback confirming whether the product is authentic or potentially counterfeit.

4. **Additional Information**: **Unfake** may provide additional information about the product, including details about the manufacturer and user reviews.](https://github.com/LakshyaV/Unfake)](https://github.com/LakshyaV/Unfake)https://github.com/LakshyaV/Unfake

## How we built it

With a core focus on safeguarding product authenticity, our system leverages blockchain technology in conjunction with QR code scanning to provide a comprehensive means of verifying product legitimacy. This project includes frontend with React and Tailwind CSS, while the backend includes Python.

Blockchain Technology:

At the heart of our system is the blockchain structure, an immutable ledger renowned for its security and trustworthiness.
The blockchain consists of a series of blocks, each containing vital information about a product, such as its index, previous block's hash, timestamp, product name, product ID, nonce, and hash. Each block represents a product.
The blockchain is secured using the SHA-256 hashing algorithm, ensuring the integrity of stored data.
Block Creation and QR Code Generation:

Every legitimate product is associated with a unique block in the blockchain.
A QR code is generated for each authentic product, which encodes critical product information, including its authenticity status, product name, and product ID.
The QR code image is created using the qrcode library, and it is saved as an image file (e.g., static/block_{product_id}_qr.png).
Additionally, the binary data of the QR code is stored within the block as qr_code_data through: qr_byte_io = io.BytesIO()

```
img.save(qr_byte_io)

qr_byte_data = qr_byte_io.getvalue()
Verification Process:
```

When a QR code is scanned using our dedicated web application, the verification process begins.
The application extracts the data encoded within the scanned QR code.
The extracted data is then compared with the QR code data information stored in the blocks of the blockchain, seeking an exact match.
If the extracted data corresponds precisely to the information saved in the blockchain, the product is confirmed as genuine.
In cases where there is no match, the system immediately alerts the user, unequivocally identifying the - product as counterfeit.
User Interface:

Users interact with our system via a web interface.
he system's user interface provides login/sign up opportunities to companies trying to make a fake product identifier for their product. To make these identifiers, users can input the product's name, the quantity of items, and a product description (which can be automatically generated by AI). The system will create a corresponding number of blocks, each representing a product. Within each block or product, a QR code will be generated and the data from the QR code will be stored along with additional security measures such as hashing.
When a match is found, users are directed to a page confirming the product's legitimacy, assuring them of their purchase's authenticity.
In instances of mismatch, users are directed to a page clearly stating that the product is counterfeit, empowering them to make informed decisions.
