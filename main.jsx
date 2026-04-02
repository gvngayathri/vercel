
import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   DUAL-CHROME SVG ICONS  (gold only, two tones)
───────────────────────────────────────────── */
const G1 = "#d6aa55";
const G2 = "rgba(214,170,85,0.38)";

const IconStrategicPartnership = () => (
  <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
    <circle cx="14" cy="20" r="9"  stroke={G1} strokeWidth="1.4"/>
    <circle cx="26" cy="20" r="9"  stroke={G2} strokeWidth="1.4"/>
    <path d="M20 12.5 C22.8 15 22.8 25 20 27.5" stroke={G1} strokeWidth="1.2" fill="none"/>
    <path d="M20 12.5 C17.2 15 17.2 25 20 27.5" stroke={G2} strokeWidth="1.2" fill="none"/>
    <line x1="20" y1="11" x2="20" y2="29" stroke={G2} strokeWidth="0.7" strokeDasharray="2 2.5"/>
  </svg>
);
const IconTalentManagement = () => (
  <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
    <polygon points="20,6 35,31 5,31"  stroke={G1} strokeWidth="1.4" fill="none"/>
    <polygon points="20,12 30,28 10,28" stroke={G2} strokeWidth="1.1" fill="none"/>
    <polygon points="20,19 26,28 14,28" stroke={G1} strokeWidth="0.9" fill="none" strokeOpacity="0.6"/>
    <circle cx="20" cy="19.5" r="1.6" fill={G1}/>
  </svg>
);
const IconChangeManagement = () => (
  <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
    <path d="M20 8 A12 12 0 0 1 32 20" stroke={G1} strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M32 20 A12 12 0 0 1 20 32" stroke={G1} strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M20 32 A12 12 0 0 1 8 20"  stroke={G2} strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M8 20 A12 12 0 0 1 20 8"   stroke={G2} strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2.5 2"/>
    <polygon points="20,5 16.5,10.5 23.5,10.5" fill={G1}/>
    <circle cx="20" cy="20" r="2" stroke={G2} strokeWidth="0.9" fill="none"/>
  </svg>
);
const IconEmployeeRelations = () => (
  <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
    <line x1="20" y1="8"  x2="20" y2="14" stroke={G1} strokeWidth="1.4"/>
    <line x1="8"  y1="14" x2="32" y2="14" stroke={G1} strokeWidth="1.4"/>
    <line x1="11" y1="14" x2="11" y2="27" stroke={G2} strokeWidth="1.2"/>
    <line x1="29" y1="14" x2="29" y2="27" stroke={G2} strokeWidth="1.2"/>
    <rect x="6"  y="27" width="10" height="6" stroke={G2} strokeWidth="1.1" fill="none" rx="1"/>
    <rect x="24" y="27" width="10" height="6" stroke={G2} strokeWidth="1.1" fill="none" rx="1"/>
    <circle cx="20" cy="11" r="2.5" stroke={G1} strokeWidth="1.2" fill="none"/>
  </svg>
);
const IconPeopleAnalytics = () => (
  <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
    <line x1="8"  y1="33" x2="8"  y2="8"  stroke={G2} strokeWidth="0.9"/>
    <line x1="8"  y1="33" x2="34" y2="33" stroke={G2} strokeWidth="0.9"/>
    <rect x="10" y="22" width="5" height="11" fill="none" stroke={G2} strokeWidth="1.1"/>
    <rect x="18" y="16" width="5" height="17" fill="none" stroke={G1} strokeWidth="1.3"/>
    <rect x="26" y="10" width="5" height="23" fill="none" stroke={G1} strokeWidth="1.3"/>
    <path d="M12.5 21 L20.5 15 L28.5 9" stroke={G1} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12.5" cy="21" r="1.8" fill={G2}/>
    <circle cx="20.5" cy="15" r="1.8" fill={G1}/>
    <circle cx="28.5" cy="9"  r="1.8" fill={G1}/>
  </svg>
);
const IconODCulture = () => (
  <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="3"   stroke={G1} strokeWidth="1.5" fill="none"/>
    <circle cx="20" cy="8"  r="2.3" stroke={G1} strokeWidth="1.2" fill="none"/>
    <circle cx="31" cy="14" r="2.3" stroke={G2} strokeWidth="1.2" fill="none"/>
    <circle cx="31" cy="26" r="2.3" stroke={G2} strokeWidth="1.2" fill="none"/>
    <circle cx="20" cy="32" r="2.3" stroke={G1} strokeWidth="1.2" fill="none"/>
    <circle cx="9"  cy="26" r="2.3" stroke={G2} strokeWidth="1.2" fill="none"/>
    <circle cx="9"  cy="14" r="2.3" stroke={G2} strokeWidth="1.2" fill="none"/>
    <line x1="20" y1="10.3" x2="20" y2="17"   stroke={G2} strokeWidth="0.8"/>
    <line x1="29" y1="15"   x2="23" y2="18.3" stroke={G2} strokeWidth="0.8"/>
    <line x1="29" y1="25"   x2="23" y2="21.7" stroke={G2} strokeWidth="0.8"/>
    <line x1="20" y1="29.7" x2="20" y2="23"   stroke={G2} strokeWidth="0.8"/>
    <line x1="11" y1="25"   x2="17" y2="21.7" stroke={G2} strokeWidth="0.8"/>
    <line x1="11" y1="15"   x2="17" y2="18.3" stroke={G2} strokeWidth="0.8"/>
  </svg>
);
const IconCoachingConsulting = () => (
  <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
    <circle cx="16" cy="14" r="5"  stroke={G1} strokeWidth="1.4" fill="none"/>
    <path d="M8 33 C8 26.5 24 26.5 24 33" stroke={G1} strokeWidth="1.4" fill="none" strokeLinecap="round"/>
    <line x1="27" y1="18" x2="35" y2="11" stroke={G1} strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="27" y1="18" x2="34" y2="23" stroke={G2} strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="27" y1="18" x2="29" y2="27" stroke={G2} strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="27" cy="18" r="2.4" stroke={G1} strokeWidth="1.2" fill="none"/>
    <circle cx="35" cy="11" r="1.4" fill={G1}/>
    <circle cx="34" cy="23" r="1.4" fill={G2}/>
    <circle cx="29" cy="27" r="1.4" fill={G2}/>
  </svg>
);
const IconWorkforcePlanning = () => (
  <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
    <rect x="7" y="7" width="26" height="26" stroke={G2} strokeWidth="0.9" fill="none"/>
    <line x1="7"  y1="16" x2="33" y2="16" stroke={G2} strokeWidth="0.7"/>
    <line x1="7"  y1="24" x2="33" y2="24" stroke={G2} strokeWidth="0.7"/>
    <line x1="16" y1="7"  x2="16" y2="33" stroke={G2} strokeWidth="0.7"/>
    <line x1="24" y1="7"  x2="24" y2="33" stroke={G2} strokeWidth="0.7"/>
    <circle cx="11.5" cy="11.5" r="2"   fill={G1}/>
    <circle cx="20"   cy="11.5" r="2"   fill={G1}/>
    <circle cx="20"   cy="20"   r="2"   fill={G1}/>
    <circle cx="28.5" cy="20"   r="1.6" fill={G2}/>
    <circle cx="28.5" cy="28.5" r="2"   fill={G1}/>
    <path d="M11.5 11.5 L20 11.5 L20 20 L28.5 20 L28.5 28.5" stroke={G1} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Location icon — dual chrome, matches SVG style */
const LocationIcon = () => (
  <svg width="16" height="20" viewBox="0 0 16 21" fill="none">
    <path d="M8 1C4.4 1 1.5 3.9 1.5 7.5C1.5 12.6 8 20 8 20C8 20 14.5 12.6 14.5 7.5C14.5 3.9 11.6 1 8 1Z"
      stroke={G1} strokeWidth="1.3" fill="none"/>
    <circle cx="8" cy="7.5" r="2.5" stroke={G2} strokeWidth="1.1" fill="none"/>
  </svg>
);

const skillIcons = [
  IconStrategicPartnership, IconTalentManagement, IconChangeManagement,
  IconEmployeeRelations,    IconPeopleAnalytics,  IconODCulture,
  IconCoachingConsulting,   IconWorkforcePlanning,
];

/* ─────────────────────────────────────────────  CSS  ── */
const style = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

  * { margin:0; padding:0; box-sizing:border-box; }
  :root {
    --ink:         #191102;
    --surface:     #1e1a14;
    --surface-mid: #252018;
    --surface-lt:  #2e2a20;
    --cobalt:      #0504aa;
    --cobalt-hover:#040390;
    --gold:        #d6aa55;
    --gold-dim:    rgba(214,170,85,0.35);
    --text:        rgba(248,245,239,0.85);
    --text-mid:    rgba(248,245,239,0.5);
    --text-dim:    rgba(248,245,239,0.28);
    --border:      rgba(255,255,255,0.07);
    --border-gold: rgba(214,170,85,0.18);
    --off-white:   #f8f5ef;
  }
  html { scroll-behavior:smooth; }
  body { font-family:'DM Sans',sans-serif; background:var(--ink); color:var(--text); overflow-x:hidden; }
  .serif { font-family:'Cormorant Garamond',serif; }

  /* ── NAV ── */
  .nav {
    position:fixed; top:0; left:0; right:0; z-index:200;
    display:flex; justify-content:space-between; align-items:center;
    padding:15px 52px;
    background:rgba(25,17,2,0.97); backdrop-filter:blur(20px);
    border-bottom:1px solid var(--border-gold);
  }
  .nav-logo { font-family:'Cormorant Garamond',serif; font-size:20px; font-weight:600; letter-spacing:0.06em; color:var(--off-white); text-decoration:none; cursor:pointer; }
  .nav-logo span { color:var(--gold); }
  .nav-links { display:flex; gap:32px; list-style:none; }
  .nav-links a { font-size:11px; font-weight:500; letter-spacing:0.12em; text-transform:uppercase; color:var(--text-dim); text-decoration:none; transition:color 0.2s; }
  .nav-links a:hover { color:var(--gold); }
  .nav-cta { padding:9px 22px; background:var(--cobalt); color:white; border:none; border-radius:2px; font-size:11px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; cursor:pointer; transition:background 0.2s; font-family:'DM Sans',sans-serif; }
  .nav-cta:hover { background:var(--cobalt-hover); }

  /* ── HERO ── */
  .hero { min-height:100vh; display:grid; grid-template-columns:55% 45%; }
  .hero-left {
    background:var(--ink); padding:140px 72px 80px;
    display:flex; flex-direction:column; justify-content:center; position:relative;
    background-image:
      radial-gradient(ellipse 60% 60% at 15% 80%, rgba(5,4,170,0.2) 0%, transparent 65%),
      radial-gradient(ellipse 40% 40% at 85% 15%, rgba(214,170,85,0.07) 0%, transparent 60%);
  }
  .hero-left::after {
    content:''; position:absolute; right:-1px; top:0; bottom:0; width:56px;
    background:var(--surface); clip-path:polygon(100% 0, 100% 100%, 0 50%); z-index:2;
  }
  .hero-eyebrow { font-size:10px; letter-spacing:0.28em; text-transform:uppercase; color:var(--gold); font-weight:600; margin-bottom:28px; display:flex; align-items:center; gap:14px; }
  .hero-eyebrow::before { content:''; display:block; width:36px; height:1px; background:var(--gold); }
  .hero-name { font-family:'Cormorant Garamond',serif; font-size:clamp(48px,5.5vw,76px); line-height:1.0; font-weight:300; color:var(--off-white); margin-bottom:10px; }
  .hero-name strong { font-weight:700; font-style:italic; color:var(--gold); display:block; line-height:1.1; }
  .hero-title { font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:var(--text-dim); font-weight:400; margin-bottom:44px; }
  .hero-tagline { font-family:'Cormorant Garamond',serif; font-size:19px; line-height:1.65; font-style:italic; color:rgba(248,245,239,0.65); max-width:400px; margin-bottom:52px; border-left:2px solid var(--cobalt); padding-left:22px; }
  .hero-stats { display:flex; gap:44px; }
  .stat-num { font-family:'Cormorant Garamond',serif; font-size:44px; font-weight:700; line-height:1; color:var(--gold); }
  .stat-label { font-size:10px; letter-spacing:0.12em; text-transform:uppercase; color:var(--text-dim); margin-top:5px; }

  .hero-right {
    background:var(--surface); padding:140px 64px 80px 90px;
    display:flex; flex-direction:column; justify-content:center;
    background-image:radial-gradient(ellipse 60% 50% at 80% 20%, rgba(5,4,170,0.1) 0%, transparent 60%);
  }
  .hero-right h2 { font-family:'Cormorant Garamond',serif; font-size:34px; font-weight:400; color:var(--off-white); margin-bottom:22px; line-height:1.25; }
  .hero-intro { font-size:15px; line-height:1.85; color:var(--text-mid); max-width:420px; margin-bottom:36px; }
  .pill-group { display:flex; flex-wrap:wrap; gap:9px; margin-bottom:40px; }
  .pill { padding:7px 17px; border:1px solid rgba(255,255,255,0.12); border-radius:100px; font-size:11px; font-weight:500; letter-spacing:0.05em; color:var(--text-mid); transition:all 0.2s; cursor:default; }
  .pill:hover { background:var(--cobalt); color:white; border-color:var(--cobalt); }
  .cta-row { display:flex; gap:14px; }
  .btn-primary { padding:13px 30px; background:var(--cobalt); color:white; border:none; border-radius:2px; font-size:12px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; transition:all 0.2s; text-decoration:none; display:inline-block; font-family:'DM Sans',sans-serif; }
  .btn-primary:hover { background:var(--cobalt-hover); }
  .btn-outline { padding:13px 30px; background:transparent; color:var(--text-mid); border:1px solid rgba(255,255,255,0.15); border-radius:2px; font-size:12px; font-weight:500; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; transition:all 0.2s; font-family:'DM Sans',sans-serif; }
  .btn-outline:hover { border-color:var(--gold); color:var(--gold); }

  /* ── SECTION COMMON ── */
  .section { padding:100px 64px; }
  .section-label { font-size:10px; letter-spacing:0.25em; text-transform:uppercase; color:var(--gold); font-weight:600; margin-bottom:16px; display:flex; align-items:center; gap:12px; }
  .section-label::before { content:''; display:block; width:24px; height:1px; background:var(--gold); }
  .section-heading { font-family:'Cormorant Garamond',serif; font-size:clamp(34px,4vw,52px); font-weight:400; line-height:1.15; color:var(--off-white); }
  .section-heading em { font-style:italic; color:var(--gold); }

  /* ── SKILLS ── */
  .skills-section {
    background:var(--surface);
    background-image:
      radial-gradient(ellipse 80% 60% at 50% 110%, rgba(5,4,170,0.18) 0%, transparent 65%),
      radial-gradient(ellipse 30% 30% at 5% 5%, rgba(214,170,85,0.04) 0%, transparent 50%);
  }
  .skills-meta { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:56px; }
  .skills-hint { font-size:11px; color:var(--text-dim); letter-spacing:0.06em; display:flex; align-items:center; gap:8px; }
  .skills-hint::before { content:''; display:block; width:4px; height:4px; border-radius:50%; background:var(--gold); }

  .skills-grid {
    display:grid; grid-template-columns:repeat(4,1fr);
    border:1px solid var(--border); background:var(--border); gap:1px;
  }
  .skill-card {
    background:var(--ink); padding:36px 28px 32px;
    cursor:pointer; transition:all 0.35s ease;
    position:relative; overflow:hidden;
    display:flex; flex-direction:column;
  }
  .skill-card::before {
    content:''; position:absolute; inset:0;
    background:radial-gradient(ellipse 80% 80% at 50% 105%, rgba(5,4,170,0.13) 0%, transparent 70%);
    opacity:0; transition:opacity 0.35s;
  }
  .skill-card::after {
    content:''; position:absolute; bottom:0; left:0; right:0; height:1.5px;
    background:linear-gradient(90deg, var(--cobalt) 0%, var(--gold) 100%);
    transform:scaleX(0); transform-origin:left; transition:transform 0.4s ease;
  }
  .skill-card:hover, .skill-card.active { background:var(--surface-mid); }
  .skill-card:hover::before, .skill-card.active::before { opacity:1; }
  .skill-card:hover::after, .skill-card.active::after { transform:scaleX(1); }

  .skill-svg-wrap {
    width:52px; height:52px; margin-bottom:24px;
    display:flex; align-items:center; justify-content:center;
    border:1px solid var(--border-gold);
    background:rgba(214,170,85,0.04);
    transition:all 0.3s; flex-shrink:0;
  }
  .skill-card:hover .skill-svg-wrap, .skill-card.active .skill-svg-wrap {
    border-color:rgba(214,170,85,0.45);
    background:rgba(214,170,85,0.09);
    box-shadow:0 0 18px rgba(214,170,85,0.08);
  }
  .skill-name { font-family:'Cormorant Garamond',serif; font-size:19px; font-weight:600; color:var(--off-white); margin-bottom:8px; line-height:1.2; }
  .skill-desc { font-size:12px; color:var(--text-dim); line-height:1.65; }

  .skill-expand {
    grid-column:1 / -1;
    background:rgba(5,4,170,0.07);
    border-top:1px solid rgba(5,4,170,0.22);
    border-bottom:1px solid rgba(5,4,170,0.22);
    padding:44px 48px; display:none;
    animation:expandIn 0.3s ease;
  }
  @keyframes expandIn { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
  .skill-expand.open { display:block; }
  .skill-expand-inner { display:grid; grid-template-columns:1fr 1.6fr; gap:56px; align-items:start; }
  .skill-expand-icon { margin-bottom:20px; }
  .skill-expand h3 { font-family:'Cormorant Garamond',serif; font-size:28px; font-weight:600; color:var(--off-white); margin-bottom:14px; }
  .skill-expand p { font-size:13px; color:var(--text-mid); line-height:1.9; }
  .skill-tags-label { font-size:9px; letter-spacing:0.2em; text-transform:uppercase; color:var(--text-dim); margin-bottom:16px; font-weight:600; }
  .skill-tags { display:flex; flex-wrap:wrap; gap:8px; }
  .skill-tag { padding:6px 16px; background:rgba(5,4,170,0.2); border:1px solid rgba(5,4,170,0.38); border-radius:100px; font-size:11px; color:rgba(248,245,239,0.68); letter-spacing:0.04em; transition:all 0.2s; }
  .skill-tag:hover { background:rgba(5,4,170,0.35); color:white; }

  /* ── KNOWLEDGE PLAYBOOKS ── */
  .knowledge-section {
    background:var(--ink);
    background-image:radial-gradient(ellipse 60% 50% at 100% 0%, rgba(5,4,170,0.1) 0%, transparent 60%);
  }
  .knowledge-tabs-outer { position:relative; margin-top:48px; }
  .knowledge-tabs-outer::before,
  .knowledge-tabs-outer::after { content:''; position:absolute; top:0; bottom:2px; width:48px; z-index:2; pointer-events:none; }
  .knowledge-tabs-outer::before { left:0; background:linear-gradient(90deg, var(--ink) 30%, transparent); }
  .knowledge-tabs-outer::after  { right:60px; background:linear-gradient(-90deg, var(--ink) 30%, transparent); }

  .knowledge-tabs {
    display:flex;
    border-bottom:1px solid var(--border);
    overflow-x:auto; scroll-behavior:smooth;
    scrollbar-width:thin;
    scrollbar-color:rgba(214,170,85,0.4) transparent;
    padding:0 8px;
  }
  .knowledge-tabs::-webkit-scrollbar { height:2px; }
  .knowledge-tabs::-webkit-scrollbar-track { background:transparent; }
  .knowledge-tabs::-webkit-scrollbar-thumb { background:rgba(214,170,85,0.45); border-radius:2px; }

  .ktab-nav { display:flex; gap:6px; position:absolute; right:0; top:50%; transform:translateY(-68%); z-index:3; }
  .ktab-arrow {
    width:28px; height:28px; border:1px solid var(--border-gold);
    background:var(--surface-mid); color:var(--gold);
    display:flex; align-items:center; justify-content:center;
    cursor:pointer; font-size:14px; line-height:1;
    transition:all 0.2s; user-select:none; flex-shrink:0;
    font-family:'DM Sans',sans-serif;
  }
  .ktab-arrow:hover { background:rgba(214,170,85,0.12); border-color:var(--gold); }

  .ktab {
    padding:13px 28px; font-size:11px; font-weight:600; letter-spacing:0.1em;
    text-transform:uppercase; color:var(--text-dim); cursor:pointer;
    border:none; background:none;
    border-bottom:2px solid transparent; margin-bottom:-1px;
    transition:all 0.25s; white-space:nowrap;
    font-family:'DM Sans',sans-serif; flex-shrink:0; position:relative;
  }
  .ktab::after {
    content:''; position:absolute; bottom:-1px; left:0; right:0; height:2px;
    background:linear-gradient(90deg, var(--cobalt), var(--gold));
    transform:scaleX(0); transform-origin:left; transition:transform 0.3s ease;
  }
  .ktab.active { color:var(--gold); }
  .ktab.active::after { transform:scaleX(1); }
  .ktab:hover:not(.active) { color:var(--text-mid); }

  .knowledge-content { padding:48px 0; }
  .knowledge-panel { display:none; }
  .knowledge-panel.active { display:grid; grid-template-columns:1fr 1fr; gap:2px; background:var(--border); border:1px solid var(--border); }
  .kcard { background:var(--surface); padding:36px 32px; border-left:2px solid var(--cobalt); transition:all 0.25s; }
  .kcard:hover { border-left-color:var(--gold); background:var(--surface-mid); }
  .kcard-label { font-size:9px; letter-spacing:0.22em; text-transform:uppercase; color:var(--gold); font-weight:700; margin-bottom:12px; }
  .kcard h4 { font-family:'Cormorant Garamond',serif; font-size:21px; font-weight:600; color:var(--off-white); margin-bottom:10px; }
  .kcard p { font-size:13px; color:var(--text-mid); line-height:1.8; }
  .kcard ul { margin-top:12px; padding-left:14px; }
  .kcard ul li { font-size:12px; color:rgba(248,245,239,0.42); line-height:2.1; }

  /* ── PLAYBOOKS SECTION ── */
  .playbooks-section {
    background:var(--surface);
    background-image:radial-gradient(ellipse 50% 50% at 0% 100%, rgba(5,4,170,0.1) 0%, transparent 60%);
  }
  .scenario-intro { font-size:15px; color:var(--text-mid); line-height:1.75; max-width:520px; margin-top:18px; }
  .playbook-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:2px; margin-top:48px; background:var(--border); border:1px solid var(--border); }
  .playbook-card {
    background:var(--ink); padding:36px 32px;
    cursor:pointer; transition:all 0.3s; position:relative; overflow:hidden;
    display:flex; flex-direction:column; gap:14px;
  }
  .playbook-card::before {
    content:''; position:absolute; top:0; left:0; right:0; height:1.5px;
    background:linear-gradient(90deg, var(--cobalt), var(--gold));
    transform:scaleX(0); transform-origin:left; transition:transform 0.35s;
  }
  .playbook-card:hover { background:var(--surface-mid); }
  .playbook-card:hover::before { transform:scaleX(1); }
  .playbook-num { font-size:9px; letter-spacing:0.22em; color:var(--gold); font-weight:600; }
  .playbook-title { font-family:'Cormorant Garamond',serif; font-size:22px; font-weight:600; color:var(--off-white); line-height:1.3; }
  .playbook-tag-row { display:flex; flex-wrap:wrap; gap:6px; }
  .playbook-tag { padding:3px 10px; background:rgba(5,4,170,0.12); border:1px solid rgba(5,4,170,0.3); border-radius:100px; font-size:10px; color:rgba(100,120,220,0.9); letter-spacing:0.05em; }
  .playbook-desc { font-size:12px; color:var(--text-dim); line-height:1.75; }
  .playbook-cta { display:flex; align-items:center; gap:8px; font-size:11px; font-weight:600; color:var(--gold); letter-spacing:0.08em; text-transform:uppercase; margin-top:auto; opacity:0; transition:all 0.25s; }
  .playbook-card:hover .playbook-cta { opacity:1; }
  .playbook-cta-arrow { transition:transform 0.2s; display:inline-block; }
  .playbook-card:hover .playbook-cta-arrow { transform:translateX(4px); }

  /* ── PLAYBOOK OVERLAY ── */
  .playbook-overlay {
    position:fixed; inset:0; z-index:300;
    transform:translateX(100%);
    transition:transform 0.5s cubic-bezier(0.77,0,0.175,1);
    display:flex; flex-direction:column;
    background:var(--ink);
  }
  .playbook-overlay.open { transform:translateX(0); }

  /* Overlay nav — same visual as main nav */
  .pb-overlay-nav {
    display:flex; justify-content:space-between; align-items:center;
    padding:15px 52px;
    background:rgba(25,17,2,0.98);
    border-bottom:1px solid var(--border-gold);
    flex-shrink:0; z-index:10;
  }
  .pb-nav-logo {
    font-family:'Cormorant Garamond',serif; font-size:20px; font-weight:600;
    letter-spacing:0.06em; color:var(--off-white);
    cursor:pointer; border:none; background:none;
    transition:color 0.2s; text-decoration:none;
  }
  .pb-nav-logo span { color:var(--gold); }
  .pb-nav-logo:hover { color:var(--gold); }
  .pb-nav-center {
    font-size:11px; font-weight:600; letter-spacing:0.14em;
    text-transform:uppercase; color:var(--text-dim);
  }
  .pb-back {
    display:flex; align-items:center; gap:8px;
    font-size:11px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase;
    color:var(--text-dim); cursor:pointer; border:none; background:none;
    transition:color 0.2s; font-family:'DM Sans',sans-serif;
  }
  .pb-back:hover { color:var(--gold); }
  .pb-back-arrow { font-size:15px; transition:transform 0.2s; display:inline-block; }
  .pb-back:hover .pb-back-arrow { transform:translateX(-3px); }

  .pb-overlay-body { display:grid; grid-template-columns:280px 1fr; flex:1; overflow:hidden; }
  .pb-list { background:var(--surface); border-right:1px solid var(--border); overflow-y:auto; flex-shrink:0; }
  .pb-list-header { padding:32px 28px 16px; font-size:9px; letter-spacing:0.22em; text-transform:uppercase; color:var(--text-dim); font-weight:600; border-bottom:1px solid var(--border); }
  .pb-list-item { padding:20px 28px; cursor:pointer; border-bottom:1px solid var(--border); transition:all 0.2s; border-left:3px solid transparent; }
  .pb-list-item.active { background:rgba(5,4,170,0.15); border-left-color:var(--cobalt); }
  .pb-list-item:hover:not(.active) { background:rgba(255,255,255,0.02); }
  .pb-item-num { font-size:9px; letter-spacing:0.18em; color:var(--gold); margin-bottom:5px; font-weight:600; }
  .pb-item-title { font-size:13px; font-weight:500; color:var(--text); line-height:1.45; }

  .pb-content {
    overflow-y:auto; padding:56px 64px;
    background:var(--ink);
    background-image:radial-gradient(ellipse 60% 40% at 80% 0%, rgba(5,4,170,0.1) 0%, transparent 60%);
  }
  .pb-content-tag {
    display:inline-block; padding:5px 16px;
    background:rgba(5,4,170,0.12); border:1px solid rgba(5,4,170,0.35);
    border-radius:100px; font-size:10px; letter-spacing:0.12em;
    color:rgba(120,140,240,0.9); margin-bottom:22px; font-weight:600;
  }
  .pb-content h2 { font-family:'Cormorant Garamond',serif; font-size:42px; font-weight:600; color:var(--off-white); margin-bottom:8px; line-height:1.15; }
  .pb-content-sub { font-size:13px; color:var(--text-dim); margin-bottom:36px; letter-spacing:0.04em; }
  .pb-situation { padding:24px 28px; background:var(--surface-mid); border-left:3px solid rgba(255,255,255,0.08); margin-bottom:48px; }
  .pb-situation-label { font-size:9px; letter-spacing:0.2em; text-transform:uppercase; color:var(--text-dim); margin-bottom:10px; font-weight:600; }
  .pb-situation p { font-size:14px; color:var(--text-mid); line-height:1.85; font-style:italic; }
  .pb-steps-label { font-size:9px; letter-spacing:0.2em; text-transform:uppercase; color:var(--text-dim); margin-bottom:20px; font-weight:600; }
  .pb-steps { display:flex; flex-direction:column; gap:3px; }
  .pb-step { display:grid; grid-template-columns:48px 1fr; background:var(--surface); transition:background 0.2s; }
  .pb-step:hover { background:var(--surface-mid); }
  .pb-step-num-col { padding:26px 0 22px; display:flex; align-items:flex-start; justify-content:center; border-right:1px solid var(--border); }
  .pb-step-num-badge { width:26px; height:26px; background:var(--cobalt); color:white; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; flex-shrink:0; }
  .pb-step-body { padding:22px 28px; }
  .pb-step-body h5 { font-size:14px; font-weight:600; color:var(--off-white); margin-bottom:6px; }
  .pb-step-body p { font-size:13px; color:var(--text-mid); line-height:1.75; }
  .pb-outcome { margin-top:36px; padding:24px 28px; background:rgba(5,4,170,0.08); border-top:3px solid var(--cobalt); }
  .pb-outcome-label { font-size:9px; letter-spacing:0.2em; text-transform:uppercase; color:rgba(120,140,240,0.8); margin-bottom:8px; font-weight:700; }
  .pb-outcome-text { font-size:14px; font-weight:500; color:var(--off-white); line-height:1.75; }

  /* ── FRAMEWORKS ── */
  .frameworks-section {
    background:var(--cobalt);
    background-image:
      radial-gradient(ellipse 80% 60% at 0% 100%, rgba(3,2,70,0.7) 0%, transparent 60%),
      radial-gradient(ellipse 60% 60% at 100% 0%, rgba(214,170,85,0.1) 0%, transparent 55%);
    padding:100px 64px;
  }
  .frameworks-section .section-heading em { color:var(--gold); }
  .frameworks-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; margin-top:56px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.08); }
  .framework-card { background:rgba(5,4,100,0.45); padding:40px 36px; transition:all 0.3s; }
  .framework-card:hover { background:rgba(0,0,0,0.25); transform:translateY(-4px); }
  .fw-icon { width:46px; height:46px; border:1.5px solid var(--gold); display:flex; align-items:center; justify-content:center; font-size:18px; margin-bottom:24px; color:var(--gold); font-family:'Cormorant Garamond',serif; font-weight:700; }
  .fw-name { font-family:'Cormorant Garamond',serif; font-size:22px; font-weight:600; color:white; margin-bottom:8px; }
  .fw-desc { font-size:12px; color:rgba(255,255,255,0.45); line-height:1.8; margin-bottom:22px; }
  .fw-item { display:flex; align-items:flex-start; gap:10px; font-size:11px; color:rgba(255,255,255,0.62); line-height:1.65; margin-bottom:7px; }
  .fw-dot { width:4px; height:4px; background:var(--gold); border-radius:50%; flex-shrink:0; margin-top:6px; }

  /* ── RESOURCES ── */
  .resources-section {
    background:var(--surface);
    background-image:radial-gradient(ellipse 70% 60% at 100% 0%, rgba(5,4,170,0.1) 0%, transparent 60%);
    padding:100px 64px;
  }
  .resources-header { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:56px; flex-wrap:wrap; gap:24px; }
  .resources-header p { font-size:14px; color:var(--text-dim); max-width:320px; line-height:1.75; }
  .resources-tabs-outer { position:relative; }
  .resources-tabs-outer::before,
  .resources-tabs-outer::after { content:''; position:absolute; top:0; bottom:2px; width:40px; z-index:2; pointer-events:none; }
  .resources-tabs-outer::before { left:0; background:linear-gradient(90deg, var(--surface) 30%, transparent); }
  .resources-tabs-outer::after  { right:0; background:linear-gradient(-90deg, var(--surface) 30%, transparent); }

  .resources-tabs {
    display:flex; border-bottom:1px solid var(--border); margin-bottom:48px;
    overflow-x:auto; scroll-behavior:smooth;
    scrollbar-width:thin; scrollbar-color:rgba(214,170,85,0.4) transparent;
  }
  .resources-tabs::-webkit-scrollbar { height:2px; }
  .resources-tabs::-webkit-scrollbar-track { background:transparent; }
  .resources-tabs::-webkit-scrollbar-thumb { background:rgba(214,170,85,0.45); border-radius:2px; }

  .rtab { padding:12px 24px; font-size:11px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-dim); cursor:pointer; border:none; background:none; border-bottom:2px solid transparent; margin-bottom:-1px; transition:all 0.2s; white-space:nowrap; font-family:'DM Sans',sans-serif; position:relative; }
  .rtab::after { content:''; position:absolute; bottom:-1px; left:0; right:0; height:2px; background:linear-gradient(90deg, var(--cobalt), var(--gold)); transform:scaleX(0); transform-origin:left; transition:transform 0.3s ease; }
  .rtab.active { color:var(--gold); }
  .rtab.active::after { transform:scaleX(1); }
  .rtab:hover:not(.active) { color:var(--text-mid); }

  .resources-panel { display:none; }
  .resources-panel.active { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:var(--border); border:1px solid var(--border); }
  .resources-panel.active.two-col { grid-template-columns:repeat(2,1fr); }

  .rcard { background:var(--ink); padding:36px 32px; transition:all 0.3s; cursor:pointer; position:relative; overflow:hidden; }
  .rcard::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg, var(--cobalt), var(--gold)); transform:scaleX(0); transform-origin:left; transition:transform 0.3s; }
  .rcard:hover { background:var(--surface-mid); }
  .rcard:hover::before { transform:scaleX(1); }
  .rcard-type { font-size:9px; letter-spacing:0.22em; text-transform:uppercase; color:var(--gold); font-weight:700; margin-bottom:14px; display:flex; align-items:center; gap:8px; }
  .rcard-type::before { content:''; display:block; width:14px; height:1px; background:var(--gold); }
  .rcard h4 { font-family:'Cormorant Garamond',serif; font-size:21px; font-weight:600; color:var(--off-white); margin-bottom:10px; line-height:1.3; }
  .rcard p { font-size:12px; color:var(--text-dim); line-height:1.8; margin-bottom:20px; }
  .rcard-tags { display:flex; flex-wrap:wrap; gap:6px; }
  .rcard-tag { padding:3px 10px; background:rgba(214,170,85,0.08); border:1px solid rgba(214,170,85,0.18); border-radius:100px; font-size:10px; color:rgba(214,170,85,0.6); letter-spacing:0.04em; }
  .rcard-meta { margin-top:20px; padding-top:16px; border-top:1px solid var(--border); display:flex; justify-content:space-between; align-items:center; }
  .rcard-steps { font-size:10px; color:var(--text-dim); letter-spacing:0.08em; }
  .rcard-arrow { font-size:16px; color:var(--gold); opacity:0; transition:opacity 0.2s; }
  .rcard:hover .rcard-arrow { opacity:1; }

  .cert-card { background:var(--ink); border:1px solid var(--border); padding:28px 32px; display:flex; gap:20px; align-items:flex-start; transition:all 0.2s; }
  .cert-card:hover { background:var(--surface-mid); border-color:var(--border-gold); }
  .cert-badge { min-width:48px; height:48px; background:rgba(214,170,85,0.1); border:1px solid var(--border-gold); display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0; }
  .cert-year { font-size:9px; letter-spacing:0.15em; color:var(--gold); font-weight:600; margin-bottom:4px; }
  .cert-name { font-family:'Cormorant Garamond',serif; font-size:18px; font-weight:600; color:var(--off-white); margin-bottom:4px; }
  .cert-issuer { font-size:11px; color:var(--text-dim); }

  .template-card { background:var(--ink); padding:32px; transition:all 0.25s; }
  .template-card:hover { background:var(--surface-mid); transform:translateY(-2px); }
  .template-icon { font-size:26px; margin-bottom:16px; }
  .template-name { font-family:'Cormorant Garamond',serif; font-size:20px; font-weight:600; color:var(--off-white); margin-bottom:8px; }
  .template-desc { font-size:12px; color:var(--text-dim); line-height:1.75; margin-bottom:16px; }
  .template-item { font-size:11px; color:rgba(248,245,239,0.45); display:flex; gap:8px; align-items:flex-start; margin-bottom:6px; }
  .template-item::before { content:'·'; color:var(--gold); flex-shrink:0; }

  /* ── CONNECT ── */
  .connect-section {
    background:var(--ink);
    background-image:radial-gradient(ellipse 50% 80% at 100% 50%, rgba(5,4,170,0.15) 0%, transparent 65%);
    padding:100px 64px;
    display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center;
  }
  .connect-left h2 { font-family:'Cormorant Garamond',serif; font-size:clamp(38px,4vw,58px); font-weight:400; line-height:1.1; color:var(--off-white); margin-bottom:22px; }
  .connect-left h2 em { font-style:italic; color:var(--gold); }
  .connect-left p { font-size:15px; color:var(--text-mid); line-height:1.8; max-width:400px; }
  .connect-cards { display:flex; flex-direction:column; gap:2px; }
  .connect-card { display:flex; align-items:center; gap:20px; padding:22px 28px; background:rgba(255,255,255,0.03); border:none; border-left:3px solid transparent; text-decoration:none; transition:all 0.25s; cursor:pointer; }
  .connect-card:hover { background:rgba(5,4,170,0.15); border-left-color:var(--cobalt); transform:translateX(4px); }
  .cc-icon { width:42px; height:42px; background:rgba(214,170,85,0.1); border:1px solid var(--border-gold); display:flex; align-items:center; justify-content:center; color:var(--gold); font-family:'Cormorant Garamond',serif; font-weight:700; font-size:15px; flex-shrink:0; }
  .cc-label { font-size:9px; letter-spacing:0.18em; text-transform:uppercase; color:var(--text-dim); margin-bottom:3px; font-weight:600; }
  .cc-value { font-size:14px; font-weight:500; color:var(--off-white); }

  /* ── FOOTER ── */
  footer { background:#0f0a01; padding:28px 64px; display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-gold); }
  .footer-brand { font-family:'Cormorant Garamond',serif; font-size:17px; color:rgba(248,245,239,0.3); }
  .footer-brand span { color:var(--gold); }
  footer p { font-size:11px; color:var(--text-dim); letter-spacing:0.05em; }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
  .fade-up{animation:fadeUp 0.65s ease forwards}
  .d1{animation-delay:.05s;opacity:0}.d2{animation-delay:.2s;opacity:0}
  .d3{animation-delay:.35s;opacity:0}.d4{animation-delay:.5s;opacity:0}
  .d5{animation-delay:.65s;opacity:0}

  /* ── RESPONSIVE ── */
  @media(max-width:1100px){
    .hero{grid-template-columns:1fr}
    .hero-left::after{display:none}
    .hero-right{padding:60px 40px}
    .skills-grid{grid-template-columns:repeat(2,1fr)}
    .skill-expand-inner{grid-template-columns:1fr;gap:28px}
    .knowledge-panel.active,.resources-panel.active,.resources-panel.active.two-col{grid-template-columns:1fr}
    .frameworks-grid{grid-template-columns:repeat(2,1fr)}
    .connect-section{grid-template-columns:1fr}
    .playbook-grid{grid-template-columns:1fr}
    .pb-overlay-body{grid-template-columns:1fr}
    .pb-list{display:none}
    .nav,.pb-overlay-nav{padding:14px 24px}
    .nav-links,.nav-cta{display:none}
    .section{padding:72px 32px}
    .connect-section,.frameworks-section,.resources-section{padding:72px 32px}
    .pb-content{padding:40px 28px}
    .pb-nav-center{display:none}
    footer{padding:24px 32px;flex-direction:column;gap:8px;text-align:center}
  }
`;

/* ── DATA ── */

const skills = [
  { name:"Strategic Partnership",  desc:"Aligning HR strategy with business objectives",    detail:"Operating as a true business partner - not a support function. Understanding P&L, market dynamics, and organizational strategy to drive HR initiatives that create measurable business value.", tags:["Business Acumen","Executive Influence","OKR Alignment","Stakeholder Management","Commercial Awareness","FP&A Partnership"] },
  { name:"Talent Management",      desc:"Full-cycle talent architecture and development",    detail:"Designing end-to-end talent ecosystems: attraction, development, retention, and succession. Building capability frameworks and career pathways that grow people and protect organizational knowledge.", tags:["Succession Planning","Career Architecture","9-Box Grid","High-Potential Programs","Retention Strategy","Talent Pipeline"] },
  { name:"Change Management",      desc:"Leading organizations through complex transitions", detail:"Architecting change at both individual and systemic levels - from restructures and integrations to culture transformation. Applying models like ADKAR and Kotter while holding space for human complexity.", tags:["ADKAR","Kotter 8-Step","Communications Planning","Resistance Management","Integration","Culture Transformation"] },
  { name:"Employee Relations",     desc:"Navigating complexity with fairness and precision",  detail:"Managing the full spectrum of ER - from performance management and grievances to disciplinary proceedings and redundancy. Balancing legal compliance with genuine human care at every stage.", tags:["Investigations","Mediation","PIP Design","Grievance Handling","Labour Compliance","Conflict Resolution"] },
  { name:"People Analytics",       desc:"Translating data into people strategy",             detail:"Building the case for people decisions with data. Designing dashboards in Darwinbox, Keka, and GreytHR - interpreting engagement results, predicting attrition risk, and presenting workforce insights to leadership.", tags:["Attrition Modeling","Engagement Analytics","Workforce Planning","Darwinbox / Keka","HRIS Optimization","Executive Reporting"] },
  { name:"OD & Culture",           desc:"Designing organizations that perform and endure",   detail:"Shaping organizational structure, culture, and team effectiveness. Running diagnostics, facilitating offsites, and designing interventions that align culture with strategy for a modern, inclusive workspace.", tags:["Org Design","Team Effectiveness","Culture Assessment","L&OD Framework","DEI Integration","People-First Culture"] },
  { name:"Coaching & Consulting",  desc:"Developing leaders at every level",                 detail:"Acting as an internal consultant and coach to leaders - building self-awareness, emotional intelligence, and management capability. Mentoring employees and fostering growth mindset across the organization.", tags:["Leadership Coaching","360 Feedback","Train the Trainer","EQ Development","Manager Enablement","Capability Building"] },
  { name:"Workforce Planning",     desc:"Shaping the organization of tomorrow",              detail:"Translating business strategy into headcount, capability, and structure decisions. Partnering with FP&A to manage allocated budgets for headcount and building models that anticipate skill gaps 12-24 months ahead.", tags:["Headcount Planning","Skills Gap Analysis","Budget Management","Scenario Modeling","Org Structure Design","FP&A Alignment"] }
];

const knowledgeTabs = ["Talent & Performance","Compensation & Benefits","Employment Law","Learning & Development","DEI Strategy"];

const knowledgeContent = {
  "Talent & Performance": [
    { label:"Performance Management", title:"Modern Performance Frameworks",  body:"Moving beyond annual reviews to continuous feedback ecosystems. Best practice involves quarterly check-ins, real-time feedback tools, and OKR-based goal setting.", bullets:["Separating development from compensation conversations","Calibration sessions to reduce bias","Using 9-box grids for talent reviews","Managing underperformance with empathy and clarity"] },
    { label:"Succession Planning",    title:"Building the Leadership Pipeline",body:"Succession is not just about replacing the CEO - it is about ensuring every critical role has a ready successor. Effective planning identifies bench strength and accelerates development.", bullets:["Critical role mapping and risk assessment","Individual development plans (IDPs) for HiPos","Rotational programs and stretch assignments","Board-level succession readiness reporting"] },
    { label:"Talent Acquisition",     title:"The HRBP's Role in Hiring",       body:"HRBPs bridge the gap between TA teams and the business - shaping job design, setting quality bars, and ensuring equitable hiring processes at every stage.", bullets:["Job architecture and leveling frameworks","Structured interview design","Offer strategy and market positioning","Onboarding effectiveness metrics"] },
    { label:"Engagement & Retention", title:"Diagnosing and Reducing Attrition",body:"Understanding why people leave - and why they stay - requires triangulating exit data, engagement survey results, and stay interview themes into clear action.", bullets:["Engagement survey design and action planning","Stay interview frameworks","Flight risk identification","Manager effectiveness as a retention lever"] }
  ],
  "Compensation & Benefits": [
    { label:"Total Rewards",  title:"Compensation Strategy and Benchmarking", body:"Competitive pay is table stakes - what differentiates employers is a transparent, equitable pay philosophy that employees understand and trust.", bullets:["Market benchmarking with Radford, Mercer, Korn Ferry","Pay band design and job evaluation","Variable pay and incentive plan design","Equity programs and long-term incentives"] },
    { label:"Pay Equity",     title:"Closing the Pay Gap",                    body:"Pay equity analysis is no longer optional - it is a legal, ethical, and reputational imperative. HRBPs must champion proactive pay equity reviews with data to back every decision.", bullets:["Regression analysis basics for HRBPs","Remediation planning and budget impact","Pay transparency legislation compliance","Gender and ethnicity pay gap reporting"] },
    { label:"Benefits Design",title:"Benefits as a Retention Tool",           body:"A well-designed benefits package communicates organizational values. Modern packages go beyond health insurance to address wellbeing, flexibility, and financial security.", bullets:["Flexible benefits and total compensation statements","Mental health and EAP investment","Family-forming benefits and parental leave","Financial wellbeing programs"] },
    { label:"Salary Reviews", title:"Running Effective Compensation Cycles",   body:"Annual salary review cycles require HRBPs to advise managers on merit budgets, equity adjustments, and retention awards - all with data to back decisions.", bullets:["Merit matrix design","Promotion vs. market adjustment distinction","Managing expectations with limited budgets","Communicating decisions to employees"] }
  ],
  "Employment Law": [
    { label:"Core Knowledge",   title:"Key Employment Law Areas for HRBPs",  body:"HRBPs do not need a law degree - but they must know enough to recognize risk and engage legal counsel at exactly the right moment.", bullets:["Protected characteristics and discrimination claims","Wrongful termination and at-will employment","Wage and hour compliance","FMLA, ADA, and leave management"] },
    { label:"Investigations",   title:"Conducting Workplace Investigations",  body:"A fair, thorough, and timely investigation protects both the organization and the complainant. Process integrity matters as much as the outcome reached.", bullets:["Investigation planning and scope definition","Interview techniques for sensitive matters","Documentation standards and evidence handling","Findings reporting and remediation"] },
    { label:"Separations",      title:"Managing Terminations Lawfully",       body:"Every termination carries legal risk. HRBPs ensure the documentation trail is solid, the process is consistent, and the exit experience preserves dignity for all parties.", bullets:["At-will vs. for-cause terminations","Severance agreement basics","WARN Act applicability for RIFs","Final pay and offboarding compliance"] },
    { label:"Labour Relations", title:"Union Awareness and Labour Law Basics",body:"Even in non-union environments, HRBPs must understand labour rights and avoid practices that could trigger organizing activity or regulatory charges.", bullets:["Protected concerted activity basics","Recognizing early organizing signals","Compliant workplace communication policies","Collective bargaining fundamentals"] }
  ],
  "Learning & Development": [
    { label:"L&D Strategy",       title:"Building a Learning Culture",              body:"The most effective L&D is embedded in work, not separated from it. HRBPs design learning strategies tied to capability gaps and business outcomes - not just training calendars.", bullets:["Learning needs analysis (LNA) process","70-20-10 development model application","Building vs. buying learning content","Manager-as-coach enablement"] },
    { label:"Leadership Programs",title:"Developing Leaders at Scale",             body:"Leadership development is among the highest-ROI investments in any people strategy. HRBPs co-design programs that build capability across levels.", bullets:["New manager assimilation programs","High-potential accelerator design","360 feedback integration","Action learning and cohort programs"] },
    { label:"Skills Strategy",    title:"Future-Proofing Workforce Capability",    body:"Skills are the new currency. HRBPs partner with the business to understand where capability gaps exist today and build pathways to close them before they become critical.", bullets:["Skills taxonomy and ontology design","Reskilling vs. upskilling vs. hiring decisions","AI literacy and digital capability programs","Internal mobility as a capability accelerator"] },
    { label:"Measurement",        title:"Proving L&D Impact",                      body:"The Kirkpatrick model remains the foundation - but modern L&D measurement goes further, linking programs to business metrics and real productivity outcomes.", bullets:["Kirkpatrick 4-level evaluation","Return on learning investment (ROLI)","Pre/post skills assessments","Connecting L&D to retention and engagement"] }
  ],
  "DEI Strategy": [
    { label:"DEI Foundations",        title:"Building an Equitable Organization",  body:"DEI work is systems work. It requires examining every people process - hiring, promotion, compensation, development - through a consistent equity lens.", bullets:["Representation data and goal-setting","Equitable performance management practices","Inclusive job design and JDs","Promotion equity analysis"] },
    { label:"Belonging",              title:"Psychological Safety and Inclusion",  body:"Diversity without inclusion is just optics. HRBPs focus on the conditions that allow all employees to contribute fully, speak freely, and be genuinely seen.", bullets:["Psychological safety assessment","Inclusive leadership behaviors","ERG strategy and governance","Microaggression response frameworks"] },
    { label:"Bias in Process",        title:"Debiasing People Processes",          body:"Bias is structural, not just individual. HRBPs redesign hiring, calibration, and review processes to reduce bias at every single decision point.", bullets:["Structured interview design","Blind resume screening","Calibration facilitation to surface bias","Pay equity and promotion parity reviews"] },
    { label:"Strategy & Measurement", title:"Measuring What Matters in DEI",       body:"Accountability requires data. HRBPs build DEI scorecards that go beyond headcount to measure inclusion, equity in outcomes, and leadership commitment.", bullets:["DEI scorecard design","Intersectional data analysis","Board and executive reporting","Connecting DEI to business performance"] }
  ]
};

const playbooks = [
  {
    num:"01", title:"Underperforming Senior Leader Playbook",
    tag:"Employee Relations - Performance", desc:"A structured approach to managing senior underperformance - from diagnosis through documentation to resolution.",
    tags:["PIP","ER","Legal Risk"], steps:5,
    situation:"A VP of Sales is consistently missing targets and receiving poor 360 feedback. The CEO wants action fast, but the VP has been with the organization 8 years and maintains strong customer relationships. No formal documentation exists.",
    stepList:[
      {title:"Diagnose Before Acting",   body:"Gather data: review 360 feedback themes, revenue trends, exit interviews from their team. Meet 1:1 to understand their perspective - performance issues often have systemic contributors that leadership has not addressed."},
      {title:"Partner with Legal Early", body:"Before any formal action, brief Employment Counsel on the situation and documentation gap. Align on process requirements, timelines, and potential risk exposure so there are no surprises later."},
      {title:"Design a Transparent PIP", body:"Co-create a 60-90 day Performance Improvement Plan with specific, measurable expectations. Ensure the VP fully understands the stakes and has genuine support - coaching, resources, and regular check-ins."},
      {title:"Coach the Manager",        body:"Prepare the CEO to hold consistent, documented check-ins. Brief them on what to say and what to avoid - hearsay and inconsistency create legal exposure and undermine the entire process."},
      {title:"Prepare for Both Outcomes",body:"Document every meeting and checkpoint in real time. Simultaneously plan for a successful outcome and a separation scenario - severance terms, transition planning, and client communication strategy."}
    ],
    outcome:"Process integrity and documentation protect the organization. The VP either improves with real support or separates with dignity and legal protection on both sides."
  },
  {
    num:"02", title:"Organizational Restructure Playbook",
    tag:"Change Management - OD", desc:"End-to-end guidance for executing a restructure with legal compliance, communication architecture, and survivor stabilization.",
    tags:["Change","OD","Comms"], steps:5,
    situation:"The business is restructuring two divisions into one, eliminating approximately 15% of roles. Leadership wants to execute in 6 weeks. Morale is already fragile after a difficult year.",
    stepList:[
      {title:"Map the Full Impact",               body:"Before any communication, map every affected role, individual, and team. Identify critical talent at risk, key dependencies, and legal trigger points - WARN Act thresholds, notice periods, collective agreement obligations."},
      {title:"Design the New Structure Deliberately",body:"Challenge leadership to define the future-state org before deciding who is at risk. Structure should follow strategy, not personalities or convenience."},
      {title:"Build a Communication Architecture", body:"Design the full comms cascade: what is said, by whom, in what sequence, and in what medium. Simultaneous notification wherever possible prevents rumor mills from filling the vacuum."},
      {title:"Support Affected Employees Genuinely",body:"Treat exits with real dignity - fair severance, reference letter support, outplacement services, and career transition resources. How people leave defines your employer brand."},
      {title:"Stabilize the Survivors",            body:"Restructure survivor syndrome is real and often overlooked. Hold town halls, create space for grief and questions, assign managers talking points, and over-communicate the vision for what comes next."}
    ],
    outcome:"A well-executed restructure preserves trust with those who remain, honors those who leave, and positions the new organization to actually perform."
  },
  {
    num:"03", title:"Toxic High Performer Playbook",
    tag:"Culture - Employee Relations", desc:"How to handle bullying behavior from a top contributor - quantifying true cost, escalation paths, and holding the line professionally.",
    tags:["Culture","ER","Risk"], steps:5,
    situation:"Your top revenue generator is repeatedly accused of bullying behavior toward their team. Three strong performers have left, citing this person. Leadership is pressuring HR to make the complaints disappear.",
    stepList:[
      {title:"Refuse to Suppress Complaints",body:"Document formally that complaints were received and will be investigated, regardless of leadership pressure. Failure to act creates company and personal liability for HR. Your professional integrity is non-negotiable."},
      {title:"Quantify the True Cost",       body:"Build the business case: calculate the full cost of three departures - recruitment fees, ramp time, lost productivity, institutional knowledge loss. Compare to the high performer's revenue contribution. The math often surprises leaders."},
      {title:"Escalate with Data",           body:"Present your findings to the CHRO and General Counsel if business leaders block action. Frame this as risk management - legal exposure, attrition cost, reputational risk, and future talent loss."},
      {title:"Structure Accountability",     body:"If the high performer stays, create documented behavioral expectations with real consequences attached. Their targets mean nothing if they destroy the team achieving them alongside them."},
      {title:"Hold the Line",                body:"Your role is to represent the organization's long-term health, not short-term comfort. Document your recommendations formally. Know when to escalate to the Board."}
    ],
    outcome:"Culture is determined by who you retain and what you tolerate. Protecting a toxic high performer costs far more than it saves - financially, culturally, and reputationally."
  },
  {
    num:"04", title:"Post-Merger Integration Playbook",
    tag:"Change Management - OD", desc:"A 90-day HR integration framework covering cultural diagnostics, people risk mapping, process harmonization, and communication.",
    tags:["M&A","OD","Change"], steps:5,
    situation:"Your organization has acquired a 400-person firm with a distinct culture, a different HRIS, separate pay scales, and competing values. You have 90 days to present a credible integration plan.",
    stepList:[
      {title:"Run a Cultural Diagnostic",  body:"Survey and interview employees on both sides before making any structural decisions. Identify where cultures genuinely complement and where they conflict. The best integrations consciously take the best of both."},
      {title:"Map the People Risks",       body:"Identify flight-risk talent on the acquired side - often the very people the acquisition was made for. Retention bonuses and honest individual conversations go much further than generic job security platitudes."},
      {title:"Harmonize People Processes", body:"Align performance cycles, pay philosophies, benefits, and policies on a clear timeline. Visible differences in how people are treated create two-tier organizations that breed resentment."},
      {title:"Align Leadership Quickly",   body:"Conflicting signals from two sets of leaders create paralysis throughout the organization. Facilitate joint leadership workshops to align on values, operating model, and decision rights."},
      {title:"Communicate Relentlessly",   body:"In the absence of information, people always assume the worst. Establish a 90-day communication cadence with clear milestones, genuinely honest updates, and a named channel for employee questions."}
    ],
    outcome:"Successful M&A integration is 80% people and culture. A rigorous, empathetic HR integration plan is the single biggest determinant of whether the deal value is actually realized."
  }
];

const frameworks = [
  { icon:"◉", name:"Ulrich's HR Model",        desc:"The foundational framework for modern HR - four distinct roles that drive organizational effectiveness.", items:["Strategic Partner - aligning HR with business strategy","Change Agent - leading transformation","Administrative Expert - process efficiency","Employee Champion - advocacy and wellbeing"] },
  { icon:"⬡", name:"9-Box Talent Grid",        desc:"A matrix for evaluating current performance and future potential - cornerstone of talent calibration and succession.", items:["X-axis: Current Performance (Low to High)","Y-axis: Future Potential (Low to High)","Stars: High performance + High potential","Risking talent vs. Solid performers distinction"] },
  { icon:"△", name:"ADKAR Change Model",       desc:"Prosci's individual change model - each person must progress through all five stages for adoption to succeed.", items:["Awareness - of the need for change","Desire - to support and participate","Knowledge - of how to change","Ability and Reinforcement - to sustain"] },
  { icon:"□", name:"Kirkpatrick Model",        desc:"The four-level evaluation framework for measuring learning effectiveness and organizational impact.", items:["Level 1: Reaction - learner satisfaction","Level 2: Learning - knowledge acquisition","Level 3: Behavior - on-the-job application","Level 4: Results - organizational impact"] },
  { icon:"◈", name:"Lencioni's 5 Dysfunctions",desc:"The team effectiveness model identifying root causes of poor team performance - and targeted interventions.", items:["Absence of Trust - vulnerability-based","Fear of Conflict - productive debate","Lack of Commitment - clarity and buy-in","Inattention to Results - team outcomes first"] },
  { icon:"○", name:"HR Value Chain",           desc:"The causal model connecting HR practices through employee behaviors to business outcomes - essential for proving HR impact.", items:["HR Practices to Employee Competencies","Competencies to Employee Behaviors","Behaviors to Organizational Outcomes","Outcomes to Business Performance"] }
];

const resourceTabs = ["Playbooks","HR Templates","Quick Reference","Certifications"];

const playbookCards = [
  { type:"Performance Playbook", title:"Underperforming Senior Leader Playbook", desc:"A structured approach to managing senior underperformance - from diagnosis through documentation to resolution.", tags:["PIP","ER","Legal Risk"], steps:5, idx:0 },
  { type:"Change Playbook",      title:"Organizational Restructure Playbook",    desc:"End-to-end guidance for executing a restructure with legal compliance, communication architecture, and survivor stabilization.", tags:["Change","OD","Comms"], steps:5, idx:1 },
  { type:"Culture Playbook",     title:"Toxic High Performer Playbook",          desc:"How to handle bullying behavior from a top contributor - quantifying true cost, escalation paths, and holding the line.", tags:["Culture","ER","Risk"], steps:5, idx:2 },
  { type:"Integration Playbook", title:"Post-Merger Integration Playbook",       desc:"A 90-day HR integration framework covering cultural diagnostics, people risk mapping, process harmonization, and communication.", tags:["M&A","OD","Change"], steps:5, idx:3 },
  { type:"Onboarding Playbook",  title:"New Hire 30-60-90 Day Playbook",         desc:"A structured engagement framework for new hires - milestone check-ins, productivity acceleration, and early relationship building.", tags:["Onboarding","Engagement","Retention"], steps:5, idx:0 },
  { type:"Engagement Playbook",  title:"Employee Engagement Diagnostic Playbook",desc:"How to run a meaningful engagement cycle - survey design, results analysis, action planning, and closing the feedback loop.", tags:["Engagement","Analytics","Culture"], steps:5, idx:1 }
];

const templateCards = [
  { icon:"📋", name:"PIP Template",              desc:"A structured Performance Improvement Plan template with goal-setting, milestone tracking, and manager guidance.", items:["Performance baseline section","SMART goal framework","Weekly check-in log","Formal outcome documentation"] },
  { icon:"🔍", name:"Investigation Framework",   desc:"A step-by-step workplace investigation template - from complaint intake through findings and recommended action.", items:["Complaint intake form","Interview question bank","Evidence log template","Findings report structure"] },
  { icon:"🗂️", name:"Job Architecture Template", desc:"A leveling framework template to define roles, responsibilities, and career progression across functions.", items:["Level definitions (IC and Manager tracks)","Competency descriptors","Compensation range mapping","Career pathway matrix"] },
  { icon:"📊", name:"People Analytics Dashboard",desc:"Key HR metrics and reporting structure designed for HRBP reporting to senior leadership.", items:["Headcount and attrition dashboard","Engagement score tracking","Time-to-hire and quality metrics","Diversity representation reporting"] },
  { icon:"🤝", name:"Onboarding Checklist",      desc:"A comprehensive new hire onboarding checklist covering pre-boarding through 90 days.", items:["Pre-boarding document checklist","Day 1 experience guide","30-60-90 day milestone tracker","Manager enablement guide"] },
  { icon:"🎯", name:"9-Box Calibration Guide",   desc:"A facilitation guide for running talent calibration sessions - definitions, steps, and action-planning outputs.", items:["Performance and potential definitions","Calibration session agenda","Conversation guide for managers","Talent action plan template"] }
];

const certCards = [
  { year:"2024", name:"Certified Scrum Master (CSM)",    issuer:"Scrum Alliance", icon:"🏅" },
  { year:"2023", name:"Agile Project Management",        issuer:"Google", icon:"🎓" },
  { year:"2021", name:"Train the Trainer (TTT)",         issuer:"Firstsource Solutions - 20 Hours", icon:"🏅" },
  { year:"2019", name:"Workforce Analytics for HR",      issuer:"Udemy", icon:"📊" },
  { year:"2019", name:"Design Thinking: Lead Change",    issuer:"LinkedIn Learning", icon:"💡" },
  { year:"2019", name:"Cross-Functional Decision Making",issuer:"Enparadigm, Bangalore", icon:"🎓" },
  { year:"2020", name:"MBA - Human Resource Management", issuer:"Christ (Deemed University), Bengaluru", icon:"🎓" },
  { year:"2017", name:"Bachelor of Computer Application",issuer:"Christ Nagar College, University of Kerala", icon:"📘" }
];

const quickRefCards = [
  { type:"Framework", title:"ADKAR at a Glance",          desc:"The 5-stage individual change model - use this to diagnose exactly where change resistance is coming from and intervene with precision.", tags:["Change","Prosci"] },
  { type:"Framework", title:"Ulrich Model Quick Reference",desc:"Four HR roles mapped to organizational needs. Use this to position HR conversations with business leaders strategically and credibly.", tags:["Strategy","HR Model"] },
  { type:"Concept",   title:"9-Box Facilitation Guide",   desc:"How to run a talent calibration session using the 9-box - definitions, facilitation tips, and common calibration traps to avoid.", tags:["Talent","Calibration"] },
  { type:"Metric",    title:"Key HRBP Metrics Cheatsheet", desc:"The 12 metrics every HRBP should track: attrition rate, time-to-fill, engagement score, span of control, and more with context.", tags:["Analytics","Reporting"] }
];

/* ── COMPONENT ── */
export default function HRBPLanding() {
  const [activeSkill,     setActiveSkill]    = useState(null);
  const [activeKTab,      setActiveKTab]     = useState("Talent & Performance");
  const [activeRTab,      setActiveRTab]     = useState("Playbooks");
  const [overlayOpen,     setOverlayOpen]    = useState(false);
  const [overlayPlaybook, setOverlayPlaybook]= useState(0);
  const [counts,          setCounts]         = useState({ years:0, employees:0, projects:0 });
  const overlayRef = useRef(null);
  const kTabsRef   = useRef(null);

  useEffect(() => {
    const targets = { years:6, employees:1400, projects:7 };
    const steps = 60; let step = 0;
    const timer = setInterval(() => {
      step++;
      const e = 1 - Math.pow(1 - step/steps, 3);
      setCounts({ years:Math.round(targets.years*e), employees:Math.round(targets.employees*e), projects:Math.round(targets.projects*e) });
      if (step >= steps) clearInterval(timer);
    }, 2000/steps);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = overlayOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [overlayOpen]);

  const openPlaybook = (idx) => {
    setOverlayPlaybook(idx);
    setOverlayOpen(true);
    setTimeout(() => overlayRef.current?.querySelector('.pb-content')?.scrollTo(0,0), 50);
  };
  const closeOverlay = () => setOverlayOpen(false);
  const scrollTo     = (id) => document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  const scrollKTabs  = (dir) => kTabsRef.current?.scrollBy({ left: dir * 200, behavior:'smooth' });

  const pb = playbooks[overlayPlaybook];

  /* Connect cards — location uses SVG component */
  const connectCards = [
    { iconEl: <span style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:15}}>in</span>,  label:"LinkedIn",              href:"https://www.linkedin.com/in/gayathri-venu-nair/", value:"linkedin.com/in/gayathri-venu-nair" },
    { iconEl: <span style={{fontSize:14}}>▶</span>,                                                           label:"Open to Opportunities", href:"#", value:"Senior HRBP - People Director" },
    { iconEl: <span style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:18}}>◎</span>,    label:"Specializations",        href:"#", value:"Fintech - IT - Marketing" },
    { iconEl: <LocationIcon />,                                                                               label:"Location",               href:"#", value:"Sharjah, UAE" }
  ];

  return (
    <>
      <style>{style}</style>

      {/* ── PLAYBOOK OVERLAY ── */}
      <div className={`playbook-overlay ${overlayOpen ? 'open' : ''}`} ref={overlayRef}>

        {/* Overlay nav — same structure as main nav */}
        <div className="pb-overlay-nav">
          <button className="pb-nav-logo serif" onClick={closeOverlay}>
            Gayathri<span>.</span>
          </button>
          <div className="pb-nav-center">HRBP Playbooks Library</div>
          <button className="pb-back" onClick={closeOverlay}>
            <span className="pb-back-arrow">←</span> Back to Site
          </button>
        </div>

        <div className="pb-overlay-body">
          <div className="pb-list">
            <div className="pb-list-header">All Playbooks</div>
            {playbooks.map((p, i) => (
              <div key={i} className={`pb-list-item ${overlayPlaybook===i?'active':''}`}
                onClick={() => { setOverlayPlaybook(i); overlayRef.current?.querySelector('.pb-content')?.scrollTo({top:0,behavior:'smooth'}); }}>
                <div className="pb-item-num">PLAYBOOK {p.num}</div>
                <div className="pb-item-title">{p.title}</div>
              </div>
            ))}
          </div>

          <div className="pb-content">
            <div className="pb-content-tag">{pb.tag}</div>
            <h2 className="serif">{pb.title}</h2>
            <div className="pb-content-sub">{pb.tags.join(' · ')} · {pb.steps} steps</div>
            <div className="pb-situation">
              <div className="pb-situation-label">The Situation</div>
              <p>{pb.situation}</p>
            </div>
            <div className="pb-steps-label">HRBP Approach</div>
            <div className="pb-steps">
              {pb.stepList.map((step, i) => (
                <div className="pb-step" key={i}>
                  <div className="pb-step-num-col"><div className="pb-step-num-badge">{i+1}</div></div>
                  <div className="pb-step-body"><h5>{step.title}</h5><p>{step.body}</p></div>
                </div>
              ))}
            </div>
            <div className="pb-outcome">
              <div className="pb-outcome-label">Expected Outcome</div>
              <div className="pb-outcome-text">{pb.outcome}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <nav className="nav">
        <div className="nav-logo serif">Gayathri<span>.</span></div>
        <ul className="nav-links">
          {[["Skills","skills"],["Knowledge","knowledge"],["Playbooks","playbooks"],["Frameworks","frameworks"],["Resources","resources"],["Connect","connect"]].map(([l,id]) => (
            <li key={id}><a href={`#${id}`}>{l}</a></li>
          ))}
        </ul>
        <button className="nav-cta" onClick={() => scrollTo('connect')}>Let's Connect</button>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-left">
          <div className="hero-eyebrow fade-up d1">HR Business Partner</div>
          <div className="hero-name serif fade-up d2">Gayathri<br /><strong>Kaur Nair</strong></div>
          <div className="hero-title fade-up d2">HRBP - People Strategy - Organizational Growth</div>
          <p className="hero-tagline serif fade-up d3">
            "People strategy is business strategy. I build the bridge between human potential and organizational performance."
          </p>
          <div className="hero-stats fade-up d4">
            <div><div className="stat-num serif">{counts.years}+</div><div className="stat-label">Years in HR</div></div>
            <div><div className="stat-num serif">{counts.employees >= 1000 ? `${(counts.employees/1000).toFixed(1)}k` : counts.employees}</div><div className="stat-label">Employees Supported</div></div>
            <div><div className="stat-num serif">{counts.projects}+</div><div className="stat-label">HR Projects Delivered</div></div>
          </div>
        </div>

        <div className="hero-right">
          <p className="section-label fade-up d1">About</p>
          <h2 className="serif fade-up d2">Turning people complexity<br />into organizational strength</h2>
          <p className="hero-intro fade-up d3">
            6+ years of building people strategies that move businesses forward. From Fintech to IT to Marketing, I specialize in talent management, employee engagement, and partnering with leadership to build people-first, high-performing organizations.
          </p>
          <div className="pill-group fade-up d4">
            {["Fintech","IT","Marketing","Scale-Up","Dubai / UAE"].map(p => <div className="pill" key={p}>{p}</div>)}
          </div>
          <div className="cta-row fade-up d5">
            <a href="#playbooks" className="btn-primary">Explore HRBP Playbooks</a>
            <button className="btn-outline" onClick={() => scrollTo('connect')}>Let's Connect</button>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section skills-section" id="skills">
        <div className="skills-meta">
          <div>
            <div className="section-label">Core Competencies</div>
            <div className="section-heading serif">My Eight capabilities that define<br /><em>impactful HR partnership</em></div>
          </div>
          <div className="skills-hint">Click any card to expand</div>
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => {
            const Icon = skillIcons[i];
            return (
              <div key={i} className={`skill-card ${activeSkill===i?'active':''}`} onClick={() => setActiveSkill(activeSkill===i?null:i)}>
                <div className="skill-svg-wrap"><Icon /></div>
                <div className="skill-name serif">{skill.name}</div>
                <div className="skill-desc">{skill.desc}</div>
              </div>
            );
          })}
          {activeSkill !== null && (
            <div className="skill-expand open">
              <div className="skill-expand-inner">
                <div className="skill-expand-left">
                  <div className="skill-expand-icon">{(() => { const I = skillIcons[activeSkill]; return <I />; })()}</div>
                  <h3 className="serif">{skills[activeSkill].name}</h3>
                  <p>{skills[activeSkill].detail}</p>
                </div>
                <div className="skill-expand-right">
                  <div className="skill-tags-label">Areas of Practice</div>
                  <div className="skill-tags">{skills[activeSkill].tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── KNOWLEDGE PLAYBOOKS ── */}
      <section className="section knowledge-section" id="knowledge">
        <div className="section-label">Knowledge Playbooks</div>
        <div className="section-heading serif">Sharing what <em>great HR</em> looks like<br />across every domain</div>
        <div className="knowledge-tabs-outer">
          <div className="knowledge-tabs" ref={kTabsRef}>
            {knowledgeTabs.map(tab => (
              <button key={tab} className={`ktab ${activeKTab===tab?'active':''}`} onClick={() => setActiveKTab(tab)}>{tab}</button>
            ))}
          </div>
          <div className="ktab-nav">
            <div className="ktab-arrow" onClick={() => scrollKTabs(-1)}>‹</div>
            <div className="ktab-arrow" onClick={() => scrollKTabs(1)}>›</div>
          </div>
        </div>
        <div className="knowledge-content">
          <div className="knowledge-panel active">
            {(knowledgeContent[activeKTab]||[]).map((item,i) => (
              <div className="kcard" key={i}>
                <div className="kcard-label">{item.label}</div>
                <h4 className="serif">{item.title}</h4>
                <p>{item.body}</p>
                <ul>{item.bullets.map((b,j) => <li key={j}>{b}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLAYBOOKS ── */}
      <section className="section playbooks-section" id="playbooks">
        <div className="section-label">Playbooks</div>
        <div className="section-heading serif">Step-by-step guides for<br /><em>complex HRBP situations</em></div>
        <p className="scenario-intro">Real playbooks built from first-hand experience. Click any card to open the full playbook.</p>
        <div className="playbook-grid">
          {playbooks.map((p, i) => (
            <div className="playbook-card" key={i} onClick={() => openPlaybook(i)}>
              <div className="playbook-num">PLAYBOOK {p.num}</div>
              <div className="playbook-title serif">{p.title}</div>
              <div className="playbook-tag-row">{p.tags.map(t => <span className="playbook-tag" key={t}>{t}</span>)}</div>
              <div className="playbook-desc">{p.desc}</div>
              <div className="playbook-cta">Open Playbook <span className="playbook-cta-arrow">→</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FRAMEWORKS ── */}
      <section className="frameworks-section" id="frameworks">
        <div className="section-label">Frameworks and Models</div>
        <div className="section-heading serif">The intellectual toolkit<br />of a <em>strategic HRBP</em></div>
        <div className="frameworks-grid">
          {frameworks.map((fw,i) => (
            <div className="framework-card" key={i}>
              <div className="fw-icon serif">{fw.icon}</div>
              <div className="fw-name serif">{fw.name}</div>
              <div className="fw-desc">{fw.desc}</div>
              <div>{fw.items.map((item,j) => <div className="fw-item" key={j}><div className="fw-dot"/>{item}</div>)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RESOURCES ── */}
      <section className="resources-section" id="resources">
        <div className="resources-header">
          <div>
            <div className="section-label">Resources Library</div>
            <div className="section-heading serif">A living library of<br /><em>HR tools and references</em></div>
          </div>
          <p>Practical resources built from real HRBP experience - playbooks, templates, certifications, and quick references.</p>
        </div>
        <div className="resources-tabs-outer">
          <div className="resources-tabs">
            {resourceTabs.map(tab => <button key={tab} className={`rtab ${activeRTab===tab?'active':''}`} onClick={() => setActiveRTab(tab)}>{tab}</button>)}
          </div>
        </div>

        {activeRTab==="Playbooks" && (
          <div className="resources-panel active">
            {playbookCards.map((card,i) => (
              <div className="rcard" key={i} onClick={() => openPlaybook(card.idx)}>
                <div className="rcard-type">{card.type}</div>
                <h4 className="serif">{card.title}</h4>
                <p>{card.desc}</p>
                <div className="rcard-tags">{card.tags.map(t => <span className="rcard-tag" key={t}>{t}</span>)}</div>
                <div className="rcard-meta">
                  <span className="rcard-steps">{card.steps} steps</span>
                  <span className="rcard-arrow">→</span>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeRTab==="HR Templates" && (
          <div className="resources-panel active">
            {templateCards.map((card,i) => (
              <div className="template-card" key={i}>
                <div className="template-icon">{card.icon}</div>
                <div className="template-name serif">{card.name}</div>
                <div className="template-desc">{card.desc}</div>
                <div>{card.items.map((item,j) => <div className="template-item" key={j}>{item}</div>)}</div>
              </div>
            ))}
          </div>
        )}
        {activeRTab==="Quick Reference" && (
          <div className="resources-panel active two-col">
            {quickRefCards.map((card,i) => (
              <div className="rcard" key={i}>
                <div className="rcard-type">{card.type}</div>
                <h4 className="serif">{card.title}</h4>
                <p>{card.desc}</p>
                <div className="rcard-tags">{card.tags.map(t => <span className="rcard-tag" key={t}>{t}</span>)}</div>
                <div className="rcard-meta"><span className="rcard-steps">Reference card</span><span className="rcard-arrow">→</span></div>
              </div>
            ))}
          </div>
        )}
        {activeRTab==="Certifications" && (
          <div className="resources-panel active two-col">
            {certCards.map((cert,i) => (
              <div className="cert-card" key={i}>
                <div className="cert-badge">{cert.icon}</div>
                <div>
                  <div className="cert-year">{cert.year}</div>
                  <div className="cert-name serif">{cert.name}</div>
                  <div className="cert-issuer">{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── CONNECT ── */}
      <section className="connect-section" id="connect">
        <div className="connect-left">
          <div className="section-label">Let's Connect</div>
          <h2 className="serif">Building networks<br />that <em>elevate</em><br />the profession</h2>
          <p>Whether you are an HR practitioner looking to exchange ideas, a leader seeking an experienced HRBP partner, or a team building out your people function - I would love to connect.</p>
        </div>
        <div className="connect-cards">
          {connectCards.map((card,i) => (
            <a href={card.href} className="connect-card" key={i} target={card.href.startsWith('http')?'_blank':undefined} rel="noreferrer">
              <div className="cc-icon">{card.iconEl}</div>
              <div>
                <div className="cc-label">{card.label}</div>
                <div className="cc-value">{card.value}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-brand serif">Gayathri Kaur Nair <span>·</span> HRBP</div>
        <p>Strategic HR Partnership - People-Centered - Business-Driven</p>
        <p>© 2026 · Sharjah, UAE · Built to share HRBP Playbooks</p>
      </footer>
    </>
  );
}
