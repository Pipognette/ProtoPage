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

function renderSidebar() {
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
        <a class="nav-item active" href="#/">${icon.claims}<span>Claims</span></a>
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
          </div>
          <span class="assignee-chip-lg">${assigneeChip(claim.assignee || d.memberName, false)}</span>
        </div>

        <div class="detail-grid">
          <section class="fields-pane">
            <div class="tabs">
              <button class="tab-btn ${activeTab === 'fields' ? 'active' : ''}" data-tab="fields">Claim Fields</button>
              <button class="tab-btn ${activeTab === 'lines' ? 'active' : ''}" data-tab="lines">Service Lines</button>
            </div>
            <div class="chips" style="margin: 0.875rem 0 1rem;">
              <span class="chip static">All Fields <span class="chip-count">${d.fieldsCount}</span></span>
              <span class="chip static">All Issues <span class="chip-count issues">${d.issuesCount}</span></span>
            </div>
            <div class="fields-pane-body">
              ${activeTab === 'lines' ? renderServiceLinesTab(d) : renderFieldsTab(d)}
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

function parseHash() {
  const m = location.hash.match(/^#\/claims\/(.+)$/);
  return m ? decodeURIComponent(m[1]) : null;
}

function render() {
  const claimId = parseHash();
  const app = document.querySelector('#app');

  if (claimId) {
    const index = claims.findIndex((c) => c.id === claimId);
    if (index === -1) {
      location.hash = '#/';
      return;
    }
    if (activeClaimId !== claimId) {
      activeTab = 'fields';
      activeClaimId = claimId;
    }
    app.innerHTML = `<div class="layout">${renderSidebar()}<div class="main-col">${renderClaimDetail(claims[index], index, activeTab)}</div></div>`;

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
  } else {
    activeClaimId = null;
    app.innerHTML = `<div class="layout">${renderSidebar()}<div class="main-col">${renderClaimsList()}</div></div>`;

    app.querySelectorAll('tbody tr[data-claim-id]').forEach((tr) => {
      tr.addEventListener('click', () => {
        location.hash = `#/claims/${tr.dataset.claimId}`;
      });
    });
  }
}

window.addEventListener('hashchange', render);
render();
