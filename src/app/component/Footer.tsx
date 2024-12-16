export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Funiro Info */}
          <div>
            <h5 className="font-bold text-lg">Funiro</h5>
            <p className="text-gray-400">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
  
          {/* Links */}
          <div>
            <h5 className="font-bold text-lg">Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
          {/* Help */}
          <div>
            <h5 className="font-bold text-lg">Help</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>
  
          {/* Newsletter */}
          <div>
            <h5 className="font-bold text-lg">Newsletter</h5>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-4 py-2 rounded bg-gray-800 text-gray-300"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="text-center mt-8 text-gray-400">
          &copy; 2023 Furniro. All rights reserved.
        </div>
      </footer>
    );
  }
  