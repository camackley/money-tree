import "./BasicLayout.css";
import { BrandNavbar } from "../../components/BrandNavbar/BrandNavbar"

function BasicLayout(props: any) {
  return (
    <span>
      <BrandNavbar />
      <div className="body">
        {props.children}
      </div>
    </span>
  );
}

export { BasicLayout }
