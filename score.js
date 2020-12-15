function printHighScores() {
    //get items from local
    var scoreList = JSON.parse(localStorage.getItem("allScores"))||[];
    console.log('scorelist', scoreList)
    // for (var i=0; i < scoreList.length; i++) {
        scoreList.forEach(element => {
            console.log(element); 
        //cretae an li tag for every player 
        var liElement = document.createElement("li")
        liElement.textContent = element.initials + " - " + element.score
        document.getElementById("scorelist").appendChild(liElement)
        });
        
    //}
} 
printHighScores()