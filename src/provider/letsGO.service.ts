import { LeaderboardResponse, LeaderboardEntry, LeaderboardData } from './../interfaces';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { TechnischerService } from './technischer.service';

@Injectable()
export class LetsGOService {

    public user: string;
    public password: string;
    public sessionKey: string;
    public mail: string;
    public phone: string = '1234';

    constructor(private techService: TechnischerService) { }

    // public leaderboardFriends(): LeaderboardResponse {
    //     let response: LeaderboardResponse = {
    //         success: true,
    //         message: '',
    //         data: {
    //         ranks: [
    //             {   id: "1",
    //                 name: "Lars",
    //                 alltimepoints: "123",
    //                 weeklypoints: "99"
    //             },
    //             {   id: "2",
    //                 name: "Maja",
    //                 alltimepoints: "102",
    //                 weeklypoints: "42"
    //             }
    //             ]
    //         }
    //     }
    //     return response;
    // }

    // public leaderboardWeekly(): LeaderboardResponse {
    //     let response: LeaderboardResponse = {
    //         success: true,
    //         message: '',
    //         data: {
    //         ranks: [
    //             {   id: "1",
    //                 name: "Lars",
    //                 alltimepoints: "123",
    //                 weeklypoints: "99"
    //             },
    //             {   id: "2",
    //                 name: "Maja",
    //                 alltimepoints: "102",
    //                 weeklypoints: "42"
    //             },
    //             {   id: "3",
    //                 name: "Jonas Ha.",
    //                 alltimepoints: "23",
    //                 weeklypoints: "12"
    //             },
    //             {   id: "4",
    //                 name: "Jonas Ri.",
    //                 alltimepoints: "1",
    //                 weeklypoints: "0"
    //             }
    //             ]
    //         }
    //     }
    //     return response;
    // }  
    
    // public leaderboardAlltime(): LeaderboardResponse {
    //     let response: LeaderboardResponse = {
    //         success: true,
    //         message: '',
    //         data: {
    //         ranks: [
    //             {   id: "1",
    //                 name: "Lars",
    //                 alltimepoints: "123",
    //                 weeklypoints: "99"
    //             },
    //             {   id: "2",
    //                 name: "Maja",
    //                 alltimepoints: "102",
    //                 weeklypoints: "42"
    //             },
    //             {   id: "3",
    //                 name: "Jonas Ha.",
    //                 alltimepoints: "23",
    //                 weeklypoints: "12"
    //             },
    //             {   id: "4",
    //                 name: "Jonas Ri.",
    //                 alltimepoints: "1",
    //                 weeklypoints: "0"
    //             }
    //             ]
    //         }
    //     }
    //     return response;
    // }  

    public reg(values: string) {
        return this.techService.getRequest('/account/reg?' + values);
    }

    public signin(values: string) {
        return this.techService.getRequest('/account/login?' + values);
    }

    public loadHomePageData() {
        return this.techService.getRequest('/player/homescreen?sessionkey=' + this.sessionKey);
    }

    public leaderboard(type: string): Observable<LeaderboardResponse> {
        return this.techService.getRequest('/player/ranking?sessionkey=' + this.sessionKey + "&type=" + type);
    }


}