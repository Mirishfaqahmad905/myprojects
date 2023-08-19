var express=require('express');
var App=express();
var bodyparse=require('body-parser');
var core=require('cors');
const mysqli=require('mysql2');
App.use(express.json());
 App.use(core());
  App.use(bodyparse.urlencoded({extended:true}));
  
  const connection=mysqli.createConnection({
    host:'localhost',
      user:"root",
      password:"", 
       database:"admin"
});
connection.connect((err)=>{
   if(err) throw err;
    else console.log('connect to databse  ');
     
});


 // checking data
  App.get('/check/email/:email',((req,res)=>{
      const email=req.params.email;

       console.log(email);
       const sql = "SELECT * FROM user WHERE email = ?";

        connection.query(sql,[email],(err,result)=>{
           if(err)
            {
               console.log(err);
                res.send({success:false,message:'error in your syntax'});
            }
             else  if(result.length >0 )
              {
                  res.send({success:true,message:'you are success '});
              }
               else{
                 res.send({success:false,message:'fail'});
               }
        })
  }))
App.get('/get/data/:email', (req, res) => {
    const email = req.params.email;
     const name=req.body.name;

    const sql = "SELECT * FROM signform WHERE email=?";
    connection.query(sql, [email], (err, result) => {
      if (err) {
        res.send('error');
      } else if (result.length > 0) {
        res.send({ success: true, message: 'The email already exists'});
      }
    else 
     {
      res.send({success:true,mesage:"email does not exist"});

    } 
    });
   
  });
  
  App.post('/send/data', (req, res) => {
   console.log(req.body);
    
    const sql = "INSERT INTO signform (name, email, password) VALUES (?, ?, ?)";
    connection.query(sql, [req.body.name, req.body.email, req.body.password], (err, result) => {
      if (err) {
        throw err;
      } else {
        res.send({ success: true, message:'data entered' });
      }
       if(req.body.name=="" || req.body.email=="")
        {
          res.send({success:false,message:'Enter name email first'})
        }
    });
  });

  // getting data from table 
  App.get('/table/data', (req, res) => {
    connection.query('SELECT * FROM user', (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
  });
  // deleting data
  App.delete('/delete/row/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM user WHERE id = ?";
    connection.query(sql, [id], (err, result) => {
      if (err) {
        console.log('Error in your syntax');
        res.send({ success: false, message: 'Error in your syntax' });
      } else {
        res.send({ success: true, message: 'Deleted' });
      }
    });
  });
  
  
App.get('/Update/select/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM user WHERE id = ?', [id], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send({ success: true, message: "updated" });
    }
  });
});

App.put('/update/data/:id', (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  connection.query(
    'UPDATE user SET name = ?, email = ? WHERE id = ?',
    [name, email, id],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        res.send({ success: true, message: 'updated' });
      }
    }
  );
});
 //search the Data
  App.get('/search/data',(req,res)=>{
     const {data}=req.body;
      
      const sql="SELECT * FROM products WHERE name LIKE '%s%';"
     connection.query(sql,[data],(err,result)=>{
       if(err)
        {
           console.log(err);
            res.send({success:false,message:'failed to found the data'});

        }
         else 
         {
           res.send({success:true,message:"data found"})
         }
     })
  })
  
 App.listen(2000);