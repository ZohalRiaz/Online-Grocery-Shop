import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, LogOut, ShoppingBasket } from "lucide-react";
import Brand from "./components/Brand";
//import HomePage from "./pages/HomePage";
/*import AuthPage from "./pages/AuthPage";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";
import Feedback from "./components/Feedback";
import { useAuth } from "./context/AuthContext";
import { useCart } from "./context/CartContext";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage, { OrderDetails } from "./pages/OrdersPage";
import AdminPage from "./pages/AdminPage";
import CategoriesPage from "./pages/CategoriesPage";
*/
function NavLink({ href, active, children, className = "" }) {
  return (
    <a
      href={href}
      aria-current={active ? "page" : undefined}
      className={`nav-link ${active ? "is-active" : ""} ${className}`}
    >
      {children}
    </a>
  );
}

function currentRoute() {
  return window.location.hash.slice(1) || "/";
}

function App() {
  const [route, setRoute] = useState(currentRoute);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");


  return (
    <div >
      <div className="bg-linear-to-r from-leaf-900 via-leaf-800 to-leaf-900 px-4 py-2 text-center text-[10px] tracking-[0.4px] text-white/90 sm:text-xs">
        <span className="mr-2 inline-block size-1.5 rounded-full bg-lime align-middle" />
        A little fresher. A little simpler.{" "}
        <span className="ml-3 opacity-70 max-sm:hidden">
          Welcome to Fresh Mart.
        </span>
      </div>
      <header className="sticky top-0 z-30 border-b border-white/10 bg-linear-to-b from-leaf-900 to-forest text-white shadow-[0_12px_30px_-20px_rgba(15,46,27,0.8)]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-3.5 md:px-10 md:py-4">
          <Brand light className="text-2xl sm:text-[26px]" />
          <nav
            aria-label="Main navigation"
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-white max-sm:order-3 max-sm:w-full max-sm:justify-between sm:gap-x-2 md:gap-x-3 md:text-[13px]"
          >
            <NavLink href="#/" active={route === "/"}>
              Home
            </NavLink>
            <NavLink
              href="#/products"
              active={route.split("?")[0] === "/products" || !!productId}
            >
              Products
            </NavLink>
            <NavLink href="#/categories" active={route === "/categories"}>
              Categories
            </NavLink>
            <NavLink
              href="#/orders"
              active={route.startsWith("/orders")}
            >
              My orders
            </NavLink>
            <NavLink
              href="#/cart"
              active={route === "/cart"}
              className="inline-flex items-center gap-1.5"
            >
              <ShoppingBasket size={16} /> Cart
              <b
                key={cart.count}
                className="animate-pop rounded-full bg-linear-to-b from-leaf-500 to-leaf-800 px-[7px] py-0.5 text-[10px] text-white"
                aria-label={`${cart.count} items`}
              >
                {cart.count}
              </b>
            </NavLink>
            {user?.is_staff && (
              <NavLink href="#/admin" active={onAdminRoute}>
                Dashboard
              </NavLink>
            )}
          </nav>
          <div className="flex items-center gap-3 text-xs text-white/90">
            {!ready ? (
              <span className="text-white/70">Loading account…</span>
            ) : user ? (
              <>
                <span className="grid size-8 place-items-center rounded-full bg-white/10 text-[12px] font-bold uppercase text-lime ring-1 ring-white/15">
                  {user.full_name?.[0]}
                </span>
                <span className="font-medium max-sm:hidden">
                  {user.full_name}
                </span>
                <button
                  className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white transition hover:border-lime/60 hover:bg-white/10"
                  onClick={() =>
                    logout().catch((error) => setError(error.message))
                  }
                >
                  <LogOut size={13} /> Log out
                </button>
              </>
            ) : (
              <a
                href="#/login"
                className="btn gap-1.5 px-4 py-2 text-[12px]"
              >
                Login / Account <ArrowRight size={14} />
              </a>
            )}
          </div>
        </div>
      </header>

    </div>
  );
}

export default App;