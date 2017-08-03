var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer();

// Load homepage
router.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Display file size
router.post("/get-file-size", upload.single('file'), function(req, res) {
  res.json({size: req.file.size});
});

// Respond not found to all the wrong routes    
router.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('Not found');
});

// Error Middleware
router.use(function(err, req, res, next) {
  if(err) {
    res.status(err.status || 500)
      .type('txt')
      .send(err.message || 'SERVER ERROR');
  }  
});

module.exports = router;