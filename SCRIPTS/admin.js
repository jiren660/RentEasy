document.addEventListener("DOMContentLoaded", function () {
    // Chart.js line chart for Listings by Location
    const ctx = document.getElementById("listingsChart").getContext("2d");
    const listingsChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
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
  
    // Sidebar toggle for mobile
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
  
    // Close sidebar on clicking outside on mobile
    mainContent.addEventListener("click", () => {
      if (window.innerWidth < 992 && sidebar.classList.contains("show")) {
        closeSidebar();
      }
    });
  
    // Logout button functionality
    const logoutBtn = document.getElementById("logoutBtn");
    logoutBtn.addEventListener("click", () => {
      // Clear session/local storage or cookies here if needed
      alert("You have been logged out.");
      // Redirect to login page or homepage
      window.location.href = "/login"; // Change this URL as needed
    });
  
    // Navigation functionality
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
  
    // Data storage for listings, users, messages, reviews
    let listings = [
      { id: 1, title: "Cozy Apartment Downtown", status: "Active" },
      { id: 2, title: "Spacious House in Suburbs", status: "Pending" },
    ];
    let users = [
      { id: 1, name: "John Doe", role: "Renter" },
      { id: 2, name: "Jane Smith", role: "Landlord" },
    ];
    let messages = [
      { id: 1, from: "John Doe", content: "Is the apartment still available?" },
      { id: 2, from: "Jane Smith", content: "Please update your listing." },
    ];
    let reviews = [
      { id: 1, user: "John Doe", rating: 5, comment: "Great place!" },
      { id: 2, user: "Jane Smith", rating: 4, comment: "Good communication." },
    ];
  
    // Utility to render listings
    function renderListings() {
      const container = document.getElementById("listingsList");
      container.innerHTML = "";
      if (listings.length === 0) {
        container.innerHTML = "<p>No listings available.</p>";
        return;
      }
      const listGroup = document.createElement("div");
      listGroup.className = "list-group";
      listings.forEach((listing) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className =
          "list-group-item list-group-item-action d-flex justify-content-between align-items-center";
        item.textContent = listing.title;
        const badge = document.createElement("span");
        badge.className = "badge rounded-pill";
        badge.style.backgroundColor = "var(--main-color)";
        badge.style.color = "white";
        badge.textContent = listing.status;
        item.appendChild(badge);
        item.addEventListener("click", () => {
          openListingModal(listing);
        });
        listGroup.appendChild(item);
      });
      container.appendChild(listGroup);
    }
  
    // Utility to render users
    function renderUsers() {
      const container = document.getElementById("usersList");
      container.innerHTML = "";
      if (users.length === 0) {
        container.innerHTML = "<p>No users available.</p>";
        return;
      }
      const listGroup = document.createElement("div");
      listGroup.className = "list-group";
      users.forEach((user) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className =
          "list-group-item list-group-item-action d-flex justify-content-between align-items-center";
        item.textContent = user.name;
        const badge = document.createElement("span");
        badge.className = "badge rounded-pill";
        badge.style.backgroundColor = "var(--main-color-light)";
        badge.style.color = "var(--main-color-dark)";
        badge.textContent = user.role;
        item.appendChild(badge);
        item.addEventListener("click", () => {
          openUserModal(user);
        });
        listGroup.appendChild(item);
      });
      container.appendChild(listGroup);
    }
  
    // Utility to render messages
    function renderMessages() {
      const container = document.getElementById("messagesList");
      container.innerHTML = "";
      if (messages.length === 0) {
        container.innerHTML = "<p>No messages available.</p>";
        return;
      }
      const listGroup = document.createElement("div");
      listGroup.className = "list-group";
      messages.forEach((msg) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "list-group-item list-group-item-action";
        item.innerHTML = `<strong>From:</strong> ${msg.from}<br/><small>${msg.content}</small>`;
        item.addEventListener("click", () => {
          openMessageModal(msg);
        });
        listGroup.appendChild(item);
      });
      container.appendChild(listGroup);
    }
  
    // Utility to render reviews
    function renderReviews() {
      const container = document.getElementById("reviewsList");
      container.innerHTML = "";
      if (reviews.length === 0) {
        container.innerHTML = "<p>No reviews available.</p>";
        return;
      }
      const listGroup = document.createElement("div");
      listGroup.className = "list-group";
      reviews.forEach((review) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "list-group-item list-group-item-action";
        item.innerHTML = `<strong>${review.user}</strong> - Rating: ${review.rating}/5<br/><small>${review.comment}</small>`;
        item.addEventListener("click", () => {
          openReviewModal(review);
        });
        listGroup.appendChild(item);
      });
      container.appendChild(listGroup);
    }
  
    // Modal helpers
    const modal = new bootstrap.Modal(document.getElementById("modal"));
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");
    const modalFooter = document.getElementById("modalFooter");
  
    // Listing modal
    function openListingModal(listing) {
      modalTitle.textContent = "Listing Details";
      modalBody.innerHTML = `
        <p><strong>Title:</strong> ${listing.title}</p>
        <p><strong>Status:</strong> ${listing.status}</p>
        <div class="mb-3">
          <label for="listingStatus" class="form-label">Change Status</label>
          <select class="form-select" id="listingStatus">
            <option value="Active" ${
              listing.status === "Active" ? "selected" : ""
            }>Active</option>
            <option value="Pending" ${
              listing.status === "Pending" ? "selected" : ""
            }>Pending</option>
            <option value="Inactive" ${
              listing.status === "Inactive" ? "selected" : ""
            }>Inactive</option>
          </select>
        </div>
      `;
      modalFooter.innerHTML = `
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="saveListingBtn">Save</button>
      `;
      document.getElementById("saveListingBtn").onclick = () => {
        const newStatus = document.getElementById("listingStatus").value;
        listing.status = newStatus;
        renderListings();
        modal.hide();
      };
      modal.show();
    }
  
    // User modal
    function openUserModal(user) {
      modalTitle.textContent = "User Details";
      modalBody.innerHTML = `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Role:</strong> ${user.role}</p>
        <div class="mb-3">
          <label for="userRole" class="form-label">Change Role</label>
          <select class="form-select" id="userRole">
            <option value="Renter" ${
              user.role === "Renter" ? "selected" : ""
            }>Renter</option>
            <option value="Landlord" ${
              user.role === "Landlord" ? "selected" : ""
            }>Landlord</option>
            <option value="Admin" ${
              user.role === "Admin" ? "selected" : ""
            }>Admin</option>
          </select>
        </div>
      `;
      modalFooter.innerHTML = `
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="saveUserBtn">Save</button>
      `;
      document.getElementById("saveUserBtn").onclick = () => {
        const newRole = document.getElementById("userRole").value;
        user.role = newRole;
        renderUsers();
        modal.hide();
      };
      modal.show();
    }
  
    // Message modal
    function openMessageModal(msg) {
      modalTitle.textContent = "Message Details";
      modalBody.innerHTML = `
        <p><strong>From:</strong> ${msg.from}</p>
        <p><strong>Message:</strong></p>
        <p>${msg.content}</p>
        <div class="mb-3">
          <label for="replyMessage" class="form-label">Reply</label>
          <textarea class="form-control" id="replyMessage" rows="3"></textarea>
        </div>
      `;
      modalFooter.innerHTML = `
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="sendReplyBtn">Send Reply</button>
      `;
      document.getElementById("sendReplyBtn").onclick = () => {
        const reply = document.getElementById("replyMessage").value.trim();
        if (reply === "") {
          alert("Please enter a reply message.");
          return;
        }
        alert(`Reply sent to ${msg.from}: ${reply}`);
        modal.hide();
      };
      modal.show();
    }
  
    // Review modal
    function openReviewModal(review) {
      modalTitle.textContent = "Review Details";
      modalBody.innerHTML = `
        <p><strong>User:</strong> ${review.user}</p>
        <p><strong>Rating:</strong> ${review.rating} / 5</p>
        <p><strong>Comment:</strong></p>
        <p>${review.comment}</p>
      `;
      modalFooter.innerHTML = `
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      `;
      modal.show();
    }
  
    // Add new listing modal
    document.getElementById("addListingBtn")?.addEventListener("click", () => {
      modalTitle.textContent = "Add New Listing";
      modalBody.innerHTML = `
        <form id="addListingForm">
          <div class="mb-3">
            <label for="listingTitle" class="form-label">Title</label>
            <input type="text" class="form-control" id="listingTitle" required />
          </div>
          <div class="mb-3">
            <label for="listingStatusNew" class="form-label">Status</label>
            <select class="form-select" id="listingStatusNew" required>
              <option value="Active" selected>Active</option>
              <option value="Pending">Pending</option>
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
        const title = document.getElementById("listingTitle").value.trim();
        const status = document.getElementById("listingStatusNew").value;
        if (title === "") {
          alert("Please enter a title.");
          return;
        }
        listings.push({ id: Date.now(), title, status });
        renderListings();
        modal.hide();
      };
      modal.show();
    });
  
    // Add new user modal
    document.getElementById("addUserBtn")?.addEventListener("click", () => {
      modalTitle.textContent = "Add New User";
      modalBody.innerHTML = `
        <form id="addUserForm">
          <div class="mb-3">
            <label for="userName" class="form-label">Name</label>
            <input type="text" class="form-control" id="userName" required />
          </div>
          <div class="mb-3">
            <label for="userRoleNew" class="form-label">Role</label>
            <select class="form-select" id="userRoleNew" required>
              <option value="Renter" selected>Renter</option>
              <option value="Landlord">Landlord</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </form>
      `;
      modalFooter.innerHTML = `
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" form="addUserForm" class="btn btn-primary">Add User</button>
      `;
      document.getElementById("addUserForm").onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById("userName").value.trim();
        const role = document.getElementById("userRoleNew").value;
        if (name === "") {
          alert("Please enter a name.");
          return;
        }
        users.push({ id: Date.now(), name, role });
        renderUsers();
        modal.hide();
      };
      modal.show();
    });
  
    // Settings form submit
    document
      .getElementById("settingsForm")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        const emailNotifications = document.getElementById(
          "emailNotifications"
        ).value;
        const profileName = document
          .getElementById("profileName")
          .value.trim();
        if (profileName === "") {
          alert("Profile name cannot be empty.");
          return;
        }
        // Update admin profile name in sidebar
        document.querySelector("#sidebar .admin-info strong").textContent =
          profileName;
        alert("Settings saved.");
      });
  
    // Initial render
    renderListings();
    renderUsers();
    renderMessages();
    renderReviews();
  });