export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* ================= TOP GRID ================= */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">FIP</h2>
            <p className="text-sm leading-relaxed">
              Your trusted partner for hassle-free finance, smart investments,
              and property solutions.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Finance</li>
              <li className="hover:text-white cursor-pointer">Investments</li>
              <li className="hover:text-white cursor-pointer">Property</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* FINANCE OPTIONS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Finance Options</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Personal Loans</li>
              <li className="hover:text-white cursor-pointer">Business Finance</li>
              <li className="hover:text-white cursor-pointer">Land Finance</li>
              <li className="hover:text-white cursor-pointer">Gold Loans</li>
              <li className="hover:text-white cursor-pointer">Export Finance</li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <p className="text-sm">
              Stay updated with our latest offers and investment opportunities.
            </p>
          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            © 2026 FIP - Model Finance I Investment I Property. All rights reserved.
          </p>
         
        </div>

      </div>
    </footer>
  );
}
