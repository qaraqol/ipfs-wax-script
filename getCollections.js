const getCollections = async (collections) => {
  const main = async () => {
    const collectionPromises = collections.map(fetchCollectionData);
    const collectionData = await Promise.all(collectionPromises);
    return collectionData;
  };

  try {
    const data = await main();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const fetchCollectionData = async (collection) => {
  try {
  const response = await fetch(
    `https://atomic-wax.qaraqol.com/atomicassets/v1/templates?collection_name=${collection}&page=1&limit=999&order=desc&sort=created`
  );
  console.log("Received data for collection: " + collection)
  const collectionData = await response.json();
  return collectionData.data;
  } catch (e) {
    console.log("Unable to fetch data for: " + collection + ", due to " + e +". Returning null")
    return [];
  }
};

module.exports = getCollections