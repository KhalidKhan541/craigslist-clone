"use client";
import { Navbar } from "@/components/Navbar";
import { useState } from "react";

const categories = ["housing", "jobs", "for sale", "services", "community", "events"];

const listings = [
  { id: "1", title: "2BR Apartment for Rent - Downtown", price: 1800, category: "housing", neighborhood: "downtown", description: "Nice 2BR apartment, recently renovated" },
  { id: "2", title: "iPhone 15 Pro Max - Like New", price: 850, category: "for sale", neighborhood: "midtown", description: "Selling my iPhone 15 Pro Max, 256GB" },
  { id: "3", title: "Web Developer Needed", price: null, category: "jobs", neighborhood: "remote", description: "Looking for a React developer for freelance project" },
  { id: "4", title: "Free Moving Boxes", price: 0, category: "for sale", neighborhood: "eastside", description: "About 20 moving boxes, must pick up" },
  { id: "5", title: "Dog Walking Service", price: 15, category: "services", neighborhood: "westside", description: "Professional dog walking, /walk" },
  { id: "6", title: "Community Clean Up Day", price: null, category: "community", neighborhood: "downtown", description: "Join us this Saturday for neighborhood cleanup" },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filtered = selectedCategory === "all" ? listings : listings.filter(l => l.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-2 flex-wrap mb-6">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} className={px-4 py-2 rounded text-sm font-medium }>{cat}</button>
          ))}
          <button onClick={() => setSelectedCategory("all")} className={px-4 py-2 rounded text-sm font-medium }>all</button>
        </div>
        <div className="bg-white rounded-lg divide-y">
          {filtered.map((l) => (
            <div key={l.id} className="flex items-start gap-4 p-4 hover:bg-gray-50 cursor-pointer">
              <div className="w-5 h-5 mt-1 bg-gray-200 rounded flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <h3 className="font-medium hover:text-purple-600">{l.title}</h3>
                  {l.price !== null && <span className="font-bold text-green-700"></span>}
                </div>
                <p className="text-sm text-gray-500">{l.category} • {l.neighborhood}</p>
                <p className="text-sm text-gray-600 mt-1">{l.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
