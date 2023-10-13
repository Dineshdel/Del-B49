function printMessage(){        
    var req = fetch("https://official-joke-api.appspot.com/jokes/programming/random")
        .then((res) => res.json())
        .then((data) => {
            console.log(data[0].setup,data[0].punchline)
            document.getElementById("output").innerHTML =data[0].setup+" "+data[0].punchline
        })  }