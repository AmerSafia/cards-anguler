import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'card 1',
      image: 'assets/img/tree.jpeg',
      username: 'nature',
      contant: 'I saw this neat tree today',
    },
    {
      title: 'card 2',
      image: 'assets/img/mountain.jpeg',
      username: 'miuntain',
      contant: 'I saw this miuntain',
    },
    {
      title: 'card 3',
      image: 'assets/img/biking.jpeg',
      username: 'biking',
      contant: 'I saw this biking',
    },
    {
      title: 'card 3',
      image: 'assets/img/biking.jpeg',
      username: 'biking',
      contant: 'I saw this biking',
    },
  ];
}
