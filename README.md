# Swisstronik x Learn Web 3 Challenge 3 ETH getStorage

In this project, there are sample contracts, tests, and scripts that deploy contracts, as well as the Swisstronik blockchain network. This case demonstrates the basic usage of Hardhat.

## Task

Make a JSON RPC call using eth_getStorageAt() to get the first storage variable (slot #0) of any deployed smart contract and explain what is the retrieved value or if there is any difference with other blockchains when using this RPC method.

## Usage

## Smart Contract

```
0xf84Df872D385997aBc28E3f07A2E3cd707c9698a 
```

Installation Package (I'm using new folder and forget and fresh)

```
npm install
```

### Network: Swisstronik


#### `Request`

```shell
npx hardhat run scripts/getStorage.js --network swisstronik
```

#### `Response`

```shell
{
  contract: '0xf84Df872D385997aBc28E3f07A2E3cd707c9698a',
  slotNumber: 0,
  rpcURL: 'https://json-rpc.testnet.swisstronik.com/'
}

Response:
Storage Value at Slot 0: 0x0xc73e7f645a2bf1365a0903afa03a2cb5029ba989df7844b0fe7751b1ba918ea4
```

### Network: Ethereum Sepolia

#### `Request`

```shell
npx hardhat run scripts/getStorage.js --network sepolia
```

#### `Response`

```shell
{
  contract: '0xf84Df872D385997aBc28E3f07A2E3cd707c9698a',
  slotNumber: 0,
  rpcURL: 'https://rpc.sepolia.org'
}

Response:
Storage Value at Slot 0: 0x0x0000000000000000000000000000000000000000000000000000000000000000
```

### Network: Polygon Mumbai

#### `Request`

```shell
npx hardhat run scripts/getStorage.js --network mumbai
```

#### `Response`

```shell
{
  contract: '0xf84Df872D385997aBc28E3f07A2E3cd707c9698a',
  slotNumber: 0,
  rpcURL: 'https://polygon-mumbai.blockpi.network/v1/rpc/public'
}

Response:
Storage Value at Slot 0: 0x0x0000000000000000000000000000000000000000000000000000000000000000
```


## Conclusion

`01. Provide an explanation of the value retrieved from the RPC call.`   
<br>
✅ Swisstronik Network:
✔ Value: 0xc73e7f645a2bf1365a0903afa03a2cb5029ba989df7844b0fe7751b1ba918ea4    
✔ Explanation: This hexadecimal string represents the raw data stored in the contract's first storage slot, which corresponds to the private message variable. The value 0xc73e7f645a2bf1365a0903afa03a2cb5029ba989df7844b0fe7751b1ba918ea4 encodes the current message stored in the contract. This value can change when someone calls the setMessage() function to update the message.   
<br>
✅ Mumbai Network and Sepolia Network:   
✔ Value: 0x0000000000000000000000000000000000000000000000000000000000000000   
✔ Explanation: These values are also hexadecimal strings, but they consist entirely of zeros. This suggests that either no meaningful data was stored in the first storage slot of the contract on these networks. Essentially, it indicates that there is no message stored in the contract on these networks, or the message is an empty string.   
<br>
`02. What does this retrieved value represent? Is there any difference if this RPC call is made on the Sepolia or Mumbai networks?`   
<br>
✅ Swisstronik Network, you are seeing the encoded or hashed representation of the current message stored in the contract's first storage slot.   
✅ Mumbai and Sepolia Networks, you are seeing all zeros in the first storage slot, indicating an empty message or no message has been set on these networks for the given contract.