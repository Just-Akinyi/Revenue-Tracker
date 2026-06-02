// import React, { useState } from 'react';
// import { 
//   CreditCard, ArrowRight, Sparkles, ShieldCheck, Zap, 
//   Globe, BarChart3, Languages, ChevronDown, Check
// } from 'lucide-react';

// export default function LandingPage({ onLoginSuccess }) {
//   const [billingCycle, setBillingCycle] = useState('monthly');
//   const [openFaq, setOpenFaq] = useState(null);

//   const coreFeatures = [
//     {
//       icon: <Zap className="w-5 h-5 text-indigo-400" />,
//       title: "Autonomous AI Extractions",
//       desc: "Instantly parse complex PDFs, invoices, and accounting telemetry with 99.4% cross-border regional accuracy."
//     },
//     {
//       icon: <Globe className="w-5 h-5 text-indigo-400" />,
//       title: "Dual-Rail Financial Rails",
//       desc: "Engineered to smoothly support Kenya's M-Pesa B2B channels alongside traditional SWIFT, FedWire, and SEPA corridors."
//     },
//     {
//       icon: <BarChart3 className="w-5 h-5 text-indigo-400" />,
//       title: "Predictive Cash Forecasting",
//       desc: "Machine learning models instantly extrapolate multi-currency income trends to provide clean dynamic runway analysis."
//     },
//     {
//       icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
//       title: "Tax & Compliance Integrity",
//       desc: "Automated regional configurations supporting KRA iTax frameworks alongside global GDPR and SOC2 standards."
//     }
//   ];

//   const pricingTiers = [
//     {
//       name: "Starter Trial",
//       tagline: "For early stage projects",
//       monthlyPrice: 19,
//       annualPrice: 15,
//       features: ["Up to $10k/mo tracked volume", "50 AI Extractions / mo", "Basic financial charts", "Standard CSV data export", "Localized tax formats"],
//       cta: "Launch Starter Sandbox",
//       popular: false
//     },
//     {
//       name: "Scale Core",
//       tagline: "Optimized for growing SaaS",
//       monthlyPrice: 49,
//       annualPrice: 39,
//       features: ["Unlimited transaction volume", "500 AI Extractions / mo", "Predictive forecasting models", "Audited PDF data pipelines", "Priority API access keys", "Multi-currency conversion layer"],
//       cta: "Initialize Scale Suite",
//       popular: true
//     },
//     {
//       name: "Enterprise",
//       tagline: "For high-volume global corps",
//       monthlyPrice: 149,
//       annualPrice: 119,
//       features: ["Multi-entity consolidation", "Unlimited AI extraction queues", "Custom compliance reports", "Dedicated SLA manager", "Custom webhook triggers", "Custom ERP ledger syncs"],
//       cta: "Enter Enterprise Space",
//       popular: false
//     }
//   ];

//   const faqs = [
//     {
//       q: "How does the platform support both Kenyan rails and global networks?",
//       a: "RevTrack.io was engineered from day one with dual-rail infrastructure. We pull transactional telemetry directly from East African mobile money standard business APIs (M-Pesa C2B/B2C ledger exports) and seamlessly balance them within the same system alongside international processors like Stripe, Paddle, and international bank clearing houses."
//     },
//     {
//       q: "Can I switch dashboard displays between KES and international currencies?",
//       a: "Yes. Once you enter your dashboard app space, a global conversion engine is exposed at the top nav layer. You can dynamically switch your entire balance sheet visualization across USD, EUR, GBP, or KES with live recalculated foreign exchange values instantly."
//     },
//     {
//       q: "Is our financial ledger parsing compliant with KRA and international frameworks?",
//       a: "Completely. RevTrack.io enforces rigorous data privacy controls aligned with the Kenya Data Protection Act (KDPA) and GDPR frameworks. Document exports compile seamlessly into structures optimized for both local iTax processing and international corporate balance sheet audits."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 antialiased font-sans overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      
//       {/* COMPLIANCE TOP HUD BANNER */}
//       <div className="bg-slate-900 border-b border-slate-800 text-slate-400 text-[11px] font-medium py-2.5 px-6 flex flex-col sm:flex-row gap-2 justify-between items-center text-center sm:text-left">
//         <div className="flex items-center gap-2">
//           <Languages className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
//           <span>Multi-Currency Infrastructure optimized for East Africa and international trade networks.</span>
//         </div>
//         <div className="hidden md:flex items-center gap-4 text-slate-500">
//           <span>GDPR Compliant</span>
//           <span>•</span>
//           <span>KDPA Registered</span>
//         </div>
//       </div>

//       {/* TOP NAVIGATION LAYER */}
//       <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 px-6 py-4">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="flex items-center gap-3 cursor-pointer group">
//             <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white p-2 rounded-xl shadow-lg shadow-indigo-600/20 group-hover:scale-105 transition-transform">
//               <CreditCard className="w-5 h-5" />
//             </div>
//             <span className="text-xl font-bold tracking-tight text-white">RevTrack<span className="text-indigo-400">.io</span></span>
//           </div>
          
//           <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
//             <a href="#features" className="hover:text-white transition-colors">Features</a>
//             <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
//             <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
//           </nav>
          
//           <button 
//             onClick={() => onLoginSuccess("Demo Account")}
//             className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md shadow-indigo-600/10 transition-all"
//           >
//             Enter App Demo
//           </button>
//         </div>
//       </header>

//       {/* HERO SECTION */}
//       <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
//         <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[300px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none"></div>
//         <div className="inline-flex items-center gap-2 bg-indigo-950/60 border border-indigo-800/40 rounded-full px-4 py-1.5 text-xs text-indigo-300 font-medium mb-8">
//           <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
//           <span>Next-Gen Global Ledger Automation Engine</span>
//         </div>
        
//         <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] max-w-5xl mx-auto">
//           Unified Revenue Telemetry. <br />
//           <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
//             From Nairobi to the World.
//           </span>
//         </h1>
        
//         <p className="text-slate-400 text-base sm:text-xl max-w-3xl mx-auto mt-6 font-medium leading-relaxed">
//           The autonomous billing platform connecting African mobile money payment architectures and international card networks inside a single real-time AI ledger space.
//         </p>

//         <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
//           <a href="#pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-950 px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg">
//             <span>View Flexible Plans</span>
//             <ArrowRight className="w-4 h-4" />
//           </a>
//         </div>
//       </section>

//       {/* CORE CAPABILITIES VALUE BOX GRID */}
//       <section id="features" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900 relative">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {coreFeatures.map((feat, index) => (
//             <div key={index} className="bg-slate-950 border border-slate-900 hover:border-slate-800 rounded-2xl p-6 transition-all group">
//               <div className="bg-slate-900 border border-slate-800 w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-950 transition-colors">
//                 {feat.icon}
//               </div>
//               <h3 className="text-sm font-bold text-white mb-2">{feat.title}</h3>
//               <p className="text-xs text-slate-400 leading-relaxed font-medium">{feat.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* BILLING MATRIX PRICING LAYER */}
//       <section id="pricing" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900">
//         <div className="text-center max-w-2xl mx-auto mb-14">
//           <h2 className="text-3xl font-bold tracking-tight text-white">Predictable, Transparent Pricing</h2>
//           <div className="mt-6 inline-flex bg-slate-950 p-1 rounded-xl border border-slate-800/80">
//             <button onClick={() => setBillingCycle('monthly')} className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${billingCycle === 'monthly' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400'}`}>Monthly</button>
//             <button onClick={() => setBillingCycle('annual')} className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${billingCycle === 'annual' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400'}`}>
//               <span>Annual Billing</span>
//               <span className="bg-emerald-500/20 text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded-md">-20%</span>
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {pricingTiers.map((tier, index) => (
//             <div key={index} className={`bg-slate-950 border rounded-3xl p-8 flex flex-col justify-between relative shadow-xl transition-all ${tier.popular ? 'border-indigo-500 ring-4 ring-indigo-500/10 scale-102' : 'border-slate-900'}`}>
//               {tier.popular && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] uppercase font-bold tracking-widest px-3.5 py-1 rounded-full">Most Popular</div>}
//               <div>
//                 <h3 className="text-lg font-bold text-white">{tier.name}</h3>
//                 <p className="text-xs text-slate-500 mt-1 font-medium">{tier.tagline}</p>
//                 <div className="mt-4 flex items-baseline gap-1">
//                   <span className="text-4xl font-extrabold text-white">${billingCycle === 'monthly' ? tier.monthlyPrice : tier.annualPrice}</span>
//                   <span className="text-slate-500 font-medium text-xs">/ mo</span>
//                 </div>
//                 <ul className="space-y-3.5 text-xs font-medium text-slate-300 border-t border-slate-900/60 pt-6 my-8">
//                   {tier.features.map((f, i) => (
//                     <li key={i} className="flex items-start gap-3">
//                       <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
//                       <span>{f}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <button onClick={() => onLoginSuccess(tier.name)} className={`w-full py-3.5 rounded-xl font-bold text-xs transition-all ${tier.popular ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-slate-900 text-slate-200 hover:bg-slate-800'}`}>
//                 {tier.cta}
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ACCORDION FAQ BLOCK */}
//       <section id="faq" className="max-w-4xl mx-auto px-6 py-20 border-t border-slate-900">
//         <h2 className="text-2xl font-bold tracking-tight text-center text-white mb-8">Frequently Addressed Inquiries</h2>
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div key={index} className="bg-slate-950 border border-slate-900 rounded-2xl p-5 cursor-pointer" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
//               <div className="flex justify-between items-center gap-4">
//                 <h4 className="text-sm font-bold text-slate-200">{faq.q}</h4>
//                 <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openFaq === index ? 'rotate-180 text-white' : ''}`} />
//               </div>
//               {openFaq === index && <p className="mt-3 text-xs text-slate-400 font-medium border-t border-slate-900 pt-3">{faq.a}</p>}
//             </div>
//           ))}
//         </div>
//       </section>

//       <footer className="border-t border-slate-900 py-8 text-center text-slate-600 text-xs font-medium">
//         <p>© 2026 RevTrack.io Inc. All rights reserved. Global Ledger Sandbox.</p>
//       </footer>

//     </div>
//   );
// }
import React, { useState } from 'react';
import { 
  CreditCard, ArrowRight, Sparkles, ShieldCheck, Zap, 
  Globe, BarChart3, FileCheck, Languages, CheckCircle2,
  Cpu, Building2, HelpCircle, ChevronDown, Check
} from 'lucide-react';

export default function LandingPage({ onLoginSuccess }) {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [openFaq, setOpenFaq] = useState(null);

  const coreFeatures = [
    {
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      title: "Autonomous AI Extractions",
      desc: "Instantly parse complex PDFs, invoices, and accounting telemetry with 99.4% cross-border regional accuracy."
    },
    {
      icon: <Globe className="w-5 h-5 text-indigo-400" />,
      title: "Dual-Rail Financial Rails",
      desc: "Engineered to smoothly support Kenya's M-Pesa B2B channels alongside traditional SWIFT, FedWire, and SEPA corridors."
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-indigo-400" />,
      title: "Predictive Cash Forecasting",
      desc: "Machine learning models instantly extrapolate multi-currency income trends to provide clean dynamic runway analysis."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
      title: "Tax & Compliance Integrity",
      desc: "Automated regional configurations supporting KRA iTax frameworks alongside global GDPR and SOC2 standards."
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      tagline: "For early stage projects",
      monthlyPrice: 19,
      annualPrice: 15,
      features: [
        "Up to $10k/mo tracked volume",
        "50 AI Document Extractions / mo",
        "Basic financial charts",
        "Standard CSV data export",
        "Localized regional tax formats"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Scale Core",
      tagline: "Optimized for growing SaaS",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "Unlimited transaction volume",
        "500 AI Document Extractions / mo",
        "Predictive forecasting models",
        "Audited PDF & Excel data pipelines",
        "Priority API access keys",
        "Multi-currency conversion layer"
      ],
      cta: "Initialize Scale Access",
      popular: true
    },
    {
      name: "Enterprise",
      tagline: "For high-volume global corps",
      monthlyPrice: 149,
      annualPrice: 119,
      features: [
        "Multi-entity corporate consolidation",
        "Unlimited AI extraction queues",
        "Custom compliance reporting nodes",
        "Dedicated SLA support manager",
        "Custom webhook triggers",
        "Custom ERP ledger synchronizations"
      ],
      cta: "Contact Architecture Team",
      popular: false
    }
  ];

  const faqs = [
    {
      q: "How does the platform support both Kenyan rails and global networks?",
      a: "RevTrack.io was engineered from day one with dual-rail infrastructure. We pull transactional telemetry directly from East African mobile money standard business APIs (M-Pesa C2B/B2C ledger exports) and seamlessly balance them within the same system alongside international processors like Stripe, Paddle, and international bank clearing houses."
    },
    {
      q: "Can I switch dashboard displays between KES and international currencies?",
      a: "Yes. Once you enter your dashboard app space, a global conversion engine is exposed at the top nav layer. You can dynamically switch your entire balance sheet visualization across USD, EUR, GBP, or KES with live recalculated foreign exchange values instantly."
    },
    {
      q: "Is our financial ledger parsing compliant with KRA and international frameworks?",
      a: "Completely. RevTrack.io enforces rigorous data privacy controls aligned with the Kenya Data Protection Act (KDPA) and GDPR frameworks. Document exports compile seamlessly into structures optimized for both local iTax processing and international corporate balance sheet audits."
    }
  ];

  const handleTierSelection = (tierName) => {
    alert(`Initializing secure registration pipeline for [${tierName}] tier (${billingCycle} billing)...`);
    onLoginSuccess(); 
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased font-sans overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* GLOBAL HUD SYSTEM BANNER */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-400 text-[11px] font-medium py-2.5 px-6 flex flex-col sm:flex-row gap-2 justify-between items-center text-center sm:text-left">
        <div className="flex items-center gap-2">
          <Languages className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
          <span>Multi-Currency Infrastructure optimized for East Africa and international trade networks.</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-slate-500">
          <span>GDPR Compliant</span>
          <span>•</span>
          <span>KDPA Registered</span>
        </div>
      </div>

      {/* STICKY ACCESSIBLE HEADER */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white p-2 rounded-xl shadow-lg shadow-indigo-600/20 group-hover:scale-105 transition-transform">
              <CreditCard className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">RevTrack<span className="text-indigo-400">.io</span></span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ Support</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={onLoginSuccess}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md shadow-indigo-600/10 transition-all active:scale-[0.98]"
            >
              Enter App Demo
            </button>
          </div>
        </div>
      </header>

      {/* HERO HERO COMPONENT */}
      <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[300px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 bg-indigo-950/60 border border-indigo-800/40 rounded-full px-4 py-1.5 text-xs text-indigo-300 font-medium mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Next-Gen Global Ledger Automation Engine</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] max-w-5xl mx-auto">
          Unified Revenue Telemetry. <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            From Nairobi to the World.
          </span>
        </h1>
        
        <p className="text-slate-400 text-base sm:text-xl max-w-3xl mx-auto mt-6 font-medium leading-relaxed">
          The autonomous billing platform connecting African mobile money payment architectures and international card networks inside a single real-time AI ledger space.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-950 px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg"
          >
            <span>View Flexible Plans</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button 
            onClick={onLoginSuccess}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 px-6 py-3.5 rounded-xl font-bold text-sm transition-all"
          >
            Launch Live Sandbox
          </button>
        </div>

        {/* TRUST/PROOFS CAROUSEL LOGO PLACEHOLDER */}
        <div className="mt-20 border-t border-slate-900 pt-10">
          <p className="text-slate-600 uppercase tracking-widest text-[10px] font-bold">Trusted by leading operations across East Africa & Global Nodes</p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-40 grayscale hover:opacity-60 transition-opacity">
            <span className="text-sm font-black tracking-wider text-slate-300 flex items-center gap-1"><Building2 className="w-4 h-4"/> SAFARICOM B2B</span>
            <span className="text-xl font-serif font-bold text-slate-300">Stripe Node</span>
            <span className="text-lg font-mono font-bold tracking-tight text-slate-300">V_ALLEY_CAPITAL</span>
            <span className="text-sm font-sans font-black uppercase text-slate-300">EQUITY BANK CONNECT</span>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES GRID SECTION */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900 relative">
        <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Engineered for Global Scale</h2>
          <p className="text-slate-400 text-sm mt-3 font-medium">Say goodbye to broken currency mappings and mismatched CSV pipeline errors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feat, index) => (
            <div key={index} className="bg-slate-950 border border-slate-900 hover:border-slate-800 rounded-2xl p-6 transition-all group">
              <div className="bg-slate-900 border border-slate-800 w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-950 group-hover:border-indigo-900 transition-colors">
                {feat.icon}
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{feat.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DYNAMIC PRICING SYSTEM MATRIX */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-white">Predictable, Transparent Pricing</h2>
          <p className="text-slate-400 text-sm mt-2 font-medium">Simple tiers designed to scale cleanly alongside your monthly transaction throughput.</p>
          
          {/* Custom Switch Switch */}
          <div className="mt-6 inline-flex bg-slate-950 p-1 rounded-xl border border-slate-800/80">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${billingCycle === 'monthly' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              Monthly Billing
            </button>
            <button 
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${billingCycle === 'annual' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              <span>Annual Billing</span>
              <span className="bg-emerald-500/20 text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded-md border border-emerald-500/20">-20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Layout Structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`bg-slate-950 border rounded-3xl p-8 flex flex-col justify-between relative shadow-xl transition-all ${
                tier.popular ? 'border-indigo-500 scale-102 ring-4 ring-indigo-500/10' : 'border-slate-900 hover:border-slate-800'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] uppercase font-bold tracking-widest px-3.5 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">{tier.tagline}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">
                      ${billingCycle === 'monthly' ? tier.monthlyPrice : tier.annualPrice}
                    </span>
                    <span className="text-slate-500 font-medium text-xs">/ month</span>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs font-medium text-slate-300 border-t border-slate-900/60 pt-6 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => handleTierSelection(tier.name)}
                className={`w-full py-3.5 rounded-xl font-bold text-xs transition-all active:scale-[0.98] ${
                  tier.popular 
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20' 
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800/80'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-slate-900 border border-slate-800 rounded-xl mb-3">
            <HelpCircle className="w-5 h-5 text-indigo-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Frequently Addressed Inquiries</h2>
          <p className="text-slate-400 text-xs mt-1 font-medium">Everything you need to know about setting up global accounting frameworks.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-slate-950 border border-slate-900 rounded-2xl p-5 cursor-pointer hover:border-slate-800 transition-colors"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex justify-between items-center gap-4">
                <h4 className="text-sm font-bold text-slate-200">{faq.q}</h4>
                <ChevronDown className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-180 text-white' : ''}`} />
              </div>
              
              {openFaq === index && (
                <p className="mt-3 text-xs leading-relaxed text-slate-400 font-medium border-t border-slate-900 pt-3 animate-fade-in">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORM ENTERPRISE CALLOUT BANNER */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-indigo-950 via-slate-950 to-indigo-950 border border-indigo-900/40 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">Ready to map your international metrics?</h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-3 font-medium">Join teams managing cross-border channels without accounting fragmentation loops.</p>
          <div className="mt-8">
            <button 
              onClick={onLoginSuccess}
              className="bg-white text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm hover:bg-slate-100 shadow-md transition-all active:scale-[0.98]"
            >
              Launch Live App Space
            </button>
          </div>
        </div>
      </section>

      {/* CORE FOOTER BRAND BLOCK */}
      <footer className="border-t border-slate-900 py-8 text-center text-slate-600 text-xs font-medium">
        <p>© 2026 RevTrack.io Inc. All rights reserved. Registered processing framework.</p>
      </footer>

    </div>
  );
}
