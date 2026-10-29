import { GithubIcon, PlayIcon } from '@/components/ui/Icons';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import TechTags from '@/components/ui/TechTags';
import { projects } from '@/data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <Section id="projects" className={styles.projects}>
      <SectionHeader
        number="04"
        title={
          <>
            Featured <em>Projects</em>
          </>
        }
      />
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <Reveal
            key={project.name}
            className={styles.card}
            visibleClassName={styles.visible}
            delay={i * 80}
          >
            <div className={styles.top}>
              <div className={styles.num}>{`// ${String(i + 1).padStart(2, '0')}`}</div>
              <div className={styles.links}>
                {project.demoUrl && (
                  <a href={project.demoUrl} className={styles.linkBtn} title="Demo">
                    <PlayIcon />
                    Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} className={styles.linkBtn} title="GitHub">
                    <GithubIcon />
                    GitHub
                  </a>
                )}
              </div>
            </div>
            <div className={styles.name}>{project.name}</div>
            <p className={styles.desc}>{project.description}</p>
            <TechTags items={project.tech} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
