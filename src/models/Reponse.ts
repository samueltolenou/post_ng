export interface Reponse<T>{
    status?: number;
    message?: string;
    data?: T;
}