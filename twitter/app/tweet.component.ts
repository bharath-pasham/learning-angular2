import {Component, Input} from '@angular/core';



@Component({
    selector : 'tweet',
    template : `
    <div class="media">
  <div class="media-left">
    <a href="#">
      <img class="media-object" src={{imgSrc}} alt="...">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">{{tweetHeading}}</h4>
    <h5>{{tweetDescr}}</h5>
    <like [totalLikes] = "totalLikes"></like>
  </div>
</div>
    `

})

export class TweetComponent {
    @Input() imgSrc = "http://lorempixel.com/100/100/people?2";
    @Input() tweetHeading = "Media Heading";
    @Input() totalLikes = 0;
    @Input() tweetDescr = "Description";
}