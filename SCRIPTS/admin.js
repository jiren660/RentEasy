$(document).ready(function () {
  let listings = [
      { id: 1, title: "Cozy Apartment Downtown", address: "101 Main St", description: "A lovely downtown spot.", status: "Active", dateAdded: "2024-05-01" },
      { id: 2, title: "Spacious House in Suburbs", address: "22 Suburbia Ln", description: "Great for families.", status: "Pending", dateAdded: "2024-05-10" },
      { id: 3, title: "Studio Near Campus", address: "3 College Ave", description: "Perfect for students.", status: "Active", dateAdded: "2024-04-15" },
      { id: 4, title: "Luxury Penthouse", address: "400 Sky High", description: "Top floor views.", status: "Inactive", dateAdded: "2024-03-20" },
      { id: 5, title: "Another Studio", address: "5 Side St", description: "Compact living.", status: "Active", dateAdded: "2023-11-05" },
      { id: 6, title: "Family Home", address: "6 Garden Pl", description: "With backyard.", status: "Pending", dateAdded: "2024-01-25" },
      { id: 7, title: "Downtown Loft", address: "7 High St", description: "Industrial style.", status: "Active", dateAdded: "2024-04-02" },

  ];
  let nextListingId = 8;

  let users = [
      { id: 1, name: "John Doe", role: "Renter", email: "john@example.com", phone: "555-0123", passwordHash: "..." },
      { id: 2, name: "Jane Smith", role: "Landlord", email: "jane@example.com", phone: "555-0124", passwordHash: "..." },
      { id: 3, name: "Alice Brown", role: "Renter", email: "alice@example.com", phone: "555-0125", passwordHash: "..." },
      { id: 4, name: "Bob White", role: "Landlord", email: "bob@example.com", phone: "555-0126", passwordHash: "..." },
      { id: 5, name: "Admin User", role: "Admin", email: "admin@renteasy.com", phone: "555-0000", passwordHash: "..." },
  ];
  let nextUserId = 6;

  let messages = [
      { id: 1, fromUserId: 1, fromName: "John Doe", email: "john@example.com", subject: "Inquiry about Downtown Apartment", content: "Is the apartment at 101 Main St still available? I'm very interested.", dateReceived: "2024-05-12", status: "Unread" },
      { id: 2, fromUserId: 2, fromName: "Jane Smith", email: "jane@example.com", subject: "Listing Update", content: "Please update the photos for my listing at 22 Suburbia Ln.", dateReceived: "2024-05-11", status: "Read" },
      { id: 3, fromUserId: 3, fromName: "Alice Brown", email: "alice@example.com", subject: "Question", content: "What is the pet policy?", dateReceived: "2024-05-13", status: "Unread" },
  ];
  let nextMessageId = 4;

  let reviews = [
      { id: 1, userId: 1, userName: "John Doe", listingId: 1, listingTitle: "Cozy Apartment Downtown", rating: 5, comment: "Great place! Clean and convenient.", date: "2024-05-05" },
      { id: 2, userId: 4, userName: "Bob White", listingId: 3, listingTitle: "Studio Near Campus", rating: 4, comment: "Good location, responsive landlord (though that was me!).", date: "2024-04-20" },
      { id: 3, userId: 3, userName: "Alice Brown", listingId: 1, listingTitle: "Cozy Apartment Downtown", rating: 4, comment: "Nice apartment, a bit noisy on weekends.", date: "2024-05-10" },
  ];
  let nextReviewId = 4;

  let recentActivities = [
      { id: 1, description: "Listing #2 ('Spacious House in Suburbs') submitted for approval.", time: "3 hours ago", timestamp: new Date().getTime() - 3 * 60 * 60 * 1000 },
      { id: 2, description: "New message received from Alice Brown.", time: "5 hours ago", timestamp: new Date().getTime() - 5 * 60 * 60 * 1000 },
      { id: 3, description: "User 'Jane Smith' updated profile.", time: "Yesterday", timestamp: new Date().getTime() - 24 * 60 * 60 * 1000 },
  ];
  let nextActivityId = 4;

  const modalInstances = {};

  function getModal(id) {
      if (!modalInstances[id]) {
          modalInstances[id] = new bootstrap.Modal(document.getElementById(id));
      }
      return modalInstances[id];
  }

  function formatTimeAgo(timestamp) {
      const now = new Date().getTime();
      const secondsPast = (now - timestamp) / 1000;

      if (secondsPast < 60) return `${Math.round(secondsPast)}s ago`;
      if (secondsPast < 3600) return `${Math.round(secondsPast / 60)}m ago`;
      if (secondsPast <= 86400) return `${Math.round(secondsPast / 3600)}h ago`;

      const days = Math.round(secondsPast / 86400);
      if (days < 7) return `${days}d ago`;

      const date = new Date(timestamp);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  function addActivity(description) {
      const now = new Date().getTime();
      recentActivities.unshift({
          id: nextActivityId++,
          description: description,
          time: formatTimeAgo(now),
          timestamp: now
      });
      if (recentActivities.length > 15) {
          recentActivities.pop();
      }
      if ($('#dashboard').is(':visible')) {
          renderActivityList();
      }
  };

  function getStatusBadge(status) {
       switch(status.toLowerCase()) {
          case 'active': return '<span class="badge bg-success">Active</span>';
          case 'pending': return '<span class="badge bg-warning text-dark">Pending</span>';
          case 'inactive': return '<span class="badge bg-secondary">Inactive</span>';
          case 'rejected': return '<span class="badge bg-danger">Rejected</span>';
          case 'read': return '<span class="badge bg-secondary">Read</span>';
          case 'unread': return '<span class="badge bg-info text-dark">Unread</span>';
          default: return `<span class="badge bg-light text-dark">${status}</span>`;
      }
  }

  function getUserName(userId) {
      const user = users.find(u => u.id === userId);
      return user ? user.name : 'Unknown User';
  }

  function getListingTitle(listingId) {
      const listing = listings.find(l => l.id === listingId);
      return listing ? listing.title : 'Unknown Listing';
  }

  function updateDashboardCards() {
      $('#totalListings').text(listings.length);
      $('#pendingListings').text(listings.filter(l => l.status === 'Pending').length);
      $('#totalUsers').text(users.length);
      $('#totalMessages').text(messages.filter(m => m.status === 'Unread').length);
  }

  function renderActivityList() {
      const list = $('#activityList');
      list.empty();
      if (recentActivities.length === 0) {
          list.append('<p class="no-data-message">No recent activity.</p>');
          return;
      }
      recentActivities.sort((a, b) => b.timestamp - a.timestamp).forEach(activity => {
          const timeAgo = formatTimeAgo(activity.timestamp);
          list.append(`
              <div>
                  <span class="activity-description">${activity.description}</span>
                  <span class="activity-time" title="${new Date(activity.timestamp).toLocaleString()}">${timeAgo}</span>
              </div>
          `);
      });
  }

  function renderListingsTable() {
    const tbody = $('#listingsTable tbody');
    tbody.empty();
    if (listings.length === 0) {
        tbody.append('<tr><td colspan="4" class="no-data-message">No listings found.</td></tr>');
        return;
    }
    listings.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)).forEach(listing => {
      tbody.append(`
        <tr data-id="${listing.id}">
          <td data-label="Title">${listing.title}</td>
          <td data-label="Status">${getStatusBadge(listing.status)}</td>
          <td data-label="Date Added">${listing.dateAdded}</td>
          <td data-label="Actions">
            <button class="btn btn-sm btn-info view-listing" title="View Details"><i class="fas fa-eye"></i></button>
            <button class="btn btn-sm btn-primary edit-listing" title="Edit Listing"><i class="fas fa-edit"></i></button>
            ${listing.status === 'Pending' ? `<button class="btn btn-sm btn-success approve-listing" title="Approve Listing"><i class="fas fa-check"></i></button>` : ''}
            <button class="btn btn-sm btn-danger delete-listing" title="Delete Listing"><i class="fas fa-trash"></i></button>
          </td>
        </tr>
      `);
    });
  }

  function renderUsersTable() {
    const tbody = $('#usersTable tbody');
    tbody.empty();
    if (users.length === 0) {
        tbody.append('<tr><td colspan="4" class="no-data-message">No users found.</td></tr>');
        return;
    }
     users.sort((a, b) => a.name.localeCompare(b.name)).forEach(user => {
      tbody.append(`
        <tr data-id="${user.id}">
          <td data-label="Name">${user.name}</td>
          <td data-label="Role">${user.role}</td>
          <td data-label="Email">${user.email}</td>
          <td data-label="Actions">
            <button class="btn btn-sm btn-info view-user" title="View Details"><i class="fas fa-eye"></i></button>
            <button class="btn btn-sm btn-primary edit-user" title="Edit User"><i class="fas fa-edit"></i></button>
            <button class="btn btn-sm btn-danger delete-user" title="Delete User"><i class="fas fa-trash"></i></button>
          </td>
        </tr>
      `);
    });
  }

  function renderMessagesTable() {
     const tbody = $('#messagesTable tbody');
     tbody.empty();
     if (messages.length === 0) {
         tbody.append('<tr><td colspan="5" class="no-data-message">No messages found.</td></tr>');
         return;
     }
     messages.sort((a, b) => new Date(b.dateReceived) - new Date(a.dateReceived)).forEach(message => {
         const preview = message.content.substring(0, 50) + (message.content.length > 50 ? '...' : '');
         tbody.append(`
             <tr data-id="${message.id}" class="${message.status === 'Unread' ? 'fw-bold' : ''}">
                 <td data-label="From">${message.fromName}</td>
                 <td data-label="Subject/Preview">${message.subject || preview}</td>
                 <td data-label="Date Received">${message.dateReceived}</td>
                 <td data-label="Status">${getStatusBadge(message.status)}</td>
                 <td data-label="Actions">
                     <button class="btn btn-sm btn-info view-message" title="View Message"><i class="fas fa-envelope-open-text"></i></button>
                     <button class="btn btn-sm btn-danger delete-message" title="Delete Message"><i class="fas fa-trash"></i></button>
                 </td>
             </tr>
         `);
     });
  }

  function renderReviewsTable() {
     const tbody = $('#reviewsTable tbody');
     tbody.empty();
     if (reviews.length === 0) {
         tbody.append('<tr><td colspan="5" class="no-data-message">No reviews found.</td></tr>');
         return;
     }
     reviews.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(review => {
         const ratingStars = Array(review.rating).fill('<i class="fas fa-star text-warning"></i>').join('') +
                             Array(5 - review.rating).fill('<i class="far fa-star text-warning"></i>').join('');
         tbody.append(`
             <tr data-id="${review.id}">
                 <td data-label="User">${review.userName}</td>
                 <td data-label="Listing">${review.listingTitle}</td>
                 <td data-label="Rating">${ratingStars} (${review.rating}/5)</td>
                 <td data-label="Date">${review.date}</td>
                 <td data-label="Actions">
                     <button class="btn btn-sm btn-info view-review" title="View Review"><i class="fas fa-eye"></i></button>
                     <button class="btn btn-sm btn-danger delete-review" title="Delete Review"><i class="fas fa-trash"></i></button>
                 </td>
             </tr>
         `);
     });
  }

  function loadSettings() {
      const adminUser = users.find(u => u.role === 'Admin');
      if (adminUser) {
           $('#settingsProfileName').val(adminUser.name);
           $('#settingsEmail').val(adminUser.email);
           $('#adminNameDisplay').text(adminUser.name);
      } else {
           $('#settingsProfileName').val("Admin Name");
           $('#settingsEmail').val("admin@example.com");
           $('#adminNameDisplay').text("Admin Name");
      }
      $('#emailNotifications').val('enabled');
      $('#settingsPassword').val('');
  }

  let listingsChartInstance = null;
  function initializeOrUpdateChart() {
      const ctx = document.getElementById("listingsChart")?.getContext("2d");
      if (!ctx) {
          console.error("Chart canvas context not found!");
          return;
      }

      if (listingsChartInstance) {
          listingsChartInstance.destroy();
          listingsChartInstance = null;
      }

      if (!listings || listings.length === 0) {
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          ctx.textAlign = 'center';
          ctx.fillText('No listing data available for chart.', ctx.canvas.width / 2, ctx.canvas.height / 2);
          return;
    }
      const listingsByMonth = {};
      let minDate = new Date();
      let maxDate = new Date(1970, 0, 1);

      listings.forEach(l => {
          const date = new Date(l.dateAdded);
          if (!isNaN(date)) {
              if (date < minDate) minDate = date;
              if (date > maxDate) maxDate = date;
              const monthYear = l.dateAdded.substring(0, 7);
              listingsByMonth[monthYear] = (listingsByMonth[monthYear] || 0) + 1;
          }
      });

      const currentMonth = new Date();
      if (maxDate < currentMonth) {
          maxDate = currentMonth;
      }
      if (minDate > maxDate) {
          minDate = new Date(maxDate);
          minDate.setMonth(minDate.getMonth() - 1);
      }


      const chartLabels = [];
      const chartData = [];
      let currentDate = new Date(minDate.getFullYear(), minDate.getMonth(), 1);

      while (currentDate <= maxDate) {
          const monthYearStr = currentDate.toISOString().substring(0, 7);
          const label = currentDate.toLocaleString('en-US', { month: 'short', year: 'numeric' });

          chartLabels.push(label);
          chartData.push(listingsByMonth[monthYearStr] || 0);

          currentDate.setMonth(currentDate.getMonth() + 1);
      }

      const MAX_MONTHS = 12;
      if (chartLabels.length > MAX_MONTHS) {
           chartLabels.splice(0, chartLabels.length - MAX_MONTHS);
           chartData.splice(0, chartData.length - MAX_MONTHS);
      }
      
    listingsChartInstance = new Chart(ctx, {
        type: "line",
        data: {
            labels: chartLabels,
            datasets: [{
                label: "Listings Added",
                data: chartData,
                borderColor: "#5f746a",
                backgroundColor: "rgba(119, 152, 140, 0.1)",
                fill: true,
                tension: 0.1,
                borderWidth: 1 // Reduced from 2
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true, // Changed to true
            aspectRatio: 2, // Added to control height relative to width
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        precision: 0,
                        font: {
                            size: 10 // Smaller font size
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 10 // Smaller font size
                        }
                    }
                }
            },
            plugins: {
                legend: { display: false },
                title: {
                    display: false
                }
            },
            layout: {
                padding: {
                    left: 5,
                    right: 5,
                    top: 5,
                    bottom: 5
                }
            }
        },
    });
}

  $('#navLinks').on('click', '.nav-link', function(e) {
      e.preventDefault();
      const target = $(this).data('target');

      $('#navLinks .nav-link').removeClass('active');
      $(this).addClass('active');

      $('.content-section').addClass('d-none');
      $(`#${target}`).removeClass('d-none');

      switch(target) {
          case 'dashboard':
              updateDashboardCards();
              renderActivityList();
              initializeOrUpdateChart();
              break;
          case 'listings':
              renderListingsTable();
              break;
          case 'users':
              renderUsersTable();
              break;
          case 'messages':
              renderMessagesTable();
              break;
          case 'reviews':
              renderReviewsTable();
              break;
          case 'settings':
              loadSettings();
              break;
      }

      if ($(window).width() < 992) {
          $('#sidebar').removeClass('show');
          $('#hamburgerBtn').attr('aria-expanded', 'false');
      }
  });

  $('#hamburgerBtn').on('click', function() {
      $('#sidebar').toggleClass('show');
      const isExpanded = $('#sidebar').hasClass('show');
      $(this).attr('aria-expanded', isExpanded);
  });

  $('#logoutBtn').on('click', function() {
    if(confirm('Are you sure you want to logout?')) {
      console.log('Logout initiated...');
       addActivity("Admin logged out.");
       alert("Logout successful (simulation). You would be redirected.");
       // window.location.href = 'login.html';
    }
  });

  $('#addListingBtn').on('click', function() {
      $('#listingForm')[0].reset();
      $('#listingId').val('');
      $('#listingModalLabel').text('Add New Listing');
      $('#listingDate').val(new Date().toISOString().split('T')[0]);
      $('#listingStatus').val('Pending');
      getModal('listingModal').show();
  });

  $('body').on('click', '.edit-listing', function() {
      const id = $(this).closest('tr').data('id');
      const listing = listings.find(l => l.id === id);
      if (listing) {
          $('#listingId').val(listing.id);
          $('#listingTitle').val(listing.title);
          $('#listingAddress').val(listing.address || '');
          $('#listingDescription').val(listing.description || '');
          $('#listingStatus').val(listing.status);
          $('#listingDate').val(listing.dateAdded);
          $('#listingModalLabel').text('Edit Listing');
          getModal('listingModal').show();
      }
  });

  $('body').on('click', '.view-listing', function() {
      const id = $(this).closest('tr').data('id');
      const listing = listings.find(l => l.id === id);
      if (listing) {
          $('#viewListingTitle').text(listing.title);
          $('#viewListingAddress').text(listing.address || 'N/A');
          $('#viewListingDescription').text(listing.description || 'N/A');
          $('#viewListingStatus').html(getStatusBadge(listing.status));
          $('#viewListingDate').text(listing.dateAdded);
          getModal('viewListingModal').show();
      }
  });

  $('#listingForm').on('submit', function(e) {
      e.preventDefault();
      const id = parseInt($('#listingId').val());
      const listingData = {
          title: $('#listingTitle').val().trim(),
          address: $('#listingAddress').val().trim(),
          description: $('#listingDescription').val().trim(),
          status: $('#listingStatus').val(),
          dateAdded: $('#listingDate').val() || new Date().toISOString().split('T')[0]
      };

      if (!listingData.title) {
          alert("Listing title is required.");
          return;
      }

      if (id) {
          const index = listings.findIndex(l => l.id === id);
          if (index > -1) {
              listings[index] = { ...listings[index], ...listingData };
              addActivity(`Updated listing: "${listingData.title}"`);
          }
      } else {
          listingData.id = nextListingId++;
          listings.push(listingData);
           addActivity(`Added new listing: "${listingData.title}"`);
      }
      renderListingsTable();
      updateDashboardCards();
      initializeOrUpdateChart();
      getModal('listingModal').hide();
  });

   $('body').on('click', '.approve-listing', function() {
      const id = $(this).closest('tr').data('id');
      const index = listings.findIndex(l => l.id === id);
       if (index > -1 && listings[index].status === 'Pending') {
           listings[index].status = 'Active';
           renderListingsTable();
           updateDashboardCards();
           addActivity(`Approved listing: "${listings[index].title}"`);
           alert(`Listing "${listings[index].title}" approved.`);
       }
  });

  $('body').on('click', '.delete-listing', function() {
      const id = $(this).closest('tr').data('id');
      const listing = listings.find(l => l.id === id);
      if (listing && confirm(`Are you sure you want to delete listing "${listing.title}"?`)) {
          listings = listings.filter(l => l.id !== id);
          renderListingsTable();
          updateDashboardCards();
          initializeOrUpdateChart();
          addActivity(`Deleted listing: "${listing.title}"`);
      }
  });

  $('#addUserBtn').on('click', function() {
      $('#userForm')[0].reset();
      $('#userId').val('');
      $('#userPassword').attr('placeholder', 'Enter password (required for new user)');
      $('#userModalLabel').text('Add New User');
      getModal('userModal').show();
  });

  $('body').on('click', '.edit-user', function() {
      const id = $(this).closest('tr').data('id');
      const user = users.find(u => u.id === id);
      if (user) {
          $('#userId').val(user.id);
          $('#userName').val(user.name);
          $('#userEmail').val(user.email);
          $('#userPhone').val(user.phone || '');
          $('#userRole').val(user.role);
          $('#userPassword').val('');
          $('#userPassword').attr('placeholder', 'Leave blank to keep unchanged');
          $('#userModalLabel').text('Edit User');
          getModal('userModal').show();
      }
  });

   $('body').on('click', '.view-user', function() {
      const id = $(this).closest('tr').data('id');
      const user = users.find(u => u.id === id);
      if (user) {
          $('#viewUserName').text(user.name);
          $('#viewUserRole').text(user.role);
          $('#viewUserEmail').text(user.email);
          $('#viewUserPhone').text(user.phone || 'N/A');
          getModal('viewUserModal').show();
      }
  });

  $('#userForm').on('submit', function(e) {
      e.preventDefault();
      const id = parseInt($('#userId').val());
      const userData = {
          name: $('#userName').val().trim(),
          email: $('#userEmail').val().trim(),
          phone: $('#userPhone').val().trim(),
          role: $('#userRole').val(),
          password: $('#userPassword').val()
      };

      if (!userData.name || !userData.email) {
          alert("User name and email are required.");
          return;
      }
       if (!id && !userData.password) {
          alert("Password is required for new users.");
          return;
       }

      if (id) {
          const index = users.findIndex(u => u.id === id);
          if (index > -1) {
               const updateData = { ...users[index], ...userData };
               if (!userData.password) {
                   delete updateData.password;
               } else {
                    updateData.passwordHash = "...";
                    delete updateData.password;
               }
               users[index] = updateData;
               addActivity(`Updated user profile: ${userData.name}`);
               if(updateData.role === 'Admin') {
                  loadSettings();
               }
          }
      } else {
          userData.id = nextUserId++;
          userData.passwordHash = "...";
          delete userData.password;
          users.push(userData);
          addActivity(`Added new user: ${userData.name} (${userData.role})`);
      }

      renderUsersTable();
      updateDashboardCards();
      getModal('userModal').hide();
  });

  $('body').on('click', '.delete-user', function() {
      const id = $(this).closest('tr').data('id');
      const user = users.find(u => u.id === id);
      if (user && confirm(`Are you sure you want to delete user "${user.name}"?`)) {
           const hasListings = listings.some(l => l.userId === id);
           const hasMessages = messages.some(m => m.fromUserId === id);
           const hasReviews = reviews.some(r => r.userId === id);

          if (hasListings || hasMessages || hasReviews) {
               alert(`Cannot delete user "${user.name}" as they have associated listings, messages, or reviews.`);
               return;
          }
           if (user.role === 'Admin' && users.filter(u => u.role === 'Admin').length <= 1) {
               alert(`Cannot delete the last admin user.`);
               return;
           }

          users = users.filter(u => u.id !== id);
          renderUsersTable();
          updateDashboardCards();
          addActivity(`Deleted user: ${user.name}`);
      }
  });

  let currentMessageId = null;

  $('body').on('click', '.view-message', function() {
      const id = $(this).closest('tr').data('id');
      const message = messages.find(m => m.id === id);
      if (message) {
          currentMessageId = id;
          $('#viewMessageFrom').text(message.fromName);
          $('#viewMessageEmail').text(message.email || 'N/A');
          $('#viewMessageDate').text(message.dateReceived);
          $('#viewMessageSubject').text(message.subject || '(No Subject)');
          $('#viewMessageContent').text(message.content);
          $('#messageReply').val('');

          if (message.status === 'Unread') {
              message.status = 'Read';
              renderMessagesTable();
              updateDashboardCards();
              addActivity(`Marked message from ${message.fromName} as read.`);
          }

          getModal('viewMessageModal').show();
      }
  });

   $('#sendMessageReplyBtn').on('click', function() {
       if (!currentMessageId) return;
       const message = messages.find(m => m.id === currentMessageId);
       const replyText = $('#messageReply').val().trim();
       if (replyText && message) {
           console.log(`Simulating reply to ${message.email}: ${replyText}`);
           alert(`Reply simulation: Sent to ${message.email}`);
           addActivity(`Replied to message from ${message.fromName}.`);
           $('#messageReply').val('');
           getModal('viewMessageModal').hide();
       } else if (!replyText) {
            alert("Please enter a reply message.");
       }
   });

   $('#deleteMessageBtn').on('click', function() {
       if (!currentMessageId) return;
       const message = messages.find(m => m.id === currentMessageId);
       if (message && confirm(`Are you sure you want to delete the message from ${message.fromName}?`)) {
           messages = messages.filter(m => m.id !== currentMessageId);
           renderMessagesTable();
           updateDashboardCards();
           addActivity(`Deleted message from ${message.fromName}.`);
           getModal('viewMessageModal').hide();
           currentMessageId = null;
       }
   });

  $('body').on('click', '.delete-message', function(e) {
      e.stopPropagation();
      const id = $(this).closest('tr').data('id');
      const message = messages.find(m => m.id === id);
      if (message && confirm(`Are you sure you want to delete the message from ${message.fromName}?`)) {
          messages = messages.filter(m => m.id !== id);
          renderMessagesTable();
          updateDashboardCards();
          addActivity(`Deleted message from ${message.fromName}.`);
      }
  });

  let currentReviewId = null;

  $('body').on('click', '.view-review', function() {
      const id = $(this).closest('tr').data('id');
      const review = reviews.find(r => r.id === id);
      if (review) {
           currentReviewId = id;
           $('#viewReviewUser').text(review.userName);
           $('#viewReviewListing').text(review.listingTitle);
            const ratingStars = Array(review.rating).fill('<i class="fas fa-star text-warning"></i>').join('') +
                             Array(5 - review.rating).fill('<i class="far fa-star text-warning"></i>').join('');
           $('#viewReviewRating').html(ratingStars);
           $('#viewReviewDate').text(review.date);
           $('#viewReviewComment').text(review.comment);
           getModal('viewReviewModal').show();
      }
  });

   $('#deleteReviewBtn').on('click', function() {
       if (!currentReviewId) return;
       const review = reviews.find(r => r.id === currentReviewId);
       if (review && confirm(`Are you sure you want to delete the review by ${review.userName} for "${review.listingTitle}"?`)) {
           reviews = reviews.filter(r => r.id !== currentReviewId);
           renderReviewsTable();
           addActivity(`Deleted review by ${review.userName}.`);
           getModal('viewReviewModal').hide();
           currentReviewId = null;
       }
   });

  $('body').on('click', '.delete-review', function(e) {
      e.stopPropagation();
      const id = $(this).closest('tr').data('id');
      const review = reviews.find(r => r.id === id);
      if (review && confirm(`Are you sure you want to delete the review by ${review.userName} for "${review.listingTitle}"?`)) {
          reviews = reviews.filter(r => r.id !== id);
          renderReviewsTable();
          addActivity(`Deleted review by ${review.userName}.`);
      }
  });

  $('#settingsForm').on('submit', function(e) {
      e.preventDefault();
      const newName = $('#settingsProfileName').val().trim();
      const newEmail = $('#settingsEmail').val().trim();
      const newPassword = $('#settingsPassword').val();
      const notifications = $('#emailNotifications').val();

      if (!newName || !newEmail) {
          alert('Admin Name and Email cannot be empty.');
          return;
      }

      const adminIndex = users.findIndex(u => u.role === 'Admin');
      if (adminIndex > -1) {
           users[adminIndex].name = newName;
           users[adminIndex].email = newEmail;
           if (newPassword) {
               users[adminIndex].passwordHash = "...";
               console.log("Admin password updated (simulation).");
           }
           $('#adminNameDisplay').text(newName);
           if ($('#users').is(':visible')) {
               renderUsersTable();
           }
      } else {
          console.error("Could not find admin user to update settings.");
          alert("Error saving settings: Admin user not found.");
          return;
      }


      console.log("Admin Settings Saved (simulation):", { newName, newEmail, notifications, passwordChanged: !!newPassword });
      addActivity("Updated admin account settings.");
      alert("Settings saved successfully!");
      $('#settingsPassword').val('');
  });

  updateDashboardCards();
  renderActivityList();
  initializeOrUpdateChart();
  $('#dashboard').removeClass('d-none');
  $('#navLinks .nav-link[data-target="dashboard"]').addClass('active');
  loadSettings();

});

document.getElementById('logoutBtn').addEventListener('click', function() {
    // perform any logout logic here, then redirect
    window.location.href = 'login.html';
  });