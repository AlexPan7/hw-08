import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PublicLayout = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <main className="flex-1 py-8">
        <div className="container">
          <div className="max-w-[600px] mx-auto">
            <div className="flex items-center">
              <h1>{t("greeting")}</h1>
            </div>
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
