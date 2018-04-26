fetch("https://randomuser.me/api").then (function(data){
    return data.json();
})
.then (function(data){
    console.log (data);
});