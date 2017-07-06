"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let TweetComponent = class TweetComponent {
    constructor() {
        this.imgSrc = "http://lorempixel.com/100/100/people?2";
        this.tweetHeading = "Media Heading";
        this.totalLikes = 0;
        this.tweetDescr = "Description";
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TweetComponent.prototype, "imgSrc", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TweetComponent.prototype, "tweetHeading", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TweetComponent.prototype, "totalLikes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TweetComponent.prototype, "tweetDescr", void 0);
TweetComponent = __decorate([
    core_1.Component({
        selector: 'tweet',
        template: `
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
], TweetComponent);
exports.TweetComponent = TweetComponent;
//# sourceMappingURL=tweet.component.js.map