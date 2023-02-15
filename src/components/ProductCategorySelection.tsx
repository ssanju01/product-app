import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";

type ProductCategorySelectionProps = {
    selectedCategory: string | undefined,
    selectCategory: (type: string | undefined) => void;
}

const ProductCategorySelection: React.FC<ProductCategorySelectionProps> = ({ selectCategory, selectedCategory }) => {
    const [category, setCategory] = useState('');

    const onFilter = () => {
        selectCategory(category);
    }

    return (
        <div>
            <div className="form-group">
                <FormControl type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category name" />
            </div>
            <div className="d-grid gap-2 mt-3">
                <Button onClick={onFilter}>Filter</Button>
            </div>
        </div>
    )
}

export default ProductCategorySelection;