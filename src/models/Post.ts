import { User } from './User';
export interface Post {

    id: number;
    titre: string;
    body: string;
    nombreVote: number;
    auteur: User | null;
    img: any;


}
