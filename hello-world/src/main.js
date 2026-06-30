import './style.css';

const icon = {
  logo: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  panel: `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="9" y1="4" x2="9" y2="20"/></svg>`,
  grid: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`,
  api: `<svg viewBox="0 0 24 24"><path d="M8 4 4 12l4 8M16 4l4 8-4 8"/></svg>`,
  claims: `<svg viewBox="0 0 24 24"><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevronUp: `<svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>`,
  moon: `<svg viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></svg>`,
  plus: `<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  minus: `<svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
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
  scissors: `<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><line x1="8.5" y1="7.5" x2="20" y2="19"/><line x1="8.5" y1="16.5" x2="20" y2="5"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg>`,
  list: `<svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  zoomIn: `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  zoomOut: `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  expand: `<svg viewBox="0 0 24 24"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/></svg>`,
  pieHalf: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor" stroke="none"/></svg>`,
  alert: `<svg viewBox="0 0 24 24"><path d="M12 3 2 21h20L12 3Z"/><line x1="12" y1="9" x2="12" y2="14"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  checkboxEmpty: `<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/></svg>`,
  inbox: `<svg viewBox="0 0 24 24"><path d="M3 13h4l2 3h6l2-3h4"/><path d="M5.5 13 3.5 5h17l-2 8"/><path d="M3 13v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"/></svg>`,
  users: `<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5"/><circle cx="17" cy="8.5" r="2.4"/><path d="M15 14.8c2.3.4 4 2.2 4 5.2"/></svg>`,
  arrowCircle: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.5 8l4 4-4 4"/></svg>`,
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
  { id: 'REQ-2025-14567', date: 'Apr 15, 2025, 12:30 PM', status: 'Open', linked: null, assignee: 'John Green', team: 'medical-review', tag: 'Medical', ageHours: 5 },
  { id: 'REQ-2025-1234', date: 'Apr 15, 2025, 12:30 PM', status: 'Open', linked: 3, assignee: null, team: 'fraud', tag: 'Fraud', ageHours: 30 },
  { id: 'REQ-2025-4567', date: 'Apr 15, 2025, 12:30 PM', status: 'Open', linked: 3, assignee: 'Angela Juarez', team: 'data-entry', tag: 'Standard', ageHours: 10 },
  { id: 'REQ-2025-7890', date: 'Apr 15, 2025, 12:30 PM', status: 'Open', linked: 3, assignee: 'Angela Juarez', team: 'medical-review', tag: 'Medical', ageHours: 50 },
  { id: 'REQ-2025-8759', date: 'Apr 15, 2025, 12:30 PM', status: 'Split', linked: 3, assignee: 'John Green', disabled: true, team: 'fraud', tag: 'Fraud', ageHours: 12 },
  { id: 'REQ-2025-14622', date: 'Apr 15, 2025, 12:30 PM', status: 'Rejected', linked: null, assignee: null, team: 'data-entry', tag: 'Standard', ageHours: 80 },
  { id: 'REQ-2025-14633', date: 'Apr 15, 2025, 12:30 PM', status: 'Open', linked: null, assignee: 'Angela Juarez', team: 'medical-review', tag: 'Medical', ageHours: 20 },
  { id: 'REQ-2025-14644', date: 'Apr 15, 2025, 12:30 PM', status: 'Registered', linked: null, assignee: 'Emily Carter', team: 'data-entry', tag: 'Standard', ageHours: 4 },
  { id: 'REQ-2025-14655', date: 'Apr 15, 2025, 12:30 PM', status: 'Open', linked: null, assignee: null, team: null, tag: 'Unmatched', ageHours: 15 },
  { id: 'REQ-2025-14699', date: 'Apr 15, 2025, 12:30 PM', status: 'Open', linked: null, assignee: 'John Green', disabled: true, team: 'fraud', tag: 'Fraud', ageHours: 28 },
  { id: 'REQ-2025-14710', date: 'Apr 15, 2025, 12:30 PM', status: 'Rejected', linked: null, assignee: 'John Green', disabled: true, team: null, tag: 'Unmatched', ageHours: 40 },
  { id: 'REQ-2025-14721', date: 'Apr 15, 2025, 12:30 PM', status: 'Rejected', linked: null, assignee: 'Mia Thompson', team: 'medical-review', tag: 'Medical', ageHours: 6 },
];

/* ---------------------------------------------------------------------- */
/* Routing concept: teams, handlers, SLA + in-page reassignment state     */
/* ---------------------------------------------------------------------- */

const TEAMS = [
  { id: 'data-entry', label: 'Data Entry', slaHours: 72 },
  { id: 'medical-review', label: 'Medical Review', slaHours: 48 },
  { id: 'fraud', label: 'Fraud', slaHours: 24 },
];

const HANDLERS = [
  { name: 'John Green', team: 'fraud' },
  { name: 'Angela Juarez', team: 'medical-review' },
  { name: 'Emily Carter', team: 'data-entry' },
  { name: 'Mia Thompson', team: 'medical-review' },
  { name: 'Carlos Vega', team: 'data-entry' },
];

// In-memory only — resets on reload. Mocks what would otherwise be a
// reassignment API call + audit log write.
const claimRuntimeState = {};
const auditOverrides = {};
const unavailableHandlers = new Set();

function getEffectiveTeam(claim) {
  return Object.prototype.hasOwnProperty.call(claimRuntimeState, claim.id)
    ? claimRuntimeState[claim.id]
    : claim.team;
}

function reassignClaim(claimId, newTeamId, actor, reason) {
  claimRuntimeState[claimId] = newTeamId;
  if (!auditOverrides[claimId]) auditOverrides[claimId] = [];
  auditOverrides[claimId].push({
    team: newTeamId,
    actor,
    reason,
    timestamp: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }),
  });
}

function teamLabel(teamId) {
  return TEAMS.find((t) => t.id === teamId)?.label || 'Unmatched';
}

function isOverdue(claim) {
  const team = TEAMS.find((t) => t.id === getEffectiveTeam(claim));
  const slaHours = team ? team.slaHours : 24;
  return claim.ageHours > slaHours;
}

function formatAge(hours) {
  return hours < 24 ? `${hours}h` : `${Math.round(hours / 24)}d`;
}

function tagChip(tag) {
  const cls = tag === 'Fraud' ? 'tag-fraud' : tag === 'Medical' ? 'tag-medical' : tag === 'Standard' ? 'tag-standard' : 'tag-unmatched';
  return `<span class="tag-chip ${cls}">${tag}</span>`;
}

function slaChip(claim) {
  const overdue = isOverdue(claim);
  return `<span class="sla-chip ${overdue ? 'overdue' : ''}">${overdue ? icon.alert : icon.clock}${formatAge(claim.ageHours)}</span>`;
}

function teamBadge(teamId) {
  if (!teamId) return `<span class="tag-chip tag-unmatched">${icon.alert}Unmatched</span>`;
  return `<span class="team-badge">${teamLabel(teamId)}</span>`;
}

function statusBadge(status, linked) {
  const meta = statusMeta[status];
  return `
    <span class="status-badge ${meta.cls}">${meta.icon}${status}</span>
    ${linked ? `<span class="linked-chip">${icon.link}${linked}</span>` : ''}
  `;
}

function row(c) {
  return `
    <tr data-claim-id="${c.id}">
      <td><span class="checkbox">${icon.checkboxEmpty}</span></td>
      <td class="claim-id">${c.id}</td>
      <td class="muted">${c.date}</td>
      <td>${statusBadge(c.status, c.linked)}</td>
      <td>${assigneeChip(c.assignee, c.disabled)}</td>
    </tr>
  `;
}

/* ---------------------------------------------------------------------- */
/* Mock data generator for claim detail pages                             */
/* ---------------------------------------------------------------------- */

function seedFromString(s) {
  let h = 0;
  for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length) % arr.length];
}

function pickInt(rng, min, max) {
  return min + Math.floor(rng() * (max - min + 1));
}

const firstNames = ['Charles', 'Maria', 'Daniel', 'Sophia', 'Carlos', 'Lucia', 'Andres', 'Valentina', 'Miguel', 'Elena'];
const lastNames = ['Heyer', 'Martinez', 'Lopez', 'Garcia', 'Torres', 'Ramirez', 'Castillo', 'Mendoza', 'Vargas', 'Ortiz'];
const doctorNames = ['Dr. Carlos Martinez', 'Dra. Ana Sosa', 'Dr. Luis Pena', 'Dra. Maria Fernandez', 'Dr. Jorge Salas'];
const specialties = ['Medicina Interna', 'Pediatria', 'Cardiologia', 'Dermatologia', 'Ginecologia', 'Traumatologia'];
const hospitalNames = ['Hospital San Antonio', 'Clinica Santa Fe', 'Hospital del Valle', 'Centro Medico Andino', 'Clinica La Esperanza'];
const cities = ['Quito, Pichincha', 'Guayaquil, Guayas', 'Cuenca, Azuay', 'Loja, Loja'];
const documentClasses = ['Medical Record', 'Invoice', 'Lab Result', 'Prescription'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const serviceCatalog = [
  ['Consulta', 'Infeccion aguda de vias respiratorias superiores'],
  ['Laboratorio', 'Hemograma completo'],
  ['Farmacia', 'Medicamento - Amoxicilina 500mg'],
  ['Imagenologia', 'Radiografia de torax PA y lateral'],
  ['Procedimiento', 'Electrocardiograma'],
  ['Imagenologia', 'Ecografia abdominal'],
];

function fmtDate(rng) {
  return `${pickInt(rng, 1, 28)} ${pick(rng, months)} ${pickInt(rng, 2023, 2025)}`;
}

function buildClaimDetail(claim) {
  const rng = mulberry32(seedFromString(claim.id));
  const memberName = claim.assignee && rng() > 0.5
    ? claim.assignee
    : `${pick(rng, firstNames)} ${pick(rng, lastNames)}`;
  const doctor = pick(rng, doctorNames);
  const specialty = pick(rng, specialties);
  const hospital = pick(rng, hospitalNames);
  const city = pick(rng, cities);
  const cedula = String(pickInt(rng, 1000000000, 1999999999));
  const policyId = `PLN${pickInt(rng, 10000000, 99999999)}`;
  const dob = fmtDate(rng);
  const submitted = fmtDate(rng);
  const invoiceDate = fmtDate(rng);
  const serviceDate = fmtDate(rng);

  const lineCount = pickInt(rng, 2, 4);
  const services = [];
  for (let i = 0; i < lineCount; i++) {
    const [type, desc] = pick(rng, serviceCatalog);
    services.push({
      date: serviceDate,
      type,
      cie: `J0${pickInt(rng, 0, 9)}`,
      codeType: 'CIE10',
      desc,
      cups: String(pickInt(rng, 890000, 899999)),
      value: pickInt(rng, 8, 95),
    });
  }
  const subtotal = services.reduce((s, l) => s + l.value, 0);
  const iva = Math.round(subtotal * 0.12 * 100) / 100;
  const total = Math.round((subtotal + iva) * 100) / 100;

  return {
    memberName,
    doctor,
    specialty,
    hospital,
    city,
    cedula,
    policyId,
    dob,
    submitted,
    invoiceDate,
    serviceDate,
    services,
    subtotal,
    iva,
    total,
    amount: total,
    percent: pickInt(rng, 10, 95),
    fieldsCount: pickInt(rng, 16, 26),
    issuesCount: pickInt(rng, 1, 6),
    docName: `Factura Medica ${pickInt(rng, 100000, 999999)}`,
    docClass: pick(rng, documentClasses),
    pageCount: pickInt(rng, 1, 6),
    hasConflict: rng() > 0.6,
    accident: rng() > 0.5 ? 'true' : 'false',
    providerAddress: rng() > 0.4 ? `Av. ${pick(rng, lastNames)} N${pickInt(rng, 10, 99)}-${pickInt(rng, 10, 99)}` : null,
  };
}

/* ---------------------------------------------------------------------- */
/* Shell pieces shared by both views                                      */
/* ---------------------------------------------------------------------- */

function renderSidebar(active) {
  return `
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
          <a class="nav-subitem" href="#/">${icon.api}<span>API Requests</span></a>
        </div>
        <a class="nav-item ${active === 'claims' ? 'active' : ''}" href="#/">${icon.claims}<span>Claims</span></a>

        <div class="nav-section-label">Routing (proposal)</div>
        <a class="nav-item ${active === 'queues' ? 'active' : ''}" href="#/queues/medical-review">${icon.inbox}<span>Team Queues</span></a>
        <a class="nav-item ${active === 'supervisor' ? 'active' : ''}" href="#/supervisor">${icon.users}<span>Supervisor</span></a>
      </nav>

      <div class="sidebar-footer">2025.04.22.02</div>
    </aside>
  `;
}

function renderUserChip() {
  return `
    <div class="topbar-right">
      <span class="user-chip">
        <span class="avatar" style="background:#bfdbfe">AD</span>
        <span>Alex Dupre</span>
        ${icon.chevronDown}
      </span>
      <span class="divider"></span>
      <button class="icon-btn">${icon.moon}</button>
    </div>
  `;
}

/* ---------------------------------------------------------------------- */
/* Claims list view                                                       */
/* ---------------------------------------------------------------------- */

function renderClaimsList() {
  return `
    <header class="topbar">
      <span class="breadcrumb">Home</span>
      ${renderUserChip()}
    </header>

    <main class="content">
      <div class="page-body">
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
      </div>
    </main>
  `;
}

/* ---------------------------------------------------------------------- */
/* Screen 1 — Team queue view                                             */
/* ---------------------------------------------------------------------- */

function renderTeamQueueRow(c, rank) {
  return `
    <tr data-claim-id="${c.id}">
      <td class="queue-rank">${rank}</td>
      <td class="claim-id">${c.id}</td>
      <td class="muted">${c.date}</td>
      <td>${tagChip(c.tag)}</td>
      <td>${slaChip(c)}</td>
      <td>${statusBadge(c.status, c.linked)}</td>
      <td>${assigneeChip(c.assignee, c.disabled)}</td>
    </tr>
  `;
}

function renderTeamQueue(teamId) {
  const team = TEAMS.find((t) => t.id === teamId) || TEAMS[1];
  const teamClaims = claims
    .filter((c) => getEffectiveTeam(c) === team.id)
    .slice()
    .sort((a, b) => {
      const aOver = isOverdue(a);
      const bOver = isOverdue(b);
      if (aOver !== bOver) return aOver ? -1 : 1;
      return b.ageHours - a.ageHours;
    });
  const breachCount = teamClaims.filter(isOverdue).length;

  return `
    <header class="topbar">
      <span class="breadcrumb">Home / Team Queues</span>
      ${renderUserChip()}
    </header>

    <main class="content">
      <div class="page-body">
        <div class="page-header">
          <h1>${team.label} <span class="count">&mdash; Queue</span></h1>
          <button class="btn-primary btn-pull-next">${icon.arrowCircle}Assign next to me</button>
        </div>

        <div class="tabs queue-team-tabs">
          ${TEAMS.map((t) => `<button class="tab-btn ${t.id === team.id ? 'active' : ''}" data-team="${t.id}">${t.label}</button>`).join('')}
        </div>

        <p class="queue-scope-note">
          ${icon.checkCircle} Showing only ${team.label} claims &middot; ${teamClaims.length} in queue, ordered by priority &middot;
          <span class="${breachCount ? 'overdue-text' : ''}">${breachCount} past SLA</span>
        </p>

        <div class="table-wrap">
          <table class="queue-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Claim ID</th>
                <th>Received date</th>
                <th>Tag</th>
                <th>SLA</th>
                <th>Status</th>
                <th>Assignee</th>
              </tr>
            </thead>
            <tbody>
              ${teamClaims.length
                ? teamClaims.map((c, i) => renderTeamQueueRow(c, i + 1)).join('')
                : `<tr><td colspan="7" class="empty-row">No claims in this queue right now.</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  `;
}

/* ---------------------------------------------------------------------- */
/* Screen 2 — Supervisor cross-queue control view                        */
/* ---------------------------------------------------------------------- */

function handlerClaims(handlerName) {
  return claims.filter((c) => c.assignee === handlerName);
}

function renderSupervisorRow(c) {
  const teamId = getEffectiveTeam(c);
  const flagged = unavailableHandlers.has(c.assignee);
  return `
    <tr class="${flagged ? 'flagged-row' : ''}" data-claim-id="${c.id}">
      <td class="claim-id">${c.id}</td>
      <td>${tagChip(c.tag)}</td>
      <td>${teamBadge(teamId)}</td>
      <td>${slaChip(c)}</td>
      <td>${assigneeChip(c.assignee, c.disabled)}${flagged ? `<span class="flag-inline">${icon.alert}Needs reassignment</span>` : ''}</td>
      <td>
        <select class="reassign-select" data-claim-id="${c.id}">
          <option value="">Reassign&hellip;</option>
          ${TEAMS.map((t) => `<option value="${t.id}" ${t.id === teamId ? 'disabled' : ''}>${t.label}</option>`).join('')}
        </select>
      </td>
    </tr>
  `;
}

function renderSupervisorView() {
  const summaries = TEAMS.map((t) => {
    const teamClaims = claims.filter((c) => getEffectiveTeam(c) === t.id);
    const breaches = teamClaims.filter(isOverdue).length;
    const oldest = teamClaims.slice().sort((a, b) => b.ageHours - a.ageHours)[0];
    return { team: t, count: teamClaims.length, breaches, oldest };
  });
  const unmatchedClaims = claims.filter((c) => !getEffectiveTeam(c));

  return `
    <header class="topbar">
      <span class="breadcrumb">Home / Supervisor</span>
      ${renderUserChip()}
    </header>

    <main class="content">
      <div class="page-body">
        <div class="page-header">
          <h1>Supervisor <span class="count">&mdash; Cross-Queue Control</span></h1>
        </div>

        <div class="queue-cards">
          ${summaries.map((s) => `
            <a class="queue-card" href="#/queues/${s.team.id}">
              <div class="queue-card-top">
                <span class="queue-card-title">${s.team.label}</span>
                <span class="queue-card-count">${s.count}</span>
              </div>
              <div class="queue-card-row"><span>Oldest claim</span><span>${s.oldest ? `${s.oldest.id} &middot; ${formatAge(s.oldest.ageHours)}` : '&mdash;'}</span></div>
              <div class="queue-card-row"><span>SLA breaches</span><span class="${s.breaches ? 'overdue-text' : ''}">${s.breaches}</span></div>
            </a>
          `).join('')}
          <div class="queue-card queue-card-unmatched">
            <div class="queue-card-top">
              <span class="queue-card-title">${icon.alert}Unmatched</span>
              <span class="queue-card-count">${unmatchedClaims.length}</span>
            </div>
            <div class="queue-card-row"><span>No rule matched</span><span>needs manual routing</span></div>
          </div>
        </div>

        <div class="supervisor-grid">
          <section>
            <p class="section-label">Handler availability</p>
            <div class="handler-list">
              ${HANDLERS.map((h) => {
                const unavailable = unavailableHandlers.has(h.name);
                const flaggedCount = unavailable ? handlerClaims(h.name).length : 0;
                return `
                  <div class="handler-row">
                    ${avatar(h.name)}
                    <div class="handler-info">
                      <span class="handler-name">${h.name}</span>
                      <span class="handler-team">${teamLabel(h.team)}</span>
                      ${flaggedCount ? `<span class="flag-chip">${icon.alert}${flaggedCount} to reassign</span>` : ''}
                    </div>
                    <button class="avail-toggle ${unavailable ? 'off' : 'on'}" data-handler="${h.name}">
                      <span class="avail-dot"></span>${unavailable ? 'Unavailable' : 'Available'}
                    </button>
                  </div>
                `;
              }).join('')}
            </div>
          </section>

          <section>
            <p class="section-label">All claims</p>
            <div class="table-wrap">
              <table class="supervisor-table">
                <thead>
                  <tr><th>Claim ID</th><th>Tag</th><th>Team</th><th>SLA</th><th>Assignee</th><th></th></tr>
                </thead>
                <tbody>
                  ${claims.map(renderSupervisorRow).join('')}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </main>
  `;
}

/* ---------------------------------------------------------------------- */
/* Claim detail view                                                      */
/* ---------------------------------------------------------------------- */

function statusIcon(kind) {
  if (kind === 'ok') return `<span class="status-dot status-dot-ok">${icon.checkCircle}</span>`;
  if (kind === 'warn') return `<span class="status-dot status-dot-warn">${icon.pieHalf}</span>`;
  return `<span class="status-dot status-dot-warn">${icon.pieHalf}</span>`;
}

function valueTag(text, count, conflict) {
  return `
    <span class="value-tag">
      <span class="value-tag-left">
        ${conflict ? `<span class="conflict-mark">${icon.alert}</span>` : icon.claims}
        <span class="value-text">${text}</span>
      </span>
      <span class="value-tag-right">
        ${count ? `<span class="value-count">+${count}</span>` : ''}
        ${icon.chevronDown}
      </span>
    </span>
  `;
}

function valuePlain(text) {
  return `<span class="value-plain">${text}</span>`;
}

function valueSelect(text) {
  return `<span class="value-plain value-select">${text}${icon.chevronDown}</span>`;
}

function fieldRow({ indent, kind, label, value, status }) {
  const indentStyle = `padding-left:${0.85 + indent * 1.6}rem`;
  const groupIcon = kind === 'group-open' ? icon.minus : kind === 'group-closed' ? icon.plus : '';
  return `
    <tr class="field-row">
      <td class="field-name${indent > 0 ? ' grouped' : ''}" style="${indentStyle}">
        ${groupIcon ? `<span class="group-toggle">${groupIcon}</span>` : ''}
        <span>${label}</span>
      </td>
      <td class="field-value">
        ${status ? statusIcon(status) : ''}
        ${value || ''}
      </td>
    </tr>
  `;
}

function renderFieldsTab(d) {
  const rows = [
    fieldRow({ indent: 0, kind: 'leaf', label: 'Member Name', status: 'warn', value: valueTag(d.memberName, 3) }),
    fieldRow({ indent: 0, kind: 'group-open', label: 'Object (1)' }),
    fieldRow({ indent: 1, kind: 'group-closed', label: 'Member' }),
    fieldRow({ indent: 1, kind: 'leaf', label: 'Date of Birth', status: 'warn', value: valuePlain(d.dob) }),
    fieldRow({ indent: 0, kind: 'group-open', label: 'Object (2)' }),
    fieldRow({ indent: 1, kind: 'group-closed', label: 'Provider' }),
    fieldRow({ indent: 1, kind: 'leaf', label: 'Date of Submission', status: 'warn', value: valueTag(d.submitted, 2) }),
    fieldRow({ indent: 0, kind: 'leaf', label: 'Policy ID', status: 'ok', value: valueTag(d.policyId, 8, d.hasConflict) }),
    fieldRow({ indent: 0, kind: 'leaf', label: 'Accident', status: 'warn', value: valuePlain(d.accident) }),
    fieldRow({ indent: 0, kind: 'leaf', label: 'Provider Address', status: 'warn', value: d.providerAddress ? valueSelect(d.providerAddress) : valueSelect('Select') }),
    fieldRow({ indent: 0, kind: 'leaf', label: 'Amount', status: 'ok', value: valueTag(`$${d.amount.toFixed(0)}`, 8) }),
  ].join('');

  return `
    <table class="fields-table">
      <thead><tr><th>Name</th><th>Value</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderServiceLinesTab(d) {
  const rows = d.services.map((s) => `
    <tr>
      <td>${s.date}</td>
      <td>${s.type}</td>
      <td>${s.cie}</td>
      <td class="muted">${s.desc}</td>
      <td>${s.cups}</td>
      <td class="amount-col">$${s.value.toFixed(2)}</td>
    </tr>
  `).join('');

  return `
    <table class="service-lines-table">
      <thead>
        <tr><th>Date</th><th>Type</th><th>Code</th><th>Description</th><th>CUPS</th><th>Value</th></tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

/* ---------------------------------------------------------------------- */
/* Screen 3 — Routing & audit tab                                         */
/* ---------------------------------------------------------------------- */

const overrideReasons = [
  'suspected duplicate provider',
  'incorrect initial classification',
  'high-value claim requires fraud review',
  'missing documentation flagged on intake',
  'escalated by handler',
];

function fmtDateTime(rng) {
  return `${pickInt(rng, 1, 28)} ${pick(rng, months)} 2025, ${pickInt(rng, 8, 17)}:${String(pickInt(rng, 0, 59)).padStart(2, '0')}`;
}

function buildRoutingHistory(claim) {
  const rng = mulberry32(seedFromString(claim.id + 'audit'));
  const originTeam = TEAMS.find((t) => t.id === claim.team);
  const entries = [];

  entries.push({
    text: originTeam ? `Auto-routed to ${originTeam.label}` : 'Auto-routing found no matching rule — sent to Unmatched',
    rule: originTeam
      ? `claim_type = ${claim.tag}${originTeam.id === 'fraud' ? ' AND amount > €2,000' : ''}`
      : null,
    actor: 'System',
    reason: null,
    timestamp: fmtDateTime(rng),
  });

  if (originTeam && rng() > 0.55) {
    const altTeams = TEAMS.filter((t) => t.id !== originTeam.id);
    const newTeam = pick(rng, altTeams);
    entries.push({
      text: `Reassigned to ${newTeam.label} by J. Green (supervisor)`,
      rule: null,
      actor: 'J. Green (supervisor)',
      reason: pick(rng, overrideReasons),
      timestamp: fmtDateTime(rng),
    });
  }

  (auditOverrides[claim.id] || []).forEach((o) => {
    entries.push({
      text: `Reassigned to ${teamLabel(o.team)} by ${o.actor}`,
      rule: null,
      actor: o.actor,
      reason: o.reason,
      timestamp: o.timestamp,
    });
  });

  return entries;
}

function renderAuditTab(claim) {
  const history = buildRoutingHistory(claim);
  const currentTeam = getEffectiveTeam(claim);

  return `
    <div class="audit-panel">
      <div class="audit-current">
        <span>Current queue</span>
        ${teamBadge(currentTeam)}
        <span class="audit-current-note">A claim lives in exactly one queue at a time.</span>
      </div>

      <div class="audit-timeline">
        ${history.map((h) => `
          <div class="audit-entry">
            <span class="audit-dot"></span>
            <div class="audit-entry-body">
              <div class="audit-entry-text">${h.text}</div>
              ${h.rule ? `<div class="audit-entry-rule">Rule: <code>${h.rule}</code></div>` : ''}
              ${h.reason ? `<div class="audit-entry-reason">Reason: ${h.reason}</div>` : ''}
              <div class="audit-entry-meta">${h.actor} &middot; ${h.timestamp}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="audit-override">
        <p class="section-label">Reassign / override</p>
        <div class="audit-override-form">
          <select class="audit-team-select">
            ${TEAMS.map((t) => `<option value="${t.id}" ${t.id === currentTeam ? 'disabled' : ''}>${t.label}</option>`).join('')}
          </select>
          <input class="audit-reason-input" type="text" placeholder="Reason for override" />
          <button class="btn-secondary audit-confirm-btn">${icon.checkCircle}Confirm reassignment</button>
        </div>
      </div>
    </div>
  `;
}

function renderInvoice(claim, d) {
  const serviceRows = d.services.map((s) => `
    <tr>
      <td>${s.date}</td>
      <td>${s.type}</td>
      <td>${s.cie} <span class="muted">(${s.codeType})</span></td>
      <td>${s.desc}</td>
      <td>${s.cups}</td>
      <td class="amount-col">$${s.value.toFixed(2)}</td>
    </tr>
  `).join('');

  return `
    <div class="invoice">
      <div class="invoice-head">
        <div>
          <div class="invoice-hospital">${d.hospital}</div>
          <div class="invoice-address">${d.city} &middot; Tel. (02) 2 999-100</div>
          <div class="invoice-address">RUC: 170123456001 &middot; Autorizacion SRI: 001-001-000123456</div>
        </div>
        <div class="invoice-title">
          <div class="invoice-title-main">FACTURA M&Eacute;DICA</div>
          <div class="invoice-meta">${claim.id}</div>
          <div class="invoice-meta">Fecha de Factura: ${d.invoiceDate}</div>
          <div class="invoice-meta">Fecha de Servicio: ${d.serviceDate}</div>
          <span class="invoice-verified">Verificado</span>
        </div>
      </div>

      <div class="invoice-cols">
        <div>
          <div class="invoice-section-label">Informaci&oacute;n del Paciente</div>
          <div class="invoice-kv"><span>Nombre</span><span>${d.memberName}</span></div>
          <div class="invoice-kv"><span>C&eacute;dula</span><span>${d.cedula}</span></div>
          <div class="invoice-kv"><span>F. Nacimiento</span><span>${d.dob}</span></div>
          <div class="invoice-kv"><span>Direcci&oacute;n</span><span>${d.providerAddress || `${d.city}`}</span></div>
          <div class="invoice-kv"><span>Seguro</span><span>${d.policyId}</span></div>
        </div>
        <div>
          <div class="invoice-section-label">Informaci&oacute;n del M&eacute;dico</div>
          <div class="invoice-kv"><span>M&eacute;dico</span><span>${d.doctor}</span></div>
          <div class="invoice-kv"><span>Especialidad</span><span>${d.specialty}</span></div>
          <div class="invoice-kv"><span>Consultorio</span><span>${pickInt(mulberry32(seedFromString(claim.id + 'c')), 100, 950)}</span></div>
        </div>
      </div>

      <div class="invoice-section-label">Detalle de Servicios</div>
      <table class="invoice-services">
        <thead>
          <tr><th>Fecha</th><th>Tipo</th><th>C&oacute;digo</th><th>Descripci&oacute;n</th><th>CUPS</th><th>Valor</th></tr>
        </thead>
        <tbody>${serviceRows}</tbody>
      </table>

      <div class="invoice-totals">
        <div><span>Subtotal</span><span>$${d.subtotal.toFixed(2)}</span></div>
        <div><span>IVA (12%)</span><span>$${d.iva.toFixed(2)}</span></div>
        <div class="invoice-total-final"><span>Total</span><span>$${d.total.toFixed(2)}</span></div>
      </div>

      <div class="invoice-section-label">Informaci&oacute;n de Pago</div>
      <div class="invoice-kv"><span>Estado</span><span>Verificado</span></div>
      <div class="invoice-kv"><span>Forma de Pago</span><span>Contado</span></div>
    </div>
  `;
}

function renderClaimDetail(claim, index, activeTab) {
  const d = buildClaimDetail(claim);
  const total = claims.length;

  return `
    <header class="topbar">
      <span class="breadcrumb"><a href="#/">Home</a> / <span>Claim #${claim.id}</span></span>
      <div class="topbar-right">
        <span class="page-stepper">
          <span class="page-stepper-count">${index + 1} / ${total}</span>
          <button class="icon-btn step-btn" data-step="-1">${icon.chevronUp}</button>
          <button class="icon-btn step-btn" data-step="1">${icon.chevronDown}</button>
        </span>
        <span class="divider"></span>
        <span class="user-chip">
          <span class="avatar" style="background:#bfdbfe">AD</span>
          <span>Alex Dupre</span>
          ${icon.chevronDown}
        </span>
        <span class="divider"></span>
        <button class="icon-btn">${icon.moon}</button>
      </div>
    </header>

    <main class="content detail-content">
      <div class="claim-detail">
        <div class="claim-header-bar">
          <div class="claim-header-left">
            <span class="claim-detail-id">${claim.id}</span>
            ${statusBadge(claim.status, null)}
            <span class="percent-chip">${icon.clock}${d.percent}%</span>
            ${teamBadge(getEffectiveTeam(claim))}
          </div>
          <span class="assignee-chip-lg">${assigneeChip(claim.assignee || d.memberName, false)}</span>
        </div>

        <div class="detail-grid">
          <section class="fields-pane">
            <div class="tabs">
              <button class="tab-btn ${activeTab === 'fields' ? 'active' : ''}" data-tab="fields">Claim Fields</button>
              <button class="tab-btn ${activeTab === 'lines' ? 'active' : ''}" data-tab="lines">Service Lines</button>
              <button class="tab-btn ${activeTab === 'audit' ? 'active' : ''}" data-tab="audit">Routing &amp; Audit</button>
            </div>
            ${activeTab === 'audit' ? '' : `
            <div class="chips" style="margin: 0.875rem 0 1rem;">
              <span class="chip static">All Fields <span class="chip-count">${d.fieldsCount}</span></span>
              <span class="chip static">All Issues <span class="chip-count issues">${d.issuesCount}</span></span>
            </div>`}
            <div class="fields-pane-body">
              ${activeTab === 'lines' ? renderServiceLinesTab(d) : activeTab === 'audit' ? renderAuditTab(claim) : renderFieldsTab(d)}
            </div>
          </section>

          <section class="document-pane">
            <div class="document-pane-header">
              <span class="document-pane-label">Document Pane</span>
              <div class="document-pane-icons">
                <button class="icon-btn">${icon.list}</button>
                <button class="icon-btn">${icon.claims}</button>
                <button class="icon-btn">${icon.panel}</button>
              </div>
            </div>

            <div class="document-pane-controls">
              <div class="document-select">
                <span class="document-select-label">Current Document</span>
                <span class="document-select-box">${icon.claims}<span>${d.docName}</span>${icon.chevronDown}</span>
              </div>
              <div class="document-select">
                <span class="document-select-label">Document Class</span>
                <span class="document-select-box">${d.docClass}${icon.chevronDown}</span>
              </div>
              <button class="btn-split">${icon.scissors}Split</button>
            </div>

            <div class="document-preview-wrap">
              <div class="document-preview">
                ${renderInvoice(claim, d)}
              </div>
              <div class="document-preview-controls">
                <button class="icon-btn">${icon.zoomOut}</button>
                <button class="icon-btn">${icon.zoomIn}</button>
                <span class="page-indicator">1 / ${d.pageCount}</span>
                <button class="icon-btn">${icon.expand}</button>
              </div>
            </div>
          </section>

          <aside class="icon-rail">
            <button class="icon-btn">${icon.panel}</button>
            <button class="icon-btn">${icon.claims}</button>
            <button class="icon-btn">${icon.clock}</button>
            <button class="icon-btn">${icon.link}</button>
            <button class="icon-btn">${icon.bookmark}</button>
          </aside>
        </div>

        <div class="detail-footer">
          <div class="detail-footer-left">
            <button class="btn-secondary">${icon.scissors}Split</button>
            <button class="btn-danger">${icon.xCircle}Reject</button>
          </div>
          <button class="btn-primary btn-disabled" disabled>${icon.checkCircle}Register</button>
        </div>
      </div>
    </main>
  `;
}

/* ---------------------------------------------------------------------- */
/* Router                                                                  */
/* ---------------------------------------------------------------------- */

let activeTab = 'fields';
let activeClaimId = null;

function parseRoute() {
  const h = location.hash;
  let m;
  if ((m = h.match(/^#\/claims\/(.+)$/))) return { view: 'claim', id: decodeURIComponent(m[1]) };
  if ((m = h.match(/^#\/queues\/?(.*)$/))) return { view: 'queue', team: m[1] || 'medical-review' };
  if (h === '#/supervisor') return { view: 'supervisor' };
  return { view: 'list' };
}

function wireClaimRowClicks(app, selector) {
  app.querySelectorAll(selector).forEach((tr) => {
    tr.addEventListener('click', () => {
      location.hash = `#/claims/${tr.dataset.claimId}`;
    });
  });
}

function wireClaimDetail(app, claim, index) {
  app.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeTab = btn.dataset.tab;
      render();
    });
  });
  app.querySelectorAll('.step-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const dir = Number(btn.dataset.step);
      const nextIndex = (index + dir + claims.length) % claims.length;
      location.hash = `#/claims/${claims[nextIndex].id}`;
    });
  });
  const confirmBtn = app.querySelector('.audit-confirm-btn');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      const sel = app.querySelector('.audit-team-select');
      const reasonInput = app.querySelector('.audit-reason-input');
      if (!sel.value) return;
      reassignClaim(claim.id, sel.value, 'Alex Dupre (supervisor)', reasonInput.value.trim() || 'Manual override by supervisor');
      render();
    });
  }
}

function wireTeamQueue(app) {
  app.querySelectorAll('.tab-btn[data-team]').forEach((btn) => {
    btn.addEventListener('click', () => {
      location.hash = `#/queues/${btn.dataset.team}`;
    });
  });
  wireClaimRowClicks(app, 'tbody tr[data-claim-id]');
  const pullBtn = app.querySelector('.btn-pull-next');
  if (pullBtn) {
    pullBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const firstRow = app.querySelector('tbody tr[data-claim-id]');
      if (firstRow) {
        firstRow.classList.add('pulled-flash');
        setTimeout(() => firstRow.classList.remove('pulled-flash'), 900);
      }
    });
  }
}

function wireSupervisorView(app) {
  wireClaimRowClicks(app, '.supervisor-table tbody tr[data-claim-id]');
  app.querySelectorAll('.avail-toggle').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const name = btn.dataset.handler;
      if (unavailableHandlers.has(name)) unavailableHandlers.delete(name);
      else unavailableHandlers.add(name);
      render();
    });
  });
  app.querySelectorAll('.reassign-select').forEach((sel) => {
    sel.addEventListener('click', (e) => e.stopPropagation());
    sel.addEventListener('change', () => {
      if (!sel.value) return;
      reassignClaim(sel.dataset.claimId, sel.value, 'Alex Dupre (supervisor)', 'Manual reassignment from Supervisor view');
      render();
    });
  });
}

function render() {
  const route = parseRoute();
  const app = document.querySelector('#app');

  if (route.view === 'claim') {
    const index = claims.findIndex((c) => c.id === route.id);
    if (index === -1) {
      location.hash = '#/';
      return;
    }
    if (activeClaimId !== route.id) {
      activeTab = 'fields';
      activeClaimId = route.id;
    }
    app.innerHTML = `<div class="layout">${renderSidebar('claims')}<div class="main-col">${renderClaimDetail(claims[index], index, activeTab)}</div></div>`;
    wireClaimDetail(app, claims[index], index);
  } else if (route.view === 'queue') {
    activeClaimId = null;
    app.innerHTML = `<div class="layout">${renderSidebar('queues')}<div class="main-col">${renderTeamQueue(route.team)}</div></div>`;
    wireTeamQueue(app);
  } else if (route.view === 'supervisor') {
    activeClaimId = null;
    app.innerHTML = `<div class="layout">${renderSidebar('supervisor')}<div class="main-col">${renderSupervisorView()}</div></div>`;
    wireSupervisorView(app);
  } else {
    activeClaimId = null;
    app.innerHTML = `<div class="layout">${renderSidebar('claims')}<div class="main-col">${renderClaimsList()}</div></div>`;
    wireClaimRowClicks(app, 'tbody tr[data-claim-id]');
  }
}

window.addEventListener('hashchange', render);
render();
