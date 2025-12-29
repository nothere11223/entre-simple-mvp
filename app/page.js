"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    { name: "Electrician", area: "Hayatabad", phone: "0300-1234567" },
    { name: "Plumber", area: "Saddar", phone: "0312-7654321" },
    { name: "AC Repair", area: "University Road", phone: "0333-5555555" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-bold text-green-600">
          Peshawar Services
        </h1>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className="hidden md:flex gap-6 text-gray-600">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Add Service</a>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-2">
          <a className="block">Home</a>
          <a className="block">Services</a>
          <a className="block">Add Service</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <h2 className="text-3xl font-bold mb-4">
          Find Trusted Local Services
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Discover electricians, plumbers, and repair experts near you in
          Peshawar.
        </p>
      </section>

      {/* Services Cards */}
      <section className="grid gap-6 px-6 pb-12 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-6"
          >
            <h3 className="text-lg font-semibold">
              {service.name}
            </h3>
            <p className="text-gray-500">
              Area: {service.area}
            </p>
            <p className="text-gray-500">
              📞 {service.phone}
            </p>

            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              Contact
            </button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-500">
        MVP Prototype – Entrepreneurship Class
      </footer>
    </div>
  );
}
