/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'



@Component({
	selector: 'app-imagedetail',
	templateUrl: './imagedetail.page.html',
	styleUrls: ['./imagedetail.page.scss'],
})
export class ImagedetailPage implements OnInit {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imgurl: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  time: any
  constructor(private route: ActivatedRoute, private router: Router) {
  	this.route.queryParams.subscribe(params => {
  		if (this.router.getCurrentNavigation().extras.state) {
  			this.imgurl = this.router.getCurrentNavigation().extras.state.imgURL
  			this.time = this.router.getCurrentNavigation().extras.state.timestamp
  		}
  	})


  }

  ngOnInit() { }

}
