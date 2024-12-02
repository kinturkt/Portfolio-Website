document.addEventListener('DOMContentLoaded', function () {
    // Call the function to display specific GitHub projects
    displaySelectedProjects();

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            alert('Thank you! Your message has been submitted.');
            contactForm.reset();
        } else {
            alert('Please fill in all the fields.');
        }
    });

    // Add Intersection Observer for Section Animations
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    sections.forEach(section => observer.observe(section));

    // Optimize Scroll Event for Navbar Shadow
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const navbar = document.querySelector('.navbar');
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }, 100);
    });

    // Night Mode / Day Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Default theme (light mode)
    let isDarkTheme = false;

    // Check saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.src = 'moon.png'; // Replace with your moon icon image
        isDarkTheme = true;
    } else {
        themeIcon.src = 'sunn.png'; // Replace with your sun icon image
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', function () {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle('dark-theme', isDarkTheme);

        // Update the icon
        if (isDarkTheme) {
            themeIcon.src = 'moon.png'; // Replace with your moon icon image
        } else {
            themeIcon.src = 'sunn.png'; // Replace with your sun icon image
        }

        // Save preference in localStorage
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    });
});

// Function to display my top GitHub projects
function displaySelectedProjects() {
    const projects = [
        {
            name: 'Inventory Management System',
            description: 'A Python-based web application to manage inventory and track stocks efficiently by adding, updating, and tracking products in real-time.',
            url: 'https://github.com/kinturkt/Inventory-Management-System-IMS-Project',
        },
        {
            name: 'Hate Speech Detection',
            description: 'A machine learning model to detect and classify hate speech in text data using BERT and LSTM neural network models.',
            url: 'https://github.com/kinturkt/hate-speech-detection',
        },
        {
            name: 'Movie Recommendation System',
            description: 'A machine learning-based system that uses NLP and Sentence Transformers to recommend movies based on user preferences.',
            url: 'https://github.com/kinturkt/Semantic-Search-Engine-for-Movie-Recommendations',
        },
        {
            name: 'Banking System',
            description: 'A dynamic web-based application to simulate banking operations such as account creation, fund transfers, and loan management.',
            url: 'https://github.com/kinturkt/Banking-System-using-SQL-And-Python',
        },
        {
            name: 'Sorting Algorithms with GUI',
            description: 'A Python GUI built with Tkinter for real-time analysis and visualization of sorting algorithms (Bubble, Merge, Quick, Heap, etc.), supporting user input or random list.',
            url: 'https://github.com/kinturkt/Sorting-Algorithms-with-GUI',
        },
    ];

    const githubProjectsContainer = document.getElementById('githubProjects');

    projects.forEach(repo => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description}</p>
            <a href="${repo.url}" target="_blank">View Project</a>
        `;
        githubProjectsContainer.appendChild(projectCard);
    });
}