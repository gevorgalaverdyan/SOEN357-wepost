import { NavBar } from "../component/nav-bar";
import "./PageLayout.css";

interface IPageLayout {
  children?: React.ReactNode;
}

const PageLayout = (props: IPageLayout) => {
  return (
    <div className="PageLayout">
      <NavBar />
      {props.children}
    </div>
  );
};

export default PageLayout;
