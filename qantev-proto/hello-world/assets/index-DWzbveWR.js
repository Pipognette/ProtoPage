(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(i){if(i.ep)return;i.ep=!0;const c=t(i);fetch(i.href,c)}})();const a={logo:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',panel:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="9" y1="4" x2="9" y2="20"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',api:'<svg viewBox="0 0 24 24"><path d="M8 4 4 12l4 8M16 4l4 8-4 8"/></svg>',claims:'<svg viewBox="0 0 24 24"><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/></svg>',chevronDown:'<svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>',chevronUp:'<svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>',chevronLeft:'<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>',chevronRight:'<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>',moon:'<svg viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></svg>',plus:'<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',minus:'<svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/></svg>',person:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5"/></svg>',x:'<svg viewBox="0 0 24 24"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',clock:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg>',filter:'<svg viewBox="0 0 24 24"><polygon points="4 4 20 4 14 12.5 14 19 10 21 10 12.5"/></svg>',sort:'<svg viewBox="0 0 24 24"><path d="M7 4v16M3 8l4-4 4 4M17 20V4M13 16l4 4 4-4"/></svg>',settings:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 13a7.97 7.97 0 0 0 0-2l2-1.6-2-3.4-2.4 1a8 8 0 0 0-1.7-1L15 3h-6l-.3 2.4a8 8 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.6a7.97 7.97 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a8 8 0 0 0 1.7 1L9 21h6l.3-2.4a8 8 0 0 0 1.7-1l2.4 1 2-3.4-2-1.6Z"/></svg>',link:'<svg viewBox="0 0 24 24"><path d="M9 15 15 9M11 6l1-1a4 4 0 0 1 5.7 5.7l-1 1M13 18l-1 1A4 4 0 0 1 6.3 13.3l1-1"/></svg>',flag:'<svg viewBox="0 0 24 24"><path d="M5 21V4h13l-3 4 3 4H5"/></svg>',xCircle:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><line x1="9.5" y1="9.5" x2="14.5" y2="14.5"/><line x1="14.5" y1="9.5" x2="9.5" y2="14.5"/></svg>',checkCircle:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polyline points="8.5 12.5 11 15 16 9"/></svg>',split:'<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="12" r="2"/><path d="M6 8v8M6 9c0 3 4 3 10 3"/></svg>',scissors:'<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><line x1="8.5" y1="7.5" x2="20" y2="19"/><line x1="8.5" y1="16.5" x2="20" y2="5"/></svg>',bookmark:'<svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg>',list:'<svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',zoomIn:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',zoomOut:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',expand:'<svg viewBox="0 0 24 24"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/></svg>',pieHalf:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor" stroke="none"/></svg>',alert:'<svg viewBox="0 0 24 24"><path d="M12 3 2 21h20L12 3Z"/><line x1="12" y1="9" x2="12" y2="14"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',checkboxEmpty:'<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/></svg>'},j={Open:{cls:"status-open",icon:a.flag},Rejected:{cls:"status-rejected",icon:a.xCircle},Registered:{cls:"status-registered",icon:a.checkCircle},Split:{cls:"status-split",icon:a.split}},k=["#fde68a","#bfdbfe","#bbf7d0","#fbcfe8","#ddd6fe","#fed7aa"];function Q(e){return e.split(" ").map(s=>s[0]).join("").slice(0,2).toUpperCase()}function T(e){let s=0;for(const t of e)s=s*31+t.charCodeAt(0)>>>0;return k[s%k.length]}function V(e){return e?`<span class="avatar" style="background:${T(e)}">${Q(e)}</span>`:'<span class="avatar avatar-empty"></span>'}function B(e,s){const t=e||"Unassigned";return`
    <span class="assignee-chip${e?"":" unassigned"}${s?" disabled":""}">
      ${V(e)}
      <span class="assignee-name">${t}</span>
      ${a.chevronDown}
    </span>
  `}const p=[{id:"REQ-2025-14567",date:"Apr 15, 2025, 12:30 PM",status:"Open",linked:null,assignee:"John Green"},{id:"REQ-2025-1234",date:"Apr 15, 2025, 12:30 PM",status:"Open",linked:3,assignee:null},{id:"REQ-2025-4567",date:"Apr 15, 2025, 12:30 PM",status:"Open",linked:3,assignee:"Angela Juarez"},{id:"REQ-2025-7890",date:"Apr 15, 2025, 12:30 PM",status:"Open",linked:3,assignee:"Angela Juarez"},{id:"REQ-2025-8759",date:"Apr 15, 2025, 12:30 PM",status:"Split",linked:3,assignee:"John Green",disabled:!0},{id:"REQ-2025-14622",date:"Apr 15, 2025, 12:30 PM",status:"Rejected",linked:null,assignee:null},{id:"REQ-2025-14633",date:"Apr 15, 2025, 12:30 PM",status:"Open",linked:null,assignee:"Angela Juarez"},{id:"REQ-2025-14644",date:"Apr 15, 2025, 12:30 PM",status:"Registered",linked:null,assignee:"Emily Carter"},{id:"REQ-2025-14655",date:"Apr 15, 2025, 12:30 PM",status:"Open",linked:null,assignee:null},{id:"REQ-2025-14699",date:"Apr 15, 2025, 12:30 PM",status:"Open",linked:null,assignee:"John Green",disabled:!0},{id:"REQ-2025-14710",date:"Apr 15, 2025, 12:30 PM",status:"Rejected",linked:null,assignee:"John Green",disabled:!0},{id:"REQ-2025-14721",date:"Apr 15, 2025, 12:30 PM",status:"Rejected",linked:null,assignee:"Mia Thompson"}];function P(e,s){const t=j[e];return`
    <span class="status-badge ${t.cls}">${t.icon}${e}</span>
    ${s?`<span class="linked-chip">${a.link}${s}</span>`:""}
  `}function J(e){return`
    <tr data-claim-id="${e.id}">
      <td><span class="checkbox">${a.checkboxEmpty}</span></td>
      <td class="claim-id">${e.id}</td>
      <td class="muted">${e.date}</td>
      <td>${P(e.status,e.linked)}</td>
      <td>${B(e.assignee,e.disabled)}</td>
    </tr>
  `}function R(e){let s=0;for(const t of e)s=s*31+t.charCodeAt(0)>>>0;return s}function E(e){let s=e;return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function d(e,s){return s[Math.floor(e()*s.length)%s.length]}function o(e,s,t){return s+Math.floor(e()*(t-s+1))}const U=["Charles","Maria","Daniel","Sophia","Carlos","Lucia","Andres","Valentina","Miguel","Elena"],C=["Heyer","Martinez","Lopez","Garcia","Torres","Ramirez","Castillo","Mendoza","Vargas","Ortiz"],G=["Dr. Carlos Martinez","Dra. Ana Sosa","Dr. Luis Pena","Dra. Maria Fernandez","Dr. Jorge Salas"],q=["Medicina Interna","Pediatria","Cardiologia","Dermatologia","Ginecologia","Traumatologia"],Z=["Hospital San Antonio","Clinica Santa Fe","Hospital del Valle","Centro Medico Andino","Clinica La Esperanza"],K=["Quito, Pichincha","Guayaquil, Guayas","Cuenca, Azuay","Loja, Loja"],W=["Medical Record","Invoice","Lab Result","Prescription"],X=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],Y=[["Consulta","Infeccion aguda de vias respiratorias superiores"],["Laboratorio","Hemograma completo"],["Farmacia","Medicamento - Amoxicilina 500mg"],["Imagenologia","Radiografia de torax PA y lateral"],["Procedimiento","Electrocardiograma"],["Imagenologia","Ecografia abdominal"]];function u(e){return`${o(e,1,28)} ${d(e,X)} ${o(e,2023,2025)}`}function _(e){const s=E(R(e.id)),t=e.assignee&&s()>.5?e.assignee:`${d(s,U)} ${d(s,C)}`,n=d(s,G),i=d(s,q),c=d(s,Z),r=d(s,K),I=String(o(s,1e9,1999999999)),L=`PLN${o(s,1e7,99999999)}`,F=u(s),N=u(s),O=u(s),x=u(s),z=o(s,2,4),h=[];for(let v=0;v<z;v++){const[m,H]=d(s,Y);h.push({date:x,type:m,cie:`J0${o(s,0,9)}`,codeType:"CIE10",desc:H,cups:String(o(s,89e4,899999)),value:o(s,8,95)})}const g=h.reduce((v,m)=>v+m.value,0),w=Math.round(g*.12*100)/100,M=Math.round((g+w)*100)/100;return{memberName:t,doctor:n,specialty:i,hospital:c,city:r,cedula:I,policyId:L,dob:F,submitted:N,invoiceDate:O,serviceDate:x,services:h,subtotal:g,iva:w,total:M,amount:M,percent:o(s,10,95),fieldsCount:o(s,16,26),issuesCount:o(s,1,6),docName:`Factura Medica ${o(s,1e5,999999)}`,docClass:d(s,W),pageCount:o(s,1,6),hasConflict:s()>.6,accident:s()>.5?"true":"false",providerAddress:s()>.4?`Av. ${d(s,C)} N${o(s,10,99)}-${o(s,10,99)}`:null}}function A(){return`
    <aside class="sidebar">
      <div class="sidebar-header">
        <span class="brand">${a.logo}<span>Qantev</span></span>
        <button class="icon-btn">${a.panel}</button>
      </div>

      <nav class="nav">
        <div class="nav-group">
          <div class="nav-item">
            ${a.grid}<span>Administration</span>${a.chevronDown}
          </div>
          <a class="nav-subitem" href="#/">${a.api}<span>API Requests</span></a>
        </div>
        <a class="nav-item active" href="#/">${a.claims}<span>Claims</span></a>
      </nav>

      <div class="sidebar-footer">2025.04.22.02</div>
    </aside>
  `}function ss(){return`
    <div class="topbar-right">
      <span class="user-chip">
        <span class="avatar" style="background:#bfdbfe">AD</span>
        <span>Alex Dupre</span>
        ${a.chevronDown}
      </span>
      <span class="divider"></span>
      <button class="icon-btn">${a.moon}</button>
    </div>
  `}function es(){return`
    <header class="topbar">
      <span class="breadcrumb">Home</span>
      ${ss()}
    </header>

    <main class="content">
      <div class="page-body">
        <div class="page-header">
          <h1>Claims <span class="count">2.3k</span></h1>
          <button class="btn-primary">${a.plus}Create Claim</button>
        </div>

        <div class="filter-bar">
          <div class="chips">
            <span class="chip">${a.person}Assigned to me</span>
            <span class="chip active">${a.x}Unassigned Claims</span>
            <span class="chip">${a.clock}Due soon</span>
          </div>
          <div class="actions">
            <span class="action-link">${a.filter}Filter</span>
            <span class="action-divider">|</span>
            <span class="action-link">${a.sort}Sort</span>
            <span class="action-divider">|</span>
            <span class="action-link">${a.settings}Settings</span>
          </div>
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th><span class="checkbox">${a.checkboxEmpty}</span></th>
                <th>Claim ID</th>
                <th>Received date</th>
                <th>Status</th>
                <th>Assignee</th>
              </tr>
            </thead>
            <tbody>
              ${p.map(J).join("")}
            </tbody>
          </table>
        </div>

        <div class="pagination">
          <button class="page-btn disabled">${a.chevronLeft}</button>
          <button class="page-btn active">1</button>
          <button class="page-btn">2</button>
          <button class="page-btn">3</button>
          <button class="page-btn">${a.chevronRight}</button>
        </div>
      </div>
    </main>
  `}function as(e){return e==="ok"?`<span class="status-dot status-dot-ok">${a.checkCircle}</span>`:e==="warn"?`<span class="status-dot status-dot-warn">${a.pieHalf}</span>`:`<span class="status-dot status-dot-warn">${a.pieHalf}</span>`}function b(e,s,t){return`
    <span class="value-tag">
      ${t?`<span class="conflict-mark">${a.alert}</span>`:a.claims}
      <span class="value-text">${e}</span>
      ${s?`<span class="value-count">+${s}</span>`:""}
      ${a.chevronDown}
    </span>
  `}function D(e){return`<span class="value-plain">${e}</span>`}function S(e){return`<span class="value-plain value-select">${e}${a.chevronDown}</span>`}function l({indent:e,kind:s,label:t,value:n,status:i}){const c=`padding-left:${e*1.5}rem`,r=s==="group-open"?a.minus:s==="group-closed"?a.plus:"";return`
    <tr class="field-row">
      <td class="field-name" style="${c}">
        ${r?`<span class="group-toggle">${r}</span>`:""}
        <span>${t}</span>
      </td>
      <td class="field-value">
        ${i?as(i):""}
        ${n||""}
      </td>
    </tr>
  `}function ts(e){return`
    <table class="fields-table">
      <thead><tr><th>Name</th><th>Value</th></tr></thead>
      <tbody>${[l({indent:0,kind:"leaf",label:"Member Name",status:"warn",value:b(e.memberName,3)}),l({indent:0,kind:"group-open",label:"Object (1)"}),l({indent:1,kind:"group-closed",label:"Member"}),l({indent:1,kind:"leaf",label:"Date of Birth",status:"warn",value:D(e.dob)}),l({indent:0,kind:"group-open",label:"Object (2)"}),l({indent:1,kind:"group-closed",label:"Provider"}),l({indent:1,kind:"leaf",label:"Date of Submission",status:"warn",value:b(e.submitted,2)}),l({indent:0,kind:"leaf",label:"Policy ID",status:"ok",value:b(e.policyId,8,e.hasConflict)}),l({indent:0,kind:"leaf",label:"Accident",status:"warn",value:D(e.accident)}),l({indent:0,kind:"leaf",label:"Provider Address",status:"warn",value:e.providerAddress?S(e.providerAddress):S("Select")}),l({indent:0,kind:"leaf",label:"Amount",status:"ok",value:b(`$${e.amount.toFixed(0)}`,8)})].join("")}</tbody>
    </table>
  `}function ns(e){return`
    <table class="service-lines-table">
      <thead>
        <tr><th>Date</th><th>Type</th><th>Code</th><th>Description</th><th>CUPS</th><th>Value</th></tr>
      </thead>
      <tbody>${e.services.map(t=>`
    <tr>
      <td>${t.date}</td>
      <td>${t.type}</td>
      <td>${t.cie}</td>
      <td class="muted">${t.desc}</td>
      <td>${t.cups}</td>
      <td class="amount-col">$${t.value.toFixed(2)}</td>
    </tr>
  `).join("")}</tbody>
    </table>
  `}function is(e,s){const t=s.services.map(n=>`
    <tr>
      <td>${n.date}</td>
      <td>${n.type}</td>
      <td>${n.cie} <span class="muted">(${n.codeType})</span></td>
      <td>${n.desc}</td>
      <td>${n.cups}</td>
      <td class="amount-col">$${n.value.toFixed(2)}</td>
    </tr>
  `).join("");return`
    <div class="invoice">
      <div class="invoice-head">
        <div>
          <div class="invoice-hospital">${s.hospital}</div>
          <div class="invoice-address">${s.city} &middot; Tel. (02) 2 999-100</div>
          <div class="invoice-address">RUC: 170123456001 &middot; Autorizacion SRI: 001-001-000123456</div>
        </div>
        <div class="invoice-title">
          <div class="invoice-title-main">FACTURA M&Eacute;DICA</div>
          <div class="invoice-meta">${e.id}</div>
          <div class="invoice-meta">Fecha de Factura: ${s.invoiceDate}</div>
          <div class="invoice-meta">Fecha de Servicio: ${s.serviceDate}</div>
          <span class="invoice-verified">Verificado</span>
        </div>
      </div>

      <div class="invoice-cols">
        <div>
          <div class="invoice-section-label">Informaci&oacute;n del Paciente</div>
          <div class="invoice-kv"><span>Nombre</span><span>${s.memberName}</span></div>
          <div class="invoice-kv"><span>C&eacute;dula</span><span>${s.cedula}</span></div>
          <div class="invoice-kv"><span>F. Nacimiento</span><span>${s.dob}</span></div>
          <div class="invoice-kv"><span>Direcci&oacute;n</span><span>${s.providerAddress||`${s.city}`}</span></div>
          <div class="invoice-kv"><span>Seguro</span><span>${s.policyId}</span></div>
        </div>
        <div>
          <div class="invoice-section-label">Informaci&oacute;n del M&eacute;dico</div>
          <div class="invoice-kv"><span>M&eacute;dico</span><span>${s.doctor}</span></div>
          <div class="invoice-kv"><span>Especialidad</span><span>${s.specialty}</span></div>
          <div class="invoice-kv"><span>Consultorio</span><span>${o(E(R(e.id+"c")),100,950)}</span></div>
        </div>
      </div>

      <div class="invoice-section-label">Detalle de Servicios</div>
      <table class="invoice-services">
        <thead>
          <tr><th>Fecha</th><th>Tipo</th><th>C&oacute;digo</th><th>Descripci&oacute;n</th><th>CUPS</th><th>Valor</th></tr>
        </thead>
        <tbody>${t}</tbody>
      </table>

      <div class="invoice-totals">
        <div><span>Subtotal</span><span>$${s.subtotal.toFixed(2)}</span></div>
        <div><span>IVA (12%)</span><span>$${s.iva.toFixed(2)}</span></div>
        <div class="invoice-total-final"><span>Total</span><span>$${s.total.toFixed(2)}</span></div>
      </div>

      <div class="invoice-section-label">Informaci&oacute;n de Pago</div>
      <div class="invoice-kv"><span>Estado</span><span>Verificado</span></div>
      <div class="invoice-kv"><span>Forma de Pago</span><span>Contado</span></div>
    </div>
  `}function cs(e,s,t){const n=_(e),i=p.length;return`
    <header class="topbar">
      <span class="breadcrumb"><a href="#/">Home</a> / <span>Claim #${e.id}</span></span>
      <div class="topbar-right">
        <span class="page-stepper">
          <span class="page-stepper-count">${s+1} / ${i}</span>
          <button class="icon-btn step-btn" data-step="-1">${a.chevronUp}</button>
          <button class="icon-btn step-btn" data-step="1">${a.chevronDown}</button>
        </span>
        <span class="divider"></span>
        <span class="user-chip">
          <span class="avatar" style="background:#bfdbfe">AD</span>
          <span>Alex Dupre</span>
          ${a.chevronDown}
        </span>
        <span class="divider"></span>
        <button class="icon-btn">${a.moon}</button>
      </div>
    </header>

    <main class="content detail-content">
      <div class="claim-detail">
        <div class="claim-header-bar">
          <div class="claim-header-left">
            <span class="claim-detail-id">${e.id}</span>
            ${P(e.status,null)}
            <span class="percent-chip">${a.clock}${n.percent}%</span>
          </div>
          ${B(e.assignee||n.memberName,!1)}
        </div>

        <div class="detail-grid">
          <section class="fields-pane">
            <div class="tabs">
              <button class="tab-btn ${t==="fields"?"active":""}" data-tab="fields">Claim Fields</button>
              <button class="tab-btn ${t==="lines"?"active":""}" data-tab="lines">Service Lines</button>
            </div>
            <div class="chips" style="margin: 0.875rem 0 1rem;">
              <span class="chip static">All Fields <span class="chip-count">${n.fieldsCount}</span></span>
              <span class="chip static">All Issues <span class="chip-count">${n.issuesCount}</span></span>
            </div>
            <div class="fields-pane-body">
              ${t==="lines"?ns(n):ts(n)}
            </div>
          </section>

          <section class="document-pane">
            <div class="document-pane-header">
              <span class="document-pane-label">Document Pane</span>
              <div class="document-pane-icons">
                <button class="icon-btn">${a.list}</button>
                <button class="icon-btn">${a.claims}</button>
                <button class="icon-btn">${a.panel}</button>
              </div>
            </div>

            <div class="document-pane-controls">
              <div class="document-select">
                <span class="document-select-label">Current Document</span>
                <span class="document-select-box">${a.claims}<span>${n.docName}</span>${a.chevronDown}</span>
              </div>
              <div class="document-select">
                <span class="document-select-label">Document Class</span>
                <span class="document-select-box">${n.docClass}${a.chevronDown}</span>
              </div>
              <button class="btn-split">${a.scissors}Split</button>
            </div>

            <div class="document-preview-wrap">
              <div class="document-preview">
                ${is(e,n)}
              </div>
              <div class="document-preview-controls">
                <button class="icon-btn">${a.zoomOut}</button>
                <button class="icon-btn">${a.zoomIn}</button>
                <span class="page-indicator">1 / ${n.pageCount}</span>
                <button class="icon-btn">${a.expand}</button>
              </div>
            </div>
          </section>

          <aside class="icon-rail">
            <button class="icon-btn">${a.panel}</button>
            <button class="icon-btn">${a.claims}</button>
            <button class="icon-btn">${a.clock}</button>
            <button class="icon-btn">${a.link}</button>
            <button class="icon-btn">${a.bookmark}</button>
          </aside>
        </div>

        <div class="detail-footer">
          <div class="detail-footer-left">
            <button class="btn-secondary">${a.scissors}Split</button>
            <button class="btn-danger">${a.xCircle}Reject</button>
          </div>
          <button class="btn-primary btn-disabled" disabled>${a.checkCircle}Register</button>
        </div>
      </div>
    </main>
  `}let $="fields",f=null;function os(){const e=location.hash.match(/^#\/claims\/(.+)$/);return e?decodeURIComponent(e[1]):null}function y(){const e=os(),s=document.querySelector("#app");if(e){const t=p.findIndex(n=>n.id===e);if(t===-1){location.hash="#/";return}f!==e&&($="fields",f=e),s.innerHTML=`<div class="layout">${A()}<div class="main-col">${cs(p[t],t,$)}</div></div>`,s.querySelectorAll(".tab-btn").forEach(n=>{n.addEventListener("click",()=>{$=n.dataset.tab,y()})}),s.querySelectorAll(".step-btn").forEach(n=>{n.addEventListener("click",()=>{const i=Number(n.dataset.step),c=(t+i+p.length)%p.length;location.hash=`#/claims/${p[c].id}`})})}else f=null,s.innerHTML=`<div class="layout">${A()}<div class="main-col">${es()}</div></div>`,s.querySelectorAll("tbody tr[data-claim-id]").forEach(t=>{t.addEventListener("click",()=>{location.hash=`#/claims/${t.dataset.claimId}`})})}window.addEventListener("hashchange",y);y();
