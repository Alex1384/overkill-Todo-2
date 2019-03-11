import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



const MODULES = [
  CommonModule,
  FlexLayoutModule,
  MaterialModule
];

@NgModule({
  exports: MODULES,
  imports: MODULES


})
export class LayoutModule { }
