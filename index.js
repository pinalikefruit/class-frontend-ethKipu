import { ethers } from "./ethers.js"
import { contractAddress, abi } from "./constants.js"

async function connect() {
    console.log("Hola")
    if(typeof window.ethereum != "undefined") {
        await ethereum.request({ method: 'eth_requestAccounts' })
        console.log("Si, me conecte")
    }
}

async function mint() {
    const tokenAmount = document.getElementById("tokenAmount").value
    
    if(typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const address = await signer.getAddress();
        const contract = new ethers.Contract(contractAddress,abi,signer)
        await contract.mint(address,tokenAmount.toString())
        
    }
}

window.connect = connect
window.mint = mint


// Try/catch
// Que pasa si no se conecta a metamask
// Valor equivocado
// not owner 