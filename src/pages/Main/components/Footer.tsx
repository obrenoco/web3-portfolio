export const Footer = () => (
  <footer className="mx-body pt-16 pb-4 text-white" id="contact">
    <a
      href="https://www.linkedin.com/in/brenoromeiro/"
      className="hover:text-primary transition-all duration-300"
      target="_blank"
    >
      <h3 className="text-center mb-16 text-4xl">Breno Romeiro</h3>
    </a>
    <ul className="uppercase flex items-center justify-between font-light flex-col md:flex-row gap-8 text-center md:text-left md:gap-0 text-xs">
      <li>terms and agreements</li>
      <li>@2024 breno romeiro all rights reserved</li>
      <li>privacy policy</li>
    </ul>
  </footer>
);
