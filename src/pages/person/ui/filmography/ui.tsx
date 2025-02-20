import clsx from 'clsx';
import { useStore } from 'effector-react';
import { useState } from 'react';
import { pageModel } from 'pages/person';
import { MovieItem } from 'entities/movie/item';
import { Button, Title } from 'shared/ui';
import styles from './styles.module.scss';

export const Filmography = () => {
  const [limit, setLimit] = useState<number>(15);
  const data = useStore(pageModel.$person);

  if (!data?.movies) return null;

  const length = data?.movies.length;
  const hasMore = length > limit;
  const movies = data?.movies.slice(0, limit);

  return (
    <section className={styles.section}>
      <div className={clsx('container container--narrow', styles.container)}>
        <Title className={styles.title} size="medium">
          Фильмография ({length})
        </Title>
        <div className={styles.grid}>
          {movies?.map(({ rating, ...item }) => (
            <MovieItem key={item.id} rating={rating} small item={item} />
          ))}
        </div>
        {hasMore && (
          <Button size="medium" onClick={() => setLimit((prev) => prev + 30)} className={styles.btn} variant="gray">
            Показать больше
          </Button>
        )}
      </div>
    </section>
  );
};
