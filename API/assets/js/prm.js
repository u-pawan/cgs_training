// const prm = new Promise(function(resolve, reject){
//     var age = 18
//     if (age > 18){
//         resolve("You can watch Movie")
//     }else{
//         reject("Too Young")
//     }
// })

// prm.then(function(result){
//     console.log(result)
// })
// prm.catch(function(err) {
//     console.log(" Can't watch, reason", + err)
// })

// var result = fetch("https://randomuser.me/api/")
// result.then(function(res){
//     var data = res.json();
//     console.log(data)
//     data.then( (userData) => {
//         console.log(userData)

//     })
// })
   
//   result.catch((err) => {
//     console.log(err)
//   })  
window.onload = async function () {
    var result = await fetch("https://randomuser.me/api/")
    var data = await result.json()
    console.log(data)
    
}
