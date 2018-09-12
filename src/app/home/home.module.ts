import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MarkdownModule.forChild(),
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
