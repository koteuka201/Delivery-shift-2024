import { Package } from './api.d';

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

interface Address{
    street: string,
    house: string,
    apartment: string,
    comment: string,
}

interface Client{
    firstname: string,
    lastname: string,
    middlename: string,
    phone: string,
}

enum Payer{
    RECEIVER,
    SENDER
}

enum TypeDelivery{
    DEFAULT,
    EXPRESS
}

export interface DeliveryRequest{
    senderPoint: Point,
    senderAddress: Address,
    sender: Client,
    receiverPoint: Point,
    receiverAddress: Address,
    receiver: Client,
    payer: Payer,
    option: DeliveryOption
}

export interface Package extends PackageCurrent{
    id: string,
    name: string,
}

export interface PackageCurrent{
    length: number,
    width: number,
    weight: number,
    height: number
}

export interface DeliveryPackage{
    success: boolean,
    reason?: string,
    packages: Package[]
}

interface Coordinates{
    latitude:number,
    longitude: number
}

export interface CalculateDelivery{
    package: PackageCurrent,
    senderPoint: Coordinates,
    receiverPoint: Coordinates
}

interface DeliveryOption{
    id: string,
    price: number,
    days: number,
    name: string,
    type: TypeDelivery
}

export interface CalculateDeliveryResponse{
    success: boolean,
    reason?: string,
    options: DeliveryOption[]
}