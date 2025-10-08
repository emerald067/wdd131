// Common functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    // Set footer dates
    setFooterDates();
    
    // Initialize hamburger menu
    initHamburgerMenu();
    
    // Set active page in navigation 
    setActivePage();
    
    // Page-specific initializations
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'index.html':
        case '':
            initHomePage();
            break;
        case 'about.html':
            initAboutPage();
            break;
        case 'destinations.html':
            initDestinationsPage();
            break;
        case 'contact.html':
            initContactPage();
            break;
    }
}

// Footer dates
function setFooterDates() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
}

// Hamburger menu functionality 
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navigation = document.getElementById('navigation');
    
    if (hamburger && navigation) {
        hamburger.addEventListener('click', function() {
            navigation.classList.toggle('show');
            this.textContent = navigation.classList.contains('show') ? '✕' : '☰';
        });
        
        // Close menu when clicking on a link
        const navLinks = navigation.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navigation.classList.remove('show');
                hamburger.textContent = '☰';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navigation.contains(event.target)) {
                navigation.classList.remove('show');
                hamburger.textContent = '☰';
            }
        });
    }
}

// Set active page in navigation
function setActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('#navigation a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Home Page functionality
function initHomePage() {
    displayHighlights();
    displayFeaturedDestinations();
    setupCulturalButton();
}

// Data arrays
const highlights = [
    {
        title: "Rich Culture",
        description: "Explore diverse traditions, festivals, and arts from over 250 ethnic groups.",
        icon: "🎭",
        link: "about.html"
    },
    {
        title: "Delicious Food",
        description: "Taste authentic Nigerian cuisine like Jollof Rice, Suya, and Pounded Yam.",
        icon: "🍛",
        link: "about.html#food"
    },
    {
        title: "Amazing Nature",
        description: "Discover waterfalls, wildlife reserves, and stunning landscapes.",
        icon: "🌄",
        link: "destinations.html"
    }
];

const destinations = [
    {
        name: "Yankari National Park",
        location: "Bauchi State",
        description: "Nigeria's largest wildlife park with natural warm springs and diverse wildlife.",
        image: "images/yankari-park.webp",
        type: "nature",
        region: "north"
    },
    {
        name: "Zuma Rock",
        location: "Niger State",
        description: "A massive monolith that stands 725 meters tall, often called the 'Gateway to Abuja'.",
        image: "images/zuma-rock.webp", 
        type: "nature",
        region: "north"
    },
    {
        name: "Olumo Rock",
        location: "Abeokuta, Ogun State",
        description: "Historic rock formation that served as a natural fortress during inter-tribal wars.",
        image: "images/olumo-rock.webp",
        type: "historical",
        region: "west"
    },
    {
        name: "Gurara Falls",
        location: "Niger State", 
        description: "Spectacular waterfall with a 30-meter drop, surrounded by lush vegetation.",
        image: "images/gurara-falls.webp",
        type: "nature",
        region: "north"
    },
    {
        name: "Lekki Conservation Centre",
        location: "Lagos State",
        description: "Nature reserve with a famous canopy walkway through the rainforest.",
        image: "images/placeholder.webp",
        type: "nature", 
        region: "west"
    },
    {
        name: "Obudu Mountain Resort",
        location: "Cross River State",
        description: "Mountain resort with cable cars, water parks, and stunning mountain views.",
        image: "images/placeholder.webp",
        type: "nature",
        region: "south"
    }
];

// Display highlights on home page
function displayHighlights() {
    const grid = document.getElementById('highlights-grid');
    if (!grid) return;
    
    grid.innerHTML = highlights.map(highlight => `
        <div class="card">
            <div class="card-content">
                <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">${highlight.icon}</div>
                <h3>${highlight.title}</h3>
                <p>${highlight.description}</p>
                <a href="${highlight.link}" class="cta-button" style="margin-top: 1rem; display: inline-block;">Learn More</a>
            </div>
        </div>
    `).join('');
}

// Display featured destinations
function displayFeaturedDestinations() {
    const container = document.getElementById('featured-destinations');
    if (!container) return;
    
    const featured = destinations.slice(0, 3);
    
    container.innerHTML = featured.map(destination => `
        <div class="card">
            <img src="${destination.image}" alt="${destination.name}" loading="lazy">
            <div class="card-content">
                <h3>${destination.name}</h3>
                <p><strong>Location:</strong> ${destination.location}</p>
                <p>${destination.description}</p>
            </div>
        </div>
    `).join('');
}

// Cultural button functionality
function setupCulturalButton() {
    const button = document.getElementById('learn-more-btn');
    if (button) {
        button.addEventListener('click', function() {
            window.location.href = 'about.html';
        });
    }
}

// About Page functionality
function initAboutPage() {
    displayEthnicGroups();
}

const ethnicGroups = [
    { name: "Hausa-Fulani", region: "Northern Nigeria", population: "30%", description: "Known for trading, Islamic traditions, and colorful festivals." },
    { name: "Yoruba", region: "Southwestern Nigeria", population: "21%", description: "Renowned for art, music, and the famous Egungun festival." },
    { name: "Igbo", region: "Southeastern Nigeria", population: "18%", description: "Entrepreneurial spirit, vibrant masquerades, and rich cultural heritage." },
    { name: "Ijaw", region: "Niger Delta", population: "2%", description: "Riverine culture, fishing traditions, and colorful boat regattas." }
];

function displayEthnicGroups() {
    const container = document.getElementById('ethnic-groups');
    if (!container) return;
    
    container.innerHTML = ethnicGroups.map(group => `
        <div class="ethnic-group">
            <h3>${group.name}</h3>
            <p><strong>Region:</strong> ${group.region}</p>
            <p><strong>Population:</strong> ${group.population}</p>
            <p>${group.description}</p>
        </div>
    `).join('');
}

// Destinations Page functionality
function initDestinationsPage() {
    displayAllDestinations();
    setupFilters();
}

function displayAllDestinations(filteredDestinations = destinations) {
    const container = document.getElementById('destinations-container');
    if (!container) return;
    
    if (filteredDestinations.length === 0) {
        container.innerHTML = '<p class="no-results">No destinations found matching your filters.</p>';
        return;
    }
    
    container.innerHTML = filteredDestinations.map(destination => `
        <div class="card" data-type="${destination.type}" data-region="${destination.region}">
            <img src="${destination.image}" alt="${destination.name}" loading="lazy">
            <div class="card-content">
                <h3>${destination.name}</h3>
                <p><strong>Location:</strong> ${destination.location}</p>
                <p>${destination.description}</p>
                <div class="destination-tags">
                    <span class="tag">${destination.type.charAt(0).toUpperCase() + destination.type.slice(1)}</span>
                    <span class="tag">${destination.region.charAt(0).toUpperCase() + destination.region.slice(1)}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function setupFilters() {
    const regionFilter = document.getElementById('region-filter');
    const typeFilter = document.getElementById('type-filter');
    const resetButton = document.getElementById('reset-filters');
    
    if (regionFilter && typeFilter) {
        regionFilter.addEventListener('change', filterDestinations);
        typeFilter.addEventListener('change', filterDestinations);
    }
    
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            regionFilter.value = 'all';
            typeFilter.value = 'all';
            displayAllDestinations();
        });
    }
}

function filterDestinations() {
    const regionValue = document.getElementById('region-filter').value;
    const typeValue = document.getElementById('type-filter').value;
    
    const filtered = destinations.filter(destination => {
        const regionMatch = regionValue === 'all' || destination.region === regionValue;
        const typeMatch = typeValue === 'all' || destination.type === typeValue;
        return regionMatch && typeMatch;
    });
    
    displayAllDestinations(filtered);
}

// Contact Page functionality
function initContactPage() {
    setupContactForm();
    displayFAQ();
}

function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            submitForm();
        }
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
}

function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    let isValid = true;
    
    if (!validateField(name)) isValid = false;
    if (!validateField(email)) isValid = false;
    if (!validateField(message)) isValid = false;
    
    return isValid;
}

function validateField(field) {
    const errorElement = document.getElementById(field.id + 'Error');
    let isValid = true;
    let message = '';
    
    if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            isValid = false;
            message = 'Please enter a valid email address';
        }
    }
    
    if (field.required && !field.value.trim()) {
        isValid = false;
        message = 'This field is required';
    }
    
    if (field.id === 'message' && field.value.length < 10) {
        isValid = false;
        message = 'Message must be at least 10 characters long';
    }
    
    errorElement.textContent = message;
    field.style.borderColor = isValid ? '#28a745' : '#dc3545';
    
    return isValid;
}

function submitForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    // Simulate form submission
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        newsletter: document.getElementById('newsletter').checked
    };
    
    // Save to localStorage
    saveContactSubmission(formData);
    
    // Show success message
    formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    formMessage.className = 'form-message success';
    
    // Reset form
    form.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

function saveContactSubmission(formData) {
    let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({
        ...formData,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
}

const faqData = [
    {
        question: "What is the best time to visit Nigeria?",
        answer: "The dry season from November to March is generally the best time to visit, with pleasant weather and minimal rainfall."
    },
    {
        question: "Do I need a visa to visit Nigeria?",
        answer: "Most foreign visitors require a visa. Check with the Nigerian embassy in your country for specific requirements based on your nationality."
    },
    {
        question: "Is Nigeria safe for tourists?",
        answer: "While most tourist areas are safe, it's important to stay informed about current travel advisories and take normal precautions as you would in any foreign country."
    },
    {
        question: "What languages are spoken in Nigeria?",
        answer: "English is the official language, but there are over 500 indigenous languages. Hausa, Yoruba, and Igbo are the most widely spoken local languages."
    }
];

function displayFAQ() {
    const container = document.getElementById('faq-container');
    if (!container) return;
    
    container.innerHTML = faqData.map(faq => `
        <div class="faq-item">
            <div class="faq-question">${faq.question}</div>
            <div class="faq-answer">${faq.answer}</div>
        </div>
    `).join('');
}

// Utility functions
function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}