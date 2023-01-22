export const LIMIT = 15;

export const GOOGLE_CLIENT_ID = process.env.CLIENT_ID ?? '';

export enum RoutesEnum {
  Home = '/',
  Films = '/films',
  Series = '/series',
  Cartoons = '/cartoons',
  Cabinet = '/cabinet',
  NewFilms = '/new-films',
  ComedyFilms = '/comedy-films',
  ForFamily = '/for-family',
}

export enum GenresEnum {
  Boevik = 'боевик',
  Fentezi = 'фэнтези',
  Fantastika = 'фантастика',
  Triller = 'триллер',
  Voennyj = 'военный',
  Detektiv = 'детектив',
  Komediya = 'комедия',
  Drama = 'драма',
  Uzhasy = 'ужасы',
  Kriminal = 'криминал',
  Melodrama = 'мелодрама',
  Vestern = 'вестерн',
  Biografiya = 'биография',
  Anime = 'аниме',
  Detskij = 'детский',
  Multfilm = 'мультфильм',
  FilmNuar = 'фильм-нуар',
  DlyaVzroslyh = 'для взрослых',
  Dokumentalnyj = 'документальный',
  Igra = 'игра',
  Istoriya = 'история',
  Koncert = 'концерт',
  Korotkometrazhka = 'короткометражка',
  Muzyka = 'музыка',
  Myuzikl = 'мюзикл',
  Novosti = 'новости',
  Priklyucheniya = 'приключения',
  RealnoeTv = 'реальное ТВ',
  Semejnyj = 'семейный',
  Sport = 'спорт',
  TokShou = 'ток-шоу',
  Ceremoniya = 'церемония',
}
