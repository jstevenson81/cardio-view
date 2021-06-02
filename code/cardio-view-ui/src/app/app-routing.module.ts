import { NgModule } from '@angular/core';
import { RouterModule, ROUTES } from '@angular/router';
import { appRoutes } from './app-routing-routes';

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
