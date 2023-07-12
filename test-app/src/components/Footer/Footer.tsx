const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-600 text-white">
      <div className="container py-4 text-center">
        <p>&copy; Some APP {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
