/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {BaseUrlInterceptor} from './BaseUrlInterceptor';

/** Http interceptor providers in outside-in order */
// export const httpInterceptorProviders = [
//   {
//     provide: HTTP_INTERCEPTORS,
//     useClass: AuthenticationInterceptor,
//     multi: true
//   }
// ];
export const basehttpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BaseUrlInterceptor,
    multi: true
  }
];

