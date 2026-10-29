import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import TechTags from '@/components/ui/TechTags';
import { experience } from '@/data/experience';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <Section id="experience" className={styles.experience}>
      <SectionHeader
        number="02"
        title={
          <>
            Work <em>Experience</em>
          </>
        }
      />
      <div className={styles.timeline}>
        {experience.map((item) => (
          <Reveal key={item.period} className={styles.item} visibleClassName={styles.visible}>
            <div className={styles.dot} />
            <div className={styles.period}>{item.period}</div>
            <div className={styles.role}>{item.role}</div>
            <div className={styles.company}>{item.company}</div>
            <ul className={styles.bullets}>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <TechTags items={item.tech} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
