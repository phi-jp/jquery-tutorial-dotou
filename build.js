var request = require('request');
var fs = require('fs');
var path = require('path');
var pako = require('pako');
var yaml = require('js-yaml');

function atob(str) {
  return new Buffer(str, 'base64').toString('binary');
}
function btoa(str) {
  var buffer
  if (Buffer.isBuffer(str)) {
    buffer = str;
  }
  else {
    buffer = new Buffer(str.toString(), 'binary');
  }
  
  return buffer.toString('base64');
}

var encode = function(obj) {
  var str = null;

  if (typeof obj !== 'string') {
    str = JSON.stringify(obj);
  }
  else {
    str = obj;
  }

  var data = pako.deflate(str, { to: 'string',raw:true });
  return btoa(data);
};

var decode = function(str) {
  var data = atob(str);
  data = pako.inflate(data, { to: 'string', raw:true, });
  return JSON.parse(data);
};


var file2url = function(filename) {
  var data = fs.readFileSync(filename, 'utf-8');

  return encode(data);

};

var build = function() {
  var data = [];
  var root = './samples';
  var dirs = fs.readdirSync(root);

  dirs.forEach(function(dir) {
    var section = {
      label: dir,
      items: [],
    };
    var p = path.join(root, dir);
    var files = fs.readdirSync(p);

    files.forEach(function(file) {
      var item = {
        label: file,
        url: 'http://runstant.com',
      };
      var filename = path.join(p, file);
      item.url = 'http://runstant.com/?v=0.0.3#' + file2url(filename);
      section.items.push(item);
    });

    data.push(section);
  });

  console.log(JSON.stringify(data, null, 2));
};


build();