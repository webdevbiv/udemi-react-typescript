import {ReactNode} from "react";

interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

function Header({image, children}: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}

export default Header;
