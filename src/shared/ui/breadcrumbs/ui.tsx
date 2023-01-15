import clsx from 'clsx';
import Link from 'next/link';
import type { FC } from 'react';
import styles from './styles.module.scss';

interface BreadcrumbItem {
  text: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Array<BreadcrumbItem>;
  className?: string;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items, className }) => {
  return (
    <ul className={clsx('list-reset', styles.list, className)}>
      {items.map((item, idx) => (
        <li className={styles.item} key={idx}>
          {item?.href ? (
            <Link className={styles.link} href={item.href}>
              {item?.text}
            </Link>
          ) : (
            <span className={styles.link}>{item?.text}</span>
          )}
        </li>
      ))}
    </ul>
  );
};
