import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { skillCategories } from '@/data/skills';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <Section id="skills" className={styles.skills}>
      <SectionHeader
        number="03"
        title={
          <>
            Skills &amp; <em>Technologies</em>
          </>
        }
      />
      <div className={styles.grid}>
        {skillCategories.map((category, i) => (
          <Reveal
            key={category.title}
            className={styles.card}
            visibleClassName={styles.visible}
            delay={i * 60}
          >
            <svg
              className={styles.icon}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={category.iconPath} />
            </svg>
            <div className={styles.title}>{category.title}</div>
            <div className={styles.chips}>
              {category.skills.map((skill) => (
                <span key={skill} className={styles.chip}>
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
