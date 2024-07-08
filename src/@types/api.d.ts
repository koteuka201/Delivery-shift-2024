
export interface Point{
    id: string,
    name: string,
    latitude: number,
    longitude: number
}

export interface DeliveryPoints{
    success: boolean,
    reason?: string,
    points: Point[]
}