
function printMessage(){        
    var req = fetch("https://api-thirukkural.vercel.app/api?num=x")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            document.getElementById("output").innerHTML =data.line1 + data.line2
        })  }
