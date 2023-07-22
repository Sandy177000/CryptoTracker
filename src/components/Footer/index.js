import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./styles.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div id="footer" className="footer-wrapper">
      <div className="socials">
        <a href="https://www.instagram.com/sandeshyele2000">
          <InstagramIcon className="socialIcons" />
        </a>
        <a href="https://www.linkedin.com/in/sandesh-yele-9b6a121bb/">
          <LinkedInIcon className="socialIcons" />
        </a>
        <a href="https://github.com/Sandy177000">
          <GitHubIcon className="socialIcons" />
        </a>
        <a href="mailto:sandeshyele2000@gmail.com">
          <EmailIcon className="socialIcons" />
        </a>
      </div>
      
      <p className="heading">-Sandesh Yele</p>
    </div>
  );
}

export default Footer;

