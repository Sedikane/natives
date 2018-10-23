import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureVideoOptions,CaptureAudioOptions} from '@ionic-native/media-capture';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private mediaCapture: MediaCapture) {
  }

  picture(){
    let options: CaptureImageOptions = { limit: 3 };
    this.mediaCapture.captureImage(options)
      .then(
        (data: MediaFile[]) => console.log(data),
        (err: CaptureError) => console.error(err)
      );
    
    }
  video(){
let options: CaptureVideoOptions = { limit: 3 };
this.mediaCapture.captureVideo(options)
  .then(
    (data: MediaFile[]) => console.log(data),
    (err: CaptureError) => console.error(err)
  );
  }
  audio(){
  let options: CaptureAudioOptions = { limit: 3 };
  this.mediaCapture.captureAudio(options)
  .then(
    (data: MediaFile[]) => console.log(data),
    (err: CaptureError) => console.error(err)
  );
  
  }
}
