import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardRoutes }    from './dashboard/dashboard.routes';
import { HeroesRoutes }       from './heroes/heroes.routes';

export const routes: RouterConfig = [
  ...HeroesRoutes,
  ...DashboardRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];