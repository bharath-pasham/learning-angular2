import {Component} from '@angular/core';
import {TweetsService} from './tweets.service';

@Component({
    selector : 'tweets',
    template : `
        <ul> 
            <div class = "well" *ngFor="let prop of tweetsArr">
              <tweet [imgSrc] = "prop.imgSrc" [tweetHeading] = "prop.tweetHeading"
                [totalLikes] = "prop.totalLikes"
                [tweetDescr] = "prop.tweetDescr"></tweet>
             </div>
        </ul>
    `
})

export class TweetsComponent {
    /*
    tweetsArr = [
        {imgSrc: 'http://lorempixel.com/100/100/people?2',
         tweetHeading : 'Heading One',
         tweetDescr : 'Cool',
         totalLikes : 0}, 
        {imgSrc : 'http://lorempixel.com/100/100/people?3',
         tweetHeading : 'Heading Two',
         tweetDescr : 'Hot',
         totalLikes : 5},
         {imgSrc : 'http://lorempixel.com/100/100/people?4',
         tweetHeading : 'Heading Three',
         tweetDescr : 'Nice',
         totalLikes : 3}
    ];


    constructor(tweetsService  : TweetsService) {
        this.tweetsArr = tweetsService.getTweets();
        console.log(this.tweetsArr);
    }
   */
  tweetsArr;

  constructor(tweetsService  : TweetsService) {
        this.tweetsArr = tweetsService.getTweets();
        console.log(this.tweetsArr);
    }
}