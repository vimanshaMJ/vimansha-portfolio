import styles from './TechTags.module.css';

export default function TechTags({ items }: { items: string[] }) {
  return (
    <div className={styles.tags}>
      {items.map((item) => (
        <span key={item} className={styles.tag}>
          {item}
        </span>
      ))}
    </div>
  );
}
