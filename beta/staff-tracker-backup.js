/* ====================================================================
   STAFF TRACKER - PRESERVED BACKUP
   Extracted from: beta/index.html
   Date: 2026-08-04
   Source lines: HTML 1741-1824, JS 8853-9232
   ==================================================================== */


/* --------------------------------------------------------------------
   SECTION 1: HTML MODAL (Staff Edit Modal)
   Original lines: 1741-1824
   -------------------------------------------------------------------- */

/*
<!-- 👤 STAFF TRACKER EMPLOYEE EDIT MODAL -->
<div id="modal-staff-edit" class="modal-overlay" onclick="dismissModalOnBackdrop(event, 'modal-staff-edit')" style="display:none;z-index:9999 !important;align-items:flex-start !important;padding-top:1rem !important;">
  <div class="modal-card" style="max-width:440px;width:94%;padding:1.25rem 1.1rem;border-radius:20px;border:1px solid var(--border-color);box-shadow:0 10px 30px rgba(0,0,0,0.85);box-sizing:border-box;max-height:85vh;overflow-y:auto;-webkit-overflow-scrolling:touch;margin-top:0.5rem;">
    
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.85rem;border-bottom:1px solid var(--border-color);padding-bottom:0.6rem;">
      <h3 id="staff-edit-modal-title" style="margin:0;font-size:1.05rem;font-weight:800;color:var(--text-primary);display:flex;align-items:center;gap:6px;">
        👤 Employee Details
      </h3>
      <button onclick="closeModal('modal-staff-edit')" class="close-btn" style="background:none;border:none;color:var(--text-primary);font-size:1.2rem;cursor:pointer;">✕</button>
    </div>

    <form id="staff-edit-form" onsubmit="saveStaffMember(event)" style="display:flex;flex-direction:column;gap:0.85rem;text-align:left;">
      <input type="hidden" id="staff-id-input" value="">

      <div>
        <label style="font-size:0.78rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.3rem;">Employee Name *</label>
        <input type="text" id="staff-name-input" required placeholder="e.g. Ramesh Kumar" style="width:100%;padding:0.65rem 0.75rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-tertiary);color:var(--text-primary);font-size:0.9rem;min-height:44px;outline:none;box-sizing:border-box;">
      </div>

      <div style="display:flex;gap:0.55rem;">
        <div style="flex:1;">
          <label style="font-size:0.78rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.3rem;">Mobile Number *</label>
          <input type="tel" id="staff-phone-input" required pattern="[0-9]{10}" placeholder="10-digit number" style="width:100%;padding:0.65rem 0.75rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-tertiary);color:var(--text-primary);font-size:0.9rem;min-height:44px;outline:none;box-sizing:border-box;">
        </div>
        <div style="flex:1;">
          <label style="font-size:0.78rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.3rem;">Monthly Salary (₹) *</label>
          <input type="number" id="staff-salary-input" required placeholder="25000" style="width:100%;padding:0.65rem 0.75rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-tertiary);color:var(--text-primary);font-size:0.9rem;min-height:44px;outline:none;box-sizing:border-box;">
        </div>
      </div>

      <div>
        <label style="font-size:0.78rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.3rem;">Shift Hours & Working Days</label>
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:0.45rem;">
          <input type="time" id="staff-shift-start" value="09:00" style="flex:1;padding:0.5rem;border-radius:8px;border:1px solid var(--border-color);background:var(--bg-tertiary);color:var(--text-primary);font-size:0.85rem;min-height:40px;box-sizing:border-box;">
          <span style="font-size:0.8rem;color:var(--text-muted);">-</span>
          <input type="time" id="staff-shift-end" value="18:00" style="flex:1;padding:0.5rem;border-radius:8px;border:1px solid var(--border-color);background:var(--bg-tertiary);color:var(--text-primary);font-size:0.85rem;min-height:40px;box-sizing:border-box;">
        </div>
        <div id="staff-roster-chips" style="display:flex;gap:4px;justify-content:space-between;"></div>
      </div>

      <div style="display:flex;gap:0.55rem;">
        <div style="flex:1;">
          <label style="font-size:0.78rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.3rem;">Advance Taken (₹)</label>
          <input type="number" id="staff-advance-input" placeholder="0" style="width:100%;padding:0.65rem 0.75rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-tertiary);color:var(--text-primary);font-size:0.9rem;min-height:44px;outline:none;box-sizing:border-box;">
        </div>
        <div style="flex:1;">
          <label style="font-size:0.78rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.3rem;">Notes / Remarks</label>
          <input type="text" id="staff-notes-input" placeholder="e.g. Night Shift" style="width:100%;padding:0.65rem 0.75rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-tertiary);color:var(--text-primary);font-size:0.9rem;min-height:44px;outline:none;box-sizing:border-box;">
        </div>
      </div>

      <div>
        <label style="font-size:0.78rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.3rem;">Aadhaar Card (Image/PDF, max 5MB)</label>
        <input type="file" id="staff-aadhaar-input" accept="image/*,.pdf" onchange="handleStaffAadhaarUpload(event)" style="width:100%;font-size:0.8rem;color:var(--text-primary);padding:0.4rem 0;">
        <div id="staff-aadhaar-status" style="font-size:0.75rem;color:#38bdf8;margin-top:0.2rem;font-weight:700;"></div>
      </div>

      <!-- 30-Day Attendance Visual Calendar Grid -->
      <div>
        <label style="font-size:0.78rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.3rem;">Monthly Attendance Calendar</label>
        <div id="staff-calendar-grid" style="display:grid;grid-template-columns:repeat(7, 1fr);gap:4px;background:var(--bg-secondary);padding:0.5rem;border-radius:10px;border:1px solid var(--border-color);text-align:center;"></div>
      </div>

      <!-- Action Buttons: PDF Slip & WhatsApp Statement -->
      <div id="staff-slip-actions" style="display:none;gap:0.5rem;margin-top:0.25rem;">
        <button type="button" onclick="sendStaffWhatsappSlip()" style="flex:1;padding:0.65rem;border-radius:10px;background:#25D366;color:#ffffff;border:none;font-weight:800;font-size:0.82rem;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:4px;min-height:44px;">
          💬 WhatsApp Slip
        </button>
        <button type="button" onclick="exportStaffPdf()" style="flex:1;padding:0.65rem;border-radius:10px;background:#38bdf8;color:#000000;border:none;font-weight:800;font-size:0.82rem;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:4px;min-height:44px;">
          📄 Print PDF Slip
        </button>
      </div>

      <div style="display:flex;gap:0.5rem;margin-top:0.5rem;">
        <button type="submit" style="flex:2;padding:0.65rem;border-radius:10px;background:#22c55e;color:#fff;border:none;font-weight:800;font-size:0.88rem;cursor:pointer;">
          💾 Save Employee
        </button>
        <button type="button" id="staff-delete-btn" onclick="deleteStaffMember()" style="flex:1;padding:0.65rem;border-radius:10px;background:#ef4444;color:#fff;border:none;font-weight:800;font-size:0.88rem;cursor:pointer;display:none;">
          🗑️ Delete
        </button>
      </div>
    </form>
  </div>
</div>
*/


/* --------------------------------------------------------------------
   SECTION 2: JAVASCRIPT - Variables, Functions & Logic
   Original lines: 8853-9232
   -------------------------------------------------------------------- */

var _staffList = JSON.parse(localStorage.getItem('staff_tracker_list') || '[]');
var _staffFilter = 'all';
var _staffSearchQuery = '';

function renderStaffMode(container) {
  if (!container) return;
  
  if (!_staffList || !_staffList.length) {
    _staffList = [
      { id: 1, name: 'Ramesh Kumar', phone: '9876543210', salary: 22000, advance: 2000, shiftStart: '09:00', shiftEnd: '18:00', attendance: 24, status: 'active', aadhaar: null },
      { id: 2, name: 'Suresh Verma', phone: '8765432109', salary: 18000, advance: 500, shiftStart: '10:00', shiftEnd: '19:00', attendance: 22, status: 'active', aadhaar: null }
    ];
    localStorage.setItem('staff_tracker_list', JSON.stringify(_staffList));
  }

  var filtered = _staffList.filter(function(emp) {
    if (_staffSearchQuery) {
      var q = _staffSearchQuery.toLowerCase();
      var matchName = emp.name && emp.name.toLowerCase().indexOf(q) !== -1;
      var matchPhone = emp.phone && emp.phone.indexOf(q) !== -1;
      if (!matchName && !matchPhone) return false;
    }
    if (_staffFilter === 'active') return emp.status === 'active';
    if (_staffFilter === 'onshift') return emp.status === 'active';
    return true;
  });

  var html = '<div style="padding:0.75rem 0.85rem;max-width:680px;width:100%;margin:0 auto;box-sizing:border-box;position:relative;min-height:350px;">';
  
  html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.85rem;">' +
            '<div style="font-size:1.2rem;font-weight:900;color:var(--text-primary);display:flex;align-items:center;gap:6px;">' +
              '👤 Staff Tracker <span style="font-size:0.65rem;background:#38bdf8;color:#000;padding:2px 7px;border-radius:12px;font-weight:900;">β Beta</span>' +
            '</div>' +
            '<div style="font-size:0.82rem;color:var(--text-muted);font-weight:700;">' + _staffList.length + ' Employees</div>' +
          '</div>';

  html += '<div style="margin-bottom:0.75rem;">' +
            '<input type="text" placeholder="🔍 Search employee by name or phone..." value="' + escHtml(_staffSearchQuery) + '" oninput="_staffSearchQuery=this.value;renderStaffMode(document.getElementById(\'calc-mode-body\'))" style="width:100%;padding:0.65rem 0.85rem;border-radius:20px;border:1px solid var(--border-color);background:var(--bg-tertiary);color:var(--text-primary);font-size:0.88rem;outline:none;box-sizing:border-box;">' +
          '</div>';

  html += '<div style="display:flex;gap:0.45rem;margin-bottom:0.85rem;overflow-x:auto;">' +
            '<span class="sp-chip ' + (_staffFilter === 'all' ? 'on' : '') + '" onclick="_staffFilter=\'all\';renderStaffMode(document.getElementById(\'calc-mode-body\'))">All (' + _staffList.length + ')</span>' +
            '<span class="sp-chip ' + (_staffFilter === 'active' ? 'on' : '') + '" onclick="_staffFilter=\'active\';renderStaffMode(document.getElementById(\'calc-mode-body\'))">Active</span>' +
            '<span class="sp-chip ' + (_staffFilter === 'onshift' ? 'on' : '') + '" onclick="_staffFilter=\'onshift\';renderStaffMode(document.getElementById(\'calc-mode-body\'))">On Shift</span>' +
          '</div>';

  if (!filtered.length) {
    html += '<div style="text-align:center;padding:2.5rem 1rem;color:var(--text-muted);background:var(--bg-tertiary);border-radius:14px;border:1px dashed var(--border-color);">' +
              '<div style="font-size:2rem;margin-bottom:0.3rem;">📋</div>' +
              '<div style="font-size:0.9rem;font-weight:700;">No employees found</div>' +
              '<div style="font-size:0.78rem;margin-top:0.2rem;">Tap "+ Add Employee" below to add a staff member.</div>' +
            '</div>';
  } else {
    html += '<div style="display:flex;flex-direction:column;gap:0.75rem;">';
    filtered.forEach(function(emp) {
      var initial = emp.name ? emp.name[0].toUpperCase() : 'E';
      var avatarBg = 'linear-gradient(135deg, #38bdf8, #818cf8)';
      var netSalary = Math.max(0, (emp.salary || 0) - (emp.advance || 0));

      var today = new Date().toISOString().split('T')[0];
      var todayEntry = (emp.attendanceLog || []).find(function(l) { return l.date === today; });
      var todayStatus = todayEntry ? todayEntry.status : null;

      var pStyle = todayStatus === 'P' ? 'padding:3px 9px;border-radius:6px;background:#22c55e;color:#fff;border:2px solid #fff;font-weight:900;font-size:0.75rem;cursor:pointer;box-shadow:0 0 8px #22c55e;' : 'padding:3px 8px;border-radius:6px;background:#22c55e;color:#fff;border:none;font-weight:800;font-size:0.72rem;cursor:pointer;opacity:0.65;';
      var hStyle = todayStatus === 'H' ? 'padding:3px 9px;border-radius:6px;background:#eab308;color:#000;border:2px solid #fff;font-weight:900;font-size:0.75rem;cursor:pointer;box-shadow:0 0 8px #eab308;' : 'padding:3px 8px;border-radius:6px;background:#eab308;color:#000;border:none;font-weight:800;font-size:0.72rem;cursor:pointer;opacity:0.65;';
      var aStyle = todayStatus === 'A' ? 'padding:3px 9px;border-radius:6px;background:#ef4444;color:#fff;border:2px solid #fff;font-weight:900;font-size:0.75rem;cursor:pointer;box-shadow:0 0 8px #ef4444;' : 'padding:3px 8px;border-radius:6px;background:#ef4444;color:#fff;border:none;font-weight:800;font-size:0.72rem;cursor:pointer;opacity:0.65;';

      var waUrl = 'https://wa.me/' + formatIndianPhoneForWA(emp.phone);

      html += '<div onclick="openStaffEditModal(' + emp.id + ')" style="padding:0.9rem 1rem;background:var(--bg-tertiary);border:1px solid var(--border-color);border-radius:16px;cursor:pointer;touch-action:manipulation;transition:all 0.15s;position:relative;box-shadow:0 4px 14px rgba(0,0,0,0.25);">' +
                '<div style="display:flex;align-items:center;gap:0.75rem;">' +
                  '<div style="width:44px;height:44px;border-radius:50%;background:' + avatarBg + ';color:#000;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:1.15rem;flex-shrink:0;box-shadow:0 2px 8px rgba(56,189,248,0.3);">' + initial + '</div>' +
                  '<div style="flex:1;min-width:0;">' +
                    '<div style="display:flex;align-items:center;justify-content:space-between;">' +
                      '<div style="font-size:0.96rem;font-weight:800;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + escHtml(emp.name) + '</div>' +
                      '<div style="font-size:0.88rem;font-weight:900;color:#38bdf8;background:rgba(56,189,248,0.1);padding:3px 8px;border-radius:8px;">₹' + fmtNum(emp.salary) + '<span style="font-size:0.68rem;color:var(--text-muted);font-weight:600;">/mo</span></div>' +
                    '</div>' +
                    '<div style="display:flex;align-items:center;justify-content:space-between;margin-top:0.3rem;">' +
                      '<div style="font-size:0.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px;">' +
                        '📞 ' + escHtml(emp.phone) +
                        '<a href="' + waUrl + '" target="_blank" onclick="event.stopPropagation()" style="color:#25D366;text-decoration:none;font-weight:900;margin-left:4px;" title="Chat on WhatsApp">💬</a>' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                '</div>' +

                /* Sub-row: Net Payable & Quick Attendance Segmented Control */
                '<div style="display:flex;align-items:center;justify-content:space-between;margin-top:0.7rem;padding-top:0.6rem;border-top:1px solid var(--border-color);">' +
                  '<div style="font-size:0.78rem;color:var(--text-muted);">' +
                    'Net Pay: <span style="color:#22c55e;font-weight:900;">₹' + fmtNum(netSalary) + '</span>' +
                    (emp.advance ? ' <span style="color:#ef4444;font-size:0.72rem;margin-left:4px;">(Adv: ₹' + fmtNum(emp.advance) + ')</span>' : '') +
                  '</div>' +
                  '<div style="display:flex;align-items:center;background:var(--bg-secondary);padding:3px;border-radius:10px;border:1px solid var(--border-color);" onclick="event.stopPropagation()">' +
                    '<span style="font-size:0.7rem;color:var(--text-muted);font-weight:800;padding:0 5px;">Today:</span>' +
                    '<button onclick="recordStaffAttendance(' + emp.id + ', \'P\', event)" style="' + pStyle + '">P</button>' +
                    '<button onclick="recordStaffAttendance(' + emp.id + ', \'H\', event)" style="' + hStyle + '">H</button>' +
                    '<button onclick="recordStaffAttendance(' + emp.id + ', \'A\', event)" style="' + aStyle + '">A</button>' +
                  '</div>' +
                '</div>' +
              '</div>';
    });
    html += '</div>';
  }

  html += '<div style="position:sticky;bottom:1rem;margin-top:1.5rem;display:flex;justify-content:flex-end;">' +
            '<button onclick="openStaffEditModal(null)" style="padding:0.65rem 1.15rem;border-radius:24px;background:#22c55e;color:#ffffff;border:none;font-weight:800;font-size:0.88rem;cursor:pointer;display:inline-flex;align-items:center;gap:6px;box-shadow:0 4px 16px rgba(34,197,94,0.4);touch-action:manipulation;transition:all 0.15s;">' +
              '➕ Add Employee' +
            '</button>' +
          '</div>';

  html += '</div>';
  container.innerHTML = html;
}

var _editingStaffId = null;
var _currentAadhaarData = null;
var _selectedRosterDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function toggleRosterDay(day) {
  var idx = _selectedRosterDays.indexOf(day);
  if (idx !== -1) {
    _selectedRosterDays.splice(idx, 1);
  } else {
    _selectedRosterDays.push(day);
  }
  renderRosterChips();
}

function renderRosterChips() {
  var wrap = document.getElementById('staff-roster-chips');
  if (!wrap) return;
  var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  var html = '';
  days.forEach(function(d) {
    var isOn = _selectedRosterDays.indexOf(d) !== -1;
    html += '<span onclick="toggleRosterDay(\'' + d + '\')" style="padding:3px 6px;border-radius:6px;font-size:0.72rem;font-weight:700;cursor:pointer;' +
            (isOn ? 'background:#38bdf8;color:#000;' : 'background:var(--bg-tertiary);color:var(--text-muted);border:1px solid var(--border-color);') + '">' + d + '</span>';
  });
  wrap.innerHTML = html;
}

function recordStaffAttendance(empId, status, event) {
  if (event) event.stopPropagation();
  var emp = _staffList.find(function(x) { return x.id === empId; });
  if (!emp) return;
  if (!emp.attendanceLog) emp.attendanceLog = [];
  
  var today = new Date().toISOString().split('T')[0];
  var existingIdx = emp.attendanceLog.findIndex(function(l) { return l.date === today; });
  
  if (existingIdx !== -1) {
    if (emp.attendanceLog[existingIdx].status === status) {
      emp.attendanceLog.splice(existingIdx, 1);
      showToast('Cleared today\'s attendance for ' + emp.name + '. 🔄');
    } else {
      emp.attendanceLog[existingIdx].status = status;
      showToast('Updated to ' + status + ' for ' + emp.name + '! 📋');
    }
  } else {
    emp.attendanceLog.push({ date: today, status: status });
    showToast('Marked ' + status + ' for ' + emp.name + '! 📋');
  }

  var presentDays = emp.attendanceLog.filter(function(l) { return l.status === 'P'; }).length;
  var halfDays = emp.attendanceLog.filter(function(l) { return l.status === 'H'; }).length;
  emp.attendance = presentDays + (halfDays * 0.5);

  localStorage.setItem('staff_tracker_list', JSON.stringify(_staffList));
  renderStaffMode(document.getElementById('calc-mode-body'));
}

function openStaffEditModal(id) {
  _editingStaffId = id;
  _currentAadhaarData = null;
  var title = document.getElementById('staff-edit-modal-title');
  var nameIn = document.getElementById('staff-name-input');
  var phoneIn = document.getElementById('staff-phone-input');
  var salaryIn = document.getElementById('staff-salary-input');
  var advanceIn = document.getElementById('staff-advance-input');
  var shiftStartIn = document.getElementById('staff-shift-start');
  var shiftEndIn = document.getElementById('staff-shift-end');
  var notesIn = document.getElementById('staff-notes-input');
  var delBtn = document.getElementById('staff-delete-btn');
  var statusDiv = document.getElementById('staff-aadhaar-status');
  if (statusDiv) statusDiv.textContent = '';

  if (id) {
    var emp = _staffList.find(function(e) { return e.id === id; });
    if (emp) {
      if (title) title.innerHTML = '👤 Edit Employee: ' + escHtml(emp.name);
      if (nameIn) nameIn.value = emp.name || '';
      if (phoneIn) phoneIn.value = emp.phone || '';
      if (salaryIn) salaryIn.value = emp.salary || '';
      if (advanceIn) advanceIn.value = emp.advance || '';
      if (shiftStartIn) shiftStartIn.value = emp.shiftStart || '09:00';
      if (shiftEndIn) shiftEndIn.value = emp.shiftEnd || '18:00';
      if (notesIn) notesIn.value = emp.notes || '';
      if (delBtn) delBtn.style.display = 'block';
      if (emp.rosterDays) _selectedRosterDays = emp.rosterDays.slice();
      if (emp.aadhaar && statusDiv) statusDiv.textContent = '✅ Aadhaar Document Attached';
      renderStaffCalendarGrid(emp);
    }
  } else {
    if (title) title.innerHTML = '👤 Add New Employee';
    if (nameIn) nameIn.value = '';
    if (phoneIn) phoneIn.value = '';
    if (salaryIn) salaryIn.value = '';
    if (advanceIn) advanceIn.value = '';
    if (shiftStartIn) shiftStartIn.value = '09:00';
    if (shiftEndIn) shiftEndIn.value = '18:00';
    if (notesIn) notesIn.value = '';
    if (delBtn) delBtn.style.display = 'none';
    _selectedRosterDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    renderStaffCalendarGrid(null);
  }
  renderRosterChips();
  openModal('modal-staff-edit');
}

function renderStaffCalendarGrid(emp) {
  var grid = document.getElementById('staff-calendar-grid');
  var actions = document.getElementById('staff-slip-actions');
  if (!grid) return;
  if (!emp) {
    grid.innerHTML = '<div style="grid-column:span 7;font-size:0.75rem;color:var(--text-muted);padding:0.5rem;">Save employee to enable 30-day attendance calendar.</div>';
    if (actions) actions.style.display = 'none';
    return;
  }
  if (actions) actions.style.display = 'flex';

  var logMap = {};
  if (emp.attendanceLog) {
    emp.attendanceLog.forEach(function(l) { logMap[l.date] = l.status; });
  }

  var now = new Date();
  var totalDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  var monthStr = (now.getMonth() + 1) < 10 ? '0' + (now.getMonth() + 1) : '' + (now.getMonth() + 1);
  var ymPrefix = now.getFullYear() + '-' + monthStr + '-';

  var html = '';
  for (var d = 1; d <= totalDays; d++) {
    var dayStr = d < 10 ? '0' + d : '' + d;
    var fullDate = ymPrefix + dayStr;
    var status = logMap[fullDate] || (d <= 24 ? 'P' : (d === 25 ? 'A' : '--'));
    var bg = status === 'P' ? '#22c55e' : (status === 'A' ? '#ef4444' : (status === 'H' ? '#eab308' : 'var(--bg-tertiary)'));
    var color = (status === 'P' || status === 'A') ? '#fff' : (status === 'H' ? '#000' : 'var(--text-muted)');
    html += '<div style="padding:4px 2px;border-radius:6px;background:' + bg + ';color:' + color + ';font-size:0.7rem;font-weight:800;">' + d + '<br><span style="font-size:0.65rem;">' + status + '</span></div>';
  }
  grid.innerHTML = html;
}

function sendStaffWhatsappSlip() {
  if (!_editingStaffId) return;
  var emp = _staffList.find(function(e) { return e.id === _editingStaffId; });
  if (!emp) return;
  var netPay = Math.max(0, (emp.salary || 0) - (emp.advance || 0));
  var text = '🧾 *LAZY CALC - SALARY SLIP*\n' +
             '👤 *Employee:* ' + emp.name + '\n' +
             '📞 *Phone:* ' + emp.phone + '\n' +
             '📅 *Attendance:* ' + (emp.attendance || 0) + ' Days\n' +
             '💵 *Monthly Salary:* ₹' + fmtNum(emp.salary) + '\n' +
             '🔻 *Advance Deducted:* ₹' + fmtNum(emp.advance || 0) + '\n' +
             '✅ *Net Payable Salary:* ₹' + fmtNum(netPay) + '\n\n' +
             'Thank you for your hard work! 🙏';
  var url = 'https://wa.me/' + formatIndianPhoneForWA(emp.phone) + '?text=' + encodeURIComponent(text);
  window.open(url, '_blank');
}

function exportStaffPdf() {
  if (!_editingStaffId) return;
  var emp = _staffList.find(function(e) { return e.id === _editingStaffId; });
  if (!emp) return;
  var netPay = Math.max(0, (emp.salary || 0) - (emp.advance || 0));
  var printWin = window.open('', '_blank');
  if (!printWin) return;
  var html = '<html><head><title>Salary Slip - ' + escHtml(emp.name) + '</title>' +
             '<style>body{font-family:sans-serif;padding:20px;color:#000;} .box{border:2px solid #000;padding:20px;border-radius:10px;max-width:500px;margin:auto;} table{width:100%;border-collapse:collapse;margin:15px 0;} td,th{border:1px solid #ddd;padding:8px;text-align:left;} .title{text-align:center;font-size:20px;font-weight:bold;margin-bottom:15px;color:#1e3a8a;}</style></head><body>' +
             '<div class="box">' +
               '<div class="title">🧾 LAZY CALC - SALARY STATEMENT</div>' +
               '<div><b>Employee Name:</b> ' + escHtml(emp.name) + '</div>' +
               '<div><b>Mobile Number:</b> ' + escHtml(emp.phone) + '</div>' +
               '<div><b>Shift Hours:</b> ' + (emp.shiftStart || '09:00') + ' - ' + (emp.shiftEnd || '18:00') + '</div>' +
               '<div><b>Date Generated:</b> ' + new Date().toLocaleDateString() + '</div>' +
               '<table>' +
                 '<tr><th>Description</th><th>Amount (₹)</th></tr>' +
                 '<tr><td>Monthly Base Salary</td><td>₹' + fmtNum(emp.salary) + '</td></tr>' +
                 '<tr><td>Advance Payments Taken</td><td>- ₹' + fmtNum(emp.advance || 0) + '</td></tr>' +
                 '<tr style="background:#f3f4f6;font-weight:bold;"><td>Net Salary Payable</td><td>₹' + fmtNum(netPay) + '</td></tr>' +
               '</table>' +
               '<div style="margin-top:30px;display:flex;justify-content:space-between;"><div>_____________________<br>Employer Signature</div><div>_____________________<br>Employee Signature</div></div>' +
             '</div></body></html>';
  printWin.document.write(html);
  printWin.document.close();
  printWin.focus();
  setTimeout(function() { printWin.print(); }, 500);
}

function handleStaffAadhaarUpload(e) {
  var file = e.target.files[0];
  var statusDiv = document.getElementById('staff-aadhaar-status');
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) {
    alert('File size exceeds 5MB limit! Please upload a smaller image or PDF.');
    e.target.value = '';
    return;
  }
  var reader = new FileReader();
  reader.onload = function(evt) {
    _currentAadhaarData = evt.target.result;
    if (statusDiv) statusDiv.textContent = '✅ Attached: ' + file.name;
  };
  reader.readAsDataURL(file);
}

function saveStaffMember(e) {
  if (e) e.preventDefault();
  var name = document.getElementById('staff-name-input').value.trim();
  var phone = document.getElementById('staff-phone-input').value.trim();
  var salary = parseFloat(document.getElementById('staff-salary-input').value) || 0;
  var advance = parseFloat(document.getElementById('staff-advance-input').value) || 0;
  var shiftStart = document.getElementById('staff-shift-start').value;
  var shiftEnd = document.getElementById('staff-shift-end').value;
  var notes = (document.getElementById('staff-notes-input').value || '').trim();

  if (!name || !phone || phone.length !== 10) {
    alert('Please enter a valid employee name and 10-digit mobile number.');
    return;
  }

  if (_editingStaffId) {
    var emp = _staffList.find(function(x) { return x.id === _editingStaffId; });
    if (emp) {
      emp.name = name;
      emp.phone = phone;
      emp.salary = salary;
      emp.advance = advance;
      emp.shiftStart = shiftStart;
      emp.shiftEnd = shiftEnd;
      emp.notes = notes;
      emp.rosterDays = _selectedRosterDays.slice();
      if (_currentAadhaarData) emp.aadhaar = _currentAadhaarData;
    }
  } else {
    var newEmp = {
      id: Date.now(),
      name: name,
      phone: phone,
      salary: salary,
      advance: advance,
      shiftStart: shiftStart,
      shiftEnd: shiftEnd,
      notes: notes,
      rosterDays: _selectedRosterDays.slice(),
      attendance: 26,
      status: 'active',
      aadhaar: _currentAadhaarData || null
    };
    _staffList.push(newEmp);
  }

  localStorage.setItem('staff_tracker_list', JSON.stringify(_staffList));
  closeModal('modal-staff-edit');
  renderStaffMode(document.getElementById('calc-mode-body'));
  showToast('Employee saved successfully! 👤');
}

function deleteStaffMember() {
  if (!_editingStaffId) return;
  if (confirm('Are you sure you want to delete this employee record?')) {
    _staffList = _staffList.filter(function(x) { return x.id !== _editingStaffId; });
    localStorage.setItem('staff_tracker_list', JSON.stringify(_staffList));
    closeModal('modal-staff-edit');
    renderStaffMode(document.getElementById('calc-mode-body'));
    showToast('Employee deleted.');
  }
}
