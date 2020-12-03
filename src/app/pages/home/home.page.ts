/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-mixed-spaces-and-tabs */
import { Component } from '@angular/core'
import { Plugins, CameraResultType } from '@capacitor/core'
import { LoadingController, ToastController } from '@ionic/angular'

import {BASE_URL} from '../../../environments/environment'
import { ImagesService } from '../../services/images.service'
import { GetImageRootObject } from '../../model/get-images/getimage-rootobject'
import { GetImageResult } from '../../model/get-images/getimageresult'
import { Router, NavigationExtras } from '@angular/router'
const { Filesystem, Camera, } = Plugins

const uploadImage = 'uploadImage?appId='
const loadImage = 'getImages?appId='
const API_KEY = 'affbed2f-e893-4f00-91a0-70941ae7a9bb'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const cordova: any


@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

  getImgRootObj: GetImageRootObject
  getImageResult: GetImageResult[] = [];
  loading:any

  constructor(private imageService: ImagesService, private router: Router,
    private loadingController: LoadingController, private toastController: ToastController) {
  	this.reload()
  }

  /**
   * upload images from gallary
   */
  async upload() {
  	const image = await Camera.getPhoto({
  		// eslint-disable-next-line no-mixed-spaces-and-tabs
  		quality: 100,
  		allowEditing: true,
  		resultType: CameraResultType.Uri
  	})
  	const fullFilePath = image.path
  	this.fileRead(fullFilePath)
  }

  /**
   * read the contents from file path
   * @param filepath 
   */
  async fileRead(filepath: string) {
  	this.loading = await this.loadingController.create()
  	this.loading.present()
  	Filesystem.readFile({
  		path: filepath
  	}).then(async result => {
  		const base64Response = await fetch(`data:image/jpeg;base64,${result.data}`)
  		const blob = await base64Response.blob()

  		this.readFileContent(blob)
  	}).catch(error => {
  		console.log('error::' + error)
  	})

  }

  async readFileContent(blob) {
  	/**
     * reason why i am using FormData new cordova.plugin.http.ponyfills.FormData()
     * https://github.com/silkimen/cordova-plugin-advanced-http/wiki/Web-APIs-required-for-Multipart-requests
     */

  	const formData = new cordova.plugin.http.ponyfills.FormData()
  	formData.append('file', blob, 'test.jpg')
    
  	this.imageService.doPost(BASE_URL + uploadImage + API_KEY, formData, 'multipart', this.imageService.createHeaderValues()).then(async result => {
  		this.loadingController
  		this.loading.dismiss()
  		const toast = await this.toastController.create({
  			message: 'fil uploaded sucess!!.',
  			duration: 2000
  		})
  		toast.present()
  		this.reload()
  		console.log('sucess')
  	}).catch(error => {
  		console.log(error)
  		this.loading.dismiss()
  	})

  }

  /**
   * refresh the gallary
   */
  async reload() {
  	const loading = await this.loadingController.create()
  	await loading.present()
  	this.imageService.doGet(BASE_URL + loadImage + API_KEY).then(result => {
  		this.getImgRootObj = JSON.parse(result.data)
  		this.getImageResult = this.getImgRootObj.result
  		loading.dismiss()

  	}).catch(error => {
  		loading.dismiss()
  		console.log(error)
  	})

  }

  openImageDetail(url, timestamp) {
  	const dateObj = new Date(timestamp)
  	const date = (dateObj.getFullYear()) + '-' + (dateObj.getMonth()+1) + '-' + dateObj.getDate() + ' ' + (dateObj.getHours() + ':' + dateObj.getMinutes())


  	const navigationExtras: NavigationExtras = {
  		state: {
  			imgURL: url,
  			timestamp: date
  		}
  	}
  	this.router.navigate(['imagedetails'], navigationExtras)
  }

}
