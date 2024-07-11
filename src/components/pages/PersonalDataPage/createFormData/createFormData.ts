import { Client, Address } from "../../../../@types/api";
import { FormData } from "../PersonalDataPage";

export const createClientFormData = (client: Client, setClient: React.Dispatch<React.SetStateAction<Client>>): FormData[] => [
    {
        value: client.lastname,
        label: 'Фамилия',
        placeholder: 'Фамилия',
        onChange: (value: string) => setClient(prev => ({
            ...prev,
            lastname: value
        }))
    },
    {
        value: client.firstname,
        label: 'Имя',
        placeholder: 'Имя',
        onChange: (value: string) => setClient(prev => ({
            ...prev,
            firstname: value
        }))
    },
    {
        value: client.middlename,
        label: 'Отчество',
        placeholder: 'Отчество',
        onChange: (value: string) => setClient(prev => ({
            ...prev,
            middlename: value
        }))
    },
    {
        value: client.phone,
        label: 'Номер телефона',
        placeholder: 'Номер телефона',
        onChange: (value: string) => setClient(prev => ({
            ...prev,
            phone: value
        }))
    }
]

export const createAddressFormData = (address: Address, setClient: React.Dispatch<React.SetStateAction<Address>>): FormData[] => [
    {
        value: address.street,
        label: 'Улица',
        placeholder: 'Улица',
        onChange: (value: string) => setClient(prev => ({
            ...prev,
            lastname: value
        }))
    },
    {
        value: address.house,
        label: 'Номер дома',
        placeholder: 'Номер дома',
        onChange: (value: string) => setClient(prev => ({
            ...prev,
            firstname: value
        }))
    },
    {
        value: address.apartment,
        label: 'Номер квартиры',
        placeholder: 'Номер квартиры',
        onChange: (value: string) => setClient(prev => ({
            ...prev,
            middlename: value
        }))
    },
    {
        value: address.comment,
        label: 'Заметка',
        placeholder: 'Заметка',
        onChange: (value: string) => setClient(prev => ({
            ...prev,
            phone: value
        }))
    }
]