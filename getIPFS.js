const getCollections = require("./getCollections")

const getIPFS = async (collections) => {
    const ipfs = []
    const collectionsResponse = await getCollections(collections);
    collectionsResponse.map((collection) => {
        collection.map((template) => {
            if(template.immutable_data.img != undefined) ipfs.push(template.immutable_data.img)
            if(template.immutable_data.video != undefined) ipfs.push(template.immutable_data.video)
            if(template.immutable_data.backimg != undefined) ipfs.push(template.immutable_data.backimg)
        })
    })
    return ipfs
}

module.exports = getIPFS