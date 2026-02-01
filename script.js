// ==================== 
// Navigation Toggle
// ==================== 
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ==================== 
// Smooth Scroll
// ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== 
// Current Time Display
// ==================== 
function updateTime() {
    const timeElements = document.querySelectorAll('#current-time');
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
    });
    timeElements.forEach(element => {
        element.textContent = timeString;
    });
}

if (document.getElementById('current-time')) {
    updateTime();
    setInterval(updateTime, 1000);
}

// ==================== 
// Scroll Animations
// ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.project-card, .work-item, .skill-category');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ==================== 
// Works Filter
// ==================== 
const filterButtons = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work-item');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            workItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(30px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ==================== 
// Project Modal
// ==================== 
const modal = document.getElementById('projectModal');
const closeModal = document.querySelector('.close-modal');

// Project data (you can expand this with your actual project details)
const projectData = {
    1: {
        title: 'Project Title 1',
        category: 'Design',
        description: 'This is a detailed description of Project 1. Explain the challenge you faced, your approach to solving it, the technologies or methods you used, and the final results. Include metrics or outcomes if applicable.',
        role: 'Lead Designer',
        year: '2024',
        tools: 'Figma, Photoshop, Illustrator',
        link: '#',
        image: 'assets/project-1.jpg',
        video: ''
    },
    2: {
        title: 'Project Title 2',
        category: 'Development',
        description: 'This is a detailed description of Project 2. Explain the challenge you faced, your approach to solving it, the technologies or methods you used, and the final results. Include metrics or outcomes if applicable.',
        role: 'Full Stack Developer',
        year: '2024',
        tools: 'React, Node.js, MongoDB',
        link: '#',
        image: 'assets/project-2.jpg',
        video: ''
    },
    3: {
        title: 'Project Title 3',
        category: 'Branding',
        description: 'This is a detailed description of Project 3. Explain the challenge you faced, your approach to solving it, the technologies or methods you used, and the final results. Include metrics or outcomes if applicable.',
        role: 'Brand Strategist',
        year: '2023',
        tools: 'Illustrator, InDesign',
        link: '#',
        image: 'assets/project-3.jpg',
        video: ''
    },
    4: {
        title: 'Project Title 4',
        category: 'Design',
        description: 'This is a detailed description of Project 4. Explain the challenge you faced, your approach to solving it, the technologies or methods you used, and the final results. Include metrics or outcomes if applicable.',
        role: 'UI/UX Designer',
        year: '2023',
        tools: 'Figma, Sketch, Principle',
        link: '#',
        image: 'assets/project-4.jpg',
        video: ''
    },
    5: {
        title: 'Project Title 5',
        category: 'Development',
        description: 'This is a detailed description of Project 5. Explain the challenge you faced, your approach to solving it, the technologies or methods you used, and the final results. Include metrics or outcomes if applicable.',
        role: 'Frontend Developer',
        year: '2023',
        tools: 'Vue.js, Tailwind CSS, Firebase',
        link: '#',
        image: 'assets/project-5.jpg',
        video: ''
    },
    6: {
        title: 'Project Title 6',
        category: 'Branding',
        description: 'This is a detailed description of Project 6. Explain the challenge you faced, your approach to solving it, the technologies or methods you used, and the final results. Include metrics or outcomes if applicable.',
        role: 'Creative Director',
        year: '2022',
        tools: 'Illustrator, After Effects',
        link: '#',
        image: 'assets/project-6.jpg',
        video: ''
    }
};

function openModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;
    
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalCategory').textContent = project.category;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalRole').textContent = project.role;
    document.getElementById('modalYear').textContent = project.year;
    document.getElementById('modalTools').textContent = project.tools;
    document.getElementById('modalLink').href = project.link;
    
    const modalImage = document.getElementById('modalMainImage');
    const modalVideo = document.querySelector('.modal-video');
    
    if (project.video) {
        modalVideo.style.display = 'block';
        modalVideo.querySelector('video source').src = project.video;
        modalVideo.querySelector('video').load();
        modalImage.parentElement.style.display = 'none';
    } else {
        modalVideo.style.display = 'none';
        modalImage.src = project.image;
        modalImage.parentElement.style.display = 'block';
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Pause video if playing
        const video = modal.querySelector('video');
        if (video) video.pause();
    });
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Pause video if playing
        const video = modal.querySelector('video');
        if (video) video.pause();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Pause video if playing
        const video = modal.querySelector('video');
        if (video) video.pause();
    }
});

// ==================== 
// Navbar Background on Scroll
// ==================== 
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// ==================== 
// Loading Animation
// ==================== 
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
