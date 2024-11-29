// HTML Progress Circular Bar
let htmlProgress = document.querySelector(".html-css"),
    htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
    htmlEndValue = 90,
    htmlSpeed = 30;

let progressHtml = setInterval(() => {
    htmlStartValue++;

    htmlValue.textContent = `${htmlStartValue}%`;
    htmlProgress.style.background = `conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed 0deg)`;

    if (htmlStartValue == htmlEndValue) {
        clearInterval(progressHtml);
    }
}, htmlSpeed);

// JavaScript Progress Circular Bar
let javascriptProgress = document.querySelector(".javascript"),
    javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
    javascriptEndValue = 75,
    jsSpeed = 30;

let progressJs = setInterval(() => {
    javascriptStartValue++;

    javascriptValue.textContent = `${javascriptStartValue}%`;
    javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${javascriptStartValue * 3.6}deg, #ededed 0deg)`;

    if (javascriptStartValue == javascriptEndValue) {
        clearInterval(progressJs);
    }
}, jsSpeed);

// Node Progress Circular Bar
let NodeProgress = document.querySelector(".Node"),
    NodeValue = document.querySelector(".Node-progress");

let NodeStartValue = 0,
    NodeEndValue = 80,
    NodeSpeed = 30;

let progressNode = setInterval(() => {
    NodeStartValue++;

    NodeValue.textContent = `${NodeStartValue}%`;
    NodeProgress.style.background = `conic-gradient(#20c997 ${NodeStartValue * 3.6}deg, #ededed 0deg)`;

    if (NodeStartValue == NodeEndValue) {
        clearInterval(progressNode);
    }
}, NodeSpeed);

// ReactJS Progress Circular Bar
let reactProgress = document.querySelector(".reactjs"),
    reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
    reactEndValue = 30,
    reactSpeed = 30;

let progressReact = setInterval(() => {
    reactStartValue++;

    reactValue.textContent = `${reactStartValue}%`;
    reactProgress.style.background = `conic-gradient(#3f396d ${reactStartValue * 3.6}deg, #ededed 0deg)`;

    if (reactStartValue == reactEndValue) {
        clearInterval(progressReact);
    }
}, reactSpeed);

// Filter Function using jQuery
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".post").show("1000");
        } else {
            $(".post")
                .not("." + value)
                .hide("1000");
            $(".post")
                .filter("." + value)
                .show("1000");
        }
    });
});

// Sticky Navbar
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('navbar-top').classList.add('fixed-top');
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar-top').classList.remove('fixed-top');
            document.body.style.paddingTop = '0';
        }
    });
});

// Back-to-Top Button Functionality
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Adding button click functionality
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      alert('Thank you for ordering! Our team will contact you soon.');
    });
  });
  function contactClick() {
    // Redirect to the specified file
    window.location.href = './public/html/content.html';
  }
  
// Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been received.`);
      document.getElementById('contactForm').reset();
    } else {
      alert('Please fill out all fields before submitting.');
    }
  });
  