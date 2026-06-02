import { useEffect, useState } from "react";
import api from "./api";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

function App() {
  const [stats, setStats] = useState(null);
  const [monthly, setMonthly] = useState([]);
  const [clients, setClients] = useState([]);
  const [yearly, setYearly] = useState([]);
  const [goal, setGoal] = useState(null);
  const [invoices, setInvoices] = useState([]); 
  
  useEffect(() => {
    api.get("/stats").then((res) => setStats(res.data));
    api.get("/analytics/monthly").then((res) => setMonthly(res.data));
    api.get("/clients/top").then((res) => setClients(res.data));
    api.get("/analytics/yearly").then((res) => setYearly(res.data));
    api.get("/goal").then((res) => setGoal(res.data));
  api.get("/invoices").then(res => setInvoices(res.data));
  }, []);

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    await api.post("/upload-invoice", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">
        Revenue Dashboard
      </h1>

      {/* DASH CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Total Revenue</p>
          <h2 className="text-2xl font-bold">
            {stats?.total_revenue ?? 0}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Invoices</p>
          <h2 className="text-2xl font-bold">
            {stats?.invoices ?? 0}
          </h2>
        </div>
      </div>

      {/* GOAL PROGRESS */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="text-xl font-bold mb-4">Goal Progress</h2>

        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${goal?.progress || 0}%` }}
          />
        </div>

        <p className="mt-2 text-gray-600">
          {goal?.progress || 0}% of {goal?.goal || 0}
        </p>
      </div>

      {/* MONTHLY LINE */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="text-xl font-bold mb-4">Monthly Revenue Trend</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthly}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="total" stroke="#2563eb" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* MONTHLY BAR */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="text-xl font-bold mb-4">Monthly Comparison</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthly}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* TOP CLIENTS */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="text-xl font-bold mb-4">Top Clients</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={clients}>
            <XAxis dataKey="client" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* YEARLY CHART */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="text-xl font-bold mb-4">Yearly Revenue</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={yearly}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="total" stroke="#ef4444" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* UPLOAD */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-bold mb-4">Upload Invoice (PDF)</h2>

        <input type="file" onChange={uploadFile} />
      </div>
<div className="bg-white p-6 rounded-2xl shadow mb-8">
  <h2 className="text-xl font-bold mb-4">Invoices</h2>

  <table className="w-full">
    <thead>
      <tr>
        <th>Client</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>

    <tbody>
      {invoices.map(inv => (
        <tr key={inv.id}>
          <td>{inv.client_name}</td>
          <td>{inv.amount}</td>
          <td>{inv.invoice_date}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  );
}

export default App;