const shp = require('shp');
const shpWrite = require('shp-write');

const options = {
  folder: 'shp',
  types: {
    point: 'mypoints',
    polygon: 'mypolygons',
    line: 'mylines'
  }
}

module.exports = {
  read : (path, callback) => {
    shp.readFile(path, function(error, data){
       	callback(data);
    });
  },
  write: (json) => {
    shpWrite.download(json, options);
  }
}
