var result = fetch("https://randomuser.me/api/")

result.then(function(data){
    console.log(data);
    var res = data.json()
    res.then(function(userData) {
        console.log(userData);
    })
    res.catch(function(err){
        console.log(err);
    })
})
result.catch(function(err){
    console.log(err);
})
// post -> send data from API.
// get -> get data from API.
// put -> update something
// delete -> delete some data