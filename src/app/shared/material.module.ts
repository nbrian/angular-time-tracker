import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule { }
