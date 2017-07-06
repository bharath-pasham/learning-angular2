import {Injectable} from '@angular/core'

@Injectable()

export class TweetsService {
    
    getTweets() : any[] {
        return [
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
    
}

}