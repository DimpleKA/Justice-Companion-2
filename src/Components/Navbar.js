import React from "react";
import "./Navbar.css"; // You can define your additional styles in Navbar.css

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {/* Collapsible content */}
      <div
        className="collapse"
        id="navbarToggleExternalContent"
        data-bs-theme="dark"
      >
        <div className="bg-dark p-4">
          <h5 className="text-body-emphasis h4 py-2">मुख्य पृष्ठ</h5>
          <h5 className="text-body-emphasis h4 py-2">नि:शुल्क कानूनी सहायता</h5>
          <h5 className="text-body-emphasis h4 py-2">लॉगिन/रजिस्ट्रेशन</h5>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
