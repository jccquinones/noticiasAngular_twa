import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  constructor() { }
    //url: string = 'https://jsonplaceholder.typicode.com';
<<<<<<< HEAD
    url: string = 'https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=9a1ac82532854890a176bf2d9fe5fb0a';
=======

  url: string = 'https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=cba39468354343df9cb21c0666a1c59a';
>>>>>>> f050cc004a9f6f6c9aab3a2c6fffb4547b9bc8eb

  ngOnInit(){
  
    console.log('success');
  }

  getUrl(){
    return this.url;
  }
}
