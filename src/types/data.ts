export type IService = {
    id?: string;
    serviceName: string;
    price: number;
    serviceDetails?: string;
    serviceFeatures?: string;
    pricingTerms?: string;
    location?: string;
    warranty?: string;
    categoryId?: string;
    category?: any;
    status?: string;
    cart?: any;
    review?: any;
    booking?: any;
    schedule?: any;
    image?: string;

}

export interface IUser {
    id?: string,
    fullName?: string,
    email?: string,
    phoneNumber?: string;
    createdAt?: string;
    updatedAt?: string;
    cart?: any;
    review?: any;
    role?: string
}