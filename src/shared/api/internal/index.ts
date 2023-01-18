import { http } from './base';
import type { HeroMovie } from './types';

const routesConfig = http.createRoutesConfig({
  getHeroMovies: http.createRoute<void, HeroMovie[]>({
    url: '/hero',
    headers: {},
  }),
  check: http.createRoute<string, { status: boolean }>((email) => ({
    url: '/check',
    headers: {},
    params: {
      email,
    },
  })),
});

export const internalApi = routesConfig.build();
