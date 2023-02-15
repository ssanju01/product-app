import React from "react";
import  IProduct  from "../Types/IProduct";
import ProductRow from "./ProductRow";

type ProductTableProps = {
    products: Array<IProduct>
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
    return (
        <div className="row">
            {products.map((product, i) => (
                <div className="col-3" key={i}>
                    <ProductRow product={product} />
                </div>
            ))}
        </div>
    )
}

export default ProductTable;