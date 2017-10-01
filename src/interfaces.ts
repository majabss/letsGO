export interface Answer {
    success: boolean,
    message: string,
    data: any | HomeScreenData | LeaderboardData;
}

export interface LeaderboardData{
    data: LeaderboardEntry[]
} 

export interface LeaderboardEntry{
    id: string,
    name: string,
    atp: string,
    wp: string,
    rank: string
}

export const enum PlayerTile {
    FREE = 0,
    BLACK = 1,
    WHITE = 2,
    GREEN = 3
}

export interface FieldResponse{
    success: boolean,
    message: string,
    data: FieldData
}

export interface FieldData{
    gamefield: FieldEntry[],
    IchBin?: string
} 

export interface FieldEntry{
    koordX: number,
    koordY: number,
    status: number
}

export interface HomeScreenData{
    GotInvited?: GotInvited[],
    History?: History[],
    Requested?: Requested[],
    RunningOtherPlayerTurn?: RunningOtherPlayerTurn[],
    RunningYourTurn?: RunningYourTurn[],
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
    fieldsize?: string,
    id?: string,
    lastturn?: string,
    otherplayername?: string,
    playtime?: string
}
export interface RunningOtherPlayerTurn{
    fieldsize?: string,
    id?: string,
    newmsg?: string,
    lastturn?: string,
    otherplayername?: string,
    playtime?: string,
    zugcount?: string
}

export interface RunningYourTurn {
    fieldsize?: string,
    id?: string,
    newmsg?: string,
    lastturn?: string,
    otherplayername?: string,
    playtime?: string,
    zugcount?: string
}
