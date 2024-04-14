import { NavBar } from "../Navbar/nav-bar";
import { Footer } from "../footer/footer";
import "./PageLayout.css";

interface IPageLayout {
  children?: React.ReactNode;
}

const PageLayout = (props: IPageLayout) => {
  return (
    <>
      <div className="PageLayout">
        <NavBar />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
