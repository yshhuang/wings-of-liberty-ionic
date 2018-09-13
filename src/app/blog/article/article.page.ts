import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  topic = '';
  article = '';
  filePath: string;

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.resetRouteParams();
  }

  resetRouteParams() {
    this.topic = this.route.snapshot.params['topic'];
    this.article = this.route.snapshot.params['article'];
    this.filePath = this.appService.getBaseUrl() + '/blog/' + this.topic + '/' + this.article + '.md';
  }
}
