import { NgModule } from '@angular/core';
import { DevComponent } from './dev.component';
import { CommonLibModule } from 'projects/common-lib/src/public-api';

@NgModule({
  declarations: [DevComponent],
  imports: [CommonLibModule],
  exports: [DevComponent]
})
export class DevModule { }
