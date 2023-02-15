import  IProduct  from "../Types/IProduct";

type ProductRowProps = {
    product: IProduct
}

const ProductRow: React.FC<ProductRowProps> = ({ product }) => {
    return (
        <div className="card mb-3" >
            <img src={product.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
            </div>
        </div>
    )
}

export default ProductRow;