import { Button } from "@/components/ui/button";
import { FaGithub, FaDiscord, FaEnvelope, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex p-2 flex-col sm:flex-row justify-center min-w-0 w-full relative">
      <div
        className="flex px-4 py-2 gap-4 justify-between items-center w-full relative"
        style={{ maxWidth: "var(--responsive-width-m)" }}
      >
        <span className="font-body font-s" style={{ color: "var(--neutral-on-background-strong)" }}>
          <span style={{ color: "var(--neutral-on-background-weak)" }}>© {`2025${new Date().getFullYear() > 2025 ? '-' + new Date().getFullYear() : ''}`} /</span>
          <span className="px-1">zPleum (Wiraphat Makwong)</span>
        </span>

        <div className="flex gap-4 relative">
          <Button
            variant="ghost"
            size="sm"
            className="radius-full hover:bg-[var(--neutral-background-alpha-medium)] p-2"
            asChild
          >
            <a
              href="https://github.zpleum.site/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="radius-full hover:bg-[var(--neutral-background-alpha-medium)] p-2"
            asChild
          >
            <a
              href="https://facebook.zpleum.site/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={16} />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="radius-full hover:bg-[var(--neutral-background-alpha-medium)] p-2"
            asChild
          >
            <a
              href="https://discord.zpleum.site/"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
            >
              <FaDiscord size={16} />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="radius-full hover:bg-[var(--neutral-background-alpha-medium)] p-2"
            asChild
          >
            <a
              href="https://mail.zpleum.site/"
              aria-label="Email"
            >
              <FaEnvelope size={16} />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
