import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatOptionModule, MatSelectModule} from '@angular/material';


@NgModule({
  imports: [
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,

  ],
  declarations: []
})
export class AngularMaterialModule {
}
