// 1. Simple Search Alert
document.querySelector('.search a').addEventListener('click', function(e) {
    e.preventDefault();
    alert("Search functionality coming soon! This is a demo version.");
});

// 2. Dynamic Greeting based on time
window.onload = function() {
    const hero = document.querySelector('.hero h2');
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) greeting = "Good Morning! Achieve the highest standards.";
    else if (hour < 18) greeting = "Good Afternoon! Achieve the highest standards.";
    else greeting = "Good Evening! Achieve the highest standards.";

    hero.innerText = greeting;
};

// 3. Console Log to show the script is running
console.log("IRSBACCOM Site Loaded Successfully.");
