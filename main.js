const getIPFS = require("./getIPFS");
const collections = require("./collections")

const main = async () => {
    const IPFS = await getIPFS(collections);
    const bytes = await Bun.write('./ipfs.json', JSON.stringify(IPFS));
    console.log(`${bytes} written to ipfs.json`)
}

main();
