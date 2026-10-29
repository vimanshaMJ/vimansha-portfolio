'use client';

import { useEffect, useState } from 'react';
import styles from './Contact.module.css';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!sent) return;
    const timer = setTimeout(() => setSent(false), 3000);
    return () => clearTimeout(timer);
  }, [sent]);

  // TODO: wire this up to a real backend/email service. Currently a visual stub.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.group}>
        <label className={styles.formLabel} htmlFor="contact-name">
          Your Name
        </label>
        <input id="contact-name" type="text" className={styles.input} placeholder="Jane Smith" />
      </div>
      <div className={styles.group}>
        <label className={styles.formLabel} htmlFor="contact-email">
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          className={styles.input}
          placeholder="jane@example.com"
        />
      </div>
      <div className={styles.group}>
        <label className={styles.formLabel} htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          className={styles.textarea}
          placeholder="Tell me about your project or opportunity…"
        />
      </div>
      <button type="submit" className={styles.submit} data-sent={sent}>
        {sent ? 'Message Sent ✓' : 'Send Message →'}
      </button>
    </form>
  );
}
