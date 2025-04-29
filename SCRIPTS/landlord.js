$(document).ready(function() {
    let properties = [
      { id: 1, name: 'Sunset Apartments', address: '123 Main St, Anytown', units: 4, occupancy: '75%' },
      { id: 2, name: 'Oak Residences', address: '456 Oak Ave, Anytown', units: 6, occupancy: '83%' },
      { id: 3, name: 'Maple Courtyard', address: '789 Maple Dr, Anytown', units: 8, occupancy: '100%' },
      { id: 4, name: 'Pinecrest View', address: '101 Pine Ln, Anytown', units: 2, occupancy: '50%' },
      { id: 5, name: 'Riverbend Lofts', address: '222 River Rd, Anytown', units: 10, occupancy: '90%' }
    ];
    let nextPropertyId = 6;
  
    let tenants = [
      { id: 1, name: 'Alice Green', propertyId: 1, unit: 'A1', phone: '555-0101', email: 'alice@example.com' },
      { id: 2, name: 'Bob White', propertyId: 1, unit: 'A2', phone: '555-0102', email: 'bob@example.com' },
      { id: 3, name: 'Charlie Black', propertyId: 2, unit: 'B1', phone: '555-0103', email: 'charlie@example.com' },
      { id: 4, name: 'Diana Blue', propertyId: 2, unit: 'B2', phone: '555-0104', email: 'diana@example.com' },
      { id: 5, name: 'Ethan Gray', propertyId: 3, unit: 'C1', phone: '555-0105', email: 'ethan@example.com' },
      { id: 6, name: 'Fiona Gold', propertyId: 3, unit: 'C2', phone: '555-0106', email: 'fiona@example.com' },
      { id: 7, name: 'George Silver', propertyId: 3, unit: 'C3', phone: '555-0107', email: 'george@example.com' },
      { id: 8, name: 'Hannah Bronze', propertyId: 4, unit: 'D1', phone: '555-0108', email: 'hannah@example.com' },
      { id: 9, name: 'Ian Copper', propertyId: 5, unit: 'E1', phone: '555-0109', email: 'ian@example.com' },
      { id: 10, name: 'Julia Lead', propertyId: 5, unit: 'E2', phone: '555-0110', email: 'julia@example.com' },
      { id: 11, name: 'Kevin Tin', propertyId: 5, unit: 'E3', phone: '555-0111', email: 'kevin@example.com' },
      { id: 12, name: 'Laura Nickel', propertyId: 5, unit: 'E4', phone: '555-0112', email: 'laura@example.com' }
    ];
    let nextTenantId = 13;
  
    let maintenanceRequests = [
      { id: 1, propertyId: 1, unit: 'A1', issue: 'Leaky faucet in kitchen', status: 'Pending', date: '2024-05-10' },
      { id: 2, propertyId: 2, unit: 'B2', issue: 'Broken window latch', status: 'In Progress', date: '2024-05-12' },
      { id: 3, propertyId: 5, unit: 'E3', issue: 'AC not cooling', status: 'Completed', date: '2024-05-08' }
    ];
    let nextMaintenanceId = 4;
  
    let payments = [
      { id: 1, tenantId: 1, propertyId: 1, amount: 1200, date: '2024-05-01', status: 'Paid' },
      { id: 3, tenantId: 3, propertyId: 2, amount: 1500, date: '2024-05-05', status: 'Paid' },
      { id: 5, tenantId: 5, propertyId: 3, amount: 1350, date: '2024-05-03', status: 'Paid' },
      { id: 8, tenantId: 8, propertyId: 4, amount: 950, date: '2024-05-01', status: 'Paid' },
      { id: 9, tenantId: 9, propertyId: 5, amount: 1600, date: '2024-05-06', status: 'Paid' },
      { id: 6, tenantId: 2, propertyId: 1, amount: 1200, date: '2024-05-02', status: 'Paid' },
      { id: 7, tenantId: 4, propertyId: 2, amount: 1500, date: '2024-05-04', status: 'Paid' },
      { id: 10, tenantId: 6, propertyId: 3, amount: 1350, date: '2024-05-03', status: 'Paid' },
      { id: 11, tenantId: 7, propertyId: 3, amount: 1350, date: '2024-05-04', status: 'Paid' },
      { id: 12, tenantId: 10, propertyId: 5, amount: 1600, date: '2024-05-05', status: 'Paid' },
      { id: 13, tenantId: 11, propertyId: 5, amount: 1600, date: '2024-05-06', status: 'Paid' },
      { id: 14, tenantId: 12, propertyId: 5, amount: 1600, date: '2024-05-07', status: 'Paid' },
      { id: 15, tenantId: 1, propertyId: 1, amount: 1200, date: '2024-04-01', status: 'Paid' },
      { id: 16, tenantId: 3, propertyId: 2, amount: 1500, date: '2024-04-05', status: 'Paid' },
      { id: 17, tenantId: 1, propertyId: 1, amount: 1150, date: '2024-03-01', status: 'Paid' },
      { id: 18, tenantId: 9, propertyId: 5, amount: 1550, date: '2024-03-06', status: 'Paid' },
      { id: 19, tenantId: 8, propertyId: 4, amount: 950, date: '2024-06-01', status: 'Pending' },
      { id: 20, tenantId: 1, propertyId: 1, amount: 1200, date: '2024-06-01', status: 'Paid' },
    ];
     let nextPaymentId = 21;
  
    let recentActivities = [
        { id: 1, description: "New maintenance request (#1) for Sunset Apartments A1", time: "2 hours ago", timestamp: new Date().getTime() - 2*60*60*1000 },
        { id: 2, description: `Payment ${formatCurrency(1200)} received from Bob White`, time: "Yesterday", timestamp: new Date().getTime() - 24*60*60*1000 },
        { id: 3, description: "Tenant Alice Green updated contact info", time: "3 days ago", timestamp: new Date().getTime() - 3*24*60*60*1000 },
        { id: 4, description: "Maintenance (#3) completed for Riverbend Lofts E3", time: "4 days ago", timestamp: new Date().getTime() - 4*24*60*60*1000 }
    ];
    let nextActivityId = 5;
  
    let revenueChartInstance = null;
    const modalInstances = {};
  
    const getPropertyName = (propertyId) => properties.find(p => p.id === propertyId)?.name || 'N/A';
    const getTenantName = (tenantId) => tenants.find(t => t.id === tenantId)?.name || 'N/A';
    const getTenantById = (tenantId) => tenants.find(t => t.id === tenantId);
    const getPropertyById = (propertyId) => properties.find(p => p.id === propertyId);
  
    function formatCurrency(amount) {
         return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
    };
  
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
  
      function getModal(id) {
          if (!modalInstances[id]) {
              modalInstances[id] = new bootstrap.Modal(document.getElementById(id));
          }
          return modalInstances[id];
      }
  
      function populateSelectOptions(selectId, data, valueField, textField, defaultOptionText) {
          const $select = $(`#${selectId}`);
          $select.empty();
          if (defaultOptionText) {
               $select.append(`<option value="" selected disabled>${defaultOptionText}</option>`);
          }
          data.forEach(item => {
              $select.append($('<option>', {
                  value: item[valueField],
                  text: item[textField]
              }));
          });
      }
  
  
    function updateSummaryCards() {
        $('#totalProperties').text(properties.length);
        $('#activeTenants').text(tenants.length);
        const openMaintenanceRequests = maintenanceRequests.filter(req => req.status === 'Pending' || req.status === 'In Progress').length;
        $('#maintenanceRequests').text(openMaintenanceRequests);
  
        let estimatedMonthlyRevenue = 0;
        const latestPayments = {};
         [...payments].sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(p => {
             if (!latestPayments[p.tenantId]) {
                 latestPayments[p.tenantId] = p.amount;
             }
         });
        tenants.forEach(tenant => {
           estimatedMonthlyRevenue += latestPayments[tenant.id] || 0;
        });
  
        $('#totalRevenue').text(formatCurrency(estimatedMonthlyRevenue));
    };
  
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
    };
  
  
    function initializeOrUpdateChart() {
      const ctx = document.getElementById("listingsChart")?.getContext("2d");
      if (!ctx) {
          console.error("Chart canvas context not found!");
          return;
      }
  
      const listingsByMonth = {};
      const months = new Set();
  
      listings.forEach(l => {
          const monthYear = l.dateAdded.substring(0, 7);
          months.add(monthYear);
          listingsByMonth[monthYear] = (listingsByMonth[monthYear] || 0) + 1;
      });
  
      const sortedMonths = Array.from(months).sort();
      const recentMonths = sortedMonths.slice(-6);
  
      const chartLabels = recentMonths.map(my => {
          const [year, month] = my.split('-');
          const date = new Date(year, month - 1);
          return date.toLocaleString('en-US', { month: 'short', year: 'numeric'});
      });
      const chartData = recentMonths.map(my => listingsByMonth[my] || 0);
  
      if (listingsChartInstance) {
          listingsChartInstance.destroy();
      }
  
      listingsChartInstance = new Chart(ctx, {
          type: 'line',
          data: {
              labels: chartLabels,
              datasets: [{
                  label: 'Listings Added',
                  data: chartData,
                  borderColor: 'rgb(119, 152, 140)',
                  backgroundColor: 'rgba(119, 152, 140, 0.1)',
                  borderWidth: 2,
                  fill: true,
                  tension: 0.1
              }]
          },
          options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                  y: {
                      beginAtZero: true,
                      ticks: {
                          stepSize: 1,
                          precision: 0
                      }
                  }
              },
              plugins: {
                  legend: { display: true, position: 'top' }
              }
          }
      });
  }
  
  
    function renderProperties() {
      const tbody = $('#propertyList tbody');
      tbody.empty();
      if (properties.length === 0) {
          tbody.append('<tr><td colspan="5" class="no-data-message">No properties found. Add one to get started!</td></tr>');
          return;
      }
      properties.forEach(property => {
        tbody.append(`
          <tr data-id="${property.id}">
            <td data-label="Name">${property.name}</td>
            <td data-label="Address">${property.address}</td>
            <td data-label="Units">${property.units}</td>
            <td data-label="Occupancy">${property.occupancy}</td>
            <td data-label="Actions">
              <button class="btn btn-sm btn-info view-property" title="View Details"><i class="fas fa-eye"></i></button>
              <button class="btn btn-sm btn-primary edit-property" title="Edit Property"><i class="fas fa-edit"></i></button>
              <button class="btn btn-sm btn-danger delete-property" title="Delete Property"><i class="fas fa-trash"></i></button>
            </td>
          </tr>
        `);
      });
    };
  
    function renderTenants() {
      const tbody = $('#tenantList tbody');
      tbody.empty();
       if (tenants.length === 0) {
          tbody.append('<tr><td colspan="5" class="no-data-message">No tenants found.</td></tr>');
          return;
      }
      tenants.forEach(tenant => {
        const propertyName = getPropertyName(tenant.propertyId);
        tbody.append(`
          <tr data-id="${tenant.id}">
            <td data-label="Name">${tenant.name}</td>
            <td data-label="Property/Unit">${propertyName} / ${tenant.unit}</td>
            <td data-label="Phone">${tenant.phone}</td>
            <td data-label="Email">${tenant.email}</td>
            <td data-label="Actions">
               <button class="btn btn-sm btn-info view-tenant" title="View Details"><i class="fas fa-eye"></i></button>
               <button class="btn btn-sm btn-primary edit-tenant" title="Edit Tenant"><i class="fas fa-edit"></i></button>
               <button class="btn btn-sm btn-danger delete-tenant" title="Delete Tenant"><i class="fas fa-trash"></i></button>
            </td>
          </tr>
        `);
      });
    };
  
    function renderMaintenance() {
      const tbody = $('#maintenanceList tbody');
      tbody.empty();
       if (maintenanceRequests.length === 0) {
          tbody.append('<tr><td colspan="5" class="no-data-message">No maintenance requests found.</td></tr>');
          return;
      }
       maintenanceRequests.sort((a, b) => {
          const statusOrder = {'Pending': 1, 'In Progress': 2, 'Completed': 3};
          if (statusOrder[a.status] !== statusOrder[b.status]) {
              return statusOrder[a.status] - statusOrder[b.status];
          }
          return new Date(b.date) - new Date(a.date);
       });
  
      maintenanceRequests.forEach(request => {
         const propertyName = getPropertyName(request.propertyId);
         let statusBadge = '';
          switch(request.status) {
              case 'Pending': statusBadge = 'bg-warning text-dark'; break;
              case 'In Progress': statusBadge = 'bg-info text-dark'; break;
              case 'Completed': statusBadge = 'bg-success'; break;
              default: statusBadge = 'bg-secondary';
          }
  
        tbody.append(`
          <tr data-id="${request.id}">
            <td data-label="Property">${propertyName}</td>
            <td data-label="Unit">${request.unit}</td>
            <td data-label="Issue">${request.issue}</td>
            <td data-label="Status"><span class="badge ${statusBadge}">${request.status}</span></td>
            <td data-label="Actions">
              <button class="btn btn-sm btn-primary edit-maintenance" title="Update Request"><i class="fas fa-edit"></i></button>
              ${request.status !== 'Completed' ? `<button class="btn btn-sm btn-success complete-maintenance" title="Mark as Completed"><i class="fas fa-check"></i></button>` : ''}
              <button class="btn btn-sm btn-danger delete-maintenance" title="Delete Request"><i class="fas fa-trash"></i></button>
            </td>
          </tr>
        `);
      });
    };
  
    function renderPayments() {
      const tbody = $('#paymentList tbody');
      tbody.empty();
       if (payments.length === 0) {
          tbody.append('<tr><td colspan="6" class="no-data-message">No payments recorded.</td></tr>');
          return;
      }
      payments.sort((a, b) => new Date(b.date) - new Date(a.date));
  
      payments.forEach(payment => {
        const tenantName = getTenantName(payment.tenantId);
        const propertyName = getPropertyName(payment.propertyId);
         let statusBadge = payment.status === 'Paid' ? 'bg-success' : 'bg-danger';
  
        tbody.append(`
          <tr data-id="${payment.id}">
            <td data-label="Tenant">${tenantName}</td>
            <td data-label="Property">${propertyName}</td>
            <td data-label="Amount">${formatCurrency(payment.amount)}</td>
            <td data-label="Date">${payment.date}</td>
            <td data-label="Status"><span class="badge ${statusBadge}">${payment.status}</span></td>
             <td data-label="Actions">
               <button class="btn btn-sm btn-info view-payment" title="View Details"><i class="fas fa-eye"></i></button>
                ${payment.status !== 'Paid' ? `<button class="btn btn-sm btn-success mark-paid-payment" title="Mark as Paid"><i class="fas fa-check"></i></button>` : ''}
                 <button class="btn btn-sm btn-danger delete-payment" title="Delete Payment Record"><i class="fas fa-trash"></i></button>
            </td>
          </tr>
        `);
      });
    };
  
    function loadSettings() {
          const currentSettings = {
              name: "John Smith",
              email: "john.smith@example.com",
              phone: "555-123-4567"
          };
           $('#settingsName').val(currentSettings.name);
           $('#settingsEmail').val(currentSettings.email);
           $('#settingsPhone').val(currentSettings.phone);
           $('#landlordNameDisplay').text(currentSettings.name);
           $('#settingsPassword').val('');
    };
  
  
    $('#navLinks').on('click', '.nav-link', function(e) {
      e.preventDefault();
      const target = $(this).data('target');
  
      $('#navLinks .nav-link').removeClass('active');
      $(this).addClass('active');
  
      $('.content-section').addClass('d-none');
      $(`#${target}`).removeClass('d-none');
  
      switch(target) {
        case 'dashboard':
            updateSummaryCards();
            renderActivityList();
            initializeOrUpdateChart();
            break;
        case 'my-properties':
          renderProperties();
          break;
        case 'tenants':
          renderTenants();
          break;
        case 'maintenance':
          renderMaintenance();
          break;
        case 'payments':
          renderPayments();
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
  
  
    $('body').on('click', '.delete-property, .delete-tenant, .delete-maintenance, .delete-payment', function() {
        const $button = $(this);
        const $row = $button.closest('tr');
        const id = parseInt($row.data('id'));
        let itemType = '';
        let dataArray = null;
        let renderFunction = null;
        let itemName = '';
        let dependentItemCheck = null;
  
        if ($button.hasClass('delete-property')) {
            itemType = 'property'; dataArray = properties; renderFunction = renderProperties; itemName = $row.find('td:first').text();
            dependentItemCheck = () => tenants.some(t => t.propertyId === id) || maintenanceRequests.some(m => m.propertyId === id) || payments.some(p => p.propertyId === id);
        } else if ($button.hasClass('delete-tenant')) {
            itemType = 'tenant'; dataArray = tenants; renderFunction = renderTenants; itemName = $row.find('td:first').text();
            dependentItemCheck = () => payments.some(p => p.tenantId === id);
        } else if ($button.hasClass('delete-maintenance')) {
            itemType = 'maintenance request'; dataArray = maintenanceRequests; renderFunction = renderMaintenance; itemName = `request for ${$row.find('td:first').text()} (${$row.find('td:eq(2)').text().substring(0, 20)}...)`;
        } else if ($button.hasClass('delete-payment')) {
            itemType = 'payment record'; dataArray = payments; renderFunction = renderPayments; itemName = `payment from ${$row.find('td:first').text()} on ${$row.find('td:eq(3)').text()}`;
        }
  
        if (dependentItemCheck && dependentItemCheck()) {
              alert(`Cannot delete this ${itemType} ("${itemName}") because it has associated records (e.g., tenants, payments, maintenance). Please remove associated records first.`);
              return;
        }
  
  
        if (itemType && confirm(`Are you sure you want to delete this ${itemType}: "${itemName}"? This action cannot be undone.`)) {
             const index = dataArray.findIndex(item => item.id === id);
             if (index > -1) {
                 dataArray.splice(index, 1);
                 renderFunction();
                 updateSummaryCards();
                 if (itemType === 'payment record') initializeOrUpdateChart();
                 addActivity(`Deleted ${itemType}: ${itemName}`);
             } else {
                 console.error(`Could not find ${itemType} with ID ${id} to delete.`);
                 alert(`Error: Could not find the ${itemType} to delete.`);
             }
        }
    });
  
  
      $('#addPropertyBtn').on('click', function() {
          $('#addPropertyForm')[0].reset();
          getModal('addPropertyModal').show();
      });
  
      $('#addPropertyForm').on('submit', function(e) {
          e.preventDefault();
          const newProperty = {
              id: nextPropertyId++,
              name: $('#addPropertyName').val().trim(),
              address: $('#addPropertyAddress').val().trim(),
              units: parseInt($('#addPropertyUnits').val()),
              occupancy: '0%'
          };
          properties.push(newProperty);
          renderProperties();
          updateSummaryCards();
          addActivity(`Added new property: ${newProperty.name}`);
          getModal('addPropertyModal').hide();
      });
  
      $('body').on('click', '.edit-property', function() {
          const propertyId = $(this).closest('tr').data('id');
          const property = getPropertyById(propertyId);
          if (property) {
              $('#editPropertyId').val(property.id);
              $('#editPropertyName').val(property.name);
              $('#editPropertyAddress').val(property.address);
              $('#editPropertyUnits').val(property.units);
              getModal('editPropertyModal').show();
          }
      });
  
       $('#editPropertyForm').on('submit', function(e) {
          e.preventDefault();
          const propertyId = parseInt($('#editPropertyId').val());
          const index = properties.findIndex(p => p.id === propertyId);
          if (index > -1) {
              properties[index].name = $('#editPropertyName').val().trim();
              properties[index].address = $('#editPropertyAddress').val().trim();
              properties[index].units = parseInt($('#editPropertyUnits').val());
  
              renderProperties();
              addActivity(`Updated property: ${properties[index].name}`);
              getModal('editPropertyModal').hide();
          } else {
              alert('Error: Could not find property to update.');
          }
      });
  
      $('body').on('click', '.view-property', function() {
          const propertyId = $(this).closest('tr').data('id');
          const property = getPropertyById(propertyId);
           if (property) {
              $('#viewPropertyName').text(property.name);
              $('#viewPropertyAddress').text(property.address);
              $('#viewPropertyUnits').text(property.units);
              $('#viewPropertyOccupancy').text(property.occupancy);
              getModal('viewPropertyModal').show();
          }
      });
  
     $('#addTenantBtn').on('click', function() {
          $('#addTenantForm')[0].reset();
          populateSelectOptions('addTenantProperty', properties, 'id', 'name', 'Select Property...');
          getModal('addTenantModal').show();
     });
  
      $('#addTenantForm').on('submit', function(e) {
          e.preventDefault();
          const newTenant = {
              id: nextTenantId++,
              name: $('#addTenantName').val().trim(),
              propertyId: parseInt($('#addTenantProperty').val()),
              unit: $('#addTenantUnit').val().trim(),
              phone: $('#addTenantPhone').val().trim(),
              email: $('#addTenantEmail').val().trim(),
          };
          if (!newTenant.name || !newTenant.propertyId || !newTenant.unit) {
              alert("Please fill in Name, Property, and Unit.");
              return;
          }
          tenants.push(newTenant);
          renderTenants();
          updateSummaryCards();
          addActivity(`Added new tenant: ${newTenant.name}`);
          getModal('addTenantModal').hide();
     });
  
      $('body').on('click', '.edit-tenant', function() {
          const tenantId = $(this).closest('tr').data('id');
          const tenant = getTenantById(tenantId);
          if (tenant) {
              $('#editTenantId').val(tenant.id);
              $('#editTenantName').val(tenant.name);
              populateSelectOptions('editTenantProperty', properties, 'id', 'name');
              $('#editTenantProperty').val(tenant.propertyId);
              $('#editTenantUnit').val(tenant.unit);
              $('#editTenantPhone').val(tenant.phone);
              $('#editTenantEmail').val(tenant.email);
              getModal('editTenantModal').show();
          }
      });
  
      $('#editTenantForm').on('submit', function(e) {
          e.preventDefault();
          const tenantId = parseInt($('#editTenantId').val());
          const index = tenants.findIndex(t => t.id === tenantId);
           if (index > -1) {
              tenants[index].name = $('#editTenantName').val().trim();
              tenants[index].propertyId = parseInt($('#editTenantProperty').val());
              tenants[index].unit = $('#editTenantUnit').val().trim();
              tenants[index].phone = $('#editTenantPhone').val().trim();
              tenants[index].email = $('#editTenantEmail').val().trim();
  
              if (!tenants[index].name || !tenants[index].propertyId || !tenants[index].unit) {
                  alert("Please ensure Name, Property, and Unit are filled.");
                  return;
              }
  
              renderTenants();
              addActivity(`Updated tenant: ${tenants[index].name}`);
              getModal('editTenantModal').hide();
           } else {
              alert('Error: Could not find tenant to update.');
           }
      });
  
       $('body').on('click', '.view-tenant', function() {
          const tenantId = $(this).closest('tr').data('id');
          const tenant = getTenantById(tenantId);
           if (tenant) {
              $('#viewTenantName').text(tenant.name);
              $('#viewTenantProperty').text(getPropertyName(tenant.propertyId));
              $('#viewTenantUnit').text(tenant.unit);
              $('#viewTenantPhone').text(tenant.phone || 'N/A');
              $('#viewTenantEmail').text(tenant.email || 'N/A');
              getModal('viewTenantModal').show();
          }
      });
  
      $('#addMaintenanceBtn').on('click', function() {
          $('#addMaintenanceForm')[0].reset();
          populateSelectOptions('addMaintenanceProperty', properties, 'id', 'name', 'Select Property...');
          getModal('addMaintenanceModal').show();
      });
  
       $('#addMaintenanceForm').on('submit', function(e) {
          e.preventDefault();
          const newRequest = {
              id: nextMaintenanceId++,
              propertyId: parseInt($('#addMaintenanceProperty').val()),
              unit: $('#addMaintenanceUnit').val().trim(),
              issue: $('#addMaintenanceIssue').val().trim(),
              status: $('#addMaintenanceStatus').val(),
              date: new Date().toISOString().split('T')[0]
          };
          if (!newRequest.propertyId || !newRequest.unit || !newRequest.issue) {
              alert("Please select a Property and fill in Unit and Issue.");
              return;
          }
          maintenanceRequests.push(newRequest);
          renderMaintenance();
          updateSummaryCards();
          addActivity(`Added maintenance request for ${getPropertyName(newRequest.propertyId)} Unit ${newRequest.unit}`);
          getModal('addMaintenanceModal').hide();
      });
  
       $('body').on('click', '.edit-maintenance', function() {
          const requestId = $(this).closest('tr').data('id');
          const request = maintenanceRequests.find(m => m.id === requestId);
          if (request) {
              $('#editMaintenanceId').val(request.id);
              $('#editMaintenancePropertyDisplay').text(getPropertyName(request.propertyId));
              $('#editMaintenanceUnitDisplay').text(request.unit);
              $('#editMaintenanceIssue').val(request.issue);
              $('#editMaintenanceStatus').val(request.status);
              getModal('editMaintenanceModal').show();
          }
       });
  
       $('#editMaintenanceForm').on('submit', function(e) {
          e.preventDefault();
          const requestId = parseInt($('#editMaintenanceId').val());
          const index = maintenanceRequests.findIndex(m => m.id === requestId);
           if (index > -1) {
              maintenanceRequests[index].issue = $('#editMaintenanceIssue').val().trim();
              maintenanceRequests[index].status = $('#editMaintenanceStatus').val();
  
              renderMaintenance();
              updateSummaryCards();
              addActivity(`Updated maintenance request (#${requestId})`);
              getModal('editMaintenanceModal').hide();
           } else {
              alert('Error: Could not find maintenance request to update.');
           }
      });
  
       $('#addPaymentBtn').on('click', function() {
          $('#addPaymentForm')[0].reset();
           populateSelectOptions('addPaymentTenant', tenants, 'id', 'name', 'Select Tenant...');
           $('#addPaymentDate').val(new Date().toISOString().split('T')[0]);
          getModal('addPaymentModal').show();
      });
  
      $('#addPaymentForm').on('submit', function(e) {
          e.preventDefault();
          const tenantId = parseInt($('#addPaymentTenant').val());
          const tenant = getTenantById(tenantId);
  
          if (!tenant) {
              alert("Invalid tenant selected.");
              return;
          }
  
          const newPayment = {
              id: nextPaymentId++,
              tenantId: tenantId,
              propertyId: tenant.propertyId,
              amount: parseFloat($('#addPaymentAmount').val()),
              date: $('#addPaymentDate').val(),
              status: $('#addPaymentStatus').val()
          };
  
          if (!newPayment.tenantId || !newPayment.amount || !newPayment.date) {
              alert("Please select Tenant and fill in Amount and Date.");
              return;
          }
  
          payments.push(newPayment);
          renderPayments();
          updateSummaryCards();
          initializeOrUpdateChart();
          addActivity(`Recorded payment ${formatCurrency(newPayment.amount)} from ${getTenantName(newPayment.tenantId)}`);
          getModal('addPaymentModal').hide();
      });
  
       $('body').on('click', '.view-payment', function() {
          const paymentId = $(this).closest('tr').data('id');
          const payment = payments.find(p => p.id === paymentId);
           if (payment) {
              $('#viewPaymentTenant').text(getTenantName(payment.tenantId));
              $('#viewPaymentProperty').text(getPropertyName(payment.propertyId));
              $('#viewPaymentAmount').text(formatCurrency(payment.amount));
              $('#viewPaymentDate').text(payment.date);
              $('#viewPaymentStatus').html(`<span class="badge ${payment.status === 'Paid' ? 'bg-success' : 'bg-danger'}">${payment.status}</span>`);
              getModal('viewPaymentModal').show();
          }
      });
  
  
     $('body').on('click', '.mark-paid-payment', function() {
          const $row = $(this).closest('tr');
          const id = parseInt($row.data('id'));
          const paymentIndex = payments.findIndex(p => p.id === id);
  
          if (paymentIndex > -1) {
              payments[paymentIndex].status = 'Paid';
              renderPayments();
              updateSummaryCards();
              initializeOrUpdateChart();
              const tenantName = getTenantName(payments[paymentIndex].tenantId);
              addActivity(`Marked payment from ${tenantName} (${formatCurrency(payments[paymentIndex].amount)}) as Paid.`);
          } else {
              console.error("Could not find payment to mark as paid:", id);
              alert("Error: Could not find payment record.");
          }
     });
  
       $('body').on('click', '.complete-maintenance', function() {
          const $row = $(this).closest('tr');
          const id = parseInt($row.data('id'));
          const requestIndex = maintenanceRequests.findIndex(m => m.id === id);
  
          if (requestIndex > -1) {
              maintenanceRequests[requestIndex].status = 'Completed';
              renderMaintenance();
              updateSummaryCards();
              const propertyName = getPropertyName(maintenanceRequests[requestIndex].propertyId);
              const unit = maintenanceRequests[requestIndex].unit;
              addActivity(`Marked maintenance for ${propertyName} ${unit} as Completed.`);
          } else {
              console.error("Could not find maintenance request to complete:", id);
              alert("Error: Could not find maintenance request.");
          }
     });
  
  
    $('#settingsForm').on('submit', function(e) {
        e.preventDefault();
        const newName = $('#settingsName').val().trim();
        const newEmail = $('#settingsEmail').val().trim();
        const newPhone = $('#settingsPhone').val().trim();
        const newPassword = $('#settingsPassword').val();
  
        if (!newName || !newEmail) {
            alert('Name and Email cannot be empty.');
            return;
        }
  
        console.log("Settings Saved (simulation):", { newName, newEmail, newPhone, newPassword: newPassword ? '******' : '(not changed)' });
        $('#landlordNameDisplay').text(newName);
        addActivity("Updated account settings.");
        alert("Settings saved successfully!");
        $('#settingsPassword').val('');
    });
  
    $('#logoutBtn').on('click', function() {
      if(confirm('Are you sure you want to logout?')) {
        console.log('Logout initiated...');
         addActivity("User logged out.");
         alert("Logout successful (simulation). You would be redirected.");
         window.location.href = 'login.html';
      }
    });
  
    updateSummaryCards();
    renderActivityList();
    initializeOrUpdateChart();
    renderProperties();
    loadSettings();
  
    $('.content-section').addClass('d-none');
    $('#dashboard').removeClass('d-none');
    $('#navLinks .nav-link[data-target="dashboard"]').addClass('active');
  
  });