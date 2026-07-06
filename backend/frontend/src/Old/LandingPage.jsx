import { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 border-b">
        <h1 className="text-2xl font-bold">LedgerAI</h1>

        <div className="space-x-4">
          <a href="#features" className="text-gray-600 hover:text-black">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-black">Pricing</a>
          <a href="#cta" className="bg-black text-white px-4 py-2 rounded-lg">
            Get Started
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-24 px-6 bg-gray-50">
        <h2 className="text-5xl font-bold leading-tight">
          Know exactly how your business is growing — in seconds.
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Turn invoices into insights, track revenue, and predict your income automatically with AI-powered analytics.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#cta"
            className="bg-black text-white px-6 py-3 rounded-xl text-lg"
          >
            Start Free
          </a>

          <a
            href="#pricing"
            className="border px-6 py-3 rounded-xl text-lg"
          >
            View Pricing
          </a>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">
          Most freelancers don’t actually know their numbers
        </h3>

        <ul className="space-y-4 text-gray-700 text-lg">
          <li>• How much did I really make last month?</li>
          <li>• Which clients are actually profitable?</li>
          <li>• Am I growing or just guessing?</li>
        </ul>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-gray-50 py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">
          Everything you need in one dashboard
        </h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            ["📊 Analytics", "Revenue trends, monthly & yearly breakdowns"],
            ["🤖 AI Insights", "Understand why revenue goes up or down"],
            ["📈 Forecasting", "Predict future income automatically"],
            ["💳 Profit Tracking", "Revenue vs expenses clarity"],
            ["📤 Export Reports", "Download Excel & PDF reports"],
            ["⚡ Fast Dashboard", "Real-time invoice tracking"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-bold text-xl mb-2">{title}</h4>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">
          Simple pricing that grows with you
        </h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* FREE */}
          <div className="border rounded-2xl p-6 text-center">
            <h4 className="text-xl font-bold">Starter</h4>
            <p className="text-3xl font-bold mt-4">$0</p>
            <p className="text-gray-600 mb-6">For trying things out</p>
            <ul className="text-sm space-y-2 mb-6">
              <li>✔ 20 invoices</li>
              <li>✔ Basic dashboard</li>
              <li>✔ Monthly charts</li>
            </ul>
            <button className="border px-4 py-2 rounded-lg w-full">
              Start Free
            </button>
          </div>

          {/* PRO */}
          <div className="border-2 border-black rounded-2xl p-6 text-center shadow-lg">
            <h4 className="text-xl font-bold">Pro</h4>
            <p className="text-3xl font-bold mt-4">$9</p>
            <p className="text-gray-600 mb-6">Most popular</p>
            <ul className="text-sm space-y-2 mb-6">
              <li>✔ Unlimited invoices</li>
              <li>✔ Full analytics</li>
              <li>✔ AI insights</li>
              <li>✔ Export reports</li>
            </ul>
            <button className="bg-black text-white px-4 py-2 rounded-lg w-full">
              Go Pro
            </button>
          </div>

          {/* BUSINESS */}
          <div className="border rounded-2xl p-6 text-center">
            <h4 className="text-xl font-bold">Business</h4>
            <p className="text-3xl font-bold mt-4">$19</p>
            <p className="text-gray-600 mb-6">For serious teams</p>
            <ul className="text-sm space-y-2 mb-6">
              <li>✔ AI forecasting</li>
              <li>✔ Profit tracking</li>
              <li>✔ Expense management</li>
              <li>✔ Priority support</li>
            </ul>
            <button className="border px-4 py-2 rounded-lg w-full">
              Upgrade
            </button>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="bg-black text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold">
          Stop guessing your income.
        </h3>

        <p className="mt-4 text-gray-300">
          Start tracking your business properly today.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg text-black"
          />

          <button className="bg-white text-black px-6 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-6 text-center text-gray-500">
        © {new Date().getFullYear()} LedgerAI. All rights reserved.
      </footer>

    </div>
  );
}