fetch('https://dummyjson.com/products',{
    method:'POST'
})
.then((res)=> res.json())
.then((data)=>console.log(data))