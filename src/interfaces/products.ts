export default interface product {
    id: string;
    title: string;
    description?: string;
    price: number;
    quantity?: number;
    images: Array<string>;
    colors: Array<string>;

}