// ======= Product Data (20+ products) =======
const products = [
  {
    id: 'p1',
    name: 'Wireless Headphones',
    category: 'electronics',
    price: 59.99,
    description: 'High quality wireless headphones with noise cancellation.',
    images: [
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512499617640-c2f99912f1f7?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'p2',
    name: 'Smart Watch',
    category: 'electronics',
    price: 129.99,
    description: 'Smart watch with fitness tracking and notifications.',
    images: [
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'p3',
    name: 'Leather Jacket',
    category: 'fashion',
    price: 89.99,
    description: 'Stylish leather jacket for all seasons.',
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'p4',
    name: 'Sneakers',
    category: 'fashion',
    price: 49.99,
    description: 'Comfortable and trendy sneakers for everyday wear.',
    images: [
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'p5',
    name: 'Coffee Maker',
    category: 'home',
    price: 39.99,
    description: 'Brew your perfect cup with this easy-to-use coffee maker.',
    images: [
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517686469429-8bdbf3a7a1a7?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'p6',
    name: 'Blender',
    category: 'home',
    price: 29.99,
    description: 'Powerful blender for smoothies and shakes.',
    images: [
      'https://plus.unsplash.com/premium_photo-1717749801344-8ed38d55aead?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxlbmRlcnxlbnwwfHwwfHx8MA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1717749801344-8ed38d55aead?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxlbmRlcnxlbnwwfHwwfHx8MA%3D%3D',
    ],
  },
  {
    id: 'p7',
    name: 'Bluetooth Speaker',
    category: 'electronics',
    price: 25.99,
    description: 'Portable Bluetooth speaker with excellent sound quality.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512446733611-9099a758e0e0?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'p8',
    name: 'Denim Jeans',
    category: 'fashion',
    price: 39.99,
    description: 'Classic denim jeans with a comfortable fit.',
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'p9',
    name: 'Table Lamp',
    category: 'home',
    price: 19.99,
    description: 'Modern table lamp with adjustable brightness.',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'p10',
    name: 'Sunglasses',
    category: 'fashion',
    price: 15.99,
    description: 'UV protection sunglasses with stylish frames.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'p11',
    name: 'Microwave Oven',
    category: 'home',
    price: 89.99,
    description: 'Compact microwave oven with multiple power levels.',
    images: [
      'https://media.istockphoto.com/id/2163300084/photo/person-placing-bowl-with-soup-into-microwave-oven.webp?a=1&b=1&s=612x612&w=0&k=20&c=EK6wPakpamBwaCVxPNdxAbbYSBubYlXB_58sVPIVfw0=',
      'https://media.istockphoto.com/id/2163300084/photo/person-placing-bowl-with-soup-into-microwave-oven.webp?a=1&b=1&s=612x612&w=0&k=20&c=EK6wPakpamBwaCVxPNdxAbbYSBubYlXB_58sVPIVfw0=',
    ],
  },
  {
    id: 'p12',
    name: 'Fitness Tracker',
    category: 'electronics',
    price: 49.99,
    description: 'Track your daily activity and health metrics.',
    images: [
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'p13',
    name: 'Backpack',
    category: 'fashion',
    price: 29.99,
    description: 'Durable backpack with multiple compartments.',
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'p14',
    name: 'Electric Kettle',
    category: 'home',
    price: 24.99,
    description: 'Fast boiling electric kettle with auto shut-off.',
    images: [
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517686469429-8bdbf3a7a1a7?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'p15',
    name: 'Gaming Mouse',
    category: 'electronics',
    price: 39.99,
    description: 'Ergonomic gaming mouse with customizable buttons.',
    images: [
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512499617640-c2f99912f1f7?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'p16',
    name: 'Cotton T-Shirt',
    category: 'fashion',
    price: 12.99,
    description: 'Soft cotton t-shirt available in multiple colors.',
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'p17',
    name: 'Floor Rug',
    category: 'home',
    price: 59.99,
    description: 'Cozy floor rug to add warmth to your room.',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'p18',
    name: 'Wireless Charger',
    category: 'electronics',
    price: 19.99,
    description: 'Fast wireless charger compatible with most devices.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512446733611-9099a758e0e0?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'p19',
    name: 'Winter Scarf',
    category: 'fashion',
    price: 14.99,
    description: 'Warm and stylish scarf for cold weather.',
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'p20',
    name: 'Ceramic Vase',
    category: 'home',
    price: 22.99,
    description: 'Elegant ceramic vase for your flowers.',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80',
    ],
  },
];

// ======= DOM Elements =======
const productsGrid = document.getElementById('products-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('product-modal');
const modalCloseBtn = document.getElementById('modal-close');
const modalProductName = document.getElementById('modal-product-name');
const modalProductCategory = document.getElementById('modal-product-category');
const modalProductDescription = document.getElementById('modal-product-description');
const modalProductPrice = document.getElementById('modal-product-price');
const modalSwiperWrapper = document.getElementById('modal-swiper-wrapper');
const modalReviewsList = document.getElementById('modal-reviews-list');
const reviewForm = document.getElementById('review-form');
const reviewerNameInput = document.getElementById('reviewer-name');
const reviewRatingInput = document.getElementById('review-rating');
const reviewCommentInput = document.getElementById('review-comment');
const addToCartBtn = document.getElementById('add-to-cart-btn');
const buyNowBtn = document.getElementById('buy-now-btn');
const reviewsContainer = document.getElementById('reviews-container');

let swiperInstance = null;
let currentProductId = null;

// ======= Render Products =======
function renderProducts(category = 'all') {
  productsGrid.innerHTML = '';
  const filteredProducts =
    category === 'all'
      ? products
      : products.filter((p) => p.category === category);

  filteredProducts.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.images[0]}" alt="${product.name}" />
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="price">$${product.price.toFixed(2)}</p>
        <button class="view-details-btn" data-id="${product.id}">View Details</button>
      </div>
    `;
    productsGrid.appendChild(card);
  });
}

// ======= Filter Buttons Event =======
filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.category);
  });
});

// ======= Open Modal =======
function openModal(productId) {
  currentProductId = productId;
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  // Set modal text
  modalProductName.textContent = product.name;
  modalProductCategory.textContent = `Category: ${capitalize(product.category)}`;
  modalProductDescription.textContent = product.description;
  modalProductPrice.textContent = `$${product.price.toFixed(2)}`;

  // Clear previous slides
  modalSwiperWrapper.innerHTML = '';
  product.images.forEach((img) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `<img src="${img}" alt="${product.name}" />`;
    modalSwiperWrapper.appendChild(slide);
  });

 

  // Initialize or update Swiper
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
  }
  swiperInstance = new Swiper('.mySwiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Load reviews for this product
  loadModalReviews(productId);

  // Show modal
  modal.classList.remove('hidden');
}

// ======= Close Modal =======
modalCloseBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  reviewForm.reset();
});

// Close modal on outside click
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
    reviewForm.reset();
  }
});

// ======= Capitalize helper =======
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ======= Add event listeners to product cards (delegation) =======
productsGrid.addEventListener('click', (e) => {
  if (e.target.classList.contains('view-details-btn')) {
    const productId = e.target.dataset.id;
    openModal(productId);
  }
});

// ======= Reviews Handling =======

// Get reviews from localStorage
function getReviews() {
  const reviews = localStorage.getItem('productReviews');
  return reviews ? JSON.parse(reviews) : {};
}

// Save reviews to localStorage
function saveReviews(reviews) {
  localStorage.setItem('productReviews', JSON.stringify(reviews));
}

// Load reviews for modal product
function loadModalReviews(productId) {
  modalReviewsList.innerHTML = '';
  const reviews = getReviews();
  const productReviews = reviews[productId] || [];

  if (productReviews.length === 0) {
    modalReviewsList.innerHTML = '<p>No reviews yet. Be the first!</p>';
    return;
  }

  productReviews.forEach((r) => {
    const reviewEl = document.createElement('div');
    reviewEl.className = 'review-item';
    reviewEl.innerHTML = `
      <h4>${escapeHtml(r.name)}</h4>
      <div class="rating">${'⭐'.repeat(r.rating)}</div>
      <p>${escapeHtml(r.comment)}</p>
    `;
    modalReviewsList.appendChild(reviewEl);
  });
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Submit review form
reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = reviewerNameInput.value.trim();
  const rating = parseInt(reviewRatingInput.value);
  const comment = reviewCommentInput.value.trim();

  if (!name || !rating || !comment) return;

  const reviews = getReviews();
  if (!reviews[currentProductId]) reviews[currentProductId] = [];
  reviews[currentProductId].push({ name, rating, comment });
  saveReviews(reviews);

  loadModalReviews(currentProductId);
  reviewForm.reset();
});

// ======= Cart Handling =======

// Get cart from localStorage
function getCart() {
  const cart = localStorage.getItem('cartItems');
  return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem('cartItems', JSON.stringify(cart));
}

// Add product to cart
function addToCart(productId) {
  const cart = getCart();
  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  saveCart(cart);
  alert('Product added to cart!');
}

// Add to Cart button event
addToCartBtn.addEventListener('click', () => {
  addToCart(currentProductId);
});

/// Buy Now button event
buyNowBtn.addEventListener('click', () => {
  addToCart(currentProductId);
  // Redirect to cart page for checkout
  window.location.href = 'cart.html';
});

// ======= Render all reviews on Reviews Section (under products) =======
function renderAllReviews() {
  reviewsContainer.innerHTML = '';
  const reviews = getReviews();

  // For each product, show reviews summary
  products.forEach((product) => {
    const productReviews = reviews[product.id] || [];
    if (productReviews.length === 0) return; // skip if no reviews

    const container = document.createElement('div');
    container.className = 'review-item';
    container.innerHTML = `
      <h3>${product.name}</h3>
      ${productReviews
        .map(
          (r) => `
        <div>
          <strong>${escapeHtml(r.name)}</strong> - ${'⭐'.repeat(r.rating)}<br/>
          <em>${escapeHtml(r.comment)}</em>
        </div>
      `
        )
        .join('')}
      <hr/>
    `;
    reviewsContainer.appendChild(container);
  });
  // Preload sample reviews if none exist

}

// ======= Initialize =======
function init() {
  renderProducts();
  renderAllReviews();
}

init();