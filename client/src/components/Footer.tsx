import { Link } from "wouter";
import { SiLinkedin, SiX, SiFacebook } from "react-icons/si";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Career", path: "/career" },
  { name: "Contact Us", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange rounded-md flex items-center justify-center">
                <span className="text-orange-foreground font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-lg">Suviksan Technologies</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Empowering businesses with cutting-edge IT solutions in Data Analytics,
              Cyber Security, and Data Security.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <button className="text-primary-foreground/80 hover:text-orange transition-colors text-sm">
                      {link.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-orange transition-colors"
                data-testid="link-social-linkedin"
              >
                <SiLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-orange transition-colors"
                data-testid="link-social-twitter"
              >
                <SiX className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-orange transition-colors"
                data-testid="link-social-facebook"
              >
                <SiFacebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; 2025 Suviksan Technologies. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
