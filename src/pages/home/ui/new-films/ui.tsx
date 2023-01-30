import { useStore } from 'effector-react';
import { Category } from 'widgets/category';
import { pageModel } from 'pages/home';
import { MovieItem } from 'entities/movie-item';
import { paths } from 'shared/routes';

export const NewFilms = () => {
  const data = useStore(pageModel.$newFilms);

  return (
    <Category>
      <Category.Title href={paths.newFilms}>Новые фильмы</Category.Title>
      <Category.Carousel items={data?.docs} renderItem={(item) => <MovieItem item={item} />} />
    </Category>
  );
};
