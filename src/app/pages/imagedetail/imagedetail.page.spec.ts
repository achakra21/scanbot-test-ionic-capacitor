import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { ImagedetailPage } from './imagedetail.page'

describe('ImagedetailPage', () => {
	let component: ImagedetailPage
	let fixture: ComponentFixture<ImagedetailPage>

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ImagedetailPage ],
			imports: [IonicModule.forRoot()]
		}).compileComponents()

		fixture = TestBed.createComponent(ImagedetailPage)
		component = fixture.componentInstance
		fixture.detectChanges()
	}))

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
