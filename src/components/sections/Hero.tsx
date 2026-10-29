import Image from 'next/image';
import { DownloadIcon } from '@/components/ui/Icons';
import { hero, stats } from '@/data/hero';
import { site } from '@/data/site';
import { cn } from '@/lib/cn';
import { withBasePath } from '@/lib/paths';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={cn(styles.bgCircle, styles.c1)} />
      <div className={cn(styles.bgCircle, styles.c2)} />

      <div className={styles.left}>
        <div className={styles.tag}>{hero.tag}</div>
        <h1 className={styles.name}>
          {hero.firstName}
          <br />
          <em>{hero.lastName}</em>
        </h1>
        <p className={styles.title}>{hero.subtitle}</p>
        <p className={styles.desc}>{hero.description}</p>

        <div className={styles.btns}>
          <a href="#projects" className={styles.btnPrimary}>
            View My Work
          </a>
          <a href="#contact" className={styles.btnGhost}>
            Get In Touch
          </a>
          <a
            href={withBasePath(site.resume.href)}
            download={site.resume.downloadName}
            className={cn(styles.btnGhost, styles.btnIcon)}
          >
            <DownloadIcon width={14} height={14} />
            Download CV
          </a>
        </div>

        <div className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className={styles.statNum}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.photoFrame}>
          <Image
            src={withBasePath('/photo.jpg')}
            alt={site.name}
            width={360}
            height={430}
            priority
            className={styles.photo}
          />
          <div className={styles.badge}>
            <div className={styles.badgeDot} />
            <div className={styles.badgeText}>
              <strong>{hero.badge.title}</strong>
              {hero.badge.text}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
