## Approval
Emitted when owner enables approved to manage the tokenId token.

|Name|Type|Description|
|--- |---|---|
|owner|address|The address of the token owner|
|approved|address|The address of the approved account|
|tokenId|uint256|The id of the token which has been approved|

## ApprovalForAll
Emitted when owner enables or disables (approved) operator to manage all of its assets.

|Name|Type|Description|
|--- |---|---|
|owner|address|The address of the token owner|
|operator|address|The account that will be the balance operator|
|approved|bool|Approval status|

## OwnershipTransferred
Event emitted when ownership transferred to another address.

|Name|Type|Description|
|--- |---|---|
|previousOwner|uint256|The address of the previous owner of the contract|
|newOwner|address|The address of the new owner|

## Transfer
Emitted when tokenId token is transferred from from to to.

|Name|Type|Description|
|--- |---|---|
|from|address|The address of the sender account|
|to|address|The address of the receiver account|
|tokenId|uint256|The id of the token which has been transferred|
