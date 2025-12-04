// navbar.js
function loadNavbar() {
    const navbarHTML = `
        <nav id="navbar">
            <div class="nav-container">
                <div class="nav-brand">
                    <div class="nav-icon">☧</div>
                    <span class="nav-motto">Fides et Ratio, Systemata et Ordo.</span>
                </div>
                
                <div class="nav-links" id="navLinks">
                    <a href="#about">The Foundation</a>
                    <a href="#projects">The Pillars</a>
                    <a href="#blog">The Bell Tower</a>
                    <a href="#contact">The Sanctuary</a>
                </div>

                <button class="mobile-menu-btn" id="mobileMenuBtn">
                    <span class="menu-icon">☰</span>
                </button>
            </div>
        </nav>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

// Call when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavbar);
} else {
    loadNavbar();
}