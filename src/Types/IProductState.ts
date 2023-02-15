import  IProduct  from "./IProduct"

export default interface IProductState {
    products: {
        list: Array<IProduct>
    }
}