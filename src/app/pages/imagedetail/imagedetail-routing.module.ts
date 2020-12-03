import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ImagedetailPage } from './imagedetail.page'

const routes: Routes = [
	{
		path: '',
		component: ImagedetailPage
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ImagedetailPageRoutingModule {}
