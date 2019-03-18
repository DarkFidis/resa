const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const path = require('path');

const port = 3000;

app.use(bodyParser.urlencoded());

// Config multer
const storage = multer.diskStorage({
  destination: '../shp',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const checkFileType = (file, cb) => {
  const filetypes = /shp|zip|dbf|prj/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error : Invalid file !');
  }
}

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  }
}).single('shp-file');

app.use('/', require('./routes/router'));

app.listen(port, () => {
  console.log('Appli démarrée sur le port ' + port);
});
