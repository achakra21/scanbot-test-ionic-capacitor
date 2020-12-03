import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { ImagedetailPageRoutingModule } from './imagedetail-routing.module'

import { ImagedetailPage } from './imagedetail.page'

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ImagedetailPageRoutingModule
	],
	declarations: [ImagedetailPage]
})
export class ImagedetailPageModule {}
