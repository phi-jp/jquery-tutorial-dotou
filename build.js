var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

var data = 'nVVbb5swFP4t0WYlrcolEBJolQdIyCbt1kndwx4dcBKnBBg26bJfv2Njk2u7dhKIw3du37HPsdEoQo6zJRWjRQ7SLby2aZt9+N7AywjnNF9KjTTllGdEGSYpuNgodpHfR34kBQf5AYDr7zWpdlrroMBBsY/CEIVTZR/NBBLFKJpoG1epwtGBTRPT11mGilhKWFLRku9po3iIfBsFOoE/UEIw03HdY0RyVUgrAOMABUNZz0jgUWjqOlwUjJSg6nBQpFVhoG1mSojcYxtgEMnoU2nsoQBKnLYrZJqmKm5RZxmUR4isbYEzRgSc1FVFcq7qbeoXhY+mUlukZL9PK77JDnZtV+pNUwrhscVZrWHkTjrTb5OHn/cxVCuN3Bh5E7nD4uNOTkB4ACM4Pca0ZkM4BilZ4QqaaAwWkOXHw8zwGxF01oueOd4Q5bal5KksKt56JkXOYSWU+ommfDVOyZYmxJA/UJ1dM1IZLMEZnmdknBdvT4vLMiPGpphT+DyRuQGAkeBSBHyGyo6wl/Oc520myo3fw1Y18mgKsKXxV1E9HIfLzET4QytI8kaijO9aoo3cENX4a0KonrVZlYy7K85LdmtZonPN9S9xYphJsbEa0XDMvjkw16wrYos8jfPFFWl1klzzo9hd8AL4vHHdybxId5fDr/oCVweMPGmiIQoiPdXx8YnnId9DoacPErsjE/bPOBzmExZqvtqJbhb20hAnjF2YYRkPQoN1m2eOk8dlVdR5aiRFVlS3YrpZ1rPFiICBJ77A0vGu7qSX7AvRRDkwPgnWRng3GAzu9vgCOs1g9A8ROsctf5/qFnhDs53Qdj/XCU1F936ocJ6S7k33I63wksKAOvYn/FgLVcFXNAHhviq+dgXDL4RWu0JIDOfMgNGmi5bvfsH0kXi+Ymu8xa36dOGsa8X3Gt6qzhnH4pi1M8qJ1lh6Wd73FnWeiBnqXZ0ukGXtL8T2OmsFfyJ6A7olkHdf2CCNjadvJI2Ew1Mksp+5WBv7vrbXt87+PvX/ffn6/bO8UadzuPU5KzJiZsWypw6O/x8H6d/2mxLkLjbPXw==';

// zlib.gzip('hogehoge', function(err, binary) {
//   console.log('ascii', binary.toString('ascii'));
//   console.log('utf-8', binary.toString('utf8'));
//   console.log('ucs2', binary.toString('ucs2'));
//   console.log('base64', binary.toString('base64'));
//   console.log('binary', binary.toString('binary'));
//   console.log('binary', binary);
// });

// var buf = new Buffer('ËÈOOÍbò¤');
// console.log(buf);
// zlib.gunzip(buf, function(err, binary) {
//   console.log(err);
// });

// var url = 'https://www.googleapis.com/urlshortener/v1/url?shortUrl=http://goo.gl/7XJuPt&key=AIzaSyA3mnqKXrHh8uGNfJPnJmI97KTnpifJ4DM';

// request(url, function(error, response, body) {
//   console.log(body);
// });



var zip = function() {
  // ファイルを読み込みます
  var content = fs.readFileSync('./hello.txt');

  // Gzipを行います
  console.log(content);
  return ;
  zlib.gzip(content, function (err, binary) {

      // 結果をファイルシステムに書き込みます
      fs.writeFileSync('./hello.txt.gz', binary);
  });
};
zip();

var unzip = function() {

  // ファイルを読み込みます
  var gzipContent = fs.readFileSync('./hello.txt.gz');

  // 解凍します
  zlib.gunzip(gzipContent, function (err, binary) {

      // ファイルに出力します
      // fs.writeFileSync('./hello2.txt', binary);

      // Node上で解凍結果を文字列として扱う場合には、
      // 文字列への変換を行います
      var string = binary.toString('utf-8');
      console.log(string);
  });

};

