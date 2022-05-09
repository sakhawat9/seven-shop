import { Fragment } from "react";
import { FiChevronDown } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const HeaderTop = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="header-top">
      <h2>Header Top</h2>
    </div>
  );
};

export default HeaderTop;
