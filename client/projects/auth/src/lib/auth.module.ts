import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { CommonLibModule } from 'projects/common-lib/src/public-api';


@NgModule({
  declarations: [LoginComponent],
  imports: [CommonLibModule],
  exports: [LoginComponent]
})
export class AuthModule { }
