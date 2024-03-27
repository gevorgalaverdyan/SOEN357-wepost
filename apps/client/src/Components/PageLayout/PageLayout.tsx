import Navbar from "../Navbar/Navbar";
import "./PageLayout.css";

interface IPageLayout {
  children?: React.ReactNode;
}

const PageLayout = (props: IPageLayout) => {
  return (
    <div className="PageLayout">
      <Navbar />
      {props.children}
    </div>
  );
};

export default PageLayout;
