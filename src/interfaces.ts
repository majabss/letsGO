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
    data: any | HomeScreenData;
}

export interface HomeScreenData{
    GotInvited?: GotInvited[],
    History?: History[],
    Requested?: Requested[],
    RunningOtherPlayerTurn?: RunningOtherPlayerTurn[],
    alltimepoints?: string,
    weeklypoints?: string
}

export interface GotInvited{
    fieldsize?: string,
    id?: string,
    lastturn?: string,
    otherplayername?: string,
    playtime?: string
}
export interface History{
    end?: string,
    gamefinisheddatetime?: string,
    newmsg?: string,
    otherplayername?: string,
    playtime?: string,
    youwon?: string,
    zugcount?: string
}
export interface Requested{
    // fieldsize
    // id
    // lastturn
    // otherplayername
    // playtime
}
export interface RunningOtherPlayerTurn{}
