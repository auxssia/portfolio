/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// --- Data for Portfolio Items ---
const portfolioItems = [
  {
    title: 'E-commerce Platform "ShopSphere"',
    description:
      'A scalable and responsive e-commerce solution with a custom CMS and integrated payment gateways.',
    imageUrl: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop',
    liveUrl: '#',
    tags: ['E-commerce', 'React', 'Node.js'],
  },
  {
    title: 'Corporate Website for "Fintech Innovations"',
    description:
      'A professional and secure corporate website to build trust and showcase financial services.',
    imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop',
    liveUrl: '#',
    tags: ['Corporate', 'Security', 'UX'],
  },
  {
    title: 'Booking App "Travelista"',
    description:
      'A user-friendly travel booking platform with real-time availability and a seamless user experience.',
    imageUrl: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop',
    liveUrl: '#',
    tags: ['Web App', 'API Integration', 'Mobile First'],
  },
  {
    title: 'Marketing Site for "Creative Co."',
    description:
      'A visually stunning and animated marketing website to capture user attention and drive conversions.',
    imageUrl: 'https://images.unsplash.com/photo-1524749292158-7540c2494485?q=80&w=1974&auto=format&fit=crop',
    liveUrl: '#',
    tags: ['Marketing', 'Animation', 'Branding'],
  },
  {
    title: 'Portfolio for "Jane Doe Photography"',
    description:
      'An elegant and minimalist portfolio to showcase high-resolution photography with a custom gallery.',
    imageUrl: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=2070&auto=format&fit=crop',
    liveUrl: '#',
    tags: ['Portfolio', 'CMS', 'Design'],
  },
  {
    title: 'SaaS Dashboard "Analytica"',
    description:
      'A complex data visualization dashboard for a SaaS product, focusing on clarity and performance.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    liveUrl: '#',
    tags: ['SaaS', 'Data Viz', 'React'],
  },
];

// --- Function to Create a Single Portfolio Card ---
function createPortfolioCard(item: typeof portfolioItems[0]): string {
  return `
    <div class="bg-secondary-bg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 group">
      <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2 text-primary-text">${item.title}</h3>
        <p class="text-slate-400 mb-4">${item.description}</p>
        <a href="${item.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-block bg-accent text-white font-semibold px-6 py-2 rounded-lg transition-transform duration-300 group-hover:bg-accent-hover group-hover:-translate-y-1">
          View Site
        </a>
      </div>
    </div>
  `;
}

// --- Main Function to Render All Cards ---
function renderPortfolio() {
  const portfolioGrid = document.getElementById('portfolio-grid');
  if (portfolioGrid) {
    portfolioGrid.innerHTML = portfolioItems
      .map(createPortfolioCard)
      .join('');
  } else {
    console.error('Portfolio grid element not found!');
  }
}

// --- Function to Animate Sections on Scroll ---
function initScrollAnimations() {
  const targets = document.querySelectorAll('.scroll-target');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(target => {
    observer.observe(target);
  });
}


// --- Run on DOM Content Load ---
document.addEventListener('DOMContentLoaded', () => {
  renderPortfolio();
  initScrollAnimations();
});