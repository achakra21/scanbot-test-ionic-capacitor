/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@angular/core'
import { HTTP } from '@ionic-native/http/ngx'

@Injectable({
	providedIn: 'root'
})
export class ImagesService {

	constructor(private http: HTTP) { }

	/**
   * call get API 
   * @param url 
   */
	public doGet(url: string) {
		return this.http.get(url, {}, {})
	}

	/**
   * call post API
   * @param url 
   * @param formData 
   */
	public doPost(url: string, formData: FormData, serializeType: string, headerMapValues: Map<string, string>) {
    
		this.setSerializerType(serializeType)
		this.createHeader(headerMapValues)
    
		return this.http.post(url, formData, { 'content-type': 'application/json' })
	}

	/**
   * Set the data serializer which will be used for all future PATCH, 
   * POST and PUT requests.
   * Takes a string representing the type of the serializer. 
   * @param serializerType 
   */
	private setSerializerType(serializerType: string) {
		switch (serializerType) {
		case 'json':
			this.http.setDataSerializer('json')
			break
		case 'multipart':
			this.http.setDataSerializer('multipart')
			break
		case 'raw':
			this.http.setDataSerializer('raw')
			break
		case 'urlencoded':
			this.http.setDataSerializer('urlencoded')
			break
		case 'utf8':
			this.http.setDataSerializer('utf8')
			break
		default:
			console.log('please set correct serialize type')
		}
	}

	/**
   * set header
   * @param http 
   * @param map 
   */
	public setHeader(http: HTTP, map: Map<string, string>) {
		map.forEach((value: string, key: string) => {
			http.setHeader('*', key, value)
		})
	}

	/**
   * Init header key and values
   */
	public createHeaderValues(): Map<string, string> {
		const map = new Map<string, string>()
		map.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
		map.set('content-type', 'application/json')
		return map
	}

	/**
   * Init header key and values
   */
	public createGetHeaderValues(): Map<string, string> {
		const map = new Map<string, string>()
		map.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
		map.set('content-type', 'application/json')
		return map
	}

	/**
   * Create header
   * @param map 
   */
	public createHeader(map: Map<string, string>) {
		this.setHeader(this.http, map)
	}


}





