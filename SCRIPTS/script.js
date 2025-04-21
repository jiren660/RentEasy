const properties = [
  {
    name: 'The Minimalist House',
    location: 'Sta. Maria, Zamboanga City',
    price: '₱10,000 / mo',
    beds: 5,
    baths: 3,
    size: '120m²',
    images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwxfHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400', 'https://images.unsplash.com/photo-1564013799919-d80659be60ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwyfHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400']
  },
  {
    name: 'The Cozy Apartment',
    location: 'Divisoria, Zamboanga City',
    price: '₱12,000 / mo',
    beds: 2,
    baths: 1,
    size: '65m²',
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400', 'https://images.unsplash.com/photo-1604999333679-b86d54738716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwyfHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400']
  },
  {
    name: 'Best Starter House',
    location: 'Tumaga, Zamboanga City',
    price: '₱15,000 / mo',
    beds: 3,
    baths: 2,
    size: '90m²',
    images: ['https://images.unsplash.com/photo-1598228723793-52df1bd0a9ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw1fHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw3fHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400']
  },
  {
    name: 'Family Townhouse',
    location: 'Guiwan, Zamboanga City',
    price: '₱18,000 / mo',
    beds: 4,
    baths: 2,
    size: '110m²',
    images: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw4fHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwxMXx8aG91c2V8ZW58MHx8fHwxNjc5OTIwMDAw&ixlib=rb-4.0.3&q=80&w=400']
  },
  {
    name: 'Urban Studio Loft',
    location: 'Tetuan, Zamboanga City',
    price: '₱9,500 / mo',
    beds: 1,
    baths: 1,
    size: '45m²',
    images: ['https://images.unsplash.com/photo-1505691723518-36a5ac3be353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwzfHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400', 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw5fHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400']
  },
  {
    name: 'Luxury Villa',
    location: 'Baliwasan, Zamboanga City',
    price: '₱45,000 / mo',
    beds: 5,
    baths: 4,
    size: '300m²',
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZXxlbnwwfHx8fDE2Nzk5MjA0MDA&ixlib=rb-4.0.3&q=80&w=400', 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBob3VzZXxlbnwwfHx8fDE2Nzk5MjA0MDA&ixlib=rb-4.0.3&q=80&w=400']
  },
   {
    name: 'Modern Downtown Condo',
    location: 'City Proper, Zamboanga City',
    price: '₱22,000 / mo',
    beds: 2,
    baths: 2,
    size: '80m²',
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw0fHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400', 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw3fHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400']
  },
  {
    name: 'Quiet Suburban Home',
    location: 'Pasonanca, Zamboanga City',
    price: '₱16,500 / mo',
    beds: 3,
    baths: 2,
    size: '105m²',
    images: ['https://images.unsplash.com/photo-1558036117-15d82a90b9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwxMHx8aG91c2V8ZW58MHx8fHwxNjc5OTIwMDAw&ixlib=rb-4.0.3&q=80&w=400', 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwxNHx8aG91c2V8ZW58MHx8fHwxNjc5OTIwMDAw&ixlib=rb-4.0.3&q=80&w=400']
  }
];

let currentIndex = 0;
const cardsPerPage = window.innerWidth >= 992 ? 4 : (window.innerWidth >= 768 ? 3 : 2);

function renderProperties() {
  const container = document.getElementById('propertyList');
  if (!container) return;
  container.innerHTML = '';

  const numProperties = properties.length;
  if (numProperties === 0) return;

   currentIndex = (currentIndex % numProperties + numProperties) % numProperties;

  let propertiesToShow = [];
  for(let i = 0; i < cardsPerPage; i++) {
      let propIndex = (currentIndex + i) % numProperties;
      propertiesToShow.push(properties[propIndex]);
  }


  propertiesToShow.forEach((property, index) => {
    const card = document.createElement('div');
    card.className = `col-lg-${12/cardsPerPage} col-md-4 col-sm-6 mb-4`;

    const carouselId = `carousel-${currentIndex + index}`;

    card.innerHTML = `
      <div class="card shadow-sm h-100">
        <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
          <div class="carousel-inner">
            ${property.images.map((img, idx) => `
              <div class="carousel-item ${idx === 0 ? 'active' : ''}">
                <img src="${img}" class="d-block w-100 card-img-top" alt="${property.name} image ${idx + 1}">
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
          <button class="btn btn-success w-100">View Details</button>
        </div>
      </div>
    `;
    container.appendChild(card);

     const carouselElement = document.getElementById(carouselId);
     if (carouselElement) {
         new bootstrap.Carousel(carouselElement);
     }

  });
}

 renderProperties();

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % properties.length;
        renderProperties();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + properties.length) % properties.length;
        renderProperties();
    });
}

const sections = document.querySelectorAll('main section[id]');
const navLi = document.querySelectorAll('header nav ul li a');

window.addEventListener('scroll', ()=> {
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    })

    navLi.forEach( a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
    if (pageYOffset < 400) {
         navLi.forEach( a => a.classList.remove('active'));
         const homeLink = document.querySelector('header nav ul li a[href="#top"]');
         if(homeLink) homeLink.classList.add('active');
    }
});

  const filterButtons = document.querySelectorAll('.property-filters .btn-check');
  filterButtons.forEach(button => {
    button.addEventListener('change', () => {
    });
  });