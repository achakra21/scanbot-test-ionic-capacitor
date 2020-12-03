import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

/**
 * overrriden the below check of code for make it work with malitipart 
 * post request
 */

const originalReadAsArrayBufferMethod = FileReader.prototype.readAsArrayBuffer;

FileReader.prototype.readAsArrayBuffer = function (args) {
  const originalFileReader = this['__zone_symbol__originalInstance'];
  if (originalFileReader) {
    originalFileReader.onloadend = () => {
      this.result = originalFileReader.result;
      this.onload();
    }
    originalFileReader.readAsArrayBuffer(args);
  } else {
    originalReadAsArrayBufferMethod(args);
  }
}
