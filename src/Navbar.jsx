function Navbar() {
  return (
    <nav className="glass navbar">
      <a className="nav-brand" href="#hero">Ali Haider</a>

      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contacts</a>
        <a href="#skills">Skills</a>
      </div>

      <a className="nav-tech-btn" href="#tech-dna">Tech DNA</a>
    </nav>
  );
}

export default Navbar;