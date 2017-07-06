"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let TweetsService = class TweetsService {
    getTweets() {
        return [
            { imgSrc: 'http://lorempixel.com/100/100/people?2',
                tweetHeading: 'Heading One',
                tweetDescr: 'Cool',
                totalLikes: 0 },
            { imgSrc: 'http://lorempixel.com/100/100/people?3',
                tweetHeading: 'Heading Two',
                tweetDescr: 'Hot',
                totalLikes: 5 },
            { imgSrc: 'http://lorempixel.com/100/100/people?4',
                tweetHeading: 'Heading Three',
                tweetDescr: 'Nice',
                totalLikes: 3 }
        ];
    }
};
TweetsService = __decorate([
    core_1.Injectable()
], TweetsService);
exports.TweetsService = TweetsService;
//# sourceMappingURL=tweets.service.js.map