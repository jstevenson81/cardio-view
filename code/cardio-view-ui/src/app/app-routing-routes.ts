import { Route } from '@angular/router';
import { PatientsModule } from '../app/patients/patients.module';

export interface RouteInfo extends Route {
  title?: string;
  type?: string;
  collapse?: string;
  icontype?: string;
  // icon: string;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  ab: string;
  type?: string;
}

export const appRoutes: RouteInfo[] = [
  {
    path: '',
    loadChildren: () =>
      import('./patients/patients.module').then((m) => m.PatientsModule),
  },
  {
    path: 'patients',
    loadChildren: () =>
      import('./patients/patients.module').then((m) => m.PatientsModule),
  },
];
