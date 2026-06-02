// // import React, { useState } from 'react';
// // import { 
// //   TrendingUp, CreditCard, Plus, Globe, ArrowUpRight, 
// //   Layers, LogOut, CheckCircle2, User, Wallet
// // } from 'lucide-react';

// // // Static Foreign Exchange Matrix (Baseline Normalized to 1 USD)
// // const CURRENCIES = {
// //   USD: { symbol: '$', label: 'USD (US Dollar)', rate: 1.00 },
// //   KES: { symbol: 'KSh', label: 'KES (Kenyan Shilling)', rate: 132.50 },
// //   EUR: { symbol: '€', label: 'EUR (Euro Zone)', rate: 0.92 },
// //   GBP: { symbol: '£', label: 'GBP (British Pound)', rate: 0.78 },
// //   JPY: { symbol: '¥', label: 'JPY (Japanese Yen)', rate: 156.40 }
// // };

// // export default function App({ userPlan, onLogout }) {
// //   const [selectedCurrency, setSelectedCurrency] = useState('USD');
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   // Form Inputs
// //   const [newClient, setNewClient] = useState('');
// //   const [newAmount, setNewAmount] = useState('');
// //   const [newDate, setNewDate] = useState('');
// //   const [inputCurrency, setInputCurrency] = useState('USD');

// //   // Baseline Financial State (Tracked internally in standard USD value)
// //   const [baseStats, setBaseStats] = useState({
// //     total_revenue: 142050.00,
// //     expenses: 31200.00,
// //     invoices_count: 14
// //   });

// //   const [invoices, setInvoices] = useState([
// //     { id: 1, client_name: "Vasat Tech Nairobi", amountUSD: 4500.00, invoice_date: "2026-05-28", type: "M-Pesa B2B", status: "Paid" },
// //     { id: 2, client_name: "Acme Global Corp", amountUSD: 12500.00, invoice_date: "2026-05-24", type: "Stripe Card", status: "Paid" },
// //     { id: 3, client_name: "Kilimanjaro Outfitters", amountUSD: 1200.00, invoice_date: "2026-05-20", type: "M-Pesa B2B", status: "Pending" },
// //     { id: 4, client_name: "Sora Software London", amountUSD: 8900.00, invoice_date: "2026-05-15", type: "Swift Wire", status: "Paid" },
// //   ]);

// //   // Conversion Utility
// //   const convert = (valueInUSD) => {
// //     const config = CURRENCIES[selectedCurrency];
// //     const converted = valueInUSD * config.rate;
// //     return `${config.symbol} ${converted.toLocaleString(undefined, {
// //       minimumFractionDigits: 2,
// //       maximumFractionDigits: 2
// //     })}`;
// //   };

// //   const handleCreateInvoice = (e) => {
// //     e.preventDefault();
// //     if (!newClient || !newAmount || !newDate) return;

// //     // Normalize incoming input cash value into base USD
// //     const enteredAmount = parseFloat(newAmount);
// //     const amountInUSD = enteredAmount / CURRENCIES[inputCurrency].rate;

// //     const newEntry = {
// //       id: invoices.length + 1,
// //       client_name: newClient,
// //       amountUSD: amountInUSD,
// //       invoice_date: newDate,
// //       type: inputCurrency === 'KES' ? 'M-Pesa B2B' : 'Card Rail',
// //       status: 'Paid'
// //     };

// //     setInvoices([newEntry, ...invoices]);
// //     setBaseStats(prev => ({
// //       ...prev,
// //       total_revenue: prev.total_revenue + amountInUSD,
// //       invoices_count: prev.invoices_count + 1
// //     }));

// //     // Reset Form & Close
// //     setNewClient('');
// //     setNewAmount('');
// //     setNewDate('');
// //     setIsModalOpen(false);
// //   };

// //   return (
// //     <div className="min-h-screen bg-slate-50/60 text-slate-900 antialiased font-sans">
      
// //       {/* GLOBAL HUD LOCALIZATION NAV */}
// //       <div className="bg-slate-900 text-slate-400 text-xs py-2.5 px-6 flex justify-between items-center border-b border-slate-800">
// //         <div className="flex items-center gap-4">
// //           <div className="flex items-center gap-2">
// //             <Globe className="w-3.5 h-3.5 text-indigo-400" />
// //             <span className="text-slate-300 font-medium hidden sm:inline">Active Display Currency:</span>
// //           </div>
          
// //           <select 
// //             value={selectedCurrency} 
// //             onChange={(e) => setSelectedCurrency(e.target.value)}
// //             className="bg-slate-800 text-white text-xs font-bold rounded-lg px-2.5 py-1 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
// //           >
// //             {Object.keys(CURRENCIES).map(key => (
// //               <option key={key} value={key}>{CURRENCIES[key].label}</option>
// //             ))}
// //           </select>
// //         </div>

// //         <div className="flex items-center gap-4">
// //           <div className="bg-indigo-950 border border-indigo-800/60 rounded-full px-3 py-0.5 text-[10px] text-indigo-300 font-bold uppercase tracking-wider">
// //             Plan: {userPlan}
// //           </div>
// //           <button 
// //             onClick={onLogout} 
// //             className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors font-semibold"
// //           >
// //             <LogOut className="w-3.5 h-3.5" />
// //             <span className="hidden sm:inline">Log Out</span>
// //           </button>
// //         </div>
// //       </div>

// //       {/* DASHBOARD CONTAINER NAVIGATION */}
// //       <header className="bg-white border-b border-slate-200/80 px-6 py-4 flex justify-between items-center shadow-sm">
// //         <div className="flex items-center gap-3">
// //           <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-md">
// //             <CreditCard className="w-5 h-5" />
// //           </div>
// //           <div>
// //             <h1 className="text-lg font-bold tracking-tight text-slate-900">RevTrack<span className="text-indigo-600">.io</span></h1>
// //             <p className="text-[11px] text-slate-500 font-medium">Cross-Border Telemetry Node</p>
// //           </div>
// //         </div>
// //       </header>

// //       {/* MAIN DASHBOARD MATRIX GRID */}
// //       <main className="max-w-7xl mx-auto p-6 lg:p-8 space-y-8">
        
// //         {/* WELCOME BANNER SECTION */}
// //         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
// //           <div>
// //             <h2 className="text-xl font-bold tracking-tight text-slate-900">Enterprise Financial Dashboard</h2>
// //             <p className="text-slate-500 text-xs mt-0.5">Real-time localized metrics computed instantly across dual banking pathways.</p>
// //           </div>
// //           <button 
// //             onClick={() => { setInputCurrency(selectedCurrency); setIsModalOpen(true); }}
// //             className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-md shadow-indigo-600/10 transition-all"
// //           >
// //             <Plus className="w-4 h-4" />
// //             <span>Record New Sale Entry</span>
// //           </button>
// //         </div>

// //         {/* METRIC CARD MODULES */}
// //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
// //           <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
// //             <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Gross Converted Revenue</span>
// //             <h3 className="text-2xl font-black tracking-tight text-slate-900 mt-3">{convert(baseStats.total_revenue)}</h3>
// //           </div>

// //           <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
// //             <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Operational Runway Cost</span>
// //             <h3 className="text-2xl font-black tracking-tight text-slate-900 mt-3">{convert(baseStats.expenses)}</h3>
// //           </div>

// //           <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-2xl shadow-sm flex flex-col justify-between">
// //             <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-slate-400">Ledger Audits Tracked</span>
// //             <div className="flex items-baseline justify-between mt-3">
// //               <h3 className="text-2xl font-black tracking-tight text-white">{baseStats.invoices_count} Total</h3>
// //               <span className="text-emerald-400 text-xs font-bold flex items-center gap-0.5">
// //                 <TrendingUp className="w-3 h-3" /> Live Syncing
// //               </span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* RECENT TRANSACTION COMPONENT TABLE */}
// //         <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
// //           <div className="p-5 border-b border-slate-100 flex justify-between items-center">
// //             <h3 className="font-bold text-sm text-slate-900">Recent Accounting Streams</h3>
// //             <span className="text-[11px] font-medium text-slate-400">All prices calculated using real-time local FX multipliers</span>
// //           </div>
// //           <div className="overflow-x-auto">
// //             <table className="w-full text-left border-collapse">
// //               <thead>
// //                 <tr className="bg-slate-50 text-slate-400 uppercase tracking-widest font-bold text-[9px] border-b border-slate-100">
// //                   <th className="py-3.5 px-6">Client Identity</th>
// //                   <th className="py-3.5 px-6">Execution Date</th>
// //                   <th className="py-3.5 px-6">Settlement Network</th>
// //                   <th className="py-3.5 px-6 text-right">Value Amount ({selectedCurrency})</th>
// //                   <th className="py-3.5 px-6 text-center">Status</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-600">
// //                 {invoices.map((invoice) => (
// //                   <tr key={invoice.id} className="hover:bg-slate-50/50 transition-colors">
// //                     <td className="py-4 px-6 font-bold text-slate-900">{invoice.client_name}</td>
// //                     <td className="py-4 px-6 text-slate-400 font-mono">{invoice.invoice_date}</td>
// //                     <td className="py-4 px-6">
// //                       <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono text-[10px] border border-slate-200/40">
// //                         {invoice.type}
// //                       </span>
// //                     </td>
// //                     <td className="py-4 px-6 text-right font-bold text-slate-900 text-sm">{convert(invoice.amountUSD)}</td>
// //                     <td className="py-4 px-6 text-center">
// //                       <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
// //                         invoice.status === 'Paid' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-amber-50 text-amber-700 border border-amber-100'
// //                       }`}>
// //                         {invoice.status}
// //                       </span>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       </main>

// //       {/* DETACHED SLIDE-OVER INPUT MODAL SYSTEM */}
// //       {isModalOpen && (
// //         <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-end">
// //           <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs" onClick={() => setIsModalOpen(false)}></div>
// //           <div className="relative w-full max-w-md h-full bg-white shadow-2xl p-6 flex flex-col justify-between border-l border-slate-200">
            
// //             <div className="space-y-6">
// //               <div>
// //                 <h3 className="text-base font-bold text-slate-900">Record Manual Revenue Event</h3>
// //                 <p className="text-xs text-slate-500 mt-1">Select the asset currency code to ensure zero foreign exchange conversion drag.</p>
// //               </div>

// //               <div className="space-y-4">
// //                 <div>
// //                   <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Business Client Label</label>
// //                   <input required type="text" value={newClient} onChange={(e) => setNewClient(e.target.value)} placeholder="e.g. Safari Safaris LTD" className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs focus:outline-none focus:border-indigo-600 font-medium" />
// //                 </div>

// //                 <div className="grid grid-cols-3 gap-2">
// //                   <div className="col-span-1">
// //                     <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Currency</label>
// //                     <select 
// //                       value={inputCurrency} 
// //                       onChange={(e) => setInputCurrency(e.target.value)} 
// //                       className="w-full rounded-xl border border-slate-200 px-2 py-2 text-xs bg-white font-bold text-slate-800 focus:outline-none"
// //                     >
// //                       {Object.keys(CURRENCIES).map(key => (
// //                         <option key={key} value={key}>{key}</option>
// //                       ))}
// //                     </select>
// //                   </div>
// //                   <div className="col-span-2">
// //                     <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Transaction Value</label>
// //                     <div className="relative">
// //                       <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs">{CURRENCIES[inputCurrency].symbol}</span>
// //                       <input required type="number" step="0.01" value={newAmount} onChange={(e) => setNewAmount(e.target.value)} placeholder="0.00" className="w-full rounded-xl border border-slate-200 pl-8 pr-3.5 py-2 text-xs focus:outline-none focus:border-indigo-600 font-bold" />
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Settlement Date</label>
// //                   <input required type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs focus:outline-none focus:border-indigo-600 font-medium" />
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
// //               <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 rounded-xl border border-slate-200">Cancel</button>
// //               <button type="submit" onClick={handleCreateInvoice} className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm">Publish Entry</button>
// //             </div>

// //           </div>
// //         </div>
// //       )}

// //     </div>
// //   );
// // }
// import React, { useState } from 'react';
// import { 
//   TrendingUp, 
//   TrendingDown, 
//   DollarSign, 
//   FileText, 
//   CreditCard, 
//   Plus, 
//   Download, 
//   Sparkles, 
//   PieChart, 
//   User, 
//   ArrowUpRight,
//   Globe,
//   Loader2
// } from 'lucide-react';

// export default function App() {
//   // Mock State representing data fetched from your backend API
//   const [stats] = useState({ total_revenue: 250000, invoices: 35, expenses: 45000, profit: 205000 });
//   const [forecast] = useState({ forecast_next_month: 32000, growth_rate: 0.12 });
//   const [insight] = useState({
//     trend: "Revenue increased by 12.4%. Growth trend is healthy.",
//     ai_tip: "Your highest revenue concentration is from enterprise clients. Consider adjusting payment terms to net-15 to optimize cross-border cash flow."
//   });
  
//   const [invoices] = useState([
//     { id: 1, client_name: "Acme Global Corp", amount: 12500.00, invoice_date: "2026-05-28", status: "Paid" },
//     { id: 2, client_name: "Stark International", amount: 8900.00, invoice_date: "2026-05-24", status: "Paid" },
//     { id: 3, client_name: "Nova Logistics Ltd", amount: 4200.00, invoice_date: "2026-05-20", status: "Pending" },
//     { id: 4, client_name: "Sora Tech Japan", amount: 15000.00, invoice_date: "2026-05-15", status: "Paid" },
//   ]);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isAnalyzing, setIsAnalyzing] = useState(false);

//   const simulateAiExtract = () => {
//     setIsAnalyzing(true);
//     setTimeout(() => setIsAnalyzing(false), 2000);
//   };

//   return (
//     <div className="min-h-screen bg-slate-50/50 text-slate-900 antialiased font-sans">
      
//       {/* GLOBAL LOCALIZATION BAR */}
//       <div className="bg-slate-900 text-slate-400 text-xs py-2 px-6 flex justify-between items-center border-b border-slate-800">
//         <div className="flex items-center gap-2">
//           <Globe className="w-3.5 h-3.5 text-emerald-400" />
//           <span>Multi-currency Engine: <b>USD ($)</b> Standard</span>
//         </div>
//         <div className="flex gap-4">
//           <span>Server Status: <span className="text-emerald-400">● Operational</span></span>
//           <span>API Version: v1.0.0</span>
//         </div>
//       </div>

//       {/* NAVIGATION NAVBAR */}
//       <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-6 py-4 flex justify-between items-center">
//         <div className="flex items-center gap-3">
//           <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-md shadow-indigo-600/20">
//             <CreditCard className="w-6 h-6" />
//           </div>
//           <div>
//             <h1 className="text-xl font-bold tracking-tight text-slate-900">RevTrack<span className="text-indigo-600">.io</span></h1>
//             <p className="text-xs text-slate-500 font-medium">International Revenue Cloud</p>
//           </div>
//         </div>

//         <div className="flex items-center gap-4">
//           <button className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
//             Documentation
//           </button>
//           <div className="h-4 w-px bg-slate-200"></div>
//           <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-all">
//             <User className="w-4 h-4 text-slate-500" />
//             <span>Account</span>
//           </button>
//         </div>
//       </header>

//       {/* DASHBOARD BODY */}
//       <main className="max-w-7xl mx-auto p-6 lg:p-8 space-y-8">
        
//         {/* WELCOME & ACTION BAR */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
//           <div>
//             <h2 className="text-2xl font-bold tracking-tight text-slate-900">Financial Overview</h2>
//             <p className="text-slate-500 text-sm mt-0.5">Real-time cross-border performance insights and ledger tracking.</p>
//           </div>
//           <div className="flex items-center gap-3 self-start sm:self-auto">
//             <button 
//               onClick={() => setIsModalOpen(true)}
//               className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-indigo-600/10 transition-all active:scale-[0.98]"
//             >
//               <Plus className="w-4 h-4" />
//               <span>Create Invoice</span>
//             </button>
//           </div>
//         </div>

//         {/* METRICS GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {/* Card 1 */}
//           <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
//             <div className="flex justify-between items-start">
//               <span className="text-sm font-medium text-slate-500">Gross Revenue</span>
//               <div className="bg-indigo-50 text-indigo-600 p-2 rounded-xl">
//                 <DollarSign className="w-5 h-5" />
//               </div>
//             </div>
//             <div className="mt-4">
//               <h3 className="text-3xl font-bold tracking-tight text-slate-900">${stats.total_revenue.toLocaleString()}</h3>
//               <p className="text-xs text-slate-400 mt-1">Lifetime accrued value</p>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
//             <div className="flex justify-between items-start">
//               <span className="text-sm font-medium text-slate-500">Net Profit Margin</span>
//               <div className="bg-emerald-50 text-emerald-600 p-2 rounded-xl">
//                 <TrendingUp className="w-5 h-5" />
//               </div>
//             </div>
//             <div className="mt-4">
//               <h3 className="text-3xl font-bold tracking-tight text-slate-900">${stats.profit.toLocaleString()}</h3>
//               <p className="text-xs text-emerald-600 font-medium flex items-center gap-1 mt-1">
//                 <span>82% Efficiency rate</span>
//               </p>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
//             <div className="flex justify-between items-start">
//               <span className="text-sm font-medium text-slate-500">Invoices Issued</span>
//               <div className="bg-blue-50 text-blue-600 p-2 rounded-xl">
//                 <FileText className="w-5 h-5" />
//               </div>
//             </div>
//             <div className="mt-4">
//               <h3 className="text-3xl font-bold tracking-tight text-slate-900">{stats.invoices}</h3>
//               <p className="text-xs text-slate-400 mt-1">Across all global accounts</p>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-2xl border border-slate-800 shadow-md flex flex-col justify-between">
//             <div className="flex justify-between items-start">
//               <span className="text-sm font-medium text-slate-400">Next Month Forecast</span>
//               <div className="bg-white/10 text-emerald-400 p-2 rounded-xl">
//                 <Sparkles className="w-5 h-5" />
//               </div>
//             </div>
//             <div className="mt-4">
//               <h3 className="text-3xl font-bold tracking-tight">${forecast.forecast_next_month.toLocaleString()}</h3>
//               <p className="text-xs text-emerald-400 font-medium flex items-center gap-1 mt-1">
//                 <ArrowUpRight className="w-3 h-3" />
//                 <span>+{(forecast.growth_rate * 100).toFixed(0)}% algorithmic growth</span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* AI INSIGHTS ENGINE CONTAINER */}
//         <div className="bg-gradient-to-r from-indigo-50/60 via-violet-50/40 to-transparent border border-indigo-100 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-inner">
//           <div className="flex gap-4 items-start">
//             <div className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white p-3 rounded-xl shadow-md">
//               <Sparkles className="w-5 h-5" />
//             </div>
//             <div>
//               <h4 className="text-sm font-bold text-indigo-950 uppercase tracking-wider flex items-center gap-2">
//                 RevTrack AI Insights Engine
//               </h4>
//               <p className="text-slate-700 text-sm font-medium mt-1">{insight.trend}</p>
//               <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{insight.ai_tip}</p>
//             </div>
//           </div>
//           <button 
//             onClick={simulateAiExtract}
//             disabled={isAnalyzing}
//             className="flex items-center gap-2 bg-white hover:bg-slate-50 text-indigo-600 border border-indigo-200 px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all disabled:opacity-50 whitespace-nowrap"
//           >
//             {isAnalyzing ? (
//               <>
//                 <Loader2 className="w-3.5 h-3.5 animate-spin" />
//                 <span>Running Audit...</span>
//               </>
//             ) : (
//               <>
//                 <PieChart className="w-3.5 h-3.5" />
//                 <span>Trigger Live Audit</span>
//               </>
//             )}
//           </button>
//         </div>

//         {/* DATA ARCHITECTURE SPLIT */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
//           {/* LEDGER ACCRUED INVOICES */}
//           <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
//             <div className="p-6 border-b border-slate-100 flex justify-between items-center">
//               <div>
//                 <h3 className="font-bold text-slate-900">Recent Transactions</h3>
//                 <p className="text-xs text-slate-500 mt-0.5">Real-time ledger entries sync</p>
//               </div>
//               <div className="flex gap-2">
//                 <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors" title="Export CSV">
//                   <Download className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full text-left border-collapse">
//                 <thead>
//                   <tr className="bg-slate-50 text-slate-400 uppercase tracking-wider font-semibold text-[10px] border-b border-slate-100">
//                     <th className="py-3.5 px-6">Client Identity</th>
//                     <th className="py-3.5 px-6">Execution Date</th>
//                     <th className="py-3.5 px-6 text-right">Value Amount</th>
//                     <th className="py-3.5 px-6 text-center">Settlement</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
//                   {invoices.map((invoice) => (
//                     <tr key={invoice.id} className="hover:bg-slate-50/50 transition-colors">
//                       <td className="py-4 px-6 font-semibold text-slate-900">{invoice.client_name}</td>
//                       <td className="py-4 px-6 text-slate-500 font-mono text-xs">{invoice.invoice_date}</td>
//                       <td className="py-4 px-6 text-right font-semibold text-slate-900">${invoice.amount.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
//                       <td className="py-4 px-6 text-center">
//                         <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
//                           invoice.status === 'Paid' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/40' : 'bg-amber-50 text-amber-700 border border-amber-200/40'
//                         }`}>
//                           {invoice.status}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* AI OPTIMIZATION PANEL */}
//           <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 space-y-6">
//             <div>
//               <h3 className="font-bold text-slate-900">AI Document Processing</h3>
//               <p className="text-xs text-slate-500 mt-0.5">Drop incoming invoices to instantly parse parameters into database entries.</p>
//             </div>

//             <div className="border-2 border-dashed border-slate-200 hover:border-indigo-400 rounded-xl p-8 text-center cursor-pointer transition-colors bg-slate-50/50 group">
//               <div className="bg-white p-2.5 rounded-xl shadow-sm border border-slate-200/60 inline-block mb-3 group-hover:scale-110 transition-transform">
//                 <FileText className="w-5 h-5 text-indigo-600" />
//               </div>
//               <p className="text-xs font-semibold text-slate-800">Upload processing invoice PDF</p>
//               <p className="text-[10px] text-slate-400 mt-1 font-medium">Automatic recognition engine max 10MB</p>
//             </div>

//             <hr className="border-slate-100" />

//             <div>
//               <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Quick Analysis Distribution</h4>
//               <div className="space-y-3">
//                 <div>
//                   <div className="flex justify-between text-xs font-semibold mb-1">
//                     <span className="text-slate-600">Direct Invoice Inflow</span>
//                     <span className="text-slate-900">74%</span>
//                   </div>
//                   <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
//                     <div className="bg-indigo-600 h-full rounded-full" style={{ width: '74%' }}></div>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="flex justify-between text-xs font-semibold mb-1">
//                     <span className="text-slate-600">Stripe Subscriptions</span>
//                     <span className="text-slate-900">26%</span>
//                   </div>
//                   <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
//                     <div className="bg-violet-500 h-full rounded-full" style={{ width: '26%' }}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </main>

//       {/* DETACHED SLIDE-OVER MODAL LAYER */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
//           <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={() => setIsModalOpen(false)}></div>
//           <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
//             <div className="w-screen max-w-md bg-white border-l border-slate-200 p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-200">
//               <div className="space-y-6">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-lg font-bold text-slate-900">Issue Corporate Ledger Entry</h3>
//                     <p className="text-xs text-slate-500 mt-0.5">Manually record a validated transaction asset.</p>
//                   </div>
//                   <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-500 p-1 bg-slate-50 rounded-lg border border-slate-200">✕</button>
//                 </div>

//                 <form className="space-y-4">
//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Client Business Identification</label>
//                     <input type="text" placeholder="e.g. Acme Corp Inc" className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-medium" />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Asset Value Amount (USD)</label>
//                     <div className="relative">
//                       <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-medium text-sm">$</span>
//                       <input type="number" step="0.01" placeholder="0.00" className="w-full rounded-xl border border-slate-200 pl-8 pr-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-semibold" />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Accounting Allocation Date</label>
//                     <input type="date" className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-medium" />
//                   </div>
//                 </form>
//               </div>

//               <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
//                 <button 
//                   onClick={() => setIsModalOpen(false)}
//                   className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 border border-slate-200 rounded-xl transition-all"
//                 >
//                   Cancel
//                 </button>
//                 <button 
//                   onClick={() => setIsModalOpen(false)}
//                   className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md shadow-indigo-600/10 transition-all"
//                 >
//                   Save Entry
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }
import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  FileText, 
  CreditCard, 
  Plus, 
  Download, 
  Sparkles, 
  PieChart, 
  User, 
  ArrowUpRight,
  Globe,
  Loader2,
  LogOut
} from 'lucide-react';

// Static Foreign Exchange Matrix (Baseline Normalized to 1 USD)
const CURRENCIES = {
  USD: { symbol: '$', label: 'USD (US Dollar)', rate: 1.00 },
  KES: { symbol: 'KSh', label: 'KES (Kenyan Shilling)', rate: 132.50 },
  EUR: { symbol: '€', label: 'EUR (Euro Zone)', rate: 0.92 },
  GBP: { symbol: '£', label: 'GBP (British Pound)', rate: 0.78 },
  JPY: { symbol: '¥', label: 'JPY (Japanese Yen)', rate: 156.40 }
};

export default function App({ userPlan = "Scale Core", onLogout = () => console.log("Logout triggered") }) {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Form Inputs
  const [newClient, setNewClient] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newDate, setNewDate] = useState('');
  const [inputCurrency, setInputCurrency] = useState('USD');

  // Baseline Financial State (Tracked internally in standard USD value)
  const [baseStats, setBaseStats] = useState({
    total_revenue: 250000.00,
    expenses: 45000.00,
    invoices_count: 35
  });

  const [forecast] = useState({ forecast_next_month: 32000, growth_rate: 0.12 });
  const [insight] = useState({
    trend: "Revenue increased by 12.4%. Growth trend is healthy.",
    ai_tip: "Your highest revenue concentration is from enterprise clients. Consider adjusting payment terms to net-15 to optimize cross-border cash flow."
  });

  const [invoices, setInvoices] = useState([
    { id: 1, client_name: "Vasat Tech Nairobi", amountUSD: 4500.00, invoice_date: "2026-05-28", type: "M-Pesa B2B", status: "Paid" },
    { id: 2, client_name: "Acme Global Corp", amountUSD: 12500.00, invoice_date: "2026-05-24", type: "Stripe Card", status: "Paid" },
    { id: 3, client_name: "Kilimanjaro Outfitters", amountUSD: 1200.00, invoice_date: "2026-05-20", type: "M-Pesa B2B", status: "Pending" },
    { id: 4, client_name: "Sora Software London", amountUSD: 8900.00, invoice_date: "2026-05-15", type: "Swift Wire", status: "Paid" },
  ]);

  // Conversion Utility
  const convert = (valueInUSD) => {
    const config = CURRENCIES[selectedCurrency];
    const converted = valueInUSD * config.rate;
    return `${config.symbol} ${converted.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  const handleCreateInvoice = (e) => {
    e.preventDefault();
    if (!newClient || !newAmount || !newDate) return;

    // Normalize incoming input cash value into base USD
    const enteredAmount = parseFloat(newAmount);
    const amountInUSD = enteredAmount / CURRENCIES[inputCurrency].rate;

    const newEntry = {
      id: invoices.length + 1,
      client_name: newClient,
      amountUSD: amountInUSD,
      invoice_date: newDate,
      type: inputCurrency === 'KES' ? 'M-Pesa B2B' : 'Card Rail',
      status: 'Paid'
    };

    setInvoices([newEntry, ...invoices]);
    setBaseStats(prev => ({
      ...prev,
      total_revenue: prev.total_revenue + amountInUSD,
      invoices_count: prev.invoices_count + 1
    }));

    // Reset Form & Close cleanly
    setNewClient('');
    setNewAmount('');
    setNewDate('');
    setIsModalOpen(false);
  };

  const simulateAiExtract = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-900 antialiased font-sans">
      
      {/* GLOBAL HUD LOCALIZATION NAV */}
      <div className="bg-slate-900 text-slate-400 text-xs py-2.5 px-6 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-slate-300 font-medium hidden sm:inline">Active Display Currency:</span>
          </div>
          
          <select 
            value={selectedCurrency} 
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="bg-slate-800 text-white text-xs font-bold rounded-lg px-2.5 py-1 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            {Object.keys(CURRENCIES).map(key => (
              <option key={key} value={key}>{CURRENCIES[key].label}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-indigo-950 border border-indigo-800/60 rounded-full px-3 py-0.5 text-[10px] text-indigo-300 font-bold uppercase tracking-wider">
            Plan: {userPlan}
          </div>
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onLogout();
            }} 
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors font-semibold"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Log Out</span>
          </button>
        </div>
      </div>

      {/* DASHBOARD CONTAINER NAVIGATION */}
      <header className="bg-white border-b border-slate-200/80 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-md">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">RevTrack<span className="text-indigo-600">.io</span></h1>
            <p className="text-[11px] text-slate-500 font-medium">Cross-Border Telemetry Node</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button type="button" className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            Documentation
          </button>
          <div className="h-4 w-px bg-slate-200"></div>
          <button type="button" className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-all">
            <User className="w-3.5 h-3.5 text-slate-500" />
            <span>Account</span>
          </button>
        </div>
      </header>

      {/* MAIN DASHBOARD MATRIX GRID */}
      <main className="max-w-7xl mx-auto p-6 lg:p-8 space-y-8">
        
        {/* WELCOME BANNER SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">Enterprise Financial Dashboard</h2>
            <p className="text-slate-500 text-xs mt-0.5">Real-time localized metrics computed instantly across dual banking pathways.</p>
          </div>
          <button 
            type="button"
            onClick={() => { setInputCurrency(selectedCurrency); setIsModalOpen(true); }}
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-md shadow-indigo-600/10 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Record New Sale Entry</span>
          </button>
        </div>

        {/* METRIC CARD MODULES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Gross Converted Revenue</span>
              <div className="bg-indigo-50 text-indigo-600 p-2 rounded-xl">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-black tracking-tight text-slate-900">{convert(baseStats.total_revenue)}</h3>
              <p className="text-xs text-slate-400 mt-1">Lifetime accrued value</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Operational Runway Cost</span>
              <div className="bg-rose-50 text-rose-600 p-2 rounded-xl">
                <TrendingDown className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-black tracking-tight text-slate-900">{convert(baseStats.expenses)}</h3>
              <p className="text-xs text-slate-400 mt-1">Operational overhead costs</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Ledger Audits Tracked</span>
              <div className="bg-blue-50 text-blue-600 p-2 rounded-xl">
                <FileText className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-black tracking-tight text-slate-900">{baseStats.invoices_count} Total</h3>
              <p className="text-xs text-slate-400 mt-1">Across all linked accounts</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-2xl shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-slate-400">Next Month Forecast</span>
              <div className="bg-white/10 text-emerald-400 p-2 rounded-xl">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-black tracking-tight text-white">{convert(forecast.forecast_next_month)}</h3>
              <p className="text-xs text-emerald-400 font-medium flex items-center gap-0.5 mt-1">
                <ArrowUpRight className="w-3 h-3" /> Live Algorithmic Sync
              </p>
            </div>
          </div>
        </div>

        {/* AI INSIGHTS ENGINE CONTAINER */}
        <div className="bg-gradient-to-r from-indigo-50/60 via-violet-50/40 to-transparent border border-indigo-100 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-inner">
          <div className="flex gap-4 items-start">
            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white p-3 rounded-xl shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-indigo-950 uppercase tracking-wider flex items-center gap-2">
                RevTrack AI Insights Engine
              </h4>
              <p className="text-slate-700 text-sm font-medium mt-1">{insight.trend}</p>
              <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{insight.ai_tip}</p>
            </div>
          </div>
          <button 
            type="button"
            onClick={simulateAiExtract}
            disabled={isAnalyzing}
            className="flex items-center gap-2 bg-white hover:bg-slate-50 text-indigo-600 border border-indigo-200 px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all disabled:opacity-50 whitespace-nowrap"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Running Audit...</span>
              </>
            ) : (
              <>
                <PieChart className="w-3.5 h-3.5" />
                <span>Trigger Live Audit</span>
              </>
            )}
          </button>
        </div>

        {/* DATA ARCHITECTURE SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* RECENT TRANSACTION COMPONENT TABLE */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-sm text-slate-900">Recent Accounting Streams</h3>
                <p className="text-xs text-slate-500 mt-0.5">All conversions calculated using real-time local FX multipliers</p>
              </div>
              <button type="button" className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors" title="Export CSV">
                <Download className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-400 uppercase tracking-widest font-bold text-[9px] border-b border-slate-100">
                    <th className="py-3.5 px-6">Client Identity</th>
                    <th className="py-3.5 px-6">Execution Date</th>
                    <th className="py-3.5 px-6">Settlement Network</th>
                    <th className="py-3.5 px-6 text-right">Value Amount ({selectedCurrency})</th>
                    <th className="py-3.5 px-6 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-600">
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900">{invoice.client_name}</td>
                      <td className="py-4 px-6 text-slate-400 font-mono">{invoice.invoice_date}</td>
                      <td className="py-4 px-6">
                        <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono text-[10px] border border-slate-200/40">
                          {invoice.type || "Card Rail"}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right font-bold text-slate-900 text-sm">
                        {convert(invoice.amountUSD !== undefined ? invoice.amountUSD : invoice.amount)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          invoice.status === 'Paid' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-amber-50 text-amber-700 border border-amber-100'
                        }`}>
                          {invoice.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* AI OPTIMIZATION PANEL */}
          <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 space-y-6">
            <div>
              <h3 className="font-bold text-slate-900">AI Document Processing</h3>
              <p className="text-xs text-slate-500 mt-0.5">Drop incoming invoices to instantly parse parameters into database entries.</p>
            </div>

            <div className="border-2 border-dashed border-slate-200 hover:border-indigo-400 rounded-xl p-8 text-center cursor-pointer transition-colors bg-slate-50/50 group">
              <div className="bg-white p-2.5 rounded-xl shadow-sm border border-slate-200/60 inline-block mb-3 group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="text-xs font-semibold text-slate-800">Upload processing invoice PDF</p>
              <p className="text-[10px] text-slate-400 mt-1 font-medium">Automatic recognition engine max 10MB</p>
            </div>

            <hr className="border-slate-100" />

            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Quick Analysis Distribution</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-600">Direct Invoice Inflow</span>
                    <span className="text-slate-900">74%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full rounded-full" style={{ width: '74%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-600">Stripe Subscriptions</span>
                    <span className="text-slate-900">26%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-violet-500 h-full rounded-full" style={{ width: '26%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* DETACHED SLIDE-OVER INPUT MODAL SYSTEM */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-end">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs" onClick={() => setIsModalOpen(false)}></div>
          <form onSubmit={handleCreateInvoice} className="relative w-full max-w-md h-full bg-white shadow-2xl p-6 flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-200">
            
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Record Manual Revenue Event</h3>
                  <p className="text-xs text-slate-500 mt-1">Select the asset currency code to ensure zero foreign exchange conversion drag.</p>
                </div>
                <button type="button" onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-500 p-1 bg-slate-50 rounded-lg border border-slate-200">✕</button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Business Client Label</label>
                  <input required type="text" value={newClient} onChange={(e) => setNewClient(e.target.value)} placeholder="e.g. Safari Safaris LTD" className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs focus:outline-none focus:border-indigo-600 font-medium" />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-1">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Currency</label>
                    <select 
                      value={inputCurrency} 
                      onChange={(e) => setInputCurrency(e.target.value)} 
                      className="w-full rounded-xl border border-slate-200 px-2 py-2 text-xs bg-white font-bold text-slate-800 focus:outline-none"
                    >
                      {Object.keys(CURRENCIES).map(key => (
                        <option key={key} value={key}>{key}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Transaction Value</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs">{CURRENCIES[inputCurrency].symbol}</span>
                      <input required type="number" step="0.01" value={newAmount} onChange={(e) => setNewAmount(e.target.value)} placeholder="0.00" className="w-full rounded-xl border border-slate-200 pl-8 pr-3.5 py-2 text-xs focus:outline-none focus:border-indigo-600 font-bold" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Settlement Date</label>
                  <input required type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs focus:outline-none focus:border-indigo-600 font-medium" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 rounded-xl border border-slate-200">Cancel</button>
              <button type="submit" className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm">Publish Entry</button>
            </div>

          </form>
        </div>
      )}

    </div>
  );
}
// import { useEffect, useState } from "react";
// import api from "./api";
// import {
//   LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, ResponsiveContainer,
// } from "recharts";

// function App({ onLogout }) {
//   const [stats, setStats] = useState(null);
//   const [monthly, setMonthly] = useState([]);
//   const [clients, setClients] = useState([]);
//   const [yearly, setYearly] = useState([]);
//   const [invoices, setInvoices] = useState([]); 
//   const [insights, setInsights] = useState("");
//   const [forecast, setForecast] = useState(null);
//   const [loading, setLoading] = useState(false);
  
//   useEffect(() => {
//     // Fetch aggregated user stats matching your backend router prefixes
//     api.get("/analytics/stats").then((res) => setStats(res.data)).catch(err => console.log(err));
//     api.get("/analytics/monthly").then((res) => setMonthly(res.data)).catch(err => console.log(err));
//     api.get("/analytics/clients/top").then((res) => setClients(res.data)).catch(err => console.log(err));
//     api.get("/analytics/yearly").then((res) => setYearly(res.data)).catch(err => console.log(err));
//     api.get("/analytics/insight").then((res) => setInsights(res.data.insight)).catch(err => console.log(err));
//     api.get("/analytics/forecast").then((res) => setForecast(res.data)).catch(err => console.log(err));
//     api.get("/invoices").then((res) => setInvoices(res.data)).catch(err => console.log(err));
//   }, []);

//   const uploadFile = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
    
//     const formData = new FormData();
//     formData.append("file", file);
//     setLoading(true);

//     try {
//       // Pointing to your production router endpoint path
//       await api.post("/invoices/ai-extract", formData);
//       // Refresh state
//       const updatedInvoices = await api.get("/invoices");
//       setInvoices(updatedInvoices.data);
//     } catch (err) {
//       alert("Error parsing or uploading file via AI extraction");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-900">Revenue Dashboard</h1>
//         <button onClick={onLogout} className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition">
//           Logout
//         </button>
//       </div>

//       {/* DASH CARDS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//         <div className="bg-white p-6 rounded-2xl shadow">
//           <p className="text-gray-500 font-medium">Total Revenue</p>
//           <h2 className="text-3xl font-bold text-blue-600">${stats?.total_revenue ?? 0}</h2>
//         </div>
//         <div className="bg-white p-6 rounded-2xl shadow">
//           <p className="text-gray-500 font-medium">Invoices Issued</p>
//           <h2 className="text-3xl font-bold text-green-600">{stats?.invoices ?? 0}</h2>
//         </div>
//         <div className="bg-white p-6 rounded-2xl shadow">
//           <p className="text-gray-500 font-medium">Next Month Forecast</p>
//           <h2 className="text-3xl font-bold text-purple-600">${forecast?.forecast_next_month ?? 0}</h2>
//         </div>
//       </div>

//       {/* AI INSIGHTS BLOCK */}
//       {insights && (
//         <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-2xl mb-8">
//           <h3 className="font-bold text-indigo-900 text-lg mb-1">🤖 AI Growth Insight</h3>
//           <p className="text-indigo-950">{insights}</p>
//         </div>
//       )}

//       {/* CHARTS CONTAINER */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//         <div className="bg-white p-6 rounded-2xl shadow">
//           <h2 className="text-xl font-bold mb-4 text-gray-800">Monthly Revenue Trend</h2>
//           <ResponsiveContainer width="100%" height={260}>
//             <LineChart data={monthly}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="total" stroke="#2563eb" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow">
//           <h2 className="text-xl font-bold mb-4 text-gray-800">Top Clients Revenue</h2>
//           <ResponsiveContainer width="100%" height={260}>
//             <BarChart data={clients}>
//               <XAxis dataKey="client" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="total" fill="#f59e0b" radius={[4, 4, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* ACTIONS ROW */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
//         <div className="bg-white p-6 rounded-2xl shadow lg:col-span-1">
//           <h2 className="text-xl font-bold mb-2 text-gray-800">Upload Invoice (PDF)</h2>
//           <p className="text-sm text-gray-500 mb-4">Extract and track client revenue automatically via AI parser.</p>
//           <input type="file" accept=".pdf" onChange={uploadFile} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
//           {loading && <p className="mt-2 text-sm text-blue-500 animate-pulse">Processing document...</p>}
//         </div>

//         {/* INVOICE DATA TABLE */}
//         <div className="bg-white p-6 rounded-2xl shadow lg:col-span-2 overflow-x-auto">
//           <h2 className="text-xl font-bold mb-4 text-gray-800">Recent Invoices</h2>
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="border-b text-gray-600 font-semibold text-sm">
//                 <th className="pb-3">Client</th>
//                 <th className="pb-3">Amount</th>
//                 <th className="pb-3">Date</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y text-gray-700 text-sm">
//               {invoices.map((inv) => (
//                 <tr key={inv.id} className="hover:bg-gray-50">
//                   <td className="py-3">{inv.client_name}</td>
//                   <td className="py-3 font-medium">${inv.amount}</td>
//                   <td className="py-3 text-gray-500">{inv.invoice_date}</td>
//                 </tr>
//               ))}
//               {invoices.length === 0 && (
//                 <tr>
//                   <td colSpan="3" className="py-4 text-center text-gray-400">No invoices generated yet.</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;