window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Load projects from JSON and render them
fetch("./lib/projs.json")
    .then(response => response.json())
    .then(data => {
        const projectsContainer = document.querySelector('.projects');
        data.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <div class="project-img">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.name}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="skill-tags">
                        ${project.tags.map(skill => `<span class="tag">${skill}</span>`).join('')}
                    </div>
                    <a href="${project.url}" class="btn-secondary" target="_blank">View</a>
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
    })
    .catch(error => console.error('Error loading projects:', error));

fetch("./lib/skills.json")
    .then(response => response.json())
    .then(data => {
        const skillsContainer = document.querySelector('.skill-tags-display');
        data.forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('skill-window');
            categoryDiv.innerHTML = `
                <h3 class="skill-category-title">${category.name}</h3>
                <div class="skill-tags">
                    ${category.skills.map(skill => `<span class="tag">${skill}</span>`).join('')}
                </div>
            `;
            skillsContainer.appendChild(categoryDiv);
        });
    })
    .catch(error => console.error('Error loading skills:', error));

// Bible verses and Latin phrases
const catholicVerses = [
    {
        text: "Unless the Lord builds the house, those who build it labor in vain.",
        reference: "Psalm 127:1",
        translation: "NABRE"
    },
    {
        text: "Whatever you do, work heartily, as for the Lord and not for others.",
        reference: "Colossians 3:23",
        translation: "NABRE"
    },
    {
        text: "Commit your work to the Lord, and your plans will be established.",
        reference: "Proverbs 16:3",
        translation: "NABRE"
    },
    {
        text: "Just so, your light must shine before others, that they may see your good deeds and glorify your heavenly Father.",
        reference: "Matthew 5:16",
        translation: "NABRE"
    },
    {
        text: "So whether you eat or drink, or whatever you do, do everything for the glory of God.",
        reference: "1 Corinthians 10:31",
        translation: "NABRE"
    },
    {
        text: "I can do all things through him who strengthens me.",
        reference: "Philippians 4:13",
        translation: "NABRE"
    },
    {
        text: "All good giving and every perfect gift is from above, coming down from the Father of lights.",
        reference: "James 1:17",
        translation: "NABRE"
    },
    {
        text: "Do not grow slack in zeal, be fervent in spirit, serve the Lord.",
        reference: "Romans 12:11",
        translation: "NABRE"
    },
    {
        text: "For we are his handiwork, created in Christ Jesus for the good works that God has prepared in advance.",
        reference: "Ephesians 2:10",
        translation: "NABRE"
    },
    {
        text: "Trust in the Lord with all your heart, on your own intelligence do not rely.",
        reference: "Proverbs 3:5",
        translation: "NABRE"
    }
];

const latinPhrases = [
    {
        latin: "Ora, Crea, Code.",
        english: "Pray, Create, Code."
    },
    {
        latin: "Fides et Ratio, Systemata et Ordo.",
        english: "Faith and Reason, Systems and Order."
    },
    {
        latin: "Dominus Est Dux Algorithmi.",
        english: "The Lord is the Guide of the Algorithm."
    },
    {
        latin: "Caritas in Veritate, Ars in Codice.",
        english: "Charity in Truth, Art in Code."
    }
];

// Function to get a random verse and Latin phrase
function getRandomVerse() {
    return catholicVerses[Math.floor(Math.random() * catholicVerses.length)];
}

function getLatinPhrase() {
    return latinPhrases[Math.floor(Math.random() * latinPhrases.length)];
}

// Load verse on page load
window.addEventListener('DOMContentLoaded', () => {
    const verse = getRandomVerse();
    const latinPhrase = getLatinPhrase();
    
    const verseElement = document.querySelector('.hero-verse');
    const referenceElement = document.querySelector('.hero-reference');

    const latinElement = document.querySelector('.hero-latin');
    const englishElement = document.querySelector('.hero-english');
    
    if (verseElement && verse) {
        verseElement.textContent = `"${verse.text}"`;
        referenceElement.textContent = `— ${verse.reference}`;
    }

    if (latinElement && latinPhrase) {
        latinElement.textContent = `"${latinPhrase.latin}"`;
        englishElement.textContent = `("${latinPhrase.english}")`;
    }
});