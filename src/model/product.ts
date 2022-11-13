export default interface Product {
    title: string,
    price: number,
    picturePath: string,
    category?: Category,
}

export enum Category {
    BERE = "bere",
    WHISKEY = "whiskey",
}
