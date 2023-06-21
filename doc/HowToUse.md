## Preparation before deployment
1. Prepare the metadata for your tokens and upload them to a centralized solution like s3. More explanations here https://docs.bunzz.dev/product-docs/others/uri-argument-base-token-uri

## Get started(Operation)
1. When deploying the contract, you need to prepare 3 arguments, the first argument is a string and represents the name (ex: Bored Ape Yacht Club) of the token, the second argument is a string and represent the symbol ( ex: BAYC) of the token, the third argument represents the base URI(e.g. https://token-cdn-domain/ ) of the collection metadata, in this URI(Uniform Resource Identifier) you can point to a file where you can specify all the characteristics of the token like name (e.g. Bored Ape Yacht Club), symbol (e.g. BAYC), description, color, etc...
2. After you upload your metadata on s3 in return you will receive a link
3. The link represent the your metadata base uri, when you mint new tokens it will be directly added to the token metadata.
4. Call the “mint” function (it can only be called by an address that have the minter role), with the first argument representing the address that will receive the nft, and the second address being the id of the token
5. The metadata of a token can be retrieved by calling the “tokenURI” function, which the only argument being the id of the token (e.g. of data returned for tokenId 1 --> https://token-cdn-domain/1 )
6. A user can call the “transfer” function to transfer his nft’s to another user
7. A user can call “transferFrom” function to transfer nft’s from one user to another if he was approved by the owner of the nft





