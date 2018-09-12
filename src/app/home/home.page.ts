import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  config = {
    top: {
      topic: '',
      article: ''
    },
    blogs: []
  };
  topTitle: string;
  topContent: string;

  constructor(private appService: AppService) { }


  ngOnInit() {
    this.getHomeConfig();
  }

  getHomeConfig() {
    this.appService.getConfigJson().subscribe(json => {
      this.config = json.home;
      this.topTitle = this.config['top']['article'];
      this.appService.getFileContext('/blog/' + this.config['top']['topic'] + '/' + this.topTitle + '.md').then(
        context => {
          this.topContent = context.substring(0, 100) + '……';
        }
      );
    });
  }
}
