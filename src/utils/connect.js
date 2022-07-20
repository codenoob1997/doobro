import {ethers} from "ethers"
import { rinkebyContract } from "./configuration";
import {rinkebyABi} from "./abi";
export async function connectWallet() {
  // ether js 
  if (window.ethereum) {
      try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts", []);
          return provider
      } catch (e) {
          return [];
      }
  } else {
      throw Error("No metamask installed")
  }

}

export async function mint(provider){
  const signer = provider.getSigner()
  const addr = "0xcF1328e5f0F78c173BEFfc16Cdd510cB2D790183" 
  const erc721 = new ethers.Contract(rinkebyContract,rinkebyABi,signer)
  const tx = await erc721.mint(addr)
  await tx.wait()
  console.log("minted")
}
