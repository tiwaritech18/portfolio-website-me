import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react"; // Import specific icons
import './Footer.css'; // Import your custom CSS file

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footerc">
          <h3>{`Copyright © ${currentYear}. All rights are reserved`}</h3>
          <div className="footerc__socials">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                aria-label={link.label}
                target="_blank"
                rel="noreferrer"
                href={link.href}
              >
                {link.label === "LinkedIn" && <IconBrandLinkedin />} {/* Use conditional rendering for each icon */}
                {link.label === "GitHub" && <IconBrandGithub />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/Therohittiwari/",
  },
  {
    label: "GitHub",
    href: "https://github.com/tiwaritech18",
  },
  // Add more social links as needed (e.g., Twitter, Stack Overflow)
];
