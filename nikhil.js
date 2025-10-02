/*// Smooth Scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const section = document.getElementById(targetId);
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
*/
// Typing animation for your name
const typedText = "I'm Nikhil Singh";
let i = 0;
const typingElement = document.querySelector("#HOME h1");

function typeText() {
    if (i < typedText.length) {
        typingElement.innerHTML += typedText.charAt(i);
        i++;
        setTimeout(typeText, 100);
    }
}
typingElement.innerHTML = ""; // Clear existing text
typeText();

// Scroll-to-top button (optional)
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "⬆";
scrollBtn.id = "scrollToTop";
scrollBtn.style.cssText = "position:fixed;bottom:20px;right:20px;padding:10px;border:none;background:#333;color:#fff;cursor:pointer;display:none;";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

 document.getElementById("downloadCvBtn").addEventListener("click", function(event) {
    event.preventDefault();  // prevent default link behavior
    alert("Downloaded CV");
  });

 
  // Add event listeners to each icon
  document.getElementById('facebook').addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://www.facebook.com/nikhil.singhrajput.566148', '_blank');
  });

  document.getElementById('linkedin').addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://www.linkedin.com/in/nikhil-singh-27841a349', '_blank');
  });

  document.getElementById('instagram').addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://www.instagram.com/_nikhil_.singh_?igsh=MXBzcG5wb2xuNGo4NA==', '_blank');
  });
