/*eslint-disable */
import styled from 'styled-components';
import { FaAngleRight, FaAngleLeft, FaUser, FaChartBar, FaBriefcase, FaCode, FaImages, FaAddressCard, FaComment, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/User avatar.svg';

const ICON_SIZE = "20px";

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15%;
  height: 100vh;
  background-color: var(--text-color);
  padding: 0 1rem 0 1rem;
  transition: transform 1s;
  .active{
    background-color: var(--main-color)
    color: #fff;
  }

  &.navbar {
    transform: translateX(-100%);
  }

  @media only screen and (max-width: 768px) {
    width: 40%;
    padding: 10px;
  }

  @media only screen and (max-width: 768px) {
    span {
      display: none;
    }
    h1 {
      display: none;
    }
    width: 50px;
    padding: 10px;
  }

  h1 {
    color: #fff;
    font-size: 19px;
    font-weight: 700;
    margin-top: -55px;
  }
`;


const NavBtn = styled.button`
  position: absolute;
  transform: translateX(38px);
  top: 20px;
  right: 0;
  width: 30px;
  height: 50px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--text-color);
  outline: none;
  border: none;
  font-size: 1rem;
  padding: 5px 10px;
  cursor: pointer;
  color: #fff;
  @media only screen and (max-width: 768px) {
    position: absolute;
    transform: translateX(38px);
    top: 20px;
    right: 20px;
    width: 30px;
    height: 40px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--text-color);
    outline: none;
    border: none;
    font-size: 1rem;
    padding: 5px 10px;
    cursor: pointer;
    color: #fff;
  }
`;

const Logo = styled(NavLink)`
  display: block;
  width: 100px;
  padding: 25px;
  background: transparent;

  @media only screen and (max-width: 768px) {
    width: 40px;
    padding: 10px 0;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  color: rgba(102, 112, 129, 1);
  text-decoration: none;
  padding: 10px 1rem;
  border-radius: 5px;
  margin-bottom: 5px;

  &:hover  {
    background-color: #ddd;
    color: var(--main-color);
  }

  p {
    margin-left: 10px;
  }
`;

const MobileNav = styled.div`
  // background-color: #753ffd;
  width: 100%;
  height: 40px;
  display: none;
`;

const MobileNavBtn = styled.button`
  color: #fff;
  background: transparent;
  outline: none;
  border: none;
  margin: 0 10px;
`;

export function Navigation({ visible, show }) {
  return (
    <>
      <MobileNav>
        <MobileNavBtn onClick={() => show(!visible)}>
          <FaBars size={24} />
        </MobileNavBtn>
      </MobileNav>
      <Nav className={!visible ? "navbar" : ""}>
        <NavBtn type="button" onClick={() => show(!visible)}>
          {!visible ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
        </NavBtn>
        <Logo to="/">
          <img src={logo} alt="logo" />
        </Logo>
        <h1>John Doe</h1>
        <div className="links nav-top">
          <NavLinkStyled to="/inner/about">
            <FaUser size={ICON_SIZE} />
            <p>About Me</p>
          </NavLinkStyled>
          <NavLinkStyled to="/inner/education">
            <FaChartBar size={ICON_SIZE} />
            <p>Education</p>
          </NavLinkStyled>
          <NavLinkStyled to="/inner/experience">
            <FaBriefcase size={ICON_SIZE} />
            <p>Experience</p>
          </NavLinkStyled>
          <NavLinkStyled to="/inner/skill">
            <FaCode size={ICON_SIZE} />
            <p>Skills</p>
          </NavLinkStyled>
          <NavLinkStyled to="/inner/portfolio">
            <FaImages size={ICON_SIZE} />
            <p>Portfolio</p>
          </NavLinkStyled>
          <NavLinkStyled to="/inner/contact">
            <FaAddressCard size={ICON_SIZE} />
            <p>Contacts</p>
          </NavLinkStyled>
          <NavLinkStyled to="/inner/feedback">
            <FaComment size={ICON_SIZE} />
            <p>Feedback</p>
          </NavLinkStyled>
        </div>
        <div className="links">
          <NavLinkStyled to="/">
            < FaAngleLeft size={ICON_SIZE} />
            <p>Go Back</p>
          </NavLinkStyled>
        </div>
      </Nav>
    </>
  );
}

