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

export interface FieldResponse{
    success: boolean,
    message: string,
    data: FieldData
}

export interface FieldData{
    gamefield: FieldEntry[]
} 

export interface FieldEntry{
    koordX: number,
    koordY: number,
    status: number
}