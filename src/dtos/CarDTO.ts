//criando interfaces do meu  bckend ou das minhas APIs

export interface CarDTO {
    id: string;
    brand: string;
    name: string;
    about: string;
    rent: {
        period: string;
        price: number;
    },
    fuel_type: string;
    thumbnail: string;
    accessories: {
        type: string;
        name: string;
        //aqui estou dizendo que é um array desse tipo (um array com um objeto desse dentro)
    }[];
    //aqui a mesma coisa, array de sting
    photos: string[];
}