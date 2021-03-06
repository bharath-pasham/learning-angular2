import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import {TweetComponent} from './tweet.component'
import {LikeComponent} from './like.component'
import {TweetsComponent} from './tweets.component'
import {TweetsService} from './tweets.service'

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    TweetComponent,
    LikeComponent,
    TweetsComponent
  ],
  providers : [TweetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
