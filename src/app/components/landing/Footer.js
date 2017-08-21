import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "./Footer.c.scss";

const Footer = () =>
  <Grid fluid>
    <Row start="xs" className="junction_footer">
      <Col xsOffset={1} lg={3}>
        <h2>Event</h2>
        <p>Contact:<br />
          hello@hackjunction.com<br />
          partnerships@hackjunction.com
        </p>
      </Col>
      <Col xsOffset={1} lg={3}>
        <h2>For Media</h2>
        <p>
          We are excited too, but content is coming soon. Promise!
        </p>
      </Col>
      <Col xsOffset={1} lg={3}>
        <h2>Social</h2>
        <p><a href="https://www.facebook.com/hackjunction">
          <img className={styles.junction_footer_social_image} src="https://cdn0.iconfinder.com/data/icons/social-network-7/50/3-128.png" width="24px;" />
        Facebook</a></p>
        <p><a href="https://www.instagram.com/hackjunction/">
          <img className={styles.junction_footer_social_image} src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c521.png" width="24px;" />
        Instagram</a></p>
        <p><a href="https://blog.hackjunction.com/">
          <img className={styles.junction_footer_social_image} src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Medium-128.png" width="24px;" />
        Medium</a></p>
      </Col>
    </Row>
    <Row center="xs" className="subfooter">
      <p>Designed and developed by the amazing Junction Team</p>
    </Row>
  </Grid>;

export default Footer;
