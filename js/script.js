/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// funtion to "show more" button
const btn1 = document.getElementById('btn1');
const moreInfo1 = document.getElementById('moreInfo1');

const btn2 = document.getElementById('btn2');
const moreInfo2 = document.getElementById('moreInfo2');

const btn3 = document.getElementById('btn3');
const moreInfo3 = document.getElementById('moreInfo3');

btn1.addEventListener('click', () => {
  if(moreInfo1.style.display === "flex") {
    moreInfo1.style.display = "none";
    btn1.textContent = "Show more";
  } else {
    moreInfo1.style.display = "flex";
    btn1.textContent = "Show less";
  }
});

btn2.addEventListener('click', () => {
  if(moreInfo2.style.display === "flex") {
    moreInfo2.style.display = "none";
    btn2.textContent = "Show more";
  } else {
    moreInfo2.style.display = "flex";
    btn2.textContent = "Show less";
  }
});

btn3.addEventListener('click', () => {
  if(moreInfo3.style.display === "flex") {
    moreInfo3.style.display = "none";
    btn3.textContent = "Show more";
  } else {
    moreInfo3.style.display = "flex";
    btn3.textContent = "Show less";
  }
});
