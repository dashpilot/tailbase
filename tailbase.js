/**
 * Tailbase JavaScript
 * Interactive functionality for carousel, modal, tabs, and smooth scrolling
 * Modern CSS framework combining Bootstrap's components with Tailwind's utility-first approach
 */

// Carousel functionality
class SmoothCarousel {
	constructor(carouselElement) {
		this.carousel = carouselElement;
		this.slides = carouselElement.querySelectorAll('.carousel-item');
		this.indicators = carouselElement.querySelectorAll('.carousel-indicator');
		this.currentSlide = 0;

		this.init();
	}

	init() {
		// Bind event listeners for controls
		const prevBtn = this.carousel.querySelector('.carousel-control-prev');
		const nextBtn = this.carousel.querySelector('.carousel-control-next');

		if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide());
		if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());

		// Bind indicator clicks
		this.indicators.forEach((indicator, index) => {
			indicator.addEventListener('click', () => this.goToSlide(index));
		});

		// Auto-play if enabled
		if (this.carousel.dataset.autoplay === 'true') {
			this.startAutoplay();
		}
	}

	showSlide(index) {
		if (this.slides.length === 0) return;

		this.slides[this.currentSlide].classList.remove('active');
		this.indicators[this.currentSlide]?.classList.remove('active');

		this.currentSlide = index;

		this.slides[this.currentSlide].classList.add('active');
		this.indicators[this.currentSlide]?.classList.add('active');
	}

	nextSlide() {
		const next = (this.currentSlide + 1) % this.slides.length;
		this.showSlide(next);
	}

	prevSlide() {
		const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
		this.showSlide(prev);
	}

	goToSlide(index) {
		this.showSlide(index);
	}

	startAutoplay() {
		setInterval(() => {
			this.nextSlide();
		}, 5000);
	}
}

// Modal functionality
class SmoothModal {
	constructor(modalElement) {
		this.modal = modalElement;
		this.init();
	}

	init() {
		// Close button
		const closeBtn = this.modal.querySelector('.btn-close');
		if (closeBtn) {
			closeBtn.addEventListener('click', () => this.close());
		}

		// Close on backdrop click
		this.modal.addEventListener('click', (e) => {
			if (e.target === this.modal) {
				this.close();
			}
		});

		// Close on Escape key
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && this.modal.classList.contains('show')) {
				this.close();
			}
		});
	}

	open() {
		this.modal.classList.add('show');
		document.body.style.overflow = 'hidden';
	}

	close() {
		this.modal.classList.remove('show');
		document.body.style.overflow = '';
	}
}

// Tab functionality
class SmoothTabs {
	constructor(tabsContainer) {
		this.container = tabsContainer;
		this.tabs = tabsContainer.querySelectorAll('.nav-link');
		this.panes = tabsContainer.querySelectorAll('.tab-pane');
		this.init();
	}

	init() {
		this.tabs.forEach((tab) => {
			tab.addEventListener('click', (e) => {
				e.preventDefault();
				const targetId = tab.getAttribute('href').substring(1);
				this.showTab(targetId, tab);
			});
		});
	}

	showTab(tabId, element) {
		// Remove active class from all tabs and panes
		this.tabs.forEach((tab) => tab.classList.remove('active'));
		this.panes.forEach((pane) => pane.classList.remove('active'));

		// Add active class to clicked tab and corresponding pane
		element.classList.add('active');
		const targetPane = document.getElementById(tabId);
		if (targetPane) {
			targetPane.classList.add('active');
		}
	}
}

// Smooth scrolling utility
function initSmoothScrolling() {
	document.querySelectorAll('a[href^="#"]').forEach((link) => {
		link.addEventListener('click', function (e) {
			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				e.preventDefault();
				targetElement.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});
}

// Intersection Observer for animations
function initScrollAnimations() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.style.animationDelay = '0s';
				entry.target.classList.add('fade-in');
			}
		});
	}, observerOptions);

	document.querySelectorAll('.fade-in, [data-animate]').forEach((element) => {
		observer.observe(element);
	});
}

// Auto-initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
	// Initialize all carousels
	document.querySelectorAll('.carousel').forEach((carousel) => {
		new SmoothCarousel(carousel);
	});

	// Initialize all modals
	document.querySelectorAll('.modal').forEach((modal) => {
		new SmoothModal(modal);
	});

	// Initialize all tab containers
	document.querySelectorAll('.nav-tabs').forEach((tabsContainer) => {
		const tabContent = tabsContainer.parentElement.querySelector('.tab-content');
		if (tabContent) {
			new SmoothTabs(tabsContainer.parentElement);
		}
	});

	// Initialize smooth scrolling
	initSmoothScrolling();

	// Initialize scroll animations
	initScrollAnimations();
});

// Global functions for manual control (backward compatibility)
window.SmoothCarousel = SmoothCarousel;
window.SmoothModal = SmoothModal;
window.SmoothTabs = SmoothTabs;

// Utility functions
window.openModal = function (modalId) {
	const modal = document.getElementById(modalId);
	if (modal && modal._smoothModal) {
		modal._smoothModal.open();
	} else if (modal) {
		const modalInstance = new SmoothModal(modal);
		modal._smoothModal = modalInstance;
		modalInstance.open();
	}
};

window.closeModal = function (modalId) {
	const modal = modalId ? document.getElementById(modalId) : document.querySelector('.modal.show');
	if (modal && modal._smoothModal) {
		modal._smoothModal.close();
	}
};

window.showTab = function (tabId, element) {
	const tabsContainer = element.closest('.nav-tabs').parentElement;
	if (tabsContainer._smoothTabs) {
		tabsContainer._smoothTabs.showTab(tabId, element);
	} else {
		const tabsInstance = new SmoothTabs(tabsContainer);
		tabsContainer._smoothTabs = tabsInstance;
		tabsInstance.showTab(tabId, element);
	}
};
