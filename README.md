ini adalah project demo yang bersifat untuk bahan belajar dan coba coba.

--sistemnya hanya bisa hit menggunakan postman tergantung routenya ada pun get bisa diakses di browser 
-- cara hit get menggunakan params bukan query berlaku juga pada method lainnya menggunakan params.id bukan query

route :
-/get/<id> = untuk mengselect 1 row data dari db
-/data = untuk mengselect semua data yang ada di db
-/create = menggunakan req body raw di postman dengan method post hanya 2 object requirement saja nama dan jurusan
-/delete/<id> = dibutuhkan postman dengan method delete dan membutuhkan 1 params id di urlnya untuk menghitnya
-/update/<id> = menggunakan req body raw di postman untuk data baru dan params id untuk data yang inggin di ubah

*hanya untuk penanganan route saja*
