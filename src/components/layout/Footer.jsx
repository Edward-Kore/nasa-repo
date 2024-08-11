function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <span>&copy; {getCurrentYear()} NASA-Git</span>
    </footer>
  );
}

export default Footer;
