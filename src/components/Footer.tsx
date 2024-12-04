import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Modern Gym</h3>
            <p className="text-gray-400">
              Il tuo percorso verso il benessere inizia qui.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-4">Orari</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Lun - Ven: 6:00 - 23:00</li>
              <li>Sab - Dom: 8:00 - 22:00</li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Via Example 123, Milano</li>
              <li>+39 02 1234567</li>
              <li>info@moderngym.it</li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Modern Gym. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}