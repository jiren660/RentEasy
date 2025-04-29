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

