document.addEventListener("DOMContentLoaded", async function() {
    // Load navbar
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    try {
        const response = await fetch("./components/navbar.html");
        if (!response.ok) throw new Error("Failed to load navbar");

        navbar.innerHTML = await response.text();
    }
    catch (err) {
        console.error(err);
    }
});