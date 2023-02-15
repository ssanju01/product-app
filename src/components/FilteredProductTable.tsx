import { useEffect, useState } from "react";
import { Dispatch } from "redux"
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/products/actions";
import IProductState from "../Types/IProductState";
import ProductCategorySelection from "./ProductCategorySelection";
import ProductTable from "./ProductTable";
import  IProduct  from "../Types/IProduct";

export default function FilteredProductTable() {
    const products = useSelector((state: IProductState) => state.products.list);
    const dispatch: Dispatch<any> = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>('');
    const [productList, setProductList] = useState<Array<IProduct>>([]);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        setProductList(products);
    }, [products]);

    function onSelectCategory(type: string | undefined): void {
        setSelectedCategory(type);
        const filteredProducts = products.filter(m => m.category === type);
        setProductList(filteredProducts);
    }

    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-3">
                    <ProductCategorySelection selectedCategory={selectedCategory} selectCategory={onSelectCategory} />
                </div>
                <div className="col-9">
                    <ProductTable products={productList} />
                </div>
            </div>
        </div>
    )
}