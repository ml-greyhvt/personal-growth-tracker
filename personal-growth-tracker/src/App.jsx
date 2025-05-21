import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-blue-600 text-white py-6 shadow-md text-center">
        <h1 className="text-3xl font-bold">🌱 Personal Growth Tracker</h1>
        <p className="text-sm mt-1">Stay consistent. Stay intentional.</p>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-8">
        {/* Habit Tracker */}
        <section className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">🧠 Habit Tracker</h2>
        </section>

        {/* Mood Logger */}
        <section className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">😊 Mood Logger</h2>
        </section>

        {/* Journal */}
        <section className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">📓 Daily Journal</h2>
        </section>

        {/* Progress Overview */}
        <section className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">📊 Progress Overview</h2>
        </section>
      </main>

      <footer className="text-center text-xs text-gray-500 mt-10 mb-4">
      Built with ❤ ️ by L.M Odiwuor
      </footer>  
    </div>
  );
}

