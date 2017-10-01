import React from "react";
import { slide as Menu } from "react-burger-menu";
import Media from "react-media";
import styles from "./TopNav.c.scss";

class MobileNav extends React.Component {
  render() {
    return (
      <Media query="(max-width: 1000px)">
        <Menu pageWrapId={"junction_website"} outerContainerId={"app"} right>
          <nav className={styles.site_nav}>
            <ul center="xs">
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/junction2017">JUNCTION2017</a>
              </li>
              <li>
                <a href="/all-tracks">TRACKS</a>
              </li>
              <li>
                <a href="/partners">PARTNERS</a>
              </li>
              <li>
                <a href="https://register.hackjunction.com/">APPLY</a>
              </li>
            </ul>
          </nav>
        </Menu>
      </Media>
    );
  }
}

export default MobileNav;