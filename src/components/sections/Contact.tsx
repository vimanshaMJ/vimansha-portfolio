import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { contactIntro, contactLinks } from '@/data/contact';
import ContactForm from './ContactForm';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <Section id="contact" className={styles.contact}>
      <SectionHeader
        number="05"
        title={
          <>
            Get In <em>Touch</em>
          </>
        }
      />
      <div className={styles.inner}>
        <div className={styles.left}>
          <p>{contactIntro}</p>
          <div className={styles.links}>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.link}
                {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                <span className={styles.icon}>{link.icon}</span>
                <div className={styles.linkText}>
                  <div className={styles.linkLabel}>{link.label}</div>
                  <div className={styles.linkValue}>{link.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
