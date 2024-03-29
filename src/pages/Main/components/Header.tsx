export const Header = () => (
  <header className="flex justify-between items-center bg-primary p-body">
    <a href="#" className="font-bold text-lg">
      Web3
    </a>
    <ul className="items-center hidden md:flex gap-16 text-sm">
      <li>
        <a href="#">About us</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Let's talk</a>
      </li>
    </ul>
  </header>
);
