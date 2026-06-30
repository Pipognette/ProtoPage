(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(i){if(i.ep)return;i.ep=!0;const l=s(i);fetch(i.href,l)}})();const n={logo:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',panel:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="9" y1="4" x2="9" y2="20"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',api:'<svg viewBox="0 0 24 24"><path d="M8 4 4 12l4 8M16 4l4 8-4 8"/></svg>',claims:'<svg viewBox="0 0 24 24"><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/></svg>',chevronDown:'<svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>',chevronUp:'<svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>',chevronLeft:'<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>',chevronRight:'<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>',moon:'<svg viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></svg>',plus:'<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',minus:'<svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/></svg>',person:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5"/></svg>',x:'<svg viewBox="0 0 24 24"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',clock:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg>',filter:'<svg viewBox="0 0 24 24"><polygon points="4 4 20 4 14 12.5 14 19 10 21 10 12.5"/></svg>',sort:'<svg viewBox="0 0 24 24"><path d="M7 4v16M3 8l4-4 4 4M17 20V4M13 16l4 4 4-4"/></svg>',settings:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 13a7.97 7.97 0 0 0 0-2l2-1.6-2-3.4-2.4 1a8 8 0 0 0-1.7-1L15 3h-6l-.3 2.4a8 8 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.6a7.97 7.97 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a8 8 0 0 0 1.7 1L9 21h6l.3-2.4a8 8 0 0 0 1.7-1l2.4 1 2-3.4-2-1.6Z"/></svg>',link:'<svg viewBox="0 0 24 24"><path d="M9 15 15 9M11 6l1-1a4 4 0 0 1 5.7 5.7l-1 1M13 18l-1 1A4 4 0 0 1 6.3 13.3l1-1"/></svg>',flag:'<svg viewBox="0 0 24 24"><path d="M5 21V4h13l-3 4 3 4H5"/></svg>',xCircle:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><line x1="9.5" y1="9.5" x2="14.5" y2="14.5"/><line x1="14.5" y1="9.5" x2="9.5" y2="14.5"/></svg>',checkCircle:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polyline points="8.5 12.5 11 15 16 9"/></svg>',split:'<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="12" r="2"/><path d="M6 8v8M6 9c0 3 4 3 10 3"/></svg>',scissors:'<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><line x1="8.5" y1="7.5" x2="20" y2="19"/><line x1="8.5" y1="16.5" x2="20" y2="5"/></svg>',bookmark:'<svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg>',list:'<svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',zoomIn:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',zoomOut:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',expand:'<svg viewBox="0 0 24 24"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/></svg>',pieHalf:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor" stroke="none"/></svg>',alert:'<svg viewBox="0 0 24 24"><path d="M12 3 2 21h20L12 3Z"/><line x1="12" y1="9" x2="12" y2="14"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',checkboxEmpty:'<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/></svg>',inbox:'<svg viewBox="0 0 24 24"><path d="M3 13h4l2 3h6l2-3h4"/><path d="M5.5 13 3.5 5h17l-2 8"/><path d="M3 13v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"/></svg>',users:'<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5"/><circle cx="17" cy="8.5" r="2.4"/><path d="M15 14.8c2.3.4 4 2.2 4 5.2"/></svg>',arrowCircle:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.5 8l4 4-4 4"/></svg>'},te={Open:{cls:"status-open",icon:n.flag},Rejected:{cls:"status-rejected",icon:n.xCircle},Registered:{cls:"status-registered",icon:n.checkCircle},Split:{cls:"status-split",icon:n.split}},N=["#fde68a","#bfdbfe","#bbf7d0","#fbcfe8","#ddd6fe","#fed7aa"];function ne(e){return e.split(" ").map(a=>a[0]).join("").slice(0,2).toUpperCase()}function ie(e){let a=0;for(const s of e)a=a*31+s.charCodeAt(0)>>>0;return N[a%N.length]}function J(e){return e?`<span class="avatar" style="background:${ie(e)}">${ne(e)}</span>`:'<span class="avatar avatar-empty"></span>'}function M(e,a){const s=e||"Unassigned";return`
    <span class="assignee-chip${e?"":" unassigned"}${a?" disabled":""}">
      ${J(e)}
      <span class="assignee-name">${s}</span>
      ${n.chevronDown}
    </span>
  `}const r=[{id:"REQ-2025-14567",date:"Apr 15, 2025, 12:30 PM",status:"Open",linked:null,assignee:"John Green",team:"medical-review",tag:"Medical",ageHours:5},{id:"REQ-2025-1234",date:"Apr 15, 2025, 12:30 PM",status:"Open",linked:3,assignee:null,team:"fraud",tag:"Fraud",ageHours:30},{id:"REQ-2025-4567",date:"Apr 15, 2025, 12:30 PM",status:"Open",linked:3,assignee:"Angela Juarez",team:"data-entry",tag:"Standard",ageHours:10},{id:"REQ-2025-7890",date:"Apr 15, 2025, 12:30 PM",status:"Open",linked:3,assignee:"Angela Juarez",team:"medical-review",tag:"Medical",ageHours:50},{id:"REQ-2025-8759",date:"Apr 15, 2025, 12:30 PM",status:"Split",linked:3,assignee:"John Green",disabled:!0,team:"fraud",tag:"Fraud",ageHours:12},{id:"REQ-2025-14622",date:"Apr 15, 2025, 12:30 PM",status:"Rejected",linked:null,assignee:null,team:"data-entry",tag:"Standard",ageHours:80},{id:"REQ-2025-14633",date:"Apr 15, 2025, 12:30 PM",status:"Open",linked:null,assignee:"Angela Juarez",team:"medical-review",tag:"Medical",ageHours:20},{id:"REQ-2025-14644",date:"Apr 15, 2025, 12:30 PM",status:"Registered",linked:null,assignee:"Emily Carter",team:"data-entry",tag:"Standard",ageHours:4},{id:"REQ-2025-14655",date:"Apr 15, 2025, 12:30 PM",status:"Open",linked:null,assignee:null,team:null,tag:"Unmatched",ageHours:15},{id:"REQ-2025-14699",date:"Apr 15, 2025, 12:30 PM",status:"Open",linked:null,assignee:"John Green",disabled:!0,team:"fraud",tag:"Fraud",ageHours:28},{id:"REQ-2025-14710",date:"Apr 15, 2025, 12:30 PM",status:"Rejected",linked:null,assignee:"John Green",disabled:!0,team:null,tag:"Unmatched",ageHours:40},{id:"REQ-2025-14721",date:"Apr 15, 2025, 12:30 PM",status:"Rejected",linked:null,assignee:"Mia Thompson",team:"medical-review",tag:"Medical",ageHours:6}],p=[{id:"data-entry",label:"Data Entry",slaHours:72},{id:"medical-review",label:"Medical Review",slaHours:48},{id:"fraud",label:"Fraud",slaHours:24}],le=[{name:"John Green",team:"fraud"},{name:"Angela Juarez",team:"medical-review"},{name:"Emily Carter",team:"data-entry"},{name:"Mia Thompson",team:"medical-review"},{name:"Carlos Vega",team:"data-entry"}],R={},C={},b=new Set;function v(e){return Object.prototype.hasOwnProperty.call(R,e.id)?R[e.id]:e.team}function V(e,a,s,t){R[e]=a,C[e]||(C[e]=[]),C[e].push({team:a,actor:s,reason:t,timestamp:new Date().toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})})}function E(e){var a;return((a=p.find(s=>s.id===e))==null?void 0:a.label)||"Unmatched"}function $(e){const a=p.find(t=>t.id===v(e)),s=a?a.slaHours:24;return e.ageHours>s}function G(e){return e<24?`${e}h`:`${Math.round(e/24)}d`}function Z(e){return`<span class="tag-chip ${e==="Fraud"?"tag-fraud":e==="Medical"?"tag-medical":e==="Standard"?"tag-standard":"tag-unmatched"}">${e}</span>`}function K(e){const a=$(e);return`<span class="sla-chip ${a?"overdue":""}">${a?n.alert:n.clock}${G(e.ageHours)}</span>`}function H(e){return e?`<span class="team-badge">${E(e)}</span>`:`<span class="tag-chip tag-unmatched">${n.alert}Unmatched</span>`}function q(e,a){const s=te[e];return`
    <span class="status-badge ${s.cls}">${s.icon}${e}</span>
    ${a?`<span class="linked-chip">${n.link}${a}</span>`:""}
  `}function ce(e){return`
    <tr data-claim-id="${e.id}">
      <td><span class="checkbox">${n.checkboxEmpty}</span></td>
      <td class="claim-id">${e.id}</td>
      <td class="muted">${e.date}</td>
      <td>${q(e.status,e.linked)}</td>
      <td>${M(e.assignee,e.disabled)}</td>
    </tr>
  `}function L(e){let a=0;for(const s of e)a=a*31+s.charCodeAt(0)>>>0;return a}function B(e){let a=e;return function(){a|=0,a=a+1831565813|0;let s=Math.imul(a^a>>>15,1|a);return s=s+Math.imul(s^s>>>7,61|s)^s,((s^s>>>14)>>>0)/4294967296}}function d(e,a){return a[Math.floor(e()*a.length)%a.length]}function o(e,a,s){return a+Math.floor(e()*(s-a+1))}const oe=["Charles","Maria","Daniel","Sophia","Carlos","Lucia","Andres","Valentina","Miguel","Elena"],j=["Heyer","Martinez","Lopez","Garcia","Torres","Ramirez","Castillo","Mendoza","Vargas","Ortiz"],de=["Dr. Carlos Martinez","Dra. Ana Sosa","Dr. Luis Pena","Dra. Maria Fernandez","Dr. Jorge Salas"],re=["Medicina Interna","Pediatria","Cardiologia","Dermatologia","Ginecologia","Traumatologia"],ue=["Hospital San Antonio","Clinica Santa Fe","Hospital del Valle","Centro Medico Andino","Clinica La Esperanza"],pe=["Quito, Pichincha","Guayaquil, Guayas","Cuenca, Azuay","Loja, Loja"],ve=["Medical Record","Invoice","Lab Result","Prescription"],_=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],me=[["Consulta","Infeccion aguda de vias respiratorias superiores"],["Laboratorio","Hemograma completo"],["Farmacia","Medicamento - Amoxicilina 500mg"],["Imagenologia","Radiografia de torax PA y lateral"],["Procedimiento","Electrocardiograma"],["Imagenologia","Ecografia abdominal"]];function y(e){return`${o(e,1,28)} ${d(e,_)} ${o(e,2023,2025)}`}function he(e){const a=B(L(e.id)),s=e.assignee&&a()>.5?e.assignee:`${d(a,oe)} ${d(a,j)}`,t=d(a,de),i=d(a,re),l=d(a,ue),c=d(a,pe),h=String(o(a,1e9,1999999999)),W=`PLN${o(a,1e7,99999999)}`,X=y(a),Y=y(a),ee=y(a),F=y(a),ae=o(a,2,4),A=[];for(let f=0;f<ae;f++){const[S,se]=d(a,me);A.push({date:F,type:S,cie:`J0${o(a,0,9)}`,codeType:"CIE10",desc:se,cups:String(o(a,89e4,899999)),value:o(a,8,95)})}const k=A.reduce((f,S)=>f+S.value,0),T=Math.round(k*.12*100)/100,O=Math.round((k+T)*100)/100;return{memberName:s,doctor:t,specialty:i,hospital:l,city:c,cedula:h,policyId:W,dob:X,submitted:Y,invoiceDate:ee,serviceDate:F,services:A,subtotal:k,iva:T,total:O,amount:O,percent:o(a,10,95),fieldsCount:o(a,16,26),issuesCount:o(a,1,6),docName:`Factura Medica ${o(a,1e5,999999)}`,docClass:d(a,ve),pageCount:o(a,1,6),hasConflict:a()>.6,accident:a()>.5?"true":"false",providerAddress:a()>.4?`Av. ${d(a,j)} N${o(a,10,99)}-${o(a,10,99)}`:null}}function x(e){return`
    <aside class="sidebar">
      <div class="sidebar-header">
        <span class="brand">${n.logo}<span>Qantev</span></span>
        <button class="icon-btn">${n.panel}</button>
      </div>

      <nav class="nav">
        <div class="nav-group">
          <div class="nav-item">
            ${n.grid}<span>Administration</span>${n.chevronDown}
          </div>
          <a class="nav-subitem" href="#/">${n.api}<span>API Requests</span></a>
        </div>
        <a class="nav-item ${e==="claims"?"active":""}" href="#/">${n.claims}<span>Claims</span></a>

        <div class="nav-section-label">Routing (proposal)</div>
        <a class="nav-item ${e==="queues"?"active":""}" href="#/queues/medical-review">${n.inbox}<span>Team Queues</span></a>
        <a class="nav-item ${e==="supervisor"?"active":""}" href="#/supervisor">${n.users}<span>Supervisor</span></a>
      </nav>

      <div class="sidebar-footer">2025.04.22.02</div>
    </aside>
  `}function P(){return`
    <div class="topbar-right">
      <span class="user-chip">
        <span class="avatar" style="background:#bfdbfe">AD</span>
        <span>Alex Dupre</span>
        ${n.chevronDown}
      </span>
      <span class="divider"></span>
      <button class="icon-btn">${n.moon}</button>
    </div>
  `}function ge(){return`
    <header class="topbar">
      <span class="breadcrumb">Home</span>
      ${P()}
    </header>

    <main class="content">
      <div class="page-body">
        <div class="page-header">
          <h1>Claims <span class="count">2.3k</span></h1>
          <button class="btn-primary">${n.plus}Create Claim</button>
        </div>

        <div class="filter-bar">
          <div class="chips">
            <span class="chip">${n.person}Assigned to me</span>
            <span class="chip active">${n.x}Unassigned Claims</span>
            <span class="chip">${n.clock}Due soon</span>
          </div>
          <div class="actions">
            <span class="action-link">${n.filter}Filter</span>
            <span class="action-divider">|</span>
            <span class="action-link">${n.sort}Sort</span>
            <span class="action-divider">|</span>
            <span class="action-link">${n.settings}Settings</span>
          </div>
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th><span class="checkbox">${n.checkboxEmpty}</span></th>
                <th>Claim ID</th>
                <th>Received date</th>
                <th>Status</th>
                <th>Assignee</th>
              </tr>
            </thead>
            <tbody>
              ${r.map(ce).join("")}
            </tbody>
          </table>
        </div>

        <div class="pagination">
          <button class="page-btn disabled">${n.chevronLeft}</button>
          <button class="page-btn active">1</button>
          <button class="page-btn">2</button>
          <button class="page-btn">3</button>
          <button class="page-btn">${n.chevronRight}</button>
        </div>
      </div>
    </main>
  `}function be(e,a){return`
    <tr data-claim-id="${e.id}">
      <td class="queue-rank">${a}</td>
      <td class="claim-id">${e.id}</td>
      <td class="muted">${e.date}</td>
      <td>${Z(e.tag)}</td>
      <td>${K(e)}</td>
      <td>${q(e.status,e.linked)}</td>
      <td>${M(e.assignee,e.disabled)}</td>
    </tr>
  `}function $e(e){const a=p.find(i=>i.id===e)||p[1],s=r.filter(i=>v(i)===a.id).slice().sort((i,l)=>{const c=$(i),h=$(l);return c!==h?c?-1:1:l.ageHours-i.ageHours}),t=s.filter($).length;return`
    <header class="topbar">
      <span class="breadcrumb">Home / Team Queues</span>
      ${P()}
    </header>

    <main class="content">
      <div class="page-body">
        <div class="page-header">
          <h1>${a.label} <span class="count">&mdash; Queue</span></h1>
          <button class="btn-primary btn-pull-next">${n.arrowCircle}Assign next to me</button>
        </div>

        <div class="tabs queue-team-tabs">
          ${p.map(i=>`<button class="tab-btn ${i.id===a.id?"active":""}" data-team="${i.id}">${i.label}</button>`).join("")}
        </div>

        <p class="queue-scope-note">
          ${n.checkCircle} Showing only ${a.label} claims &middot; ${s.length} in queue, ordered by priority &middot;
          <span class="${t?"overdue-text":""}">${t} past SLA</span>
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
              ${s.length?s.map((i,l)=>be(i,l+1)).join(""):'<tr><td colspan="7" class="empty-row">No claims in this queue right now.</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  `}function fe(e){return r.filter(a=>a.assignee===e)}function ye(e){const a=v(e),s=b.has(e.assignee);return`
    <tr class="${s?"flagged-row":""}" data-claim-id="${e.id}">
      <td class="claim-id">${e.id}</td>
      <td>${Z(e.tag)}</td>
      <td>${H(a)}</td>
      <td>${K(e)}</td>
      <td>${M(e.assignee,e.disabled)}${s?`<span class="flag-inline">${n.alert}Needs reassignment</span>`:""}</td>
      <td>
        <select class="reassign-select" data-claim-id="${e.id}">
          <option value="">Reassign&hellip;</option>
          ${p.map(t=>`<option value="${t.id}" ${t.id===a?"disabled":""}>${t.label}</option>`).join("")}
        </select>
      </td>
    </tr>
  `}function xe(){const e=p.map(s=>{const t=r.filter(c=>v(c)===s.id),i=t.filter($).length,l=t.slice().sort((c,h)=>h.ageHours-c.ageHours)[0];return{team:s,count:t.length,breaches:i,oldest:l}}),a=r.filter(s=>!v(s));return`
    <header class="topbar">
      <span class="breadcrumb">Home / Supervisor</span>
      ${P()}
    </header>

    <main class="content">
      <div class="page-body">
        <div class="page-header">
          <h1>Supervisor <span class="count">&mdash; Cross-Queue Control</span></h1>
        </div>

        <div class="queue-cards">
          ${e.map(s=>`
            <a class="queue-card" href="#/queues/${s.team.id}">
              <div class="queue-card-top">
                <span class="queue-card-title">${s.team.label}</span>
                <span class="queue-card-count">${s.count}</span>
              </div>
              <div class="queue-card-row"><span>Oldest claim</span><span>${s.oldest?`${s.oldest.id} &middot; ${G(s.oldest.ageHours)}`:"&mdash;"}</span></div>
              <div class="queue-card-row"><span>SLA breaches</span><span class="${s.breaches?"overdue-text":""}">${s.breaches}</span></div>
            </a>
          `).join("")}
          <div class="queue-card queue-card-unmatched">
            <div class="queue-card-top">
              <span class="queue-card-title">${n.alert}Unmatched</span>
              <span class="queue-card-count">${a.length}</span>
            </div>
            <div class="queue-card-row"><span>No rule matched</span><span>needs manual routing</span></div>
          </div>
        </div>

        <div class="supervisor-grid">
          <section>
            <p class="section-label">Handler availability</p>
            <div class="handler-list">
              ${le.map(s=>{const t=b.has(s.name),i=t?fe(s.name).length:0;return`
                  <div class="handler-row">
                    ${J(s.name)}
                    <div class="handler-info">
                      <span class="handler-name">${s.name}</span>
                      <span class="handler-team">${E(s.team)}</span>
                      ${i?`<span class="flag-chip">${n.alert}${i} to reassign</span>`:""}
                    </div>
                    <button class="avail-toggle ${t?"off":"on"}" data-handler="${s.name}">
                      <span class="avail-dot"></span>${t?"Unavailable":"Available"}
                    </button>
                  </div>
                `}).join("")}
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
                  ${r.map(ye).join("")}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </main>
  `}function we(e){return e==="ok"?`<span class="status-dot status-dot-ok">${n.checkCircle}</span>`:e==="warn"?`<span class="status-dot status-dot-warn">${n.pieHalf}</span>`:`<span class="status-dot status-dot-warn">${n.pieHalf}</span>`}function w(e,a,s){return`
    <span class="value-tag">
      <span class="value-tag-left">
        ${s?`<span class="conflict-mark">${n.alert}</span>`:n.claims}
        <span class="value-text">${e}</span>
      </span>
      <span class="value-tag-right">
        ${a?`<span class="value-count">+${a}</span>`:""}
        ${n.chevronDown}
      </span>
    </span>
  `}function Q(e){return`<span class="value-plain">${e}</span>`}function U(e){return`<span class="value-plain value-select">${e}${n.chevronDown}</span>`}function u({indent:e,kind:a,label:s,value:t,status:i}){const l=`padding-left:${.85+e*1.6}rem`,c=a==="group-open"?n.minus:a==="group-closed"?n.plus:"";return`
    <tr class="field-row">
      <td class="field-name${e>0?" grouped":""}" style="${l}">
        ${c?`<span class="group-toggle">${c}</span>`:""}
        <span>${s}</span>
      </td>
      <td class="field-value">
        ${i?we(i):""}
        ${t||""}
      </td>
    </tr>
  `}function Ce(e){return`
    <table class="fields-table">
      <thead><tr><th>Name</th><th>Value</th></tr></thead>
      <tbody>${[u({indent:0,kind:"leaf",label:"Member Name",status:"warn",value:w(e.memberName,3)}),u({indent:0,kind:"group-open",label:"Object (1)"}),u({indent:1,kind:"group-closed",label:"Member"}),u({indent:1,kind:"leaf",label:"Date of Birth",status:"warn",value:Q(e.dob)}),u({indent:0,kind:"group-open",label:"Object (2)"}),u({indent:1,kind:"group-closed",label:"Provider"}),u({indent:1,kind:"leaf",label:"Date of Submission",status:"warn",value:w(e.submitted,2)}),u({indent:0,kind:"leaf",label:"Policy ID",status:"ok",value:w(e.policyId,8,e.hasConflict)}),u({indent:0,kind:"leaf",label:"Accident",status:"warn",value:Q(e.accident)}),u({indent:0,kind:"leaf",label:"Provider Address",status:"warn",value:e.providerAddress?U(e.providerAddress):U("Select")}),u({indent:0,kind:"leaf",label:"Amount",status:"ok",value:w(`$${e.amount.toFixed(0)}`,8)})].join("")}</tbody>
    </table>
  `}function Me(e){return`
    <table class="service-lines-table">
      <thead>
        <tr><th>Date</th><th>Type</th><th>Code</th><th>Description</th><th>CUPS</th><th>Value</th></tr>
      </thead>
      <tbody>${e.services.map(s=>`
    <tr>
      <td>${s.date}</td>
      <td>${s.type}</td>
      <td>${s.cie}</td>
      <td class="muted">${s.desc}</td>
      <td>${s.cups}</td>
      <td class="amount-col">$${s.value.toFixed(2)}</td>
    </tr>
  `).join("")}</tbody>
    </table>
  `}const Ae=["suspected duplicate provider","incorrect initial classification","high-value claim requires fraud review","missing documentation flagged on intake","escalated by handler"];function z(e){return`${o(e,1,28)} ${d(e,_)} 2025, ${o(e,8,17)}:${String(o(e,0,59)).padStart(2,"0")}`}function ke(e){const a=B(L(e.id+"audit")),s=p.find(i=>i.id===e.team),t=[];if(t.push({text:s?`Auto-routed to ${s.label}`:"Auto-routing found no matching rule — sent to Unmatched",rule:s?`claim_type = ${e.tag}${s.id==="fraud"?" AND amount > €2,000":""}`:null,actor:"System",reason:null,timestamp:z(a)}),s&&a()>.55){const i=p.filter(c=>c.id!==s.id),l=d(a,i);t.push({text:`Reassigned to ${l.label} by J. Green (supervisor)`,rule:null,actor:"J. Green (supervisor)",reason:d(a,Ae),timestamp:z(a)})}return(C[e.id]||[]).forEach(i=>{t.push({text:`Reassigned to ${E(i.team)} by ${i.actor}`,rule:null,actor:i.actor,reason:i.reason,timestamp:i.timestamp})}),t}function Se(e){const a=ke(e),s=v(e);return`
    <div class="audit-panel">
      <div class="audit-current">
        <span>Current queue</span>
        ${H(s)}
        <span class="audit-current-note">A claim lives in exactly one queue at a time.</span>
      </div>

      <div class="audit-timeline">
        ${a.map(t=>`
          <div class="audit-entry">
            <span class="audit-dot"></span>
            <div class="audit-entry-body">
              <div class="audit-entry-text">${t.text}</div>
              ${t.rule?`<div class="audit-entry-rule">Rule: <code>${t.rule}</code></div>`:""}
              ${t.reason?`<div class="audit-entry-reason">Reason: ${t.reason}</div>`:""}
              <div class="audit-entry-meta">${t.actor} &middot; ${t.timestamp}</div>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="audit-override">
        <p class="section-label">Reassign / override</p>
        <div class="audit-override-form">
          <select class="audit-team-select">
            ${p.map(t=>`<option value="${t.id}" ${t.id===s?"disabled":""}>${t.label}</option>`).join("")}
          </select>
          <input class="audit-reason-input" type="text" placeholder="Reason for override" />
          <button class="btn-secondary audit-confirm-btn">${n.checkCircle}Confirm reassignment</button>
        </div>
      </div>
    </div>
  `}function Re(e,a){const s=a.services.map(t=>`
    <tr>
      <td>${t.date}</td>
      <td>${t.type}</td>
      <td>${t.cie} <span class="muted">(${t.codeType})</span></td>
      <td>${t.desc}</td>
      <td>${t.cups}</td>
      <td class="amount-col">$${t.value.toFixed(2)}</td>
    </tr>
  `).join("");return`
    <div class="invoice">
      <div class="invoice-head">
        <div>
          <div class="invoice-hospital">${a.hospital}</div>
          <div class="invoice-address">${a.city} &middot; Tel. (02) 2 999-100</div>
          <div class="invoice-address">RUC: 170123456001 &middot; Autorizacion SRI: 001-001-000123456</div>
        </div>
        <div class="invoice-title">
          <div class="invoice-title-main">FACTURA M&Eacute;DICA</div>
          <div class="invoice-meta">${e.id}</div>
          <div class="invoice-meta">Fecha de Factura: ${a.invoiceDate}</div>
          <div class="invoice-meta">Fecha de Servicio: ${a.serviceDate}</div>
          <span class="invoice-verified">Verificado</span>
        </div>
      </div>

      <div class="invoice-cols">
        <div>
          <div class="invoice-section-label">Informaci&oacute;n del Paciente</div>
          <div class="invoice-kv"><span>Nombre</span><span>${a.memberName}</span></div>
          <div class="invoice-kv"><span>C&eacute;dula</span><span>${a.cedula}</span></div>
          <div class="invoice-kv"><span>F. Nacimiento</span><span>${a.dob}</span></div>
          <div class="invoice-kv"><span>Direcci&oacute;n</span><span>${a.providerAddress||`${a.city}`}</span></div>
          <div class="invoice-kv"><span>Seguro</span><span>${a.policyId}</span></div>
        </div>
        <div>
          <div class="invoice-section-label">Informaci&oacute;n del M&eacute;dico</div>
          <div class="invoice-kv"><span>M&eacute;dico</span><span>${a.doctor}</span></div>
          <div class="invoice-kv"><span>Especialidad</span><span>${a.specialty}</span></div>
          <div class="invoice-kv"><span>Consultorio</span><span>${o(B(L(e.id+"c")),100,950)}</span></div>
        </div>
      </div>

      <div class="invoice-section-label">Detalle de Servicios</div>
      <table class="invoice-services">
        <thead>
          <tr><th>Fecha</th><th>Tipo</th><th>C&oacute;digo</th><th>Descripci&oacute;n</th><th>CUPS</th><th>Valor</th></tr>
        </thead>
        <tbody>${s}</tbody>
      </table>

      <div class="invoice-totals">
        <div><span>Subtotal</span><span>$${a.subtotal.toFixed(2)}</span></div>
        <div><span>IVA (12%)</span><span>$${a.iva.toFixed(2)}</span></div>
        <div class="invoice-total-final"><span>Total</span><span>$${a.total.toFixed(2)}</span></div>
      </div>

      <div class="invoice-section-label">Informaci&oacute;n de Pago</div>
      <div class="invoice-kv"><span>Estado</span><span>Verificado</span></div>
      <div class="invoice-kv"><span>Forma de Pago</span><span>Contado</span></div>
    </div>
  `}function De(e,a,s){const t=he(e),i=r.length;return`
    <header class="topbar">
      <span class="breadcrumb"><a href="#/">Home</a> / <span>Claim #${e.id}</span></span>
      <div class="topbar-right">
        <span class="page-stepper">
          <span class="page-stepper-count">${a+1} / ${i}</span>
          <button class="icon-btn step-btn" data-step="-1">${n.chevronUp}</button>
          <button class="icon-btn step-btn" data-step="1">${n.chevronDown}</button>
        </span>
        <span class="divider"></span>
        <span class="user-chip">
          <span class="avatar" style="background:#bfdbfe">AD</span>
          <span>Alex Dupre</span>
          ${n.chevronDown}
        </span>
        <span class="divider"></span>
        <button class="icon-btn">${n.moon}</button>
      </div>
    </header>

    <main class="content detail-content">
      <div class="claim-detail">
        <div class="claim-header-bar">
          <div class="claim-header-left">
            <span class="claim-detail-id">${e.id}</span>
            ${q(e.status,null)}
            <span class="percent-chip">${n.clock}${t.percent}%</span>
            ${H(v(e))}
          </div>
          <span class="assignee-chip-lg">${M(e.assignee||t.memberName,!1)}</span>
        </div>

        <div class="detail-grid">
          <section class="fields-pane">
            <div class="tabs">
              <button class="tab-btn ${s==="fields"?"active":""}" data-tab="fields">Claim Fields</button>
              <button class="tab-btn ${s==="lines"?"active":""}" data-tab="lines">Service Lines</button>
              <button class="tab-btn ${s==="audit"?"active":""}" data-tab="audit">Routing &amp; Audit</button>
            </div>
            ${s==="audit"?"":`
            <div class="chips" style="margin: 0.875rem 0 1rem;">
              <span class="chip static">All Fields <span class="chip-count">${t.fieldsCount}</span></span>
              <span class="chip static">All Issues <span class="chip-count issues">${t.issuesCount}</span></span>
            </div>`}
            <div class="fields-pane-body">
              ${s==="lines"?Me(t):s==="audit"?Se(e):Ce(t)}
            </div>
          </section>

          <section class="document-pane">
            <div class="document-pane-header">
              <span class="document-pane-label">Document Pane</span>
              <div class="document-pane-icons">
                <button class="icon-btn">${n.list}</button>
                <button class="icon-btn">${n.claims}</button>
                <button class="icon-btn">${n.panel}</button>
              </div>
            </div>

            <div class="document-pane-controls">
              <div class="document-select">
                <span class="document-select-label">Current Document</span>
                <span class="document-select-box">${n.claims}<span>${t.docName}</span>${n.chevronDown}</span>
              </div>
              <div class="document-select">
                <span class="document-select-label">Document Class</span>
                <span class="document-select-box">${t.docClass}${n.chevronDown}</span>
              </div>
              <button class="btn-split">${n.scissors}Split</button>
            </div>

            <div class="document-preview-wrap">
              <div class="document-preview">
                ${Re(e,t)}
              </div>
              <div class="document-preview-controls">
                <button class="icon-btn">${n.zoomOut}</button>
                <button class="icon-btn">${n.zoomIn}</button>
                <span class="page-indicator">1 / ${t.pageCount}</span>
                <button class="icon-btn">${n.expand}</button>
              </div>
            </div>
          </section>

          <aside class="icon-rail">
            <button class="icon-btn">${n.panel}</button>
            <button class="icon-btn">${n.claims}</button>
            <button class="icon-btn">${n.clock}</button>
            <button class="icon-btn">${n.link}</button>
            <button class="icon-btn">${n.bookmark}</button>
          </aside>
        </div>

        <div class="detail-footer">
          <div class="detail-footer-left">
            <button class="btn-secondary">${n.scissors}Split</button>
            <button class="btn-danger">${n.xCircle}Reject</button>
          </div>
          <button class="btn-primary btn-disabled" disabled>${n.checkCircle}Register</button>
        </div>
      </div>
    </main>
  `}let D="fields",g=null;function Ee(){const e=location.hash;let a;return(a=e.match(/^#\/claims\/(.+)$/))?{view:"claim",id:decodeURIComponent(a[1])}:(a=e.match(/^#\/queues\/?(.*)$/))?{view:"queue",team:a[1]||"medical-review"}:e==="#/supervisor"?{view:"supervisor"}:{view:"list"}}function I(e,a){e.querySelectorAll(a).forEach(s=>{s.addEventListener("click",()=>{location.hash=`#/claims/${s.dataset.claimId}`})})}function He(e,a,s){e.querySelectorAll(".tab-btn").forEach(i=>{i.addEventListener("click",()=>{D=i.dataset.tab,m()})}),e.querySelectorAll(".step-btn").forEach(i=>{i.addEventListener("click",()=>{const l=Number(i.dataset.step),c=(s+l+r.length)%r.length;location.hash=`#/claims/${r[c].id}`})});const t=e.querySelector(".audit-confirm-btn");t&&t.addEventListener("click",()=>{const i=e.querySelector(".audit-team-select"),l=e.querySelector(".audit-reason-input");i.value&&(V(a.id,i.value,"Alex Dupre (supervisor)",l.value.trim()||"Manual override by supervisor"),m())})}function qe(e){e.querySelectorAll(".tab-btn[data-team]").forEach(s=>{s.addEventListener("click",()=>{location.hash=`#/queues/${s.dataset.team}`})}),I(e,"tbody tr[data-claim-id]");const a=e.querySelector(".btn-pull-next");a&&a.addEventListener("click",s=>{s.stopPropagation();const t=e.querySelector("tbody tr[data-claim-id]");t&&(t.classList.add("pulled-flash"),setTimeout(()=>t.classList.remove("pulled-flash"),900))})}function Le(e){I(e,".supervisor-table tbody tr[data-claim-id]"),e.querySelectorAll(".avail-toggle").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation();const t=a.dataset.handler;b.has(t)?b.delete(t):b.add(t),m()})}),e.querySelectorAll(".reassign-select").forEach(a=>{a.addEventListener("click",s=>s.stopPropagation()),a.addEventListener("change",()=>{a.value&&(V(a.dataset.claimId,a.value,"Alex Dupre (supervisor)","Manual reassignment from Supervisor view"),m())})})}function m(){const e=Ee(),a=document.querySelector("#app");if(e.view==="claim"){const s=r.findIndex(t=>t.id===e.id);if(s===-1){location.hash="#/";return}g!==e.id&&(D="fields",g=e.id),a.innerHTML=`<div class="layout">${x("claims")}<div class="main-col">${De(r[s],s,D)}</div></div>`,He(a,r[s],s)}else e.view==="queue"?(g=null,a.innerHTML=`<div class="layout">${x("queues")}<div class="main-col">${$e(e.team)}</div></div>`,qe(a)):e.view==="supervisor"?(g=null,a.innerHTML=`<div class="layout">${x("supervisor")}<div class="main-col">${xe()}</div></div>`,Le(a)):(g=null,a.innerHTML=`<div class="layout">${x("claims")}<div class="main-col">${ge()}</div></div>`,I(a,"tbody tr[data-claim-id]"))}window.addEventListener("hashchange",m);m();
