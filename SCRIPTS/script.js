const properties = [
  {
    name: 'The Minimalist House',
    location: 'Sta. Maria, Zamboanga City',
    price: '₱10,000 / mo',
    beds: 5,
    baths: 3,
    size: '120m²',
    images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwxfHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400', 'https://images.unsplash.com/photo-1564013799919-d80659be60ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwyfHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400'],
    description: 'A beautifully designed minimalist house perfect for families seeking clean lines and open spaces. Features modern amenities and a quiet neighborhood.'
  },
  {
    name: 'The Cozy Apartment',
    location: 'Divisoria, Zamboanga City',
    price: '₱12,000 / mo',
    beds: 2,
    baths: 1,
    size: '65m²',
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400', 'https://images.unsplash.com/photo-1604999333679-b86d54738716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwyfHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400'],
    description: 'Charming and cozy apartment located in the heart of Divisoria. Ideal for couples or small families looking for convenience and comfort.'
  },
    {
    name: 'Best Starter House',
    location: 'Tumaga, Zamboanga City',
    price: '₱15,000 / mo',
    beds: 3,
    baths: 2,
    size: '90m²',
    images: ['https://images.unsplash.com/photo-1598228723793-52df1bd0a9ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw1fHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw3fHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400'],
    description: 'An excellent starter home in a growing neighborhood. Offers a good balance of space and affordability, perfect for new families.'
  },
  {
    name: 'Family Townhouse',
    location: 'Guiwan, Zamboanga City',
    price: '₱18,000 / mo',
    beds: 4,
    baths: 2,
    size: '110m²',
    images: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw4fHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwxMXx8aG91c2V8ZW58MHx8fHwxNjc5OTIwMDAw&ixlib=rb-4.0.3&q=80&w=400'],
    description: 'Spacious townhouse suitable for larger families. Located in Guiwan, offering convenience and access to local amenities.'
  },
  {
    name: 'Urban Studio Loft',
    location: 'Tetuan, Zamboanga City',
    price: '₱9,500 / mo',
    beds: 1,
    baths: 1,
    size: '45m²',
    images: ['https://images.unsplash.com/photo-1505691723518-36a5ac3be353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwzfHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400', 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw5fHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400'],
    description: 'Modern and stylish studio loft in Tetuan. Perfect for students or young professionals seeking a compact yet functional living space.'
  },
  {
    name: 'Luxury Villa',
    location: 'Baliwasan, Zamboanga City',
    price: '₱45,000 / mo',
    beds: 5,
    baths: 4,
    size: '300m²',
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZXxlbnwwfHx8fDE2Nzk5MjA0MDA&ixlib=rb-4.0.3&q=80&w=400', 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBob3VzZXxlbnwwfHx8fDE2Nzk5MjA0MDA&ixlib=rb-4.0.3&q=80&w=400'],
    description: 'Exquisite luxury villa in the prestigious Baliwasan area. Offers premium finishes, ample space, and stunning views. For those seeking the best.'
  },
   {
    name: 'Modern Downtown Condo',
    location: 'City Proper, Zamboanga City',
    price: '₱22,000 / mo',
    beds: 2,
    baths: 2,
    size: '80m²',
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw0fHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400', 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw3fHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400'],
    description: 'Sleek and modern condo unit in the heart of the city proper. Enjoy urban living with easy access to shops, restaurants, and offices.'
  },
  {
    name: 'Quiet Suburban Home',
    location: 'Pasonanca, Zamboanga City',
    price: '₱16,500 / mo',
    beds: 3,
    baths: 2,
    size: '105m²',
    images: ['https://images.unsplash.com/photo-1558036117-15d82a90b9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwxMHx8aG91c2V8ZW58MHx8fHwxNjc5OTIwMDAw&ixlib=rb-4.0.3&q=80&w=400', 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwxNHx8aG91c2V8ZW58MHx8fHwxNjc5OTIwMDAw&ixlib=rb-4.0.3&q=80&w=400'],
    description: 'A peaceful home located in the serene Pasonanca area, close to the park. Ideal for those who appreciate tranquility and nature.'
  }
];

let cardsPerPage = window.innerWidth >= 992 ? 4 : (window.innerWidth >= 768 ? 3 : 2);
let detailModalInstance = null;
let modalCarouselInstance = null;
let bookingModalInstance = null;

function initializeBookingModal() {
  const bookingModal = document.getElementById('bookingModal');
  if (bookingModal) {
    bookingModalInstance = new bootstrap.Modal(bookingModal);
  }
}

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('contact-landlord')) {
    alert('Connecting you with the landlord...');
  }
});

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('book-property')) {
    if (bookingModalInstance) {
      bookingModalInstance.show();
    }
  }
});


function renderProperties() {
  const container = document.getElementById('propertyList');
  if (!container) return;
  container.innerHTML = '';

  const numProperties = properties.length;
  if (numProperties === 0) {
    container.innerHTML = '<p class="col-12 text-center">No properties found.</p>';
    return;
  }

  cardsPerPage = window.innerWidth >= 992 ? 4 : (window.innerWidth >= 768 ? 3 : 2);

  properties.forEach((property, index) => {
    const card = document.createElement('div');
    const lgCols = Math.max(1, Math.floor(12 / cardsPerPage));
    const mdCols = window.innerWidth >= 768 ? 4 : 6;
    const smCols = 6;
    card.className = `col-lg-${lgCols} col-md-${mdCols} col-sm-${smCols} mb-4`;

    const uniquePropertyId = `prop-${index}`;
    const carouselId = `carousel-${uniquePropertyId}`;

    card.innerHTML = `
      <div class="card shadow-sm h-100">
        <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
          <div class="carousel-inner">
            ${property.images.map((img, idx) => `
              <div class="carousel-item ${idx === 0 ? 'active' : ''}">
                <img src="${img}" class="d-block w-100 card-img-top" alt="${property.name} image ${idx + 1}" style="height: 200px; object-fit: cover;">
              </div>
            `).join('')}
          </div>
          ${property.images.length > 1 ? `
          <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>` : ''}
        </div>
        <div class="card-body d-flex flex-column">
          <h6 class="text-muted mb-1">${property.price}</h6>
          <h5 class="card-title">${property.name}</h5>
          <p class="text-muted mb-2"><i class="fas fa-map-marker-alt me-1"></i>${property.location}</p>
          <div class="property-info d-flex justify-content-between mt-auto pt-2">
            <span><i class="fa fa-bed"></i> ${property.beds} Beds</span>
            <span><i class="fa fa-bath"></i> ${property.baths} Baths</span>
            <span><i class="fa fa-expand"></i> ${property.size}</span>
          </div>
        </div>
        <div class="card-footer bg-transparent border-top-0 text-center pb-3">
          <button class="btn btn-success w-100 view-details" data-index="${index}">View Details</button>
        </div>
      </div>
    `;
    container.appendChild(card);

    const carouselElement = document.getElementById(carouselId);
    if (carouselElement && typeof bootstrap !== 'undefined') {
      new bootstrap.Carousel(carouselElement, { interval: false });
    }
  });
}

function showPropertyDetails(index) {
  if (index < 0 || index >= properties.length) {
    console.error("Invalid property index:", index);
    return;
  }
  const property = properties[index];
  const modalElement = document.getElementById('propertyDetailModal');
  const modalPropertyName = document.getElementById('modalPropertyName');
  const modalCarouselInner = document.getElementById('modalCarouselInner');
  const modalPropertyPrice = document.getElementById('modalPropertyPrice');
  const modalPropertyLocation = document.getElementById('modalPropertyLocation');
  const modalPropertyBeds = document.getElementById('modalPropertyBeds');
  const modalPropertyBaths = document.getElementById('modalPropertyBaths');
  const modalPropertySize = document.getElementById('modalPropertySize');
  const modalPropertyDescription = document.getElementById('modalPropertyDescription');
  const modalCarouselElement = document.getElementById('modalPropertyCarousel');

  modalPropertyName.textContent = property.name;
  modalPropertyPrice.textContent = property.price;
  modalPropertyLocation.textContent = property.location;
  modalPropertyBeds.textContent = property.beds;
  modalPropertyBaths.textContent = property.baths;
  modalPropertySize.textContent = property.size;
  modalPropertyDescription.textContent = property.description || 'No description available.';

  modalCarouselInner.innerHTML = '';
  property.images.forEach((img, idx) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = `carousel-item ${idx === 0 ? 'active' : ''}`;
    itemDiv.innerHTML = `<img src="${img}" class="d-block w-100" alt="${property.name} image ${idx + 1}" style="max-height: 400px; object-fit: cover;">`;
    modalCarouselInner.appendChild(itemDiv);
  });

  const controls = modalCarouselElement.querySelectorAll('.carousel-control-prev, .carousel-control-next');
  if (property.images.length <= 1) {
    controls.forEach(control => control.style.display = 'none');
  } else {
    controls.forEach(control => control.style.display = 'block');
  }

  if (!detailModalInstance) {
    detailModalInstance = new bootstrap.Modal(modalElement);
  }
  if (modalCarouselInstance) {
    modalCarouselInstance.dispose();
  }
  if (property.images.length > 0 && typeof bootstrap !== 'undefined') {
    modalCarouselInstance = new bootstrap.Carousel(modalCarouselElement, { interval: 10000 });
  }

  detailModalInstance.show();
}

const propertyListContainer = document.getElementById('propertyList');
if (propertyListContainer) {
  propertyListContainer.addEventListener('click', (event) => {
    const button = event.target.closest('.view-details');
    if (button) {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

      if (isLoggedIn) {
        const propertyIndex = parseInt(button.getAttribute('data-index'), 10);
        if (!isNaN(propertyIndex)) {
          showPropertyDetails(propertyIndex);
        } else {
            console.error("Could not parse property index from button.");
        }
      } else {
        window.location.href = 'login.html';
      }
    }
  });
}

renderProperties();

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
if (nextBtn) nextBtn.style.display = 'none';
if (prevBtn) prevBtn.style.display = 'none';

const sections = document.querySelectorAll('main section[id]');
const navLi = document.querySelectorAll('header nav ul li a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= (sectionTop - 150)) {
      current = section.getAttribute('id');
    }
  })
  navLi.forEach(a => {
    a.classList.remove('active');
    const href = a.getAttribute('href');
    if (href === `#${current}`) {
      a.classList.add('active');
    }
  });
  if (pageYOffset < 400) {
    navLi.forEach(a => a.classList.remove('active'));
    const homeLink = document.querySelector('header nav ul li a[href="#top"]');
    if (homeLink) homeLink.classList.add('active');
  }
});

const filterButtons = document.querySelectorAll('.property-filters .btn-check');
filterButtons.forEach(button => {
  button.addEventListener('change', () => {
    console.log(`Filter changed: ${button.id} is ${button.checked}`);
  });
});

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const newCardsPerPage = window.innerWidth >= 992 ? 4 : (window.innerWidth >= 768 ? 3 : 2);
    if (newCardsPerPage !== cardsPerPage) {
      cardsPerPage = newCardsPerPage;
      renderProperties();
    }
  }, 250);
});

function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const loginSignupButtons = document.getElementById("loginSignupButtons");
  const userMenu = document.getElementById("userMenu");

  if (isLoggedIn) {
    if (loginSignupButtons) loginSignupButtons.classList.add("d-none");
    if (userMenu) userMenu.classList.remove("d-none");
  } else {
    if (loginSignupButtons) loginSignupButtons.classList.remove("d-none");
    if (userMenu) userMenu.classList.add("d-none");
  }
}

document.addEventListener('DOMContentLoaded', checkLoginStatus);

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    checkLoginStatus();
    location.reload();
  });
}

const currentYearSpan = document.getElementById('currentYear');
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

document.querySelectorAll('header nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId && targetId.length > 1) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = document.querySelector('header')?.offsetHeight || 0;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else if (targetId === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});