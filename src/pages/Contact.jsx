import "../styles/Contact.css";

function ContactCard({ title, children }) {
  return (
    <div className="contact-card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

import { useState } from "react";

function CopyRow({ label, value }) {
  const [copied, setCopied] = useState(false);

  function copyValue() {
    navigator.clipboard.writeText(value);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <div className="copy-row">
      <div className="copy-info">
        <span className="copy-label">{label}</span>
        <span className="copy-value">{value}</span>
      </div>

      <button onClick={copyValue}>{copied ? "Copied" : "Copy"}</button>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact</h1>
        <p>Interested in working together? Feel free to reach out!</p>
      </div>

      <div className="contact-grid">
        <ContactCard title="Direct">
          <CopyRow label="Email" value="banaszkiewicz.mateusz00@gmail.com" />

          <CopyRow label="Phone number" value="+48 570 835 286" />
        </ContactCard>

        <ContactCard title="Professional Links">
          <div className="contact-links">
            <a href="https://github.com/HyenaPirate" target="_blank">
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mateusz-banaszkiewicz/"
              target="_blank"
            >
              LinkedIn
            </a>

            <a
              href="/assets/files/CV_Mateusz_Banaszkiewicz_QR.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download my Resume
            </a>
          </div>
        </ContactCard>

        <ContactCard title="Location">
          <p>Zielona Góra, Poland</p>

          <p>Open to:</p>

          <ul>
            <li>Remote work</li>
            <li>Hybrid work</li>
            <li>On-site opportunities</li>
          </ul>
        </ContactCard>

        <ContactCard title="Looking For">
          <p>Interested in:</p>

          <ul>
            <li>Embedded Systems</li>
            <li>IoT Development</li>
            <li>C/C++ Programming</li>
            <li>Software Development</li>
            <li>Electronics Projects</li>
          </ul>
        </ContactCard>

        <ContactCard title="Availability">
          <p>Currently looking for professional opportunities.</p>

          <p>Available for:</p>

          <ul>
            <li>Full-time positions</li>
            <li>Freelance projects</li>
            <li>Technical cooperation</li>
          </ul>
        </ContactCard>
      </div>
    </div>
  );
}
