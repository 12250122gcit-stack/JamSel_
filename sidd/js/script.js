/* =====================================================
   JAMSEL COSMETICS — Shared JavaScript
   Works across all pages (multi-page architecture)
   ===================================================== */

// ============ PRODUCT DATA ============
const products = [
    {
        id: 1, name: "Velvet Rose Lipstick", category: "lipstick", price: 24.99, originalPrice: 32.99,
        image: "images/product_lipstick.png", rating: 4.8, reviews: 124, badge: "bestseller",
        isNew: false, isSale: true,
        description: "A luxuriously creamy matte lipstick in a universally flattering rose shade. Enriched with vitamin E and jojoba oil for long-lasting hydration and a velvety smooth finish that lasts up to 12 hours.",
        ingredients: "Ricinus Communis Seed Oil, Candelilla Wax, Isononyl Isononanoate, Vitamin E, Jojoba Oil, Iron Oxides, Rose Extract",
        shades: ["#C07070", "#B85C5C", "#D4899F", "#A0524D", "#8B4453"]
    },
    {
        id: 2, name: "Silk Glow Foundation", category: "foundation", price: 38.99, originalPrice: null,
        image: "images/product_foundation.png", rating: 4.9, reviews: 89, badge: "bestseller",
        isNew: false, isSale: false,
        description: "A lightweight, buildable foundation that melts into skin for a natural dewy finish. Infused with hyaluronic acid and SPF 30, it provides flawless coverage while keeping your skin hydrated all day long.",
        ingredients: "Water, Dimethicone, Glycerin, Hyaluronic Acid, Titanium Dioxide, Niacinamide, Zinc Oxide, Vitamin C",
        shades: ["#F5DEB3", "#DEB887", "#D2B48C", "#C8A882", "#A0845C"]
    },
    {
        id: 3, name: "Hydra Bloom Serum", category: "serum", price: 45.99, originalPrice: 58.99,
        image: "images/product_serum.png", rating: 4.9, reviews: 156, badge: "bestseller",
        isNew: false, isSale: true,
        description: "Our signature water-drop serum powered by triple hyaluronic acid complex. Delivers intense hydration deep into the skin, reducing fine lines and giving you a radiant, dewy glow from morning to night.",
        ingredients: "Aqua, Hyaluronic Acid (3 molecular weights), Niacinamide, Vitamin C, Rose Water, Aloe Vera, Glycerin, Squalane",
        shades: []
    },
    {
        id: 4, name: "Dew Drop Moisturizer", category: "moisturizer", price: 32.99, originalPrice: null,
        image: "images/product_moisturizer.png", rating: 4.7, reviews: 98, badge: null,
        isNew: false, isSale: false,
        description: "A cloud-soft gel-cream moisturizer that locks in 24-hour hydration. Formulated with ceramides and botanical extracts, it strengthens your skin barrier while leaving a silky, non-greasy finish.",
        ingredients: "Water, Ceramide Complex, Shea Butter, Squalane, Rosehip Oil, Aloe Vera Extract, Green Tea Extract, Vitamin E",
        shades: []
    },
    {
        id: 5, name: "Pure Petal Cleanser", category: "cleanser", price: 22.99, originalPrice: null,
        image: "images/product_cleanser.png", rating: 4.6, reviews: 73, badge: null,
        isNew: true, isSale: false,
        description: "A gentle foaming cleanser that removes makeup and impurities without stripping natural moisture. Infused with rose petal extract and chamomile for a soothing, spa-like cleansing experience.",
        ingredients: "Water, Cocamidopropyl Betaine, Rose Petal Extract, Chamomile Extract, Glycerin, Aloe Vera, Vitamin B5, Citric Acid",
        shades: []
    },
    {
        id: 6, name: "Solar Shield SPF 50", category: "sunscreen", price: 28.99, originalPrice: 35.99,
        image: "images/product_moisturizer.png", rating: 4.5, reviews: 67, badge: null,
        isNew: true, isSale: true,
        description: "A weightless, invisible sunscreen with SPF 50+ and PA++++. Blends seamlessly into all skin tones with zero white cast. Water-resistant formula that doubles as a hydrating primer.",
        ingredients: "Water, Homosalate, Octisalate, Zinc Oxide, Niacinamide, Hyaluronic Acid, Vitamin E, Centella Asiatica Extract",
        shades: []
    },
    {
        id: 7, name: "Starlight Eye Palette", category: "eye-makeup", price: 36.99, originalPrice: null,
        image: "images/product_lipstick.png", rating: 4.8, reviews: 112, badge: "bestseller",
        isNew: false, isSale: false,
        description: "A luxurious 12-shade eyeshadow palette featuring a curated mix of mattes, shimmers, and metallics in rose-gold, champagne, and bronze tones. Ultra-pigmented and blendable for everyday glam.",
        ingredients: "Mica, Talc, Dimethicone, Magnesium Stearate, Phenoxyethanol, Iron Oxides, Titanium Dioxide, Tin Oxide",
        shades: ["#E8C8B0", "#D4A084", "#C9A96E", "#B8860B", "#8B6F5C", "#A0524D"]
    },
    {
        id: 8, name: "Radiance Glow Set", category: "skincare-set", price: 89.99, originalPrice: 119.99,
        image: "images/products_flatlay.png", rating: 4.9, reviews: 201, badge: "bestseller",
        isNew: false, isSale: true,
        description: "Our best-selling skincare ritual in one beautiful gift set. Includes: Hydra Bloom Serum, Dew Drop Moisturizer, Pure Petal Cleanser, and a bonus Rose Water Mist. The complete glow routine.",
        ingredients: "See individual product pages for full ingredient lists.",
        shades: []
    },
    {
        id: 9, name: "Matte Luxe Lipstick", category: "lipstick", price: 21.99, originalPrice: null,
        image: "images/product_lipstick.png", rating: 4.6, reviews: 88, badge: null,
        isNew: true, isSale: false,
        description: "A transfer-proof matte lipstick with intense colour payoff. Fortified with argan oil to keep lips soft and comfortable. Available in 5 stunning nude and berry shades.",
        ingredients: "Isododecane, Dimethicone, Trimethylsiloxysilicate, Argan Oil, Vitamin E, Iron Oxides, Red 7 Lake",
        shades: ["#C48080", "#A0524D", "#8B4453", "#B5687E", "#D4899F"]
    },
    {
        id: 10, name: "Crystal Clear Toner", category: "cleanser", price: 26.99, originalPrice: null,
        image: "images/product_serum.png", rating: 4.5, reviews: 54, badge: null,
        isNew: true, isSale: false,
        description: "A gentle exfoliating toner with AHA and BHA to refine pores and brighten skin texture. pH-balanced formula with witch hazel and calendula for calm, clear, glowing skin.",
        ingredients: "Water, Glycolic Acid, Salicylic Acid, Witch Hazel, Calendula Extract, Panthenol, Allantoin, Citric Acid",
        shades: []
    },
    {
        id: 11, name: "Golden Hour Highlighter", category: "eye-makeup", price: 29.99, originalPrice: null,
        image: "images/product_foundation.png", rating: 4.7, reviews: 95, badge: null,
        isNew: false, isSale: false,
        description: "A baked powder highlighter in a warm champagne-gold shade. Finely milled for an ethereal, lit-from-within glow. Can be used on cheekbones, brow bone, and décolletage.",
        ingredients: "Mica, Talc, Synthetic Fluorphlogopite, Dimethicone, Iron Oxides, Tin Oxide, Titanium Dioxide",
        shades: ["#E8D5A8", "#C9A96E", "#F5DEB3"]
    },
    {
        id: 12, name: "Moisture Lock Cream", category: "moisturizer", price: 34.99, originalPrice: 42.99,
        image: "images/product_moisturizer.png", rating: 4.6, reviews: 76, badge: null,
        isNew: false, isSale: true,
        description: "A rich overnight cream that deeply nourishes and repairs skin while you sleep. Contains retinol, peptides, and squalane for firmer, plumper skin by morning.",
        ingredients: "Water, Squalane, Retinol, Peptide Complex, Shea Butter, Jojoba Oil, Vitamin E, Ceramide NP, Hyaluronic Acid",
        shades: []
    }
];

const sampleReviews = [
    { author: "Sonam P.", stars: 5, text: "Absolutely love this product! It's become a staple in my beauty routine. The quality is incredible.", date: "2 weeks ago" },
    { author: "Deki W.", stars: 5, text: "Beautiful packaging and even more beautiful results. My skin has never looked better!", date: "1 month ago" },
    { author: "Tshering L.", stars: 4, text: "Great product, very hydrating. I just wish they had more shade options. Will definitely repurchase.", date: "3 weeks ago" },
    { author: "Pema K.", stars: 5, text: "This is the best cosmetic product I've ever used. Worth every penny. Jamsel never disappoints!", date: "2 months ago" },
    { author: "Karma D.", stars: 4, text: "Lovely formula and lasts all day. The scent is so gentle and pleasant. Highly recommend.", date: "1 month ago" }
];

// ============ PATH DETECTION ============
// Detect if we're in root or pages/ for correct relative links
const _inPages = window.location.pathname.includes('/pages/');
const pagePath = _inPages ? '' : 'pages/';   // prefix for linking to pages
const imgPath = _inPages ? '../images/' : 'images/';  // prefix for images

// ============ CART & WISHLIST STATE ============
let cart = JSON.parse(localStorage.getItem('jamsel_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('jamsel_wishlist')) || [];

// ============ INIT (runs on every page) ============
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initStickyHeader();
    initSearch();
    initBackToTop();
    initModals();
    initFormListeners();
    updateCartBadge();
    updateWishlistBadge();
});

// ============ LOADING SCREEN ============
function initLoader() {
    const loader = document.getElementById('loading-screen');
    if (!loader) return;
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => loader.remove(), 600);
    }, 1500);
}

// ============ STICKY HEADER ============
function initStickyHeader() {
    const header = document.getElementById('main-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    const hamburger = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
        });
    }
}

// ============ SEARCH ============
function initSearch() {
    const toggleBtn = document.getElementById('search-toggle-btn');
    const searchBar = document.getElementById('search-bar');
    const closeBtn = document.getElementById('search-close-btn');
    const input = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');
    if (!toggleBtn || !searchBar) return;

    toggleBtn.addEventListener('click', () => {
        searchBar.classList.toggle('open');
        if (searchBar.classList.contains('open')) setTimeout(() => input.focus(), 300);
    });
    closeBtn.addEventListener('click', () => {
        searchBar.classList.remove('open');
        input.value = '';
        resultsContainer.innerHTML = '';
    });
    input.addEventListener('input', () => {
        const q = input.value.toLowerCase().trim();
        if (q.length < 2) { resultsContainer.innerHTML = ''; return; }
        const results = products.filter(p =>
            p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
        );
        if (results.length === 0) {
            resultsContainer.innerHTML = '<p style="padding:1rem;color:#999;text-align:center;">No products found</p>';
            return;
        }
        resultsContainer.innerHTML = results.map(p => `
            <div class="search-result-item" onclick="window.location.href='${pagePath}product-detail.html?id=${p.id}'">
                <img src="${imgPath}${p.image.replace('images/','')}" alt="${p.name}">
                <div class="sr-info"><h4>${p.name}</h4><p>Nu.${p.price.toFixed(2)}</p></div>
            </div>
        `).join('');
    });
}

// ============ BACK TO TOP ============
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 600));
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ============ MODALS ============
function initModals() {
    // Quick View
    const qvModal = document.getElementById('quick-view-modal');
    const qvClose = document.getElementById('modal-close');
    if (qvModal && qvClose) {
        qvClose.addEventListener('click', closeQuickView);
        qvModal.addEventListener('click', e => { if (e.target === e.currentTarget) closeQuickView(); });
    }
    // Login
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const loginClose = document.getElementById('login-modal-close');
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', () => loginModal.classList.add('open'));
        loginClose.addEventListener('click', () => loginModal.classList.remove('open'));
        loginModal.addEventListener('click', e => { if (e.target === e.currentTarget) loginModal.classList.remove('open'); });
    }
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeQuickView();
            if (loginModal) loginModal.classList.remove('open');
        }
    });
}

// ============ FORM LISTENERS (newsletter, login, contact) ============
function initFormListeners() {
    const nf = document.getElementById('newsletter-form');
    if (nf) nf.addEventListener('submit', e => { e.preventDefault(); showToast('Thank you for subscribing! 💌', 'success'); e.target.reset(); });
    const fnf = document.getElementById('footer-newsletter-form');
    if (fnf) fnf.addEventListener('submit', e => { e.preventDefault(); showToast('Thank you for subscribing! 💌', 'success'); e.target.reset(); });
    const lf = document.getElementById('login-form');
    if (lf) lf.addEventListener('submit', e => { e.preventDefault(); showToast('Login is a UI demo only', 'success'); document.getElementById('login-modal').classList.remove('open'); });
    const cf = document.getElementById('contact-form');
    if (cf) cf.addEventListener('submit', e => { e.preventDefault(); showToast("Message sent! We'll get back to you soon. 📧", 'success'); e.target.reset(); });
}

// ============ PRODUCT CARD RENDERING ============
function renderProductGrid(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = items.map(p => createProductCard(p)).join('');
}

function createProductCard(product) {
    const isWishlisted = wishlist.includes(product.id);
    let badgeHTML = '';
    if (product.isSale && product.originalPrice) {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        badgeHTML = `<span class="product-badge sale">${discount}% Off</span>`;
    } else if (product.isNew) {
        badgeHTML = `<span class="product-badge new">New</span>`;
    } else if (product.badge === 'bestseller') {
        badgeHTML = `<span class="product-badge bestseller">Best Seller</span>`;
    }
    const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '');
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-card-image">
                ${badgeHTML}
                <img src="${imgPath}${product.image.replace('images/','')}" alt="${product.name}" loading="lazy">
                <div class="product-card-actions">
                    <button class="product-action-btn ${isWishlisted ? 'wishlisted' : ''}" onclick="toggleWishlist(${product.id})" title="Wishlist">${isWishlisted ? '♥' : '♡'}</button>
                    <button class="product-action-btn" onclick="openQuickView(${product.id})" title="Quick View">👁</button>
                </div>
            </div>
            <div class="product-card-info">
                <p class="product-card-category">${product.category.replace('-', ' ')}</p>
                <a href="${pagePath}product-detail.html?id=${product.id}" class="product-card-name">${product.name}</a>
                <p class="product-card-rating">${stars} <span>(${product.reviews})</span></p>
                <div class="product-card-price">
                    <span class="current-price">Nu.${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="old-price">Nu.${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="product-card-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
}

// ============ QUICK VIEW ============
function openQuickView(id) {
    const p = products.find(pr => pr.id === id);
    if (!p) return;
    const content = document.getElementById('quick-view-content');
    if (!content) return;
    content.innerHTML = `
        <div class="quick-view-grid">
            <div class="qv-image"><img src="${imgPath}${p.image.replace('images/','')}" alt="${p.name}"></div>
            <div class="qv-info">
                <h2>${p.name}</h2>
                <p class="qv-price">Nu.${p.price.toFixed(2)} ${p.originalPrice ? `<span style="text-decoration:line-through;color:#999;font-size:0.9rem;">Nu.${p.originalPrice.toFixed(2)}</span>` : ''}</p>
                <p class="qv-desc">${p.description}</p>
                <button class="btn-primary" onclick="addToCart(${p.id}); closeQuickView();">Add to Cart</button>
                <a href="${pagePath}product-detail.html?id=${p.id}" class="btn-outline" style="margin-top:0.5rem;display:inline-block;text-align:center;width:100%;">View Details</a>
            </div>
        </div>
    `;
    document.getElementById('quick-view-modal').classList.add('open');
}

function closeQuickView() {
    const m = document.getElementById('quick-view-modal');
    if (m) m.classList.remove('open');
}

// ============ CART FUNCTIONS ============
function addToCart(id) {
    addToCartSilent(id);
    updateCartBadge();
    showToast('Added to cart!', 'success');
}

function addToCartSilent(id) {
    const existing = cart.find(item => item.id === id);
    if (existing) { existing.qty += 1; } else { cart.push({ id, qty: 1 }); }
    saveCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartBadge();
    if (typeof renderCart === 'function') renderCart();
    showToast('Removed from cart');
}

function updateCartQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) { removeFromCart(id); return; }
    saveCart();
    updateCartBadge();
    if (typeof renderCart === 'function') renderCart();
}

function saveCart() { localStorage.setItem('jamsel_cart', JSON.stringify(cart)); }

function updateCartBadge() {
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
    const badge = document.getElementById('cart-count');
    if (badge) { badge.textContent = total; badge.classList.toggle('show', total > 0); }
}

function getCartTotal() {
    return cart.reduce((sum, item) => {
        const p = products.find(pr => pr.id === item.id);
        return sum + (p ? p.price * item.qty : 0);
    }, 0);
}

// ============ WISHLIST FUNCTIONS ============
function toggleWishlist(id) {
    const idx = wishlist.indexOf(id);
    if (idx > -1) { wishlist.splice(idx, 1); showToast('Removed from wishlist'); }
    else { wishlist.push(id); showToast('Added to wishlist!', 'success'); }
    localStorage.setItem('jamsel_wishlist', JSON.stringify(wishlist));
    updateWishlistBadge();
    // Refresh any visible product grids on the current page
    document.querySelectorAll('.products-grid').forEach(grid => {
        if (grid.children.length > 0) {
            // Determine which products are shown and re-render
            const ids = Array.from(grid.querySelectorAll('.product-card')).map(c => parseInt(c.dataset.id));
            const items = products.filter(p => ids.includes(p.id));
            grid.innerHTML = items.map(p => createProductCard(p)).join('');
        }
    });
}

function updateWishlistBadge() {
    const badge = document.getElementById('wishlist-count');
    if (badge) { badge.textContent = wishlist.length; badge.classList.toggle('show', wishlist.length > 0); }
}

// ============ BUNDLE ADD TO CART ============
function addBundleToCart(bundleId) {
    if (bundleId === 'bundle1') { addToCartSilent(3); addToCartSilent(4); addToCartSilent(5); }
    else if (bundleId === 'bundle2') { addToCartSilent(1); addToCartSilent(2); addToCartSilent(7); addToCartSilent(11); }
    updateCartBadge();
    showToast('Bundle added to cart! 🎉', 'success');
}

// ============ TESTIMONIAL SLIDER ============
function initTestimonialSlider() {
    const track = document.getElementById('testimonial-track');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    if (!track || !prevBtn || !nextBtn) return;
    let idx = 0;
    function vis() { return window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3; }
    function update() {
        const cards = track.querySelectorAll('.testimonial-card');
        const max = Math.max(0, cards.length - vis());
        if (idx > max) idx = max;
        const gap = 24;
        const w = cards[0]?.offsetWidth || 300;
        track.style.transform = `translateX(-${idx * (w + gap)}px)`;
    }
    prevBtn.addEventListener('click', () => { idx = Math.max(0, idx - 1); update(); });
    nextBtn.addEventListener('click', () => {
        const max = Math.max(0, track.querySelectorAll('.testimonial-card').length - vis());
        idx = Math.min(max, idx + 1); update();
    });
    window.addEventListener('resize', update);
    setInterval(() => {
        const max = Math.max(0, track.querySelectorAll('.testimonial-card').length - vis());
        idx = idx >= max ? 0 : idx + 1; update();
    }, 5000);
}

// ============ TOAST ============
function showToast(message, type = '') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}
