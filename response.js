const response = (statusCode,data,message,res)=>{
  res.status(statusCode).json({
    payload:{
      status: statusCode,
      message: message
    },

    body: {
      data: data,
      prev: '',
      next: '',
      count: data.length
    }
  })
}

const errorQuery =(err, res, statusCode = 500, message = "Terjadi kesalahan pada server") => {
  console.error("Kesalahan:", err);
  return res.status(statusCode).json({ message });
}

module.exports = {response,errorQuery}