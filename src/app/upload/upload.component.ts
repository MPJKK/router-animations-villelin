import { Component, OnInit } from '@angular/core';
import {Media} from '../models/media';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  media = new Media('', '');

  formData = new FormData();

  constructor(private mediaService: MediaService) { }

  setFile(evt) {
    console.log(evt.target.files[0]);
    const file: File = evt.target.files[0];
    this.formData.append('file', file);
  }

  uploadFile() {
    this.formData.append('title', this.media.title);
    this.formData.append('description', this.media.description);

    const tok = localStorage.getItem('token');
    this.mediaService.upload(this.formData, tok).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
