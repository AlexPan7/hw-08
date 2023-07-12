import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();

  const activePage = ({ isActive }: String) =>
    isActive ? `${styles.navActiveLink}` : "";

  const chngLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-slate-600 text-white">
      <div className="container py-4 flex items-center">
        <Link to="/" className="mr-8">
          <span className="sr-only">Your Company</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47 40"
            fill="none"
            className="h-8 w-8"
          >
            <path
              className="fill-white"
              d="M23.5 6.5C17.5 6.5 13.75 9.5 12.25 15.5C14.5 12.5 17.125 11.375 20.125 12.125C21.8367 12.5529 23.0601 13.7947 24.4142 15.1692C26.6202 17.4084 29.1734 20 34.75 20C40.75 20 44.5 17 46 11C43.75 14 41.125 15.125 38.125 14.375C36.4133 13.9471 35.1899 12.7053 33.8357 11.3308C31.6297 9.09158 29.0766 6.5 23.5 6.5ZM12.25 20C6.25 20 2.5 23 1 29C3.25 26 5.875 24.875 8.875 25.625C10.5867 26.0529 11.8101 27.2947 13.1642 28.6693C15.3702 30.9084 17.9234 33.5 23.5 33.5C29.5 33.5 33.25 30.5 34.75 24.5C32.5 27.5 29.875 28.625 26.875 27.875C25.1633 27.4471 23.9399 26.2053 22.5858 24.8307C20.3798 22.5916 17.8266 20 12.25 20Z"
            />
          </svg>
        </Link>
        <div className="flex gap-1">
          <strong>Set Language:</strong>
          <button onClick={() => chngLang("en")} className="hover:underline">
            Partner
          </button>
          /
          <button onClick={() => chngLang("ua")} className="hover:underline">
            Солов'їна
          </button>
        </div>
        <nav className="flex-1 flex justify-end gap-10">
          <ul className="flex gap-8">
            <li>
              <NavLink className={activePage} to="/">
                Form
              </NavLink>
            </li>
            <li>
              <NavLink className={activePage} to="/formik">
                Formik
              </NavLink>
            </li>
            <li>
              <NavLink className={activePage} to="/formikyup">
                Formik + Yup
              </NavLink>
            </li>
            <li>
              <NavLink className={activePage} to="/formhooks">
                Hook form
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
