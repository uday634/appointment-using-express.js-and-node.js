const Data = require('../models/data')

exports.addData = (req, res, next) => {
    const requestData = req.body;
    const name = requestData.name;
    const description = requestData.description;

    // Use the Data model to create a new record
    Data.create({
        name: name,
        description: description
    })
    .then(result => {
        console.log(result);
        res.status(201).json(result); // Respond with the created record
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
}

exports.sendData = (req, res) => {
    Data.findAll()
        .then(data => {
            res.json(data); // Send data as JSON response
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
}

exports.deleteData = (req, res, next) => {
    const recordIdToDelete = req.params.id;
  
    // Use your data model to find and delete the record
    Data.findByPk(recordIdToDelete)
      .then((record) => {
        if (!record) {
          return res.status(404).json({ error: 'Record not found' });
        }
  
        return record.destroy().then(() => {
          res.status(204).send(); // Respond with a 204 status for successful deletion
        });
      })
      .catch((error) => {
        console.error('Error deleting record', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  }