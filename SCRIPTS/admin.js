document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("listingsChart").getContext("2d");
  const listingsChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ],
      datasets: [
        {
          label: "Listings",
          data: [20, 40, 35, 45, 30, 25, 50, 60, 55, 65, 70, 75],
          borderColor: "var(--main-color-dark)",
          backgroundColor: "rgba(119, 152, 140, 0.3)",
          fill: true,
          tension: 0.3,
          pointRadius: 5,
          pointHoverRadius: 7,
          borderWidth: 3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "var(--main-color-lighter)",
          },
          ticks: {
            color: "var(--main-color-dark)",
            stepSize: 10,
          },
        },
        x: {
          grid: {
            color: "var(--main-color-lighter)",
          },
          ticks: {
            color: "var(--main-color-dark)",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          backgroundColor: "var(--main-color-dark)",
          titleColor: "#f9fafb",
          bodyColor: "#f9fafb",
        },
      },
    },
  });

  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("main-content");
  const hamburgerBtn = document.getElementById("hamburgerBtn");

  function closeSidebar() {
    sidebar.classList.remove("show");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    mainContent.classList.remove("full-width");
  }

  function openSidebar() {
    sidebar.classList.add("show");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    mainContent.classList.add("full-width");
  }

  hamburgerBtn.addEventListener("click", () => {
    if (sidebar.classList.contains("show")) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  mainContent.addEventListener("click", () => {
    if (window.innerWidth < 992 && sidebar.classList.contains("show")) {
      closeSidebar();
    }
  });

  function logout() {
    sessionStorage.clear();
    localStorage.clear();
    
    const toast = new bootstrap.Toast(document.createElement('div'));
    toast.innerHTML = `
      <div class="toast-body bg-success text-white">
        Successfully logged out. Redirecting...
      </div>
    `;
    document.body.appendChild(toast._element);
    toast.show();
    
    setTimeout(() => {
      window.location.href = '/login.html';
    }, 1500);
  }

  const logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.addEventListener("click", () => {
    if (confirm('Are you sure you want to logout?')) {
      logout();
    }
  });

  const navLinks = document.querySelectorAll("#navLinks .nav-link");
  const sections = document.querySelectorAll(".content-section");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      const target = link.getAttribute("data-target");
      sections.forEach((section) => {
        if (section.id === target) {
          section.classList.remove("d-none");
          section.focus();
        } else {
          section.classList.add("d-none");
        }
      });
      if (window.innerWidth < 992) {
        closeSidebar();
      }
    });
  });

  let listings = [
    { 
      id: 1, 
      title: "Cozy Apartment Downtown", 
      status: "Active",
      price: "$1200/month",
      location: "Downtown",
      description: "Modern 1BR apartment"
    },
    { 
      id: 2, 
      title: "Spacious House in Suburbs", 
      status: "Pending",
      price: "$2500/month",
      location: "Suburbs",
      description: "3BR family home"
    }
  ];

  let users = [
    { 
      id: 1, 
      name: "John Doe", 
      role: "Renter",
      email: "john@example.com",
      phone: "555-0123",
      address: "123 Main St"
    },
    { 
      id: 2, 
      name: "Jane Smith", 
      role: "Landlord",
      email: "jane@example.com",
      phone: "555-0124",
      address: "456 Oak Ave"
    }
  ];

  let messages = [
    { id: 1, from: "John Doe", content: "Is the apartment still available?" },
    { id: 2, from: "Jane Smith", content: "Please update your listing." }
  ];

  let reviews = [
    { id: 1, user: "John Doe", rating: 5, comment: "Great place!" },
    { id: 2, user: "Jane Smith", rating: 4, comment: "Good communication." }
  ];

  function renderListings() {
    const container = document.getElementById("listingsList");
    container.innerHTML = "";
    
    if (listings.length === 0) {
      container.innerHTML = "<p>No listings available.</p>";
      return;
    }
    
    const table = document.createElement("table");
    table.className = "table table-hover";
    table.innerHTML = `
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Location</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    `;
    
    const tbody = table.querySelector("tbody");
    
    listings.forEach((listing) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${listing.title}</td>
        <td>${listing.price}</td>
        <td>${listing.location}</td>
        <td><span class="badge rounded-pill bg-${listing.status === 'Active' ? 'success' : 'warning'}">${listing.status}</span></td>
        <td>
          <div class="btn-group btn-group-sm">
            <button class="btn btn-primary" onclick="openListingModal(${listing.id})">View</button>
            ${listing.status === 'Pending' ? 
              `<button class="btn btn-success" onclick="approveListing(${listing.id})">Approve</button>` : ''}
            <button class="btn btn-danger" onclick="deleteListing(${listing.id})">Delete</button>
          </div>
        </td>
      `;
      tbody.appendChild(row);
    });
    
    container.appendChild(table);
  }

  function renderUsers() {
    const container = document.getElementById("usersList");
    container.innerHTML = "";
    
    if (users.length === 0) {
      container.innerHTML = "<p>No users available.</p>";
      return;
    }
    
    const table = document.createElement("table");
    table.className = "table table-hover";
    table.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    `;
    
    const tbody = table.querySelector("tbody");
    
    users.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.role}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="openUserModal(${user.id})">View Details</button>
        </td>
      `;
      tbody.appendChild(row);
    });
    
    container.appendChild(table);
  }

