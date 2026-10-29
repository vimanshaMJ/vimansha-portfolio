import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  number: string;
  title: React.ReactNode;
}

export default function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.tag}>{number}</div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
