function playGame() {
    return new Promise ((reslove, reject) =>{
        setTimeout(() => {
            let game = "Cricket";
            reslove(game);
        },2000);
    });
}

async function playCricket() {
    console.log(" let play indoor Games during rain ");
    try{
        let game = await playGame();
        console.log("Rain stoped let go to paly ",game);
       
    } catch (err) {
        console.log("opps somthing wrong:", err);
    }
}
playCricket();