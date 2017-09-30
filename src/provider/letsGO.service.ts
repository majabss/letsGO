import { LeaderboardResponse, LeaderboardEntry, LeaderboardData, FieldResponse, Answer } from './../interfaces';
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

    public leaderboardFriends(): Answer {
        let response: Answer = {
            success: true,
            message: '',
            data: {
            ranks: [
                {   id: "1",
                    name: "Lars",
                    alltimepoints: "123",
                    weeklypoints: "99"
                },
                {   id: "2",
                    name: "Maja",
                    alltimepoints: "102",
                    weeklypoints: "42"
                }
                ]
            }
        }
        return response;
    }

    public leaderboardWeekly(): Answer {
        let response: Answer = {
            success: true,
            message: '',
            data: {
            ranks: [
                {   id: "1",
                    name: "Lars",
                    alltimepoints: "123",
                    weeklypoints: "99"
                },
                {   id: "2",
                    name: "Maja",
                    alltimepoints: "102",
                    weeklypoints: "42"
                },
                {   id: "3",
                    name: "Jonas Ha.",
                    alltimepoints: "23",
                    weeklypoints: "12"
                },
                {   id: "4",
                    name: "Jonas Ri.",
                    alltimepoints: "1",
                    weeklypoints: "0"
                }
                ]
            }
        }
        return response;
    }  
    
    public leaderboardAlltime(): Answer {
        let response: Answer = {
            success: true,
            message: '',
            data: {
            ranks: [
                {   id: "1",
                    name: "Lars",
                    alltimepoints: "123",
                    weeklypoints: "99"
                },
                {   id: "2",
                    name: "Maja",
                    alltimepoints: "102",
                    weeklypoints: "42"
                },
                {   id: "3",
                    name: "Jonas Ha.",
                    alltimepoints: "23",
                    weeklypoints: "12"
                },
                {   id: "4",
                    name: "Jonas Ri.",
                    alltimepoints: "1",
                    weeklypoints: "0"
                }
                ]
            }
        }
        return response;
    }  

    public reg(values: string) {
        return this.techService.getRequest('/account/reg?' + values);
    }

    public signin(values: string) {
        return this.techService.getRequest('/account/login?' + values);
    }

    public loadHomePageData() {
        return this.techService.getRequest('/player/homescreen?sessionkey=' + this.sessionKey);
    }

    public leaderboard(type: string): Observable<Answer> {
        return this.techService.getRequest('/player/ranking?sessionkey=' + this.sessionKey + "&type=" + type);
    }
    
    public field(id: string): Observable<FieldResponse> {
        return this.techService.getRequest('/game/field?sessionkey=' + this.sessionKey + "&id=" + id);
    }
    
    public turn(id: string, x: number, y: number): Observable<Response> {
        return this.techService.getRequest('/game/turn?sessionkey=' + this.sessionKey + "&id=" + id + "&x=" + x + "&y=" + y);
    }

    public accept(id: string){
        return this.techService.getRequest('/game/accept?sessionkey=' + this.sessionKey + "&id=" + id);
    }

    public decline(id: string){
        return this.techService.getRequest('/game/decline?sessionkey=' + this.sessionKey + "&id=" + id);
    }

    public getFriends() {
        return this.techService.getRequest('/player/friends?sessionkey=' + this.sessionKey);
    }

    public searchFriends(search: string) {
        return this.techService.getRequest('/player/search?sessionkey=' + this.sessionKey + '&name=' + search)
    }

    public addFriend(userid: string) {
        return this.techService.getRequest('/player/addfriend?sessionkey=' + this.sessionKey + '&userid=' + userid);
    }
}
