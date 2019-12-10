import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AboutPageComponent} from './about-page.component';
import {AboutExtraPageComponent} from './about-extra-page/about-extra-page.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    AboutPageComponent,
    AboutExtraPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: AboutPageComponent, children: [
        {path: 'extra', component: AboutExtraPageComponent}
      ]},
    ])
  ],
  providers: [],
  exports: [RouterModule]
})
export class AboutPageModule {}
