from kybra import Record, Vec, query, update, void

class QR(Record):
    id: str
    data: str

class Block(Record):
    id: str
    qr_code: "QR"
    productName: str
    hashes: str
    previous_hash: str
    nonce: int
    timestamp: str

genisis: Block = Block(0, "0", "0", "0", "0")
chain: Vec[Block] = [genisis]

@query
def get_chain() -> str:
    return chain

@update
def add_block(block: Block) -> void:
    global chain
    chain = chain + [block]