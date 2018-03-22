import {NgModule} from '@angular/core';
import {MatCheckboxModule, MatFormFieldModule, MatOptionModule, MatSelectModule} from '@angular/material';


@NgModule({
  imports: [
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule
  ],
  exports: [
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule
  ],
  declarations: []
})
export class AngularMaterialModule {
}
