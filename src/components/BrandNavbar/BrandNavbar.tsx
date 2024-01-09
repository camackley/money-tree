import './BrandNavbar.css';

import Navbar from "react-bootstrap/Navbar";

function BrandNavbar() {
  return (
    <Navbar className="px-4 py-0">
      <Navbar.Brand className="brand">
        <span>💲</span>
        money-tree
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <img
          src="http://placehold.it/48x48"
          alt="User avatar"
          className="rounded-circle"
        />
      </Navbar.Collapse>
    </Navbar>
  );
}

export { BrandNavbar };
