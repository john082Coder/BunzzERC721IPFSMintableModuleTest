## Preparation before deployment
1. Prepare the metadata for your tokens and upload them to ipfs, through pinata or other preferred services (https://docs.pinata.cloud/).

## Get started(Operation)
1. Deploying the Contract: Deploy the contract and initialize it with the desired token name and symbol.
2. Minting Tokens: To mint a new token, call the safeMint function with the recipient address and the IPFS URI of the metadata. The metadata should already be uploaded to IPFS, and the URI should be the hash returned by IPFS.
3. Retrieving Token Metadata: To get a token's metadata, call the tokenURI function with the token's ID. This will return the full URI to the metadata stored on IPFS.
4. Burning Tokens: If you want to burn a token and delete its associated metadata URI, use the standard ERC721 burn function. The _burn function in this contract ensures the token's specific URI is deleted when the token is burned.






