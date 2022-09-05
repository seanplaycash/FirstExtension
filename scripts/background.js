chrome.alarms.create("myAlarm", {periodInMinutes: 1/60});
chrome.alarms.onAlarm.addListener(() => {
    chrome.storage.local.get(['seconds', 'pauseTimer'], function(result) { //gets stored value
        if (result.pauseTimer === undefined || result.pauseTimer === false) {
        console.log('Stored Value is ' + result.seconds); //prints stored value
        if (result.seconds === undefined) { //checks if there is stored value and starts value to 0 if none
            console.log("hey there");
            chrome.storage.local.set({seconds: 0}, function() {
            });  
        } else {
            console.log(result.seconds); //prints stored value
            chrome.storage.local.set({seconds: result.seconds + 1}, function() { //adds 1 to stored value
            console.log('Value is set to ' + result.seconds); //prints new value
            });
        }
    }
  });
});

// //reset
// chrome.storage.local.get(['seconds'], function(result) { //gets stored value
//     console.log('Stored Value is ' + result.seconds); //prints stored value
//     if ('button' === true) {
//         chrome.storage.local.set({seconds: 0}, function() {
//         });  
//     } else {
//         console.log(result.seconds); //prints stored value
//             chrome.storage.local.set({seconds: result.seconds + 1}, function() { //adds 1 to stored value
//             console.log('Value is set to ' + result.seconds); //prints new value
//             });
//     }
    
// });
