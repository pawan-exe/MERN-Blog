import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link to="/">
              <img
                className="w-32 h-18  rounded-md"
                src="https://i.imgur.com/ryQhcXz.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8  mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://my-portfolio-pvg.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Projects
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pawan's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/pawan-exe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/pawan-gupta-59a61b247/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linked In
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Pawan's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/profile.php?id=100028529587290&mibextid=ZbWKwL"
              target="_blank"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/_pawan_zx.03?igsh=MXBiYzd1NmwyYXpiZw=="
              target="_blank"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://x.com/PawanGu82239136?t=LtUVyTiRrcM6RIRgtB_zSQ&s=09"
              target="_blank"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://github.com/pawan-exe"
              target="_blank"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/pawan-gupta-59a61b247/"
              target="_blank"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
