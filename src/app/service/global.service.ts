import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  constructor() { }
    //url: string = 'https://jsonplaceholder.typicode.com';
    url: string = 'https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=9a1ac82532854890a176bf2d9fe5fb0a';

    ngOnInit(){
    console.log('success');
  }

  getUrl(){
    return this.url;
  }
}
