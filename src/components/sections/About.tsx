import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { aboutParagraphs, highlights, infoCards } from '@/data/about';
import styles from './About.module.css';

export default function About() {
  return (
    <Section id="about" className={styles.about}>
      <SectionHeader
        number="01"
        title={
          <>
            About <em>Me</em>
          </>
        }
      />
      <div className={styles.grid}>
        <div className={styles.text}>
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className={styles.pills}>
            {highlights.map((item) => (
              <span key={item} className={styles.pill}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.cards}>
          {infoCards.map((card) => (
            <div key={card.label} className={styles.card}>
              <div className={styles.label}>{card.label}</div>
              <div className={styles.value}>{card.value}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
