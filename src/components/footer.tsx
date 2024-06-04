const Footer = () => {
  return (
    <footer className="py-4 text-muted-foreground">
      <p className="text-sm">
        © {new Date().getFullYear()} Copyright{" "}
        <span className="font-semibold">Zion Store</span>.
      </p>
    </footer>
  );
};

export default Footer;
