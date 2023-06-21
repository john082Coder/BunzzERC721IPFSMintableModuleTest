import { ethers } from 'ethers';

import BigNumber from 'bignumber.js';
import { useWeb3React } from "@web3-react/core";
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,
} from './lib/constants.js';
import { bnToDec } from './utils';
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});



export const getErc721IPFSMintableContract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.erc721IPFSMintable;
}


export const setErc20ContractAddress = (bunzz, address) => {
  bunzz.contracts.erc20.options.address = address;
}


export const safeMint = async (erc721IPFSMintableContract, to, metadataURI, account) => {
  return erc721IPFSMintableContract.methods.safeMint(to, metadataURI).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const tokenURI = async (erc721IPFSMintableContract, tokenId ) => {
  
  try {
    const uri = await erc721IPFSMintableContract.methods.tokenURI(tokenId).call();
    
  
    return uri;
  } catch {
    console.log("error");
    return "";
  }

}

