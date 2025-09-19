// Loading Screen Control
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after minimum 2 seconds for the animation to be visible
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        
        // Remove the loading screen from DOM after fade out
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 2000);
});
    
// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.section-title, .day-card, .ticket-card, .feature');
    elementsToAnimate.forEach(el => observer.observe(el));
});

// Ticket purchase simulation
document.querySelectorAll('.ticket-card .btn-primary, .ticket-card-single .btn-primary').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // For single ticket layout
        if (this.closest('.ticket-card-single')) {
            showNotification('Redirigint a la compra: Entrada El Birret de l\'Estany (26€)', 'info');
        } else {
            // For legacy multi-ticket layout
            const ticketType = this.closest('.ticket-card').querySelector('h3').textContent;
            showNotification(`Redirigint a la compra: ${ticketType}`, 'info');
        }
        
        // In a real application, this would redirect to a payment processor
        setTimeout(() => {
            window.open('https://example.com/tickets', '_blank');
        }, 1500);
    });
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    // Add close button styles
    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    closeButton.addEventListener('click', () => {
        removeNotification(notification);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        removeNotification(notification);
    }, 5000);
}

function getNotificationColor(type) {
    const colors = {
        success: '#27ae60',
        error: '#e74c3c',
        warning: '#f39c12',
        info: '#3498db'
    };
    return colors[type] || colors.info;
}

function removeNotification(notification) {
    if (notification && notification.parentNode) {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to cards
    const cards = document.querySelectorAll('.day-card, .ticket-card, .feature');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Add countdown timer for the event
function addCountdownTimer() {
    const eventDate = new Date('2025-10-17T19:00:00');
    const countdownElement = document.createElement('div');
    countdownElement.className = 'countdown';
    let isLarge = true; // Track the current size state
    
    // Set initial large size
    countdownElement.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: rgba(44, 90, 160, 0.9);
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 15px;
        font-weight: 600;
        z-index: 1000;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        min-width: 280px;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
    `;
    
    function updateCountdown() {
        const now = new Date();
        const difference = eventDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            
            if (isLarge) {
                countdownElement.innerHTML = `
                    <div style="font-size: 1.1rem; margin-bottom: 0.8rem;">Correbars en:</div>
                    <div style="font-size: 1.8rem; font-weight: 700;">${days}d ${hours}h ${minutes}m</div>
                `;
            } else {
                countdownElement.innerHTML = `
                    <div style="font-size: 0.8rem;">${days}d ${hours}h ${minutes}m</div>
                `;
            }
        } else {
            if (isLarge) {
                countdownElement.innerHTML = `
                    <div style="font-size: 1.3rem;">🎉 El correbars ja ha començat!</div>
                    <div style="font-size: 0.8rem; margin-top: 0.5rem; opacity: 0.8;">Fes clic per fer més petit</div>
                `;
            } else {
                countdownElement.innerHTML = `
                    <div style="font-size: 0.9rem;">🎉 Correbars!</div>
                `;
            }
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute
    
    document.body.appendChild(countdownElement);
    
    // Toggle size on click instead of hiding
    countdownElement.addEventListener('click', () => {
        isLarge = !isLarge;
        
        if (isLarge) {
            // Make it large
            countdownElement.style.padding = '1.5rem 2rem';
            countdownElement.style.minWidth = '280px';
            countdownElement.style.borderRadius = '15px';
        } else {
            // Make it small
            countdownElement.style.padding = '0.8rem 1rem';
            countdownElement.style.minWidth = '120px';
            countdownElement.style.borderRadius = '10px';
        }
        
        updateCountdown(); // Update content based on new size
    });
}

// Initialize countdown timer
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(addCountdownTimer, 2000); // Show after 2 seconds
});

// Contact Form Handler
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const nom = contactForm.querySelector('input[name="nom"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            const missatge = contactForm.querySelector('textarea[name="missatge"]').value;
            
            // Check if all fields are filled
            if (!nom || !email || !missatge) {
                alert('Si us plau, omple tots els camps');
                return;
            }
            
            // Create Gmail compose URL
            const subject = encodeURIComponent('Contacte El Birret de l\'Estany');
            const body = encodeURIComponent(`Nom: ${nom}\nEmail: ${email}\n\nMissatge:\n${missatge}`);
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=birretestany@gmail.com&su=${subject}&body=${body}`;
            
            // Open Gmail in new tab
            window.open(gmailUrl, '_blank');
            
            // Clear form after sending
            contactForm.reset();
            showNotification('S\'ha obert Gmail. Envia l\'email per completar el contacte.', 'success');
        });
    }
});
