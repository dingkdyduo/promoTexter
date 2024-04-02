// ./src/database/ads.js
const {getDatabase} = require('./mongo');

const collectionName = 'ads';

async function insertAd(ad) {
  const database = await getDatabase();
  const {insertedId} = await database.collection(collectionName).insertOne(ad);
  return insertedId;
}

async function findAd(title) {
  const database = await getDatabase();
 
  return await database.collection(collectionName).find( { title: { $eq: title } }).toArray();
}

async function getAds() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

async function updateAd(query={},update={}) {
  let option = {upsert:false}
  const database = await getDatabase();
  return await database.collection(collectionName).updateOne(query,{$set: update},option);
}

async function deleteAd(query={}) {
  const database = await getDatabase();
  return await database.collection(collectionName).deleteOne(query);
}

module.exports = {
  insertAd,
  getAds,
  updateAd,
  deleteAd,
  findAd
};