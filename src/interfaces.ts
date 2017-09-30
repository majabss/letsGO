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