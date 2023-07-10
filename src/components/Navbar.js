import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg   ">
        <div className=" container d-flex justify-content-between">
          <ul className="navbar-lists navbar-nav d-flex">
            <li>
              <NavLink to="/" className="nav-list">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-list">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/tests" className="nav-list">
                Tests
              </NavLink>
            </li>
            <li>
              <NavLink to="/home-collection" className="nav-list">
                Home Collection
              </NavLink>
            </li>
            <li>
              {/* <NavLink to="/services" className="nav-list">
                Services
              </NavLink> */}
              <li class="menuItem">
                <NavLink to="/services" className="nav-list ">
                  Services
                </NavLink>
                <ul class="subMenu">
                  <li class="subMenuItem menuItem">
                    <NavLink to="/services" className="nav-list sub-nav-list ">
                      Health Conditions
                    </NavLink>
                  </li>
                  <li class="subMenuItem menuItem">
                    <NavLink
                      to="/radiology-services"
                      className="nav-list sub-nav-list"
                    >
                      Radiology Services
                    </NavLink>
                  </li>
                </ul>
              </li>
            </li>
            <li>
              <NavLink to="/packages" className="nav-list">
                Packages
              </NavLink>
            </li>
            <li>
              <NavLink to="/locate-clinic" className="nav-list">
                Locate Clinic
              </NavLink>
            </li>
          </ul>
          <div className="cart-icon">
            <NavLink to="/cart" className="cart-icon-box">
              <FaShoppingCart className="cart-icon" />
            </NavLink>
          </div>
          {/* <div className="cart-icon">
            <NavLink to="/cart" className="nav-list">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#ffffff"
                class="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </NavLink>
          </div> */}
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
const Wrapper = styled.section`
  .nav-list {
    font-size: 18px;
    font-weight: 500;
    border-bottom: 2px solid transparent;
    line-height: 1.8;
    transition: 0.3s;
    &:hover {
      border-bottom: 2px solid #fff;
    }
  }
  .menuItem {
    list-style: none;
    position: relative;
    /* z-index: 2; */

    &:hover .subMenu {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
    }
  }

  .subMenu {
    width: 250px;
    display: none;
    /* left: 0;
    top: 0; */
    background-color: #00aeef;
    position: absolute;
    top: 1.8rem;

    /* z-index: 1; */
  }
  .sub-nav-list {
    padding: 15px;
    font-size: 16px;

    /* margin-bottom: 2px solid red; */
    &:hover {
      padding-bottom: 0;
      transition: 0.3s;
      border-bottom: 1px solid #fff;
      overflow: hidden;
    }
  }

  .navbar {
    background-color: #00aeef;
  }
`;
