import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(value: any, size?: any): any {
    let temp = value.split('.')[0];
    if (size === 'small') {
      temp += '-tn160.png';
    } else if (size === 'medium') {
      temp += '-tn320.png';
    } else if (size === 'large') {
      temp += '-tn640.png';
    } else {
      temp += '-tn320.png';
    }
    return temp;
  }

}
