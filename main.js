
let myBoolean = true;
let first_time_music=true;
// preloader script............
var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
  document.querySelector('.hey').classList.add('popup');
  
})

function stop() {
  audio.pause()
  myBoolean = true;
}
function playpause() {
  if(myBoolean)
  {
    audio.play();
    setTimeout(stop, 21200);
    myBoolean = false;
  
  }


  }

  function visualmode(){
    document.body.classList.toggle('light-mode');
    var elements = document.querySelectorAll('.needtobeinvert');
    elements.forEach(function(element) {
        element.classList.toggle('invertapplied');
    });


  }
let emptyArea = document.getElementById("emptyarea");
 let mobileTogglemenu = document.getElementById("mobiletogglemenu");
// toggle menu by clicking on hamburger
function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
 document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");

}
// close mobile toggle menu by clicking on LI
function hidemenubyli(){
document.body.classList.toggle("stopscrolling");
document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
document.getElementById("burger-bar3").classList.remove("hamburger-animation3");

}

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar .navbar-tabs .navbar-tabs-ul a li');
const mobilenavLi = document.querySelectorAll('.mobiletogglemenu .mobile-navbar-tabs-ul a li');

window.addEventListener('scroll', ()=>{
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - 500)){
      current = section.getAttribute('id');
    }
  })

  mobilenavLi.forEach( li => {
    li.classList.remove('activeThismobiletab');
    if(li.classList.contains(current)){
      li.classList.add('activeThismobiletab')
    }
  })
navLi.forEach( li => {
  li.classList.remove('activeThistab');
  if(li.classList.contains(current)){
    li.classList.add('activeThistab')
  }
})
})


let mybutton = document.getElementById("backtotopbutton");
window.onscroll = function(){
  scrollFunction()
};

function scrollFunction(){
  if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
  {
    mybutton.style.display = "block";
  }
   else{
      mybutton.style.display = "none";
     
      }
}

function scrolltoTopfunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// document.addEventListener("contextmenu", function (e){
//   e.preventDefault();
// }, false);

document.addEventListener("contextmenu", function(e){
  if (e.target.nodeName === "IMG") {
      e.preventDefault();
  }
}, false);





let pupils = document.getElementsByClassName('pupil');
let pupilsArr = Array.from(pupils);
// console.log(pupils);

let pupilStartPoint = -1;
let pupilRange = 3;

// mouse X 
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;


// mouse Y position 
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
    currentXPosition = event.clientX - mouseXStartPoint;
    fracXValue = currentXPosition / mouseXRange;

    currentYPosition = event.clientY;
    fracYValue = currentYPosition / mouseYEndPoint;
    
    let pupilXCurrrentPosition = pupilStartPoint + (fracXValue * pupilRange);
    let pupilYCurrrentPosition = pupilStartPoint + (fracYValue * pupilRange);

    pupilsArr.forEach((curPupil) => {
        curPupil.style.transform= `translate(${pupilXCurrrentPosition}px, ${pupilYCurrrentPosition}px)`;
    })

}

const windowResize = (event) => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
}
function Contact() {
  this.playpause();
  // window.location.href = "mailto:lubosoftenquiry@gmail.com";
  document.getElementById("contactPopupWrapper").style.display = "block";
}
function EmailContact() {
window.location.href = "mailto:lubosoftenquiry@gmail.com";
}
function sendMessage() {
  // Get values from input fields
 
  var customerNameElements = document.getElementsByName("name");
  var customerName = customerNameElements.length > 0 ? customerNameElements[0].value : "";
  var customerNameLength = customerName.length;
  
  var phoneNumberElements = document.getElementsByName("phone");
  var phoneNumber = phoneNumberElements.length > 0 ? phoneNumberElements[0].value : "";
  var phoneNumberLength = phoneNumber.lenvgth;

  var MessageElements = document.getElementsByName("Message");
  var Message = MessageElements.length > 0 ? MessageElements[0].value : "";
  var MessageLength = Message.length;
  
  if (customerNameLength === 0) {
      alert('Please Enter the Name');
  } else if (phoneNumberLength === 0) {
      alert('Please Enter the Phone no');
  }else if (MessageLength === 0) {
    alert('Please Enter the Message');
} else {
    sendDataToGoogleSheet(customerName, phoneNumber,Message);
      document.getElementById("contactPopupWrapper").style.display = "none";
  }


  }
  
function hideContactPopup()
{
  document.getElementById("contactPopupWrapper").style.display = "none";
}
function sendDataToGoogleSheet(name, contact,Message) {
  const url = 'https://script.google.com/macros/s/AKfycbyJptBx3G7AwHaL5Ktop4AJQaQzVp_6HAo-GfnkzZ-55jlly6023mrJJL4ICfuZ8NQhHQ/exec'; // Replace with your Google Apps Script URL

  fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        CLINT_NAME: name,
        CONTACT: contact,
        MESSAGE:Message
      })
  })
  .then(response => console.log('Data sent to Google Sheets'))
  .catch(error => console.error('Error sending data to Google Sheets:', error));
} 

window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', windowResize);



