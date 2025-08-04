// Naveen Apartments Website JavaScript - Enhanced Gallery Version - Fixed Images

class ApartmentWebsite {
    constructor() {
        this.currentSection = 'home';
        this.isLoggedIn = false;
        this.currentGalleryCategory = null;
        this.currentImageIndex = 0;
        this.galleryData = this.initializeGalleryData();
        this.init();
    }

    initializeGalleryData() {
        return {
            "security-gate": {
                title: "Main Security Gate",
                images: [
                    {src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop", caption: "Main entrance gate with modern security system"},
                    {src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop", caption: "Security booth with 24/7 guard facility"},
                    {src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80", caption: "Automated barrier system for vehicles"},
                    {src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop", caption: "CCTV monitoring setup at entrance"},
                    {src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&brightness=0.8", caption: "Night view of illuminated security gate"}
                ]
            },
            "building-exterior": {
                title: "Building Exterior",
                images: [
                    {src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop", caption: "Front elevation of Naveen Apartments"},
                    {src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop", caption: "Side view showing balconies and windows"},
                    {src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop", caption: "Main entrance with landscaping"},
                    {src: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop", caption: "Parking area and driveway"},
                    {src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop", caption: "Garden area and green spaces"},
                    {src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&sat=-20", caption: "Complete building view from park side"}
                ]
            },
            "apartment-interior": {
                title: "Apartment Interior",
                images: [
                    {src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop", caption: "Spacious living room with modern furnishing"},
                    {src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop", caption: "Master bedroom with attached bathroom"},
                    {src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop", caption: "Modular kitchen with built-in appliances"},
                    {src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop", caption: "Modern bathroom with premium fittings"},
                    {src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop", caption: "Balcony with park view and fresh air"},
                    {src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&sat=-30", caption: "Storage room and utility area"}
                ]
            },
            "common-area": {
                title: "Common Areas",
                images: [
                    {src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop", caption: "Elegant lobby with reception area"},
                    {src: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=800&h=600&fit=crop", caption: "High-speed elevator with modern controls"},
                    {src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop", caption: "Well-lit corridors with safety features"},
                    {src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop&brightness=1.1", caption: "Community notice board and announcements"},
                    {src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&hue=20", caption: "Seating area for residents and visitors"}
                ]
            },
            "park-view": {
                title: "Park View",
                images: [
                    {src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop", caption: "Beautiful DDA park view from apartments"},
                    {src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop", caption: "Morning view with lush green trees"},
                    {src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop", caption: "Evening sunset view from balcony"},
                    {src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&brightness=1.2", caption: "Children's play area in the park"}
                ]
            },
            "parking-area": {
                title: "Parking Area",
                images: [
                    {src: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop", caption: "Covered parking for residents"},
                    {src: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop&brightness=1.1", caption: "Visitor parking area near entrance"},
                    {src: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop&sat=-20", caption: "Two-wheeler parking section"},
                    {src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&hue=10", caption: "Parking entrance and exit gates"}
                ]
            }
        };
    }

    init() {
        this.bindEvents();
        this.initializeAccordions();
        this.showSection('home');
        this.handleKeyboardNavigation();
        this.initializeTheme();
        this.initializeGallery();
    }

    bindEvents() {
        // Navigation - Fixed navigation logic
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.getAttribute('href').substring(1);
                console.log('Navigating to section:', section);
                this.showSection(section);
                this.setActiveNavLink(link);
            });
        });

        // Mobile menu toggle
        const mobileToggle = document.getElementById('mobileToggle');
        const navList = document.querySelector('.nav-list');
        if (mobileToggle && navList) {
            mobileToggle.addEventListener('click', () => {
                navList.classList.toggle('active');
            });
        }

        // Login functionality
        const loginBtn = document.getElementById('loginBtn');
        const showLoginModal = document.getElementById('showLoginModal');
        const loginModal = document.getElementById('loginModal');
        const closeModal = document.getElementById('closeModal');
        const loginForm = document.getElementById('loginForm');

        if (loginBtn) {
            loginBtn.addEventListener('click', () => {
                if (this.isLoggedIn) {
                    this.logout();
                } else {
                    this.showLoginModal();
                }
            });
        }

        if (showLoginModal) {
            showLoginModal.addEventListener('click', () => {
                this.showLoginModal();
            });
        }

        if (closeModal) {
            closeModal.addEventListener('click', () => {
                this.hideLoginModal();
            });
        }

        if (loginModal) {
            loginModal.addEventListener('click', (e) => {
                if (e.target === loginModal || e.target.classList.contains('modal-overlay')) {
                    this.hideLoginModal();
                }
            });
        }

        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }

        // Gallery modal events
        this.bindGalleryModalEvents();

        // Contact form
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactForm(e);
            });
        }

        // Quick access buttons
        this.bindQuickAccessButtons();

        // Hero action buttons
        this.bindHeroButtons();

        // Download buttons
        this.bindDownloadButtons();

        // Emergency links
        this.bindEmergencyLinks();

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            const navList = document.querySelector('.nav-list');
            const mobileToggle = document.getElementById('mobileToggle');
            
            if (navList && navList.classList.contains('active') && 
                !navList.contains(e.target) && 
                !mobileToggle.contains(e.target)) {
                navList.classList.remove('active');
            }
        });
    }

    initializeGallery() {
        // Update gallery card images with better URLs
        this.updateGalleryCardImages();

        // Bind gallery card click events
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const category = item.getAttribute('data-category');
                this.openGalleryModal(category);
            });

            // Add keyboard support for gallery items
            item.setAttribute('tabindex', '0');
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const category = item.getAttribute('data-category');
                    this.openGalleryModal(category);
                }
            });
        });
    }

    updateGalleryCardImages() {
        // Update gallery card preview images with working URLs
        const galleryCards = [
            { selector: '[data-category="security-gate"] .gallery-image', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop' },
            { selector: '[data-category="building-exterior"] .gallery-image', src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop' },
            { selector: '[data-category="apartment-interior"] .gallery-image', src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop' },
            { selector: '[data-category="common-area"] .gallery-image', src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=300&h=200&fit=crop' },
            { selector: '[data-category="park-view"] .gallery-image', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop' },
            { selector: '[data-category="parking-area"] .gallery-image', src: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=300&h=200&fit=crop' }
        ];

        galleryCards.forEach(card => {
            const img = document.querySelector(card.selector);
            if (img) {
                img.src = card.src;
                img.onerror = () => {
                    // Fallback to a solid color if image fails to load
                    img.style.backgroundColor = '#3B82F6';
                    img.style.minHeight = '200px';
                    img.alt = 'Image placeholder';
                };
            }
        });
    }

    bindGalleryModalEvents() {
        const galleryModal = document.getElementById('galleryModal');
        const closeGalleryModal = document.getElementById('closeGalleryModal');
        const galleryPrev = document.getElementById('galleryPrev');
        const galleryNext = document.getElementById('galleryNext');

        if (closeGalleryModal) {
            closeGalleryModal.addEventListener('click', () => {
                this.closeGalleryModal();
            });
        }

        if (galleryModal) {
            galleryModal.addEventListener('click', (e) => {
                if (e.target === galleryModal || e.target.classList.contains('modal-overlay')) {
                    this.closeGalleryModal();
                }
            });
        }

        if (galleryPrev) {
            galleryPrev.addEventListener('click', () => {
                this.previousImage();
            });
        }

        if (galleryNext) {
            galleryNext.addEventListener('click', () => {
                this.nextImage();
            });
        }
    }

    openGalleryModal(category) {
        console.log('Opening gallery modal for category:', category);

        if (!this.galleryData[category]) {
            console.error('Gallery category not found:', category);
            return;
        }

        this.currentGalleryCategory = category;
        this.currentImageIndex = 0;

        const modal = document.getElementById('galleryModal');
        const title = document.getElementById('galleryModalTitle');
        
        if (!modal || !title) {
            console.error('Gallery modal elements not found');
            return;
        }

        title.textContent = this.galleryData[category].title;
        
        this.updateGalleryDisplay();
        this.createThumbnails();
        
        modal.classList.remove('hidden');
        
        // Focus management
        const closeButton = document.getElementById('closeGalleryModal');
        if (closeButton) {
            setTimeout(() => closeButton.focus(), 100);
        }

        console.log('Gallery modal opened successfully');
    }

    closeGalleryModal() {
        const modal = document.getElementById('galleryModal');
        if (modal) {
            modal.classList.add('hidden');
            this.currentGalleryCategory = null;
            this.currentImageIndex = 0;
        }
    }

    updateGalleryDisplay() {
        if (!this.currentGalleryCategory) return;

        const categoryData = this.galleryData[this.currentGalleryCategory];
        const currentImage = categoryData.images[this.currentImageIndex];

        // Update main image
        const mainImage = document.getElementById('galleryMainImage');
        if (mainImage) {
            mainImage.src = currentImage.src;
            mainImage.alt = currentImage.caption;
            
            // Add error handling for main image
            mainImage.onerror = () => {
                mainImage.style.backgroundColor = '#3B82F6';
                mainImage.style.minHeight = '400px';
                mainImage.style.display = 'flex';
                mainImage.style.alignItems = 'center';
                mainImage.style.justifyContent = 'center';
                mainImage.style.color = 'white';
                mainImage.style.fontSize = '18px';
                mainImage.innerHTML = 'Image Loading...';
            };
        }

        // Update caption
        const caption = document.getElementById('galleryImageCaption');
        if (caption) {
            caption.textContent = currentImage.caption;
        }

        // Update counter
        const counter = document.getElementById('galleryCounter');
        if (counter) {
            counter.textContent = `${this.currentImageIndex + 1} of ${categoryData.images.length}`;
        }

        // Update thumbnail active state
        this.updateThumbnailActive();

        // Update navigation buttons
        const prevBtn = document.getElementById('galleryPrev');
        const nextBtn = document.getElementById('galleryNext');
        
        if (prevBtn) {
            prevBtn.style.opacity = this.currentImageIndex === 0 ? '0.5' : '1';
            prevBtn.disabled = this.currentImageIndex === 0;
        }
        
        if (nextBtn) {
            nextBtn.style.opacity = this.currentImageIndex === categoryData.images.length - 1 ? '0.5' : '1';
            nextBtn.disabled = this.currentImageIndex === categoryData.images.length - 1;
        }
    }

    createThumbnails() {
        if (!this.currentGalleryCategory) return;

        const categoryData = this.galleryData[this.currentGalleryCategory];
        const thumbnailContainer = document.getElementById('galleryThumbnails');
        
        if (!thumbnailContainer) {
            console.warn('Thumbnail container not found');
            return;
        }

        // Clear existing thumbnails
        thumbnailContainer.innerHTML = '';

        // Create new thumbnails
        categoryData.images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            // Use smaller thumbnail versions for better performance
            thumbnail.src = image.src.replace('w=800&h=600', 'w=120&h=80');
            thumbnail.alt = image.caption;
            thumbnail.className = 'gallery-thumbnail';
            thumbnail.setAttribute('data-index', index);
            
            if (index === this.currentImageIndex) {
                thumbnail.classList.add('active');
            }

            // Add error handling for thumbnails
            thumbnail.onerror = () => {
                thumbnail.style.backgroundColor = '#6B7280';
                thumbnail.style.minWidth = '60px';
                thumbnail.style.minHeight = '60px';
            };

            thumbnail.addEventListener('click', () => {
                this.currentImageIndex = index;
                this.updateGalleryDisplay();
            });

            thumbnail.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.currentImageIndex = index;
                    this.updateGalleryDisplay();
                }
            });

            thumbnail.setAttribute('tabindex', '0');
            thumbnailContainer.appendChild(thumbnail);
        });

        console.log(`Created ${categoryData.images.length} thumbnails for ${this.currentGalleryCategory}`);
    }

    updateThumbnailActive() {
        const thumbnails = document.querySelectorAll('.gallery-thumbnail');
        thumbnails.forEach((thumb, index) => {
            if (index === this.currentImageIndex) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }

    previousImage() {
        if (!this.currentGalleryCategory) return;

        const categoryData = this.galleryData[this.currentGalleryCategory];
        if (this.currentImageIndex > 0) {
            this.currentImageIndex--;
            this.updateGalleryDisplay();
        }
    }

    nextImage() {
        if (!this.currentGalleryCategory) return;

        const categoryData = this.galleryData[this.currentGalleryCategory];
        if (this.currentImageIndex < categoryData.images.length - 1) {
            this.currentImageIndex++;
            this.updateGalleryDisplay();
        }
    }

    showSection(sectionId) {
        console.log('Attempting to show section:', sectionId);
        
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = sectionId;
            console.log('Successfully showed section:', sectionId);
        } else {
            console.error('Section not found:', sectionId);
            // Fallback to home section
            const homeSection = document.getElementById('home');
            if (homeSection) {
                homeSection.classList.add('active');
                this.currentSection = 'home';
            }
        }

        // Close mobile menu
        const navList = document.querySelector('.nav-list');
        if (navList) {
            navList.classList.remove('active');
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setActiveNavLink(activeLink) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    showLoginModal() {
        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.classList.remove('hidden');
            // Focus on username field
            const usernameField = document.getElementById('username');
            if (usernameField) {
                setTimeout(() => usernameField.focus(), 100);
            }
        }
    }

    hideLoginModal() {
        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.classList.add('hidden');
            // Clear form
            const form = document.getElementById('loginForm');
            if (form) {
                form.reset();
            }
        }
    }

    handleLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Demo credentials - Updated to match user requirements
        if (username === 'resident' && password === 'naveen123') {
            this.isLoggedIn = true;
            this.hideLoginModal();
            this.updateLoginState();
            this.showResidentsContent();
            this.showNotification('Login successful! Welcome to Residents Corner.', 'success');
        } else {
            this.showNotification('Invalid credentials. Please use: Username: resident, Password: naveen123', 'error');
        }
    }

    logout() {
        this.isLoggedIn = false;
        this.updateLoginState();
        this.hideResidentsContent();
        this.showNotification('Logged out successfully.', 'info');
    }

    updateLoginState() {
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            if (this.isLoggedIn) {
                loginBtn.textContent = 'Logout';
                loginBtn.classList.remove('btn--primary');
                loginBtn.classList.add('btn--secondary');
            } else {
                loginBtn.textContent = 'Login';
                loginBtn.classList.remove('btn--secondary');
                loginBtn.classList.add('btn--primary');
            }
        }
    }

    showResidentsContent() {
        const loginDiv = document.getElementById('residentsLogin');
        const contentDiv = document.getElementById('residentsContent');
        
        if (loginDiv) loginDiv.classList.add('hidden');
        if (contentDiv) contentDiv.classList.remove('hidden');
    }

    hideResidentsContent() {
        const loginDiv = document.getElementById('residentsLogin');
        const contentDiv = document.getElementById('residentsContent');
        
        if (loginDiv) loginDiv.classList.remove('hidden');
        if (contentDiv) contentDiv.classList.add('hidden');
    }

    initializeAccordions() {
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const isActive = item.classList.contains('active');
                
                // Close all accordion items
                document.querySelectorAll('.accordion-item').forEach(accItem => {
                    accItem.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }

    bindQuickAccessButtons() {
        // Pay Bills button
        const quickCards = document.querySelectorAll('.quick-card button');
        quickCards.forEach((button, index) => {
            button.addEventListener('click', () => {
                switch(index) {
                    case 0: // Pay Bills
                        this.showNotification('Payment gateway will be integrated soon. Please contact the office for bill payments.', 'info');
                        break;
                    case 1: // Maintenance Request
                        this.showNotification('Maintenance request form will be available in the next update. Please call the maintenance team for urgent issues.', 'info');
                        break;
                    case 2: // Latest Notices
                        if (this.isLoggedIn) {
                            this.showSection('residents');
                            const residentsLink = document.querySelector('a[href="#residents"]');
                            if (residentsLink) this.setActiveNavLink(residentsLink);
                        } else {
                            this.showLoginModal();
                        }
                        break;
                }
            });
        });
    }

    bindHeroButtons() {
        const heroButtons = document.querySelectorAll('.hero-actions .btn');
        heroButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                if (index === 0) { // Explore Amenities
                    this.showSection('amenities');
                    const amenitiesLink = document.querySelector('a[href="#amenities"]');
                    if (amenitiesLink) this.setActiveNavLink(amenitiesLink);
                } else if (index === 1) { // Contact Us
                    this.showSection('contact');
                    const contactLink = document.querySelector('a[href="#contact"]');
                    if (contactLink) this.setActiveNavLink(contactLink);
                }
            });
        });
    }

    bindDownloadButtons() {
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON' && e.target.textContent.includes('Download')) {
                e.preventDefault();
                this.showNotification('Document download will be available soon. Please contact the office for physical copies.', 'info');
            }
        });
    }

    bindEmergencyLinks() {
        document.querySelectorAll('.emergency-number').forEach(link => {
            if (link.getAttribute('href').startsWith('tel:')) {
                link.addEventListener('click', (e) => {
                    this.showNotification('Initiating call to emergency number...', 'info');
                });
            }
        });

        // Emergency contact cards
        document.querySelectorAll('.emergency-contact-card a[href^="tel:"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const number = link.textContent.replace('Call ', '');
                this.showNotification(`Initiating call to ${number}...`, 'info');
            });
        });
    }

    handleContactForm(e) {
        const form = e.target;
        
        // Validate form
        if (!this.validateForm(form)) {
            this.showNotification('Please fill in all required fields correctly.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        
        // Simulate form submission
        setTimeout(() => {
            this.showNotification('Thank you for your message! We will get back to you within 24 hours.', 'success');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }, 1500);
    }

    showNotification(message, type = 'info') {
        // Remove existing notifications
        document.querySelectorAll('.notification').forEach(n => n.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification status status--${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: '3000',
            maxWidth: '350px',
            padding: '16px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            animation: 'slideInRight 0.3s ease-out',
            cursor: 'pointer'
        });
        
        // Add CSS animation if not exists
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOutRight {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Add to page
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds with animation
        const removeNotification = () => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        };
        
        setTimeout(removeNotification, 5000);
        
        // Click to dismiss
        notification.addEventListener('click', removeNotification);
    }

    // Handle keyboard navigation - Enhanced for gallery
    handleKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // ESC key to close modals
            if (e.key === 'Escape') {
                this.hideLoginModal();
                this.closeGalleryModal();
                const navList = document.querySelector('.nav-list');
                if (navList && navList.classList.contains('active')) {
                    navList.classList.remove('active');
                }
            }
            
            // Arrow keys for gallery navigation when modal is open
            if (this.currentGalleryCategory) {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    this.previousImage();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    this.nextImage();
                }
            }
            
            // Enter key on gallery items
            if (e.key === 'Enter' && e.target.closest('.gallery-item')) {
                e.preventDefault();
                const category = e.target.closest('.gallery-item').getAttribute('data-category');
                this.openGalleryModal(category);
            }
        });
    }

    // Initialize theme from localStorage or system preference
    initializeTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.setAttribute('data-color-scheme', savedTheme);
        }
    }

    // Method to toggle theme (if needed in future)
    toggleTheme() {
        const body = document.body;
        const currentTheme = body.getAttribute('data-color-scheme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-color-scheme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    // Utility method to handle navigation from external calls
    navigateToSection(sectionId) {
        this.showSection(sectionId);
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);
        if (navLink) {
            this.setActiveNavLink(navLink);
        }
    }

    // Method to check if user needs to login for a section
    requiresLogin(sectionId) {
        return sectionId === 'residents' && !this.isLoggedIn;
    }

    // Form validation helper
    validateForm(form) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            field.classList.remove('error');
            
            if (!field.value.trim()) {
                field.classList.add('error');
                isValid = false;
            } else if (field.type === 'email' && !this.isValidEmail(field.value)) {
                field.classList.add('error');
                isValid = false;
            }
        });
        
        return isValid;
    }

    // Email validation helper
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Analytics tracking (placeholder)
    trackEvent(category, action, label) {
        console.log(`Analytics: ${category} - ${action} - ${label}`);
    }

    // Performance monitoring
    measurePerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            });
        }
    }

    // Image preloading for better gallery performance
    preloadGalleryImages() {
        Object.keys(this.galleryData).forEach(category => {
            this.galleryData[category].images.forEach(image => {
                const img = new Image();
                img.src = image.src;
            });
        });
    }

    // Gallery accessibility improvements
    initializeGalleryAccessibility() {
        // Add ARIA labels and roles to gallery elements
        document.querySelectorAll('.gallery-item').forEach((item, index) => {
            item.setAttribute('role', 'button');
            item.setAttribute('aria-label', `Open gallery for ${item.querySelector('.gallery-caption').textContent}`);
        });
    }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const website = new ApartmentWebsite();
    
    // Make website instance globally available for debugging
    window.apartmentWebsite = website;
    
    // Performance monitoring
    website.measurePerformance();
    
    // Preload gallery images for better performance
    setTimeout(() => {
        website.preloadGalleryImages();
        website.initializeGalleryAccessibility();
    }, 2000);
    
    console.log('Naveen Apartments website initialized successfully with enhanced gallery and fixed images');
});

// Global error handling
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

// Handle online/offline status
let onlineNotificationShown = false;

window.addEventListener('online', () => {
    console.log('App is online');
    if (!onlineNotificationShown && window.apartmentWebsite) {
        window.apartmentWebsite.showNotification('Internet connection restored.', 'success');
        onlineNotificationShown = true;
    }
});

window.addEventListener('offline', () => {
    console.log('App is offline');
    if (window.apartmentWebsite) {
        window.apartmentWebsite.showNotification('You are currently offline. Some features may not work.', 'warning');
    }
});

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        if (window.apartmentWebsite) {
            window.apartmentWebsite.navigateToSection(targetId);
        }
    }
});

// Add loading states for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        img.addEventListener('error', () => {
            img.style.opacity = '0.5';
            console.warn('Failed to load image:', img.src);
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease-in-out';
    });
});

// Touch gesture support for gallery navigation on mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    if (document.getElementById('galleryModal').classList.contains('hidden')) return;
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    if (document.getElementById('galleryModal').classList.contains('hidden')) return;
    touchEndX = e.changedTouches[0].screenX;
    handleGestureEnd();
});

function handleGestureEnd() {
    if (touchEndX < touchStartX - 50) {
        // Swipe left - next image
        if (window.apartmentWebsite) {
            window.apartmentWebsite.nextImage();
        }
    }
    if (touchEndX > touchStartX + 50) {
        // Swipe right - previous image
        if (window.apartmentWebsite) {
            window.apartmentWebsite.previousImage();
        }
    }
}

// PWA service worker registration (placeholder for future implementation)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker registration would go here
        console.log('Service worker support detected');
    });
}

// Final initialization check
console.log('Naveen Apartments Dwarka - Enhanced Gallery JavaScript with Fixed Images loaded successfully');