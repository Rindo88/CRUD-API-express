const express = require('express')
const db = require('./db')
const {response,errorQuery} = require('./response')
const app = express()
const port = 3000
app.use(express.json())


//  select data ID
app.get('/get/:id', (req,res)=>{
  const id = req.params.id
  const sql = "SELECT * FROM admin WHERE id=?"
  db.query(sql,[id], (err,result)=>{
    if(err){
      errorQuery(err, res, 500, "Terjadi kesalahan pada server atau query")
    }
    response(200,result,'data berhasil diambil',res)
  })
})

// select all data
app.get('/data', (req, res) => {
  db.query('SELECT * FROM admin', (err, result) => {
    if (err) {
      errorQuery(err, res, 500, "Terjadi kesalahan pada server atau query")
    }
    response(200,result,'data berhasil diambil',res)
  })
})


// delete data
app.delete('/delete/:id', (req,res)=>{
  const id = req.query.params
  const sql = "DELETE FROM admin WHERE id=?"
  db.query(sql,[id], (err,result)=>{
    if(err){
      errorQuery(err, res, 500, "Terjadi kesalahan pada server atau query")
    }
    response(200,result,'data berhasil dihapus',res)
  })
})

// create
app.post('/create', (req,res)=>{
  const data ={
    nama : req.body.nama,
    jurusan : req.body.jurusan
  }

  const sql = "INSERT INTO `admin`(`nama`,`jurusan`) VALUES (?,?)"
  db.query(sql,[data.nama,data.jurusan], (err,result)=>{
    if(err){
      errorQuery(err, res, 500, "Terjadi kesalahan pada server atau query")
    }
    response(200,result,'data berhasil dimasukan',res)
  })
})

// edit
app.put('/update/:id', (req,res)=>{
  const id = req.params.id
  const newData = {
    nama: req.body.nama,
    jurusan: req.body.jurusan
  }
  const sqlSelect = "SELECT * FROM admin WHERE id = ?"
  db.query(sqlSelect,[id], (err,result)=>{
    if(err){
      errorQuery(err, res, 500, "Terjadi kesalahan pada server atau query")
    }
    if(result.length === 0){
      return res.status(404).json({ message: `Data dengan ID ${id} tidak ditemukan` })
    }

    const sql = 'UPDATE admin SET nama = ?, jurusan = ? WHERE id = ?'
    db.query(sql,[newData.nama, newData.jurusan,id], (err,result)=>{
      if(err){
        errorQuery(err, res, 500, "Terjadi kesalahan pada server atau query")
      }
      response(200,result,'update data berhasil',res)
    })
  })
})

// middleware route
app.use('/', (req,res)=>{
  res.status(404).send('<h1>404 Page Not Found</h1>')
})
app.listen(port, ()=>{
  console.log(`Your server hasbeen running in port ${port}`)
})
