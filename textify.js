const tesseract = require('node-tesseract')

module.exports = function(file) {
  tesseract.process(file, (err,text) => {
    if(err) console.log(err);
    else console.log(text);
    console.log('End OCR');
  });
}
