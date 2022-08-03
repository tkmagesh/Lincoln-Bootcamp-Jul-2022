import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './components/dummy/dummy.component';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from '../pipes/sort.pipe';



@NgModule({
  declarations: [
    DummyComponent,
    SearchPipe,
    SortPipe
  ],
  imports: [
    CommonModule
  ]
})
export class UtilsModule { }
