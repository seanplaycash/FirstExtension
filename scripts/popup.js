let resetBtn = document.getElementById("reset")
resetBtn.addEventListener("click",
()=>{chrome.storage.local.set({seconds: 0} )})

let pauseBtn = document.getElementById("pause")
pauseBtn.addEventListener("click",
()=>{
    chrome.storage.local.get(['pauseTimer'], function(result) {
        if (result.pauseTimer === undefined) {
            chrome.storage.local.set({pauseTimer: true} )
            pauseBtn.innerText = 'Resume'
        } else {
            if (result.pauseTimer === true) {
            chrome.storage.local.set({pauseTimer: false} )
            pauseBtn.innerText = 'Pause'
            }
            else {
                chrome.storage.local.set({pauseTimer: true} )
                pauseBtn.innerText = 'Resume' 
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


