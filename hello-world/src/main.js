import './style.css';

const icon = {
  logo: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  panel: `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="9" y1="4" x2="9" y2="20"/></svg>`,
  grid: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`,
  api: `<svg viewBox="0 0 24 24"><path d="M8 4 4 12l4 8M16 4l4 8-4 8"/></svg>`,
  claims: `<svg viewBox="0 0 24 24"><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>`,
  moon: `<svg viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></svg>`,
  plus: `<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  person: `<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5"/></svg>`,
  x: `<svg viewBox="0 0 24 24"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>`,
  clock: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg>`,
  filter: `<svg viewBox="0 0 24 24"><polygon points="4 4 20 4 14 12.5 14 19 10 21 10 12.5"/></svg>`,
  sort: `<svg viewBox="0 0 24 24"><path d="M7 4v16M3 8l4-4 4 4M17 20V4M13 16l4 4 4-4"/></svg>`,
  settings: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 13a7.97 7.97 0 0 0 0-2l2-1.6-2-3.4-2.4 1a8 8 0 0 0-1.7-1L15 3h-6l-.3 2.4a8 8 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.6a7.97 7.97 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a8 8 0 0 0 1.7 1L9 21h6l.3-2.4a8 8 0 0 0 1.7-1l2.4 1 2-3.4-2-1.6Z"/></svg>`,
  link: `<svg viewBox="0 0 24 24"><path d="M9 15 15 9M11 6l1-1a4 4 0 0 1 5.7 5.7l-1 1M13 18l-1 1A4 4 0 0 1 6.3 13.3l1-1"/></svg>`,
  flag: `<svg viewBox="0 0 24 24"><path d="M5 21V4h13l-3 4 3 4H5"/></svg>`,
  xCircle: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><line x1="9.5" y1="9.5" x2="14.5" y2="14.5"/><line x1="14.5" y1="9.5" x2="9.5" y2="14.5"/></svg>`,
  checkCircle: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polyline points="8.5 12.5 11 15 16 9"/></svg>`,
  split: `<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="12" r="2"/><path d="M6 8v8M6 9c0 3 4 3 10 3"/></svg>`,
  checkboxEmpty: `<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/></svg>`,
};

const statusMeta = {
  Open: { cls: 'status-open', icon: icon.flag },
  Rejected: { cls: 'status-rejected', icon: icon.xCircle },
  Registered: { cls: 'status-registered', icon: icon.checkCircle },
  Split: { cls: 'status-split', icon: icon.split },
};

const avatarColors = ['#fde68a', '#bfdbfe', '#bbf7d0', '#fbcfe8', '#ddd6fe', '#fed7aa'];

function initialsOf(name) {
  return name.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase();
}

function colorFor(name) {
  let hash = 0;
  for (const ch of name) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return avatarColors[hash % avatarColors.length];
}

function avatar(name) {
  if (!name) {
    return `<span class="avatar avatar-empty"></span>`;
  }
  return `<span class="avatar" style="background:${colorFor(name)}">${initialsOf(name)}</span>`;
}

function assigneeChip(name, disabled) {
  const label = name || 'Unassigned';
  return `
    <span class="assignee-chip${!name ? ' unassigned' : ''}${disabled ? ' disabled' : ''}">
      ${avatar(name)}
      <span class="assignee-name">${label}</span>
      ${icon.chevronDown}
    </span>
  `;
}

const claims = [
  { id: 'REQ-2025-14567', date: 'Apr 15, 2025, 12:30 PM', status: 'Open', linked: null, assignee: 'John Green' },
  { id: 'REQ-2025-1234', date: 'Apr 15, 2025, 12:30 PM', status: 'Open', linked: 3, assignee: null },
  { id: 'REQ-2025-4567', date: 'Apr 15, 2025, 12:30 PM', status: 'Open', linked: 3, assignee: 'Angela Juarez' },
  { id: 'REQ-2025-7890', date: 'Apr 15, 2025, 12:30 PM', status: 'Open', linked: 3, assignee: 'Angela Juarez' },
  { id: 'REQ-2025-8759', date: 'Apr 15, 2025, 12:30 PM', status: 'Split', linked: 3, assignee: 'John Green', disabled: true },
  { id: 'REQ-2025-14622', date: 'Apr 15, 2025, 12:30 PM', status: 'Rejected', linked: null, assignee: null },
  { id: 'REQ-2025-14633', date: 'Apr 15, 2025, 12:30 PM', status: 'Open', linked: null, assignee: 'Angela Juarez' },
  { id: 'REQ-2025-14644', date: 'Apr 15, 2025, 12:30 PM', status: 'Registered', linked: null, assignee: 'Emily Carter' },
  { id: 'REQ-2025-14655', date: 'Apr 15, 2025, 12:30 PM', status: 'Open', linked: null, assignee: null },
  { id: 'REQ-2025-14699', date: 'Apr 15, 2025, 12:30 PM', status: 'Open', linked: null, assignee: 'John Green', disabled: true },
  { id: 'REQ-2025-14710', date: 'Apr 15, 2025, 12:30 PM', status: 'Rejected', linked: null, assignee: 'John Green', disabled: true },
  { id: 'REQ-2025-14721', date: 'Apr 15, 2025, 12:30 PM', status: 'Rejected', linked: null, assignee: 'Mia Thompson' },
];

function statusBadge(status, linked) {
  const meta = statusMeta[status];
  return `
    <span class="status-badge ${meta.cls}">${meta.icon}${status}</span>
    ${linked ? `<span class="linked-chip">${icon.link}${linked}</span>` : ''}
  `;
}

function row(c) {
  return `
    <tr>
      <td><span class="checkbox">${icon.checkboxEmpty}</span></td>
      <td class="claim-id">${c.id}</td>
      <td class="muted">${c.date}</td>
      <td>${statusBadge(c.status, c.linked)}</td>
      <td>${assigneeChip(c.assignee, c.disabled)}</td>
    </tr>
  `;
}

document.querySelector('#app').innerHTML = `
  <div class="layout">
    <aside class="sidebar">
      <div class="sidebar-header">
        <span class="brand">${icon.logo}<span>Qantev</span></span>
        <button class="icon-btn">${icon.panel}</button>
      </div>

      <nav class="nav">
        <div class="nav-group">
          <div class="nav-item">
            ${icon.grid}<span>Administration</span>${icon.chevronDown}
          </div>
          <a class="nav-subitem" href="#">${icon.api}<span>API Requests</span></a>
        </div>
        <a class="nav-item active" href="#">${icon.claims}<span>Claims</span></a>
      </nav>

      <div class="sidebar-footer">2025.04.22.02</div>
    </aside>

    <div class="main-col">
      <header class="topbar">
        <span class="breadcrumb">Home</span>
        <div class="topbar-right">
          <span class="user-chip">
            <span class="avatar" style="background:#bfdbfe">AD</span>
            <span>Alex Dupre</span>
            ${icon.chevronDown}
          </span>
          <span class="divider"></span>
          <button class="icon-btn">${icon.moon}</button>
        </div>
      </header>

      <main class="content">
        <div class="page-header">
          <h1>Claims <span class="count">2.3k</span></h1>
          <button class="btn-primary">${icon.plus}Create Claim</button>
        </div>

        <div class="filter-bar">
          <div class="chips">
            <span class="chip">${icon.person}Assigned to me</span>
            <span class="chip active">${icon.x}Unassigned Claims</span>
            <span class="chip">${icon.clock}Due soon</span>
          </div>
          <div class="actions">
            <span class="action-link">${icon.filter}Filter</span>
            <span class="action-divider">|</span>
            <span class="action-link">${icon.sort}Sort</span>
            <span class="action-divider">|</span>
            <span class="action-link">${icon.settings}Settings</span>
          </div>
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th><span class="checkbox">${icon.checkboxEmpty}</span></th>
                <th>Claim ID</th>
                <th>Received date</th>
                <th>Status</th>
                <th>Assignee</th>
              </tr>
            </thead>
            <tbody>
              ${claims.map(row).join('')}
            </tbody>
          </table>
        </div>

        <div class="pagination">
          <button class="page-btn disabled">${icon.chevronLeft}</button>
          <button class="page-btn active">1</button>
          <button class="page-btn">2</button>
          <button class="page-btn">3</button>
          <button class="page-btn">${icon.chevronRight}</button>
        </div>
      </main>
    </div>
  </div>
`;
