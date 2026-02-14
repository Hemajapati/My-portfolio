document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Navbar Scroll Effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });   
   
   
   
   
   
   /* THEME TOGGLE */
const toggle = document.getElementById("theme-toggle");
if(toggle){
toggle.onclick = () =>{
const html = document.documentElement;
const newTheme = html.getAttribute("data-theme")==="dark"?"light":"dark";
html.setAttribute("data-theme",newTheme);
localStorage.setItem("theme",newTheme);
};
}

document.documentElement.setAttribute(
"data-theme",
localStorage.getItem("theme") || "light"
);


/* MOBILE NAV */
const hamburger=document.getElementById("hamburger");
const nav=document.getElementById("nav-links");
if(hamburger){
hamburger.onclick=()=>nav.classList.toggle("active");
}


/* DOWNLOAD RESUME */
function downloadResume(){
const blob=new Blob(["Resume content"],{type:"text/plain"});
const a=document.createElement("a");
a.href=URL.createObjectURL(blob);
a.download="Resume.txt";
a.click();
}
// 2. Skill Bar Animation (Intersection Observer)
            const progressBars = document.querySelectorAll('.progress-fill');
            
            const observerOptions = {
                threshold: 0.2 // Trigger when 20% of the element is visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const bar = entry.target;
                        const targetWidth = bar.getAttribute('data-target');
                        
                        // Set CSS variable for width transition
                        bar.style.setProperty('target-width', targetWidth); // Fallback
                        bar.style.width = targetWidth; // Direct width setting
                        
                        // Add visual class if needed
                        bar.classList.add('animate');
                        
                        // Stop observing once animated
                        observer.unobserve(bar);
                    }
                });
            }, observerOptions);

            progressBars.forEach(bar => {
                observer.observe(bar);
            });
        });
