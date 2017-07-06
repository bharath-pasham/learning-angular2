import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template : '<tweets></tweets>'
})
export class AppComponent { 
  post = {
    title : "Title",
    isFavorite : false
  }

  tweet = {
    totalLikes : 10,
    iLike : false
  }

  vote = {
    totalUpvotes : 10,
    upvoted : false,
    downvoted : false
  }

  onFavoriteChange($event) {
    console.log($event);
  }
}
