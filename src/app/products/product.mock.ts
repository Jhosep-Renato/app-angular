
export const productList: Product[] = [
    { id: 1, name: "Legia", price: 12, description: "Para lavar ropa" },
    { id: 2, name: "Bolígrafo", price: 2.5, description: "Para escribir con lapicero" },
    { id: 3, name: "Cuaderno", price: 5.75, description: "cuaderno para escribir" },
    { id: 4, name: "Lápiz", price: 1 },
    { id: 5, name: "Goma de borrar", price: 1.25, description: "Para borrar" }
];


export interface Product {

    id: number | string,
    name: string,
    price: number,
    description?: string,
}