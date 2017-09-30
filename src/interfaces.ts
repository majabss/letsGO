export interface LeaderboardResponse{
    success: boolean,
    message: string,
    data: LeaderboardData
} 

export interface LeaderboardData{
    ranks: LeaderboardEntry[]
} 

export interface LeaderboardEntry{
    id: string,
    name: string,
    alltimepoints: string,
    weeklypoints: string
}

export const enum PlayerTile {
    FREE = 0,
    BLACK = 1,
    WHITE = 2
}

export interface Answer {
    success: boolean,
    message: string,
    data: any;
}