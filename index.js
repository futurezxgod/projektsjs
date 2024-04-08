// spēles kods
const words = [ 
    "burkāns", 
    "salāts", 
    "vista", 
    "bifšteks", 
    "kartupeļi",
    "pankūka",
    "brokoļi",
    "spināti",
    "ābols",
    "bumbieris",
    "olas",
    "kukurūza",
]; 
  
const hints = [ 
]; 
   
let displayWord = ""; 
  
function shuffle(str) { 
    strArray = Array.from(str); 
    for (let i = 0; i < strArray.length - 1; ++i) { 
        let j = Math.floor(Math.random() * strArray.length); 
        let temp = strArray[i]; 
        strArray[i] = strArray[j]; 
        strArray[j] = temp; 
    } 
    return strArray.join(" "); 
} 
  
function check() { 
    let input = document.getElementById("input"); 
    let output = document.getElementById("output"); 
    if ( 
        input.value.toLocaleLowerCase() === 
        displayWord.toLocaleLowerCase() 
    ) 
        output.innerHTML = "Rezultāts: Pareizi!"; 
    else output.innerHTML = "Rezultāts: Mēģini vēlreiz!"; 
} 
  
function refresh() { 
    index = Math.floor(Math.random() * 5); 
    displayWord = words[index]; 
    displayHint = hints[index]; 
    scrambleWord =  
        document.getElementById("scrambleWord"); 
    scrambleWord.innerText = 
        shuffle(displayWord).toUpperCase();
} 
 
refresh();
// spēles koda beigas

// laiks
function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
    hour = changeTime(hour);
    min = changeTime(min);
    sec = changeTime(sec);
    document.getElementById("laiks").innerText = hour + " : " + min + " : " + sec + " " + midday;
  
    var months = ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decemberis'];
    var days = ['Svēt', 'Pirmdiena', 'Otr', 'Treš', 'Cet', 'Piek', 'Sest'];
  
    var curWeekDay = days[date.getDay()];
    var curDay = date.getDate();
    var curMonth = months[date.getMonth()];
    var curYear = date.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("data").innerHTML = date;
  
    var t = setTimeout(currentTime, 1000);
  }
  
  function changeTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime();
// laika koda beigas