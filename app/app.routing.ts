import { LoginComponent }  from './login/login.component';
import { ProductListComponent } from './products/product-list.component';
import { LandingPageComponent } from './landing/landing.component';

export const appRoutes = [
    
   {
       path: '',
       component: LandingPageComponent
   },
    {
       path:'Login',
       component: LoginComponent
    },
    {
        path: 'products',
        component: ProductListComponent
    }
];
