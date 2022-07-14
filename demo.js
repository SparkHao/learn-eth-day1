const ethers = require("ethers");

// const rpc = "http://127.0.0.1:8545"
const rpc = "https://http-testnet.hecochain.com/"
const privateKey = "1111111111111111111111111111111111111111111111111111111111111111"
const toAddress = "0xc06d73162E9BffbCfBF1DA59C511002A8F9155E5"

const main = async () => {
    const provider = new ethers.providers.JsonRpcProvider(rpc);
    const wallet = new ethers.Wallet(privateKey);
    const signer = wallet.connect(provider);
    const tx = await signer.sendTransaction({
        to: toAddress,
        value: ethers.utils.parseEther("0.001")
    });
    const r = await tx.wait();
    console.log(r);

    const balance = await provider.getBalance(toAddress)
    console.log(ethers.utils.formatEther(balance))
}

main()