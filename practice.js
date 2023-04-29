const arr =[{
    "useid":1,
    name:"Amrut"
},{
    "useid":2,
    name:"Abhishek"
},{
    "useid":3,
    name:"Sushant"
},{
    "useid":4,
    name:"Shivraj"
},{
    "useid":5,
    name:"Rohit"
},{
    "useid":6,
    name:"Anupam"
},{
    "useid":7,
    name:"Arun"
},{
    "useid":8,
    name:"Shubham"
}]


arr.forEach((a)=>{
    if(a.name == 'Shivraj') console.log(a.useid);
})

// console.log(ans , arr);