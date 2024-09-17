import React from "react"; // Import the global CSS file

interface HamburgerIconProps {
  isOpen: boolean;
  toggleHamburger: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  isOpen,
  toggleHamburger,
}) => {
  return (
    <div className="hamburger" onClick={toggleHamburger}>
      <div className={`burger ${isOpen ? "burger1" : ""}`} />
      <div className={`burger ${isOpen ? "burger2" : ""}`} />
      <div className={`burger ${isOpen ? "burger3" : ""}`} />
    </div>
  );
};

export default HamburgerIcon;
