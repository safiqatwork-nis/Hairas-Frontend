const products = [
  ['Facial Tissue Box', '200 Pulls', 145, 'tissue'], ['Kitchen Towel Roll', '2 Ply, 2 Rolls', 260, 'kitchen'], ['Toilet Rolls', '4 Rolls Pack', 190, 'toilet'], ['Table Napkins', '100 Sheets', 120, 'napkins']
];
const headerStyles = document.createElement('link');
headerStyles.rel = 'stylesheet';
headerStyles.href = 'css/header-overrides.css';
document.head.appendChild(headerStyles);
const headerFixStyles = document.createElement('link');
headerFixStyles.rel = 'stylesheet';
headerFixStyles.href = 'css/header-fix.css';
document.head.appendChild(headerFixStyles);
const noticeStyles = document.createElement('link');
noticeStyles.rel = 'stylesheet';
noticeStyles.href = 'css/notice-icons.css';
document.head.appendChild(noticeStyles);
const headerCleanupStyles = document.createElement('link');
headerCleanupStyles.rel = 'stylesheet';
headerCleanupStyles.href = 'css/header-cleanup.css';
document.head.appendChild(headerCleanupStyles);
const heroStyles = document.createElement('link');
heroStyles.rel = 'stylesheet';
heroStyles.href = 'css/generated-heroes.css';
document.head.appendChild(heroStyles);
const productPhotoStyles = document.createElement('link');
productPhotoStyles.rel = 'stylesheet';
productPhotoStyles.href = 'css/real-products.css';
document.head.appendChild(productPhotoStyles);
const uploadedHeroStyles = document.createElement('link');
uploadedHeroStyles.rel = 'stylesheet';
uploadedHeroStyles.href = 'css/uploaded-hero.css';
document.head.appendChild(uploadedHeroStyles);
const wideHeroStyles = document.createElement('link');
wideHeroStyles.rel = 'stylesheet';
wideHeroStyles.href = 'css/hero-wide-fix.css';
document.head.appendChild(wideHeroStyles);
const footerStyles = document.createElement('link');
footerStyles.rel = 'stylesheet';
footerStyles.href = 'css/footer-improvements.css';
document.head.appendChild(footerStyles);
const transparentLogoStyles = document.createElement('link');
transparentLogoStyles.rel = 'stylesheet';
transparentLogoStyles.href = 'css/transparent-logo.css';
document.head.appendChild(transparentLogoStyles);
const contactReferenceStyles = document.createElement('link');
contactReferenceStyles.rel = 'stylesheet';
contactReferenceStyles.href = 'css/contact-reference.css';
document.head.appendChild(contactReferenceStyles);
const aboutReferenceStyles = document.createElement('link');
aboutReferenceStyles.rel = 'stylesheet';
aboutReferenceStyles.href = 'css/about-reference.css';
document.head.appendChild(aboutReferenceStyles);

// Shared site chrome: every page receives the same header and footer from this one template.
const currentPage = location.pathname.split('/').pop().toLowerCase() || 'index.html';
const activeLink = page => currentPage === page.toLowerCase() ? 'active' : '';
const globalHeader = `
  <a class="brand" href="index.html" aria-label="Hairas home"><strong>Hairas<sup>®</sup></strong><small>Hygiene &amp; Packaging</small></a>
  <button class="menu" type="button" aria-label="Open navigation">☰</button>
  <nav aria-label="Primary navigation">
    <a class="${activeLink('index.html')}" href="index.html">Home</a>
    <a class="${activeLink('Product.html')}" href="Product.html">Shop</a>
    <a class="${activeLink('About.html')}" href="About.html">About</a>
    <a class="${activeLink('Contact.html')}" href="Contact.html">Contact</a>
  </nav>
  <div class="head-actions">
    <label class="search"><input type="search" placeholder="Search for tissues, rolls, napkins..." aria-label="Search products"></label>
    <button class="icon-button" type="button" aria-label="Profile"></button>
    <button class="cart-button" type="button" aria-label="Cart"><b>0</b></button>
  </div>`;
const globalFooter = `
  <div class="footer-main">
    <div class="footer-brand"><a class="brand" href="index.html" aria-label="Hairas home"><strong>Hairas</strong><small>Hygiene &amp; Packaging</small></a><p>Thoughtful hygiene for everyday life.</p><p class="socials"></p></div>
    <div><b>Shop</b><a href="Product.html">Facial Tissues</a><a href="Product.html">Kitchen Towels</a><a href="Product.html">Toilet Rolls</a><a href="Product.html">Napkins</a><a href="Product.html">Wipes</a></div>
    <div><b>Business</b><a href="Contact.html">Bulk Orders</a><a href="Contact.html">Wholesale</a><a href="Contact.html">Private Label</a></div>
    <div><b>Help</b><a href="Contact.html">Delivery &amp; Returns</a><a href="Contact.html">Track Order</a><a href="Contact.html">Contact Us</a><a href="Contact.html">FAQs</a></div>
    <div><b>About</b><a href="About.html#who-we-are">Who we are</a><a href="About.html#founders-note">Founder's note</a><a href="About.html#our-mission">Our mission</a><a href="About.html#our-vision">Our vision</a></div>
  </div>
  <div class="footer-bottom"><span>© 2026 Hairas Hygiene &amp; Packaging. All rights reserved.</span><span>Made with ❤️ by <a class="nis6tech-link" href="https://nis6tech-ai.github.io/Nis6Tech/index.html" target="_blank" rel="noopener noreferrer">Nis6Tech</a></span><span>Privacy Policy　|　Terms &amp; Conditions</span></div>`;
document.querySelectorAll('header.header').forEach(header => { header.innerHTML = globalHeader; });
document.querySelectorAll('footer').forEach(footer => { footer.innerHTML = globalFooter; });
if (currentPage === 'about.html') {
  document.querySelector('main').innerHTML = `<div class="about-reference">
    <section class="about-ref-hero" id="our-story"><div class="about-hero-copy"><p class="eyebrow">OUR STORY</p><h1>Thoughtful<br>hygiene begins<br>with care.</h1><p>We make dependable everyday essentials for the places people live, work and gather.</p><div class="about-assurances"><span><svg viewBox="0 0 24 24"><path d="M20.5 3.5C13 4 7 7.5 5 14.5c-1 3.5 1 5.5 3.5 5 7-1.5 10.5-8 12-16zM4 21c4-4 7-6 11-8"/></svg>Kind to people<br>and the planet</span><span><svg viewBox="0 0 24 24"><path d="m12 2 8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z"/><path d="m9 12 2 2 4-5"/></svg>Hygienic<br>&amp; reliable</span><span><svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/></svg>Made for<br>everyday life</span></div></div><div class="about-hero-visual"><div class="about-care-note">Every space deserves a little more care.</div></div></section>
    <section class="about-quote"><blockquote>“Everyday essentials,<br>elevated by care.”</blockquote><div>Hairas Hygiene &amp; Packaging makes dependable tissue and hygiene products for homes, workplaces and institutions. We focus on everyday essentials that feel good to use, work consistently and fit seamlessly into modern life.</div></section>
    <section class="about-story" id="who-we-are"><div class="about-story-image"></div><div class="about-story-copy"><p class="eyebrow">OUR STORY CONTINUES</p><h2>Who we are</h2><p>We believe everyday hygiene can make a meaningful difference. At Hairas, we create high-quality, thoughtfully designed tissue and hygiene products that bring comfort, cleanliness and peace of mind to homes, workplaces and communities.</p><p>From everyday moments to busy environments, our products are made to be reliable, practical and a little more thoughtful — because care belongs in every space.</p></div></section>
    <section class="about-founder" id="founders-note"><div class="about-founder-copy"><p class="eyebrow">FOUNDER'S NOTE</p><h2>A note from our founder</h2><p>“Everyday care can make a meaningful difference. At Hairas, we focus on creating reliable hygiene products that bring comfort, cleanliness and peace of mind to homes, workplaces and communities. Thank you for being part of our journey towards a cleaner, brighter everyday.”</p><b>Founder, Hairas Hygiene &amp; Packaging</b></div><div class="about-founder-photo" role="img" aria-label="Founder of Hairas"></div></section>
    <section class="about-mission-grid"><article class="about-purpose-card mission" id="our-mission"><p class="eyebrow">OUR MISSION</p><h2>To make everyday hygiene more dependable, comfortable and thoughtful.</h2><p>We create high-quality, thoughtfully designed tissue and hygiene products that bring comfort and confidence to people’s daily lives.</p></article><article class="about-purpose-card vision" id="our-vision"><p class="eyebrow">OUR VISION</p><h2>To become a trusted everyday-care partner for homes and businesses.</h2><p>We strive to make thoughtful, reliable care more accessible for every home, workplace and institution, creating cleaner and healthier environments every day.</p></article></section>
    <section class="about-values"><div class="values-heading"><div><p class="eyebrow">OUR VALUES</p><h2>What we stand for</h2></div><p>These values guide every product we create and every decision we make.</p></div><div class="about-values-grid"><article class="about-value"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="5"/><path d="M9 13 7 22l5-3 5 3-2-9"/></svg><h3>Quality without compromise</h3><p>We focus on consistent quality and reliable performance in everything we make.</p></article><article class="about-value"><svg viewBox="0 0 24 24"><circle cx="8" cy="8" r="3"/><circle cx="17" cy="7" r="3"/><path d="M2 21v-3c0-3 2-5 6-5s6 2 6 5v3M14 14c4 0 7 2 7 6v1"/></svg><h3>People first</h3><p>We design for the real needs of people, bringing comfort and peace of mind.</p></article><article class="about-value"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M8 14a7 7 0 1 1 8 0c-1 1-1 2-1 2H9s0-1-1-2z"/></svg><h3>Better by design</h3><p>We keep improving with smarter, more sustainable solutions for modern lifestyles.</p></article><article class="about-value"><svg viewBox="0 0 24 24"><path d="M20.5 3.5C13 4 7 7.5 5 14.5c-1 3.5 1 5.5 3.5 5 7-1.5 10.5-8 12-16zM4 21c4-4 7-6 11-8"/></svg><h3>Responsible choices</h3><p>We choose materials and practices that are kinder to people and the planet.</p></article></div></section>
    <section class="newsletter about-newsletter"><div><h2>A little care, delivered to your inbox.</h2><p>Get product updates, useful tips and special offers.</p></div><form><input type="email" placeholder="Your email address" aria-label="Email address"><button class="btn primary" type="button">Subscribe</button></form></section>
  </div>`;
}
if (currentPage === 'about.html') {
  const aboutAnchors = {
    'Who we are': 'who-we-are',
    'A note from our founder': 'founders-note',
    'To make everyday hygiene more dependable, comfortable and thoughtful.': 'our-mission',
    'To become a trusted everyday-care partner for homes and businesses.': 'our-vision'
  };
  document.querySelectorAll('h2').forEach(heading => {
    const id = aboutAnchors[heading.textContent.trim()];
    if (id) heading.closest('section, div')?.setAttribute('id', id);
  });
}
document.querySelectorAll('.info-ticker .ticker-content').forEach(ticker => {
  ticker.innerHTML = '<span>Made with care for every day</span><span>•</span><span>Reliable hygiene for homes and workplaces</span><span>•</span><span>Designed for comfort, cleanliness and peace of mind</span><span>•</span><span>Made with care for every day</span>';
});
if (currentPage === 'contact.html') {
  const support = document.querySelector('.support');
  const connect = document.querySelector('.connect');
  const supportGrid = document.querySelector('.support-grid');
  if (supportGrid) {
    supportGrid.innerHTML = `
      <article><div class="support-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5C13 4 7 7.5 5 14.5c-1 3.5 1 5.5 3.5 5 7-1.5 10.5-8 12-16z"/><path d="M4 21c4-4 7-6 11-8"/></svg></div><h3>Product questions</h3><p>Need help choosing the right tissue, towel or napkin? We’ll guide you through softness, ply, pack size and the best option for your everyday needs.</p><a href="Product.html">Explore products　→</a></article>
      <article><div class="support-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 11 9 5 9-5M3 15l9 5 9-5"/></svg></div><h3>Bulk enquiries</h3><p>Planning supplies for an office, institution, retailer or event? Ask us about volume pricing, custom packaging and dependable recurring supply.</p><a href="Contact.html">Discuss your needs　→</a></article>
      <article><div class="support-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l1 13H4L5 8z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg></div><h3>Order support</h3><p>Need an availability update or help with an existing order? Our team can assist with dispatch details, tracking, delivery and product information.</p><a href="Contact.html">Get order help　→</a></article>`;
  }
  const nativeSelect = document.querySelector('.contact-form select');
  if (nativeSelect && !document.querySelector('.custom-contact-select')) {
    nativeSelect.classList.add('native-contact-select');
    const customSelect = document.createElement('div');
    customSelect.className = 'custom-contact-select';
    customSelect.innerHTML = `<button class="custom-select-trigger" type="button" aria-haspopup="listbox" aria-expanded="false">${nativeSelect.options[nativeSelect.selectedIndex].text}</button><ul class="custom-select-options" role="listbox">${Array.from(nativeSelect.options).map((option, index) => `<li><button type="button" role="option" data-value="${option.value}" aria-selected="${index === nativeSelect.selectedIndex}">${option.text}</button></li>`).join('')}</ul>`;
    nativeSelect.insertAdjacentElement('afterend', customSelect);
    const trigger = customSelect.querySelector('.custom-select-trigger');
    trigger.addEventListener('click', () => {
      const open = customSelect.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(open));
    });
    customSelect.querySelectorAll('[role="option"]').forEach(option => option.addEventListener('click', () => {
      nativeSelect.value = option.dataset.value;
      trigger.textContent = option.textContent;
      customSelect.querySelectorAll('[role="option"]').forEach(item => item.setAttribute('aria-selected', String(item === option)));
      customSelect.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    }));
    document.addEventListener('click', event => {
      if (!customSelect.contains(event.target)) {
        customSelect.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }
  if (connect) {
    connect.innerHTML = `
      <h2>Other ways to connect</h2>
      <article><div class="connect-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13v-2a8 8 0 0 1 16 0v2"/><path d="M4 12H3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v-7zM20 12h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v-7zM19 19c-1 2-3 3-6 3"/></svg></div><div><b>Customer care</b><p>Tell us how we can help. We're here for your questions, feedback and product support.</p></div></article>
      <article><div class="connect-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 12 3 3c1 1 2.5 1 3.5 0l5-5"/><path d="m14 8 2-2c1-1 2.5-1 3.5 0L23 9.5 16.5 16c-1 1-2.5 1-3.5 0L7 10"/><path d="m10 17-1 1c-.8.8-2 .8-2.8 0L1 12.8 6.8 7c.8-.8 2-.8 2.8 0L11 8.4"/></svg></div><div><b>Business &amp; bulk orders</b><p>For supply, wholesale and partnerships. Let's discuss your requirements and how we can work together.</p></div></article>
      <article><div class="connect-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></div><div><b>Follow along</b><p>Get product updates, care tips and little everyday inspiration.</p></div></article>
      <p class="socials"></p>`;
  }
  if (support && !document.querySelector('.contact-coverage')) {
    support.insertAdjacentHTML('afterend', `
      <section class="contact-coverage">
        <div class="coverage-map"><strong><span>● ● ●</span>Across India, a cleaner, brighter everyday.</strong></div>
        <div class="coverage-copy"><h2>Care, wherever you are.</h2><p>We’re proud to support homes, workplaces and partners across India with high-quality hygiene and packaging products. From everyday essentials to bulk solutions, we’re here to make thoughtful hygiene more accessible, wherever you are.</p><a class="btn outline" href="Contact.html">Explore business solutions　→</a></div>
      </section>
      <section class="contact-faq"><h2>A few helpful answers</h2><div class="contact-faq-grid">
        <article class="contact-faq-item"><button class="contact-faq-question" type="button" aria-expanded="false">How do I place a bulk order? <b>＋</b></button><div class="contact-faq-answer"><p>Send your product requirements, quantities and delivery location through our contact form. Our business team will review the request and contact you with availability, pricing and delivery details.</p></div></article>
        <article class="contact-faq-item"><button class="contact-faq-question" type="button" aria-expanded="false">Where can I track my order? <b>＋</b></button><div class="contact-faq-answer"><p>Once your order is dispatched, we’ll share the tracking details through your registered email address or phone number. You can also contact our support team with your order reference.</p></div></article>
        <article class="contact-faq-item"><button class="contact-faq-question" type="button" aria-expanded="false">Can I customise a business order? <b>＋</b></button><div class="contact-faq-answer"><p>Yes. Custom pack sizes, branding and recurring supply options may be available depending on the product and quantity. Share your requirements and our team will discuss the suitable options.</p></div></article>
      </div></section>
      <section class="newsletter contact-newsletter"><div><h2>Keep a little care close.</h2><p>Get product updates, useful tips and special offers, straight to your inbox.</p></div><form><input type="email" placeholder="Your email address" aria-label="Email address"><button class="btn primary" type="button">Join us</button></form></section>`);
  }
}

document.querySelectorAll('nav a').forEach(link => {
  if (link.textContent.trim() === 'Business') link.remove();
});

const icon = {
  delivery: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7z"/><circle cx="7" cy="18" r="1.7"/><circle cx="18" cy="18" r="1.7"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5C13 4 7 7.5 5 14.5c-1 3.5 1 5.5 3.5 5 7-1.5 10.5-8 12-16zM4 20c4-4 7-6 11-8"/></svg>',
  building: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V5l8-3v19M12 8h8v13M7 8h2m-2 4h2m-2 4h2m7-4h2m-2 4h2"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h4l1.5 4-2.5 1.5a15 15 0 0 0 7.5 7.5L17 13l4 1.5v4c0 1.2-1 2.1-2.2 2C10 19.5 4.5 14 3.5 5.2 3.4 4 4 3 5 3z"/></svg>'
};
document.querySelectorAll('.notice').forEach(notice => {
  notice.innerHTML = `<span class="notice-item">${icon.delivery}Free delivery on bulk orders</span><i class="notice-divider">•</i><span>Made for everyday hygiene</span><span class="notice-right"><span class="notice-item">${icon.leaf}Sustainable choices</span><i>|</i><span class="notice-item">${icon.building}For homes &amp; businesses</span><i>|</i><span class="notice-item">${icon.phone}Need help?</span></span>`;
});
document.querySelectorAll('.socials').forEach(socials => {
  socials.innerHTML = `<a class="social-link" href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a><a class="social-link" href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h3l.5-3H14V8.2c0-.9.3-1.6 1.7-1.6H18V4a23 23 0 0 0-2.1-.1c-2.2 0-3.8 1.3-3.8 3.9V10H9v3h3v8"/></svg></a>`;
});
document.querySelectorAll('.footer-bottom').forEach(bottom => {
  const items = bottom.querySelectorAll('span');
  if (items.length >= 2) {
    items[0].textContent = '© 2026 Hairas Hygiene & Packaging. All rights reserved.';
    items[1].innerHTML = 'Made with ❤️ by <a class="nis6tech-link" href="https://nis6tech-ai.github.io/Nis6Tech/index.html" target="_blank" rel="noopener noreferrer">Nis6Tech</a>';
  }
});
const grid = document.querySelector('#product-grid');
if (grid) grid.innerHTML = products.map(([name, detail, price, type]) => `<article class="product-card"><button class="heart">♡</button><div class="product-visual ${type}"></div><h3>${name}<small>(${detail})</small></h3><p class="rating">★★★★★ <small>4.8 (320)</small></p><strong>₹ ${price}</strong><button class="add">🛒　 Add to Cart</button></article>`).join('');
let cart = 0;
document.addEventListener('click', e => { if (e.target.closest('.add')) { cart++; document.querySelector('.cart-button b').textContent = cart; e.target.closest('.add').textContent = '✓　 Added to Cart'; } if (e.target.matches('.accordion button')) { e.target.classList.toggle('open'); e.target.querySelector('b').textContent = e.target.classList.contains('open') ? '−' : '+'; } const faqButton = e.target.closest('.contact-faq-question'); if (faqButton) { const item = faqButton.closest('.contact-faq-item'); const open = item.classList.toggle('open'); faqButton.setAttribute('aria-expanded', String(open)); faqButton.querySelector('b').textContent = open ? '−' : '＋'; }});
document.querySelector('.menu').addEventListener('click', () => document.querySelector('nav').classList.toggle('show'));

