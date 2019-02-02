import {Routes, RouterModule} from '@angular/router';​

import {LoginComponent} from './views/user/login/login.component';​

const appRoutes: Routes = [​
  {path: 'login', component: LoginComponent}
];​

export const routing = RouterModule.forRoot(appRoutes);
​
