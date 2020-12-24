var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET Upload page
router.get('/upload', function (req, res) {
  res.render('upload');
});

// Multer 설정
const multer = require('multer');
const upload = multer({
 dest: 'uploads/'
})

// POST Image
router.post('/uploads', upload.single('imagefile'), function(req, res) {
  res.send('Upload Success!');
  console.log(req.file);
 });

module.exports = router;
