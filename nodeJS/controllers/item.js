var Item =  require('../models/item');

/**
 * List Items
 */
exports.list = (req, h) => {
  return Item.find({}).exec().then((item) => {

    return { items: item };

  }).catch((err) => {

    return { err: err };

  });
}

/**
 * Get Item by ID
 */
exports.get = (req, h) => {

  return Item.findById(req.params.id).exec().then((item) => {

    if(!item) return { message: 'Item not Found' };

    return { item: item };

  }).catch((err) => {

    return { err: err };

  });
}


/**
 * POST a Item
 */
exports.create = (req, h) => {

  const itemData = {
    name: req.payload.name,
    breed: req.payload.breed,
    age: req.payload.age,
    image: req.payload.image
  };

  return Item.create(itemData).then((item) => {

     return { message: "Item created successfully", item: item };

  }).catch((err) => {

    return { err: err };

  });
}

/**
 * PUT | Update Item by ID
 */
exports.update = (req, h) => {

  return Item.findById(req.params.id).exec().then((item) => {

    if (!item) return { err: 'Item not found' };

    item.name = req.payload.name;
    item.breed = req.payload.breed;
    item.age = req.payload.age;
    item.image = req.payload.image;

    item.save(itemData);

  }).then((data) => {

      return { message: "Item data updated successfully" };

  }).catch((err) => {

      return { err: err };

  });
}

/**
 * Delete Item by ID
 */
exports.remove = (req, h) => {

  return Item.findById(req.params.id).exec(function (err, item) {

    if (err) return { dberror: err };
    if (!item) return { message: 'Item not found' };

    item.remove(function (err) {
      if (err) return { dberror: err };

      return { success: true };
    });
  });
}