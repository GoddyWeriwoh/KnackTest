const express = require('express')

const fs = require('fs')
const cors = require('cors')
const app = express()

app.use(express.static('./src/'))

app.use(cors({
  origin: '*'
}))

// JSON nd x-www-form-urlencoded parsers
app.use(express.json());
//app.use(express.urlencoded());

// GET /api/list
app.get('/api/all', function (req, res) {
    //let search = req.query.search
    let data = JSON.parse(fs.readFileSync('./mock_application.json', 'utf-8'))
    console.log(data);
    res.send(
        //jsonInfo
        data
    )
})

// POST /api/store
app.post('/api/newStorage', function (req, res) {
  console.log(req.body)
  if (req.body === undefined) {
    res.status(500).send("Bad parameters")
  }
  else{

    /*fs.writeFileSync('./clean_application.json', JSON.stringify(req.body) , function (err) {
      if (err) throw err;
      console.log('File is created successfully.');
    });*/

    if(fs.existsSync("./clean_application.json")){
      fs.unlink("./clean_application.json", function(err){
        if(err) return console.log(err);
        console.log('file deleted successfully');
        fs.writeFileSync('./clean_application.json', JSON.stringify(req.body) , function (err) {
          if (err) throw err;
          console.log('File is created successfully.');
        });
   });
    }else{
      fs.writeFileSync('./clean_application.json', JSON.stringify(req.body) , function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });
    }
  }
})

// Create server that no accepts SSL requests
app.listen(3000, function (err) {
  if (err) console.log(err)
  console.log('Server listening on PORT', 3000)
})
