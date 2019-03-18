const express = require('express');
const router = express.Router();
const resa = require('../middlewares/shp');

router.get('/', (req, res) => {
  res.send(path.join(__dirname, '../prod'));
});

router.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err) {
      res.status(500).json('Upload error');
    } else {
      if(req.file === undefined) {
        res.status(500).json('No file !')
      } else {
        resa.read('../shp/${req.file.filename}', (geoJson) => {
          res.status(200).json(geoJson);
        });
      }
    }
  })
})

module.exports = router;
