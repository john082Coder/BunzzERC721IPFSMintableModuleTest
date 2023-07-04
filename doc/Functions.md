# WRITE(main)

## transferOwnership
Transfer the ownership rights from one account to another

|Name|Type|Description|
|--- |---|---|
|newOwner|address|The account that will get the new owner rights|

## transferFrom
Transfer a particular tokenId from the token owner to an certai address if the caller have the permission to transfer it

|Name|Type|Description|
|--- |---|---|
|from|address|The address of token sender|
|to|address|The address of token receiver|
|tokenId|uint256|The id of the token that will be transfered|


## safeTransferFrom
Safely transfers the ownership of a given token ID

|Name|Type|Description|
|--- |---|---|
|from|address|The address of token sender|
|to|address|The address of token receiver|
|tokenId|uint256|The id of the token that will be sent|
|_data|bytes|Optional data field|

## safeTransferFrom
Safely transfers the ownership of a given token ID

|Name|Type|Description|
|--- |---|---|
|from|address|The address of the token sender|
|to|address|The id of the token that will be receiver|
|tokenId|uint256|The id of the token that will be sents|

## approve
Gives an certain address permission to move tokens for the token owner

|Name|Type|Description|
|--- |---|---|
|to|address|Account to approve to spend caller balance|
|tokenId|uint256|Token id that will be approved to be user by other account|


## setApprovalForAll

Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.

|Name|Type|Description|
|--- |---|---|
|operator|address|The account that will be the balance operator|
|approved|bool|Approval status|


## safeMint
Mint new tokens

|Name|Type|Description|
|--- |---|---|
|to|address|The tokens receiver|
|metadataURI|string|The uri of the metadata, represented by an ipfs hash or api link|

## renounceOwnership
Renounce the ownership rights of the contract

No arguments



# READ(main)

## totalSupply
Returns the amount of tokens in existence

No arguments

## supportsInterface
Returns a boolean that tells us if the contract supports royalties

|Name|Type|Description|
|--- |---|---|
|interfaceId|bytes4|Id of the interface|

## balanceOf
Returns the token amount owned by an address

|Name|Type|Description|
|--- |---|---|
|owner|address|The account which you want to check the balance|

## ownerOf
Returns the owner of the NFT specified by tokenId

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token you want to check its owner of|

## owner
Returns the owner of the contract

No arguments

## name
Retrieves collection name

No arguments

## symbol
Returns the symbol of the collection

No arguments

## tokenURI
Returns the ipfs link where metadata is stored

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token|

## tokenOfOwnerByIndex
Returns a token ID owned by owner at a given index of its token list. Use along with balanceOf to enumerate all of owners tokens.

|Name|Type|Description|
|--- |---|---|
|owner|address|The account on which you want to retrieve the token index upon|
|index|uint256|The index of the token|

## tokenByIndex
Return the token index based on user balance

|Name|Type|Description|
|--- |---|---|
|index|uint256|The index of the token|


## getApproved
Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The token id you will retrieves the approvals|

## isApprovedForAll
Retrieves if a user is approved to operate over all the tokens owned by another user

|Name|Type|Description|
|--- |---|---|
|owner|address|The address of the tokens owner|
|operator|uint256|The operator that have the rights to operate over user balance|




