let resetBtn = document.getElementById("reset") //Sets a variable button where they get the value from the btn ID "reset"
resetBtn.addEventListener("click", //listens for an action from the variable
()=>{chrome.storage.local.set({seconds: 0} )}) //sets seconds to 0 when an action is initialized

let pauseBtn = document.getElementById("pause") //Sets a variable button where they get the value from the btn ID "pause"
pauseBtn.addEventListener("click", //listens for an action from the variable
()=>{
    chrome.storage.local.get(['pauseTimer'], function(result) { //gets value of pauseTimer when action is executed and throws value inside function
        if (result.pauseTimer === undefined) { //checks for value and type of pauseTimer
            chrome.storage.local.set({pauseTimer: true} ) //if condition is met set value of pauseTimer to true
            pauseBtn.innerText = 'Resume' //sets text of btn to Resume
        } else {
            if (result.pauseTimer === true) { //checks for value and type of pauseTimer
            chrome.storage.local.set({pauseTimer: false} ) //if condition is met set value of pauseTimer to false
            pauseBtn.innerText = 'Pause'
            } else {
                chrome.storage.local.set({pauseTimer: true} ) //else set pauseTimer to true
                pauseBtn.innerText = 'Resume' //sets text of btn to Resume
            }
        }
    })
    
})


chrome.storage.onChanged.addListener(
    function({seconds}) {
        console.log(seconds);
        chrome.storage.local.get(['seconds'], function(result){
            console.log(result.seconds)
            document.getElementById("test").innerHTML =
                "<p>The Time: " +result.seconds+ "</p>";
        }) 
 
    }
)


