import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatButtonToggleModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatPaginatorModule,
  MatSelectModule, MatSliderModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';


@NgModule({
  imports: [
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatSliderModule,
    MatButtonToggleModule,

  ],
  exports: [
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatSliderModule,
    MatButtonToggleModule,
  ],
  declarations: []
})
export class AngularMaterialModule {
}
