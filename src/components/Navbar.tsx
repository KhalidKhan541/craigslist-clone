"use client";
export function Navbar() {
  return (
    <nav className="bg-purple-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold text-purple-600">craigslist</span>
          <span className="ml-4 text-gray-600">san francisco bay area</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <button className="hover:text-purple-600">post</button>
          <button className="hover:text-purple-600">account</button>
        </div>
      </div>
    </nav>
  );
}
