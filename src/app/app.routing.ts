import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { routing } from './app.routing';
import { IpadComponent }   from './ipad/ipad.component';
import { HomepageComponent }   from './homepage/homepage.component';
import { TvComponent }   from './tv/tv.component';
// import { IphoneComponent }   from './iphone/iphone.component';

const appRoutes: Routes = [
  {
      path: '',
      component: HomepageComponent
    },

    {
        path: 'ipad',
        component: IpadComponent
      },

      {
          path: 'tv',
          component: TvComponent
        }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
