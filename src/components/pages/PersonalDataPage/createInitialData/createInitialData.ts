import { Address, Client } from "../../../../@types/api";

export const createInitialClient = (): Client => ({
    firstname: '',
    lastname: '',
    middlename: '',
    phone: ''
})

export const createInitialAddress = (): Address => ({
    street: '',
    house: '',
    apartment: '',
    comment: ''
})