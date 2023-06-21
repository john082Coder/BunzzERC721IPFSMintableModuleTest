## Preparation before deployment
1. Prepare the metadata for your tokens and upload them to ipfs, through pinata or other preferred services (https://docs.pinata.cloud/).

## Get started(Operation)
1. When deploying the contract, you need to prepare 2 arguments, the first argument is a string and represents the name of the token, and the second argument is a string and represents the symbol of the token
2. After you upload your metadata on ipfs in return you will receive a hash
3. The hash represents your metadata identifier and needs to be used during minting
4. Call the “safeMint” function (it can only be called by the owner), with the first argument representing the address that will receive the nft, and the second argument is the ipfs hash that represents the metadata identifier on ipfs.
5. The metadata of a token can be retrieved by calling the “tokenURI” function, in which the only argument is the id of the token.
6. A user can call the “transfer” function to transfer his nft’s to another user
7. A user can call “transferFrom” function to transfer nft’s from one user to another if he was approved by the owner of the nft





