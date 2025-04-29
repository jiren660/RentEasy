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

  const modal = new bootstrap.Modal(document.getElementById("modal"));
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const modalFooter = document.getElementById("modalFooter");

  function approveListing(listingId) {
    if (confirm('Are you sure you want to approve this listing?')) {
      const listing = listings.find(l => l.id === listingId);
      if (listing) {
        listing.status = 'Active';
        renderListings();
      }
    }
  }

  function deleteListing(listingId) {
    if (confirm('Are you sure you want to delete this listing?')) {
      listings = listings.filter(l => l.id !== listingId);
      renderListings();
    }
  }

  function openListingModal(listingId) {
    const listing = listings.find(l => l.id === listingId);
    if (!listing) return;

    modalTitle.textContent = "Listing Details";
    modalBody.innerHTML = `
      <div class="listing-details">
        <p><strong>Title:</strong> ${listing.title}</p>
        <p><strong>Price:</strong> ${listing.price}</p>
        <p><strong>Location:</strong> ${listing.location}</p>
        <p><strong>Status:</strong> ${listing.status}</p>
        <p><strong>Description:</strong> ${listing.description}</p>
      </div>
      <hr>
      <div class="mb-3">
        <label for="listingStatus" class="form-label">Change Status</label>
        <select class="form-select" id="listingStatus">
          <option value="Active" ${listing.status === "Active" ? "selected" : ""}>Active</option>
          <option value="Pending" ${listing.status === "Pending" ? "selected" : ""}>Pending</option>
          <option value="Inactive" ${listing.status === "Inactive" ? "selected" : ""}>Inactive</option>
        </select>
      </div>
    `;
    modalFooter.innerHTML = `
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary" id="saveListingBtn">Save Changes</button>
    `;
    document.getElementById("saveListingBtn").onclick = () => {
      listing.status = document.getElementById("listingStatus").value;
      renderListings();
      modal.hide();
    };
    modal.show();
  }

  function openUserModal(userId) {
    const user = users.find(u => u.id === userId);
    if (!user) return;

    modalTitle.textContent = "User Details";
    modalBody.innerHTML = `
      <div class="user-details">
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Role:</strong> ${user.role}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Address:</strong> ${user.address}</p>
      </div>
      <hr>
      <div class="mb-3">
        <label for="userRole" class="form-label">Change Role</label>
        <select class="form-select" id="userRole">
          <option value="Renter" ${user.role === "Renter" ? "selected" : ""}>Renter</option>
          <option value="Landlord" ${user.role === "Landlord" ? "selected" : ""}>Landlord</option>
          <option value="Admin" ${user.role === "Admin" ? "selected" : ""}>Admin</option>
        </select>
      </div>
    `;
    modalFooter.innerHTML = `
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary" id="saveUserBtn">Save Changes</button>
    `;
    document.getElementById("saveUserBtn").onclick = () => {
      user.role = document.getElementById("userRole").value;
      renderUsers();
      modal.hide();
    };
    modal.show();
  }

  document.getElementById("addListingBtn")?.addEventListener("click", () => {
    modalTitle.textContent = "Add New Listing";
    modalBody.innerHTML = `
      <form id="addListingForm">
        <div class="mb-3">
          <label for="listingTitle" class="form-label">Title</label>
          <input type="text" class="form-control" id="listingTitle" required />
        </div>
        <div class="mb-3">
          <label for="listingPrice" class="form-label">Price</label>
          <input type="text" class="form-control" id="listingPrice" required />
        </div>
        <div class="mb-3">
          <label for="listingLocation" class="form-label">Location</label>
          <input type="text" class="form-control" id="listingLocation" required />
        </div>
        <div class="mb-3">
          <label for="listingDescription" class="form-label">Description</label>
          <textarea class="form-control" id="listingDescription" rows="3" required></textarea>
        </div>
        <div class="mb-3">
          <label for="listingStatusNew" class="form-label">Status</label>
          <select class="form-select" id="listingStatusNew" required>
            <option value="Active">Active</option>
            <option value="Pending" selected>Pending</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </form>
    `;
    modalFooter.innerHTML = `
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
      <button type="submit" form="addListingForm" class="btn btn-primary">Add Listing</button>
    `;
    document.getElementById("addListingForm").onsubmit = (e) => {
      e.preventDefault();
      const newListing = {
        id: Date.now(),
        title: document.getElementById("listingTitle").value.trim(),
        price: document.getElementById("listingPrice").value.trim(),
        location: document.getElementById("listingLocation").value.trim(),
        description: document.getElementById("listingDescription").value.trim(),
        status: document.getElementById("listingStatusNew").value
      };
      listings.push(newListing);
      renderListings();
      modal.hide();
    };
    modal.show();
  });

  renderListings();
  renderUsers();
});

