import dayjs from "dayjs";
import "./style/index.scss";

function Footer() {
  return <div className="footer">
    <div className="footer-left">-</div>
    <div className="footer-right">{dayjs().format("YYYY-MM-DD HH:mm:ss")}</div>
  </div>;
}

export default Footer;
