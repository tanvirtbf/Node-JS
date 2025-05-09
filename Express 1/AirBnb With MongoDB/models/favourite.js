<<<<<<< HEAD
const { getDb } = require("../utils/databaseUtil");
=======
const { getDB } = require("../utils/databaseUtil");
>>>>>>> 4fc9d9c0f0a4f6dd7f69591a7e607bfec9e6cf51

module.exports = class Favourite {
  constructor(houseId) {
    this.houseId = houseId;
  }

  save() {
<<<<<<< HEAD
    const db = getDb();
=======
    const db = getDB();
>>>>>>> 4fc9d9c0f0a4f6dd7f69591a7e607bfec9e6cf51
    return db.collection('favourites').findOne({houseId: this.houseId}).then(existingFav => {
      if (!existingFav) {
        return db.collection('favourites').insertOne(this);
      }
      return Promise.resolve();
    })
  }

  static getFavourites() {
<<<<<<< HEAD
    const db = getDb();
=======
    const db = getDB();
>>>>>>> 4fc9d9c0f0a4f6dd7f69591a7e607bfec9e6cf51
    return db.collection('favourites').find().toArray();
  }

  static deleteById(delHomeId) {
<<<<<<< HEAD
    const db = getDb();
=======
    const db = getDB();
>>>>>>> 4fc9d9c0f0a4f6dd7f69591a7e607bfec9e6cf51
    return db.collection('favourites').deleteOne({houseId: delHomeId});
  }
};
