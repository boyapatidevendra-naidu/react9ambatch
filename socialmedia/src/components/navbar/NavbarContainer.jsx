
import Logo from "./Logo";
import Profile from "./Profile";
import Navigation from "./Navigation";

const NavbarContainer = () => {
  return (
    <>
      <article>
        <Logo />
      </article>
      <article>
        <Navigation />
      </article>
      <article>
        <Profile />
      </article>
    </>
  );
};

export default NavbarContainer;
