const Navbar = () => {
  const links = ["HOME", "PROJECTS", "ABOUT", "CONTACT"];

   return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-dark-700">
      <span className="text-neon-green text-lx font-bold tracking-wider">
         [&gt;_]
      </span>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link} className="">
            <a className="text-muted-gray hover:text-white transition-colors duration-200 text-sm tracking-widest" href="#">{link}</a>
          </li>
        ))}
      </ul> 
    </nav>
  );
}   

export default Navbar;