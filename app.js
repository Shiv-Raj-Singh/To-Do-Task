
// import mysql from 'mysql';


// const connection = mysql.createConnection({
//     host : 'localhost' ,
//     user : 'root' ,
//     password : "Mangal123" ,
//     database : 'slotbook'
// })

// let x = 'shivraj' , y = '27' , z ='bulandshahr'

// connection.connect((err)=>{
//     if(err) console.log(err.sqlMessage);
//     else console.log('MySQL Database connected');

//     // let sql = 'CREATE TABLE SlotBookingTable (date VARCHAR(255), startTime VARCHAR(255), endTime VARCHAR(255))'
//     // const sql = "CREATE TABLE employees1 (id INT AUTO_INCREMENT, name VARCHAR(255), age INT(3), city VARCHAR(255))";
//     // var sql = "INSERT INTO employees (id, name, age, city) VALUES ('15', 'shivraj', '27', 'bulandshahr')";  
//     // const sql = "SELECT * FROM employees WHERE name='shivraj' AND age='27' AND city='bulandshahr'"
//     const sql = `SELECT * FROM employees WHERE name=? AND age=? AND city=?`

//     // let sql2 = "INSERT INTO SLOTBOOKING (id ,  date , startTime , endTime)  VALUES ('15', 'shivraj', '27', 'bulandshahr')"
//     let sql2 = "INSERT INTO SLOTBOOKING ( date , startTime , endTime )  VALUES (? , ? ,? )"

//     connection.query(sql2, [12,15,166668] , function (err, result) {
//       if (err) throw err.message 
//     //   console.log("Table created");
//         console.log(result.length , result);
//     });
    
// })

// export default connection


