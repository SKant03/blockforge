import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage'
import Login from './components/Login/Login'
import MyNavbar from './components/Navbar/Navbar';
import Subsidy from './components/Subsidy/Subsidy';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import abi from './ContractJson/Subsidy.json'

function App() {

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
})
const [account, settAccounnt] = useState('Not connected');
const [connect, setConnect] = useState('connect')

const connectMM = async () => {
    const contractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const contractAbI=abi.abi;
    try {
        const { ethereum } = window;
        const account = await ethereum.request({
            method: "eth_requestAccounts"
        })

        window.ethereum.on("accountsChanged", () => {
            window.location.reload()
        })
        settAccounnt(account);
        console.log(`${account}`)
        setConnect(account)
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
            contractAddress,
            contractAbI,
            signer
        )

        setState({ provider, signer,contract });
        console.log(`${provider}`)
        console.log(`${signer}`)
    }
    catch (error) {
        console.log(error)
    }

  }

  
  return (
    <div>
    <MyNavbar connectMM={connectMM}/>
    <Routes>
      <Route path='/' element= {<Homepage/>}/>
      <Route path='Login' element= {<Login/>}/>
      <Route path='Subsidy' element = {<Subsidy/>}/>
    </Routes>
    </div>
  );
}

export default App;
