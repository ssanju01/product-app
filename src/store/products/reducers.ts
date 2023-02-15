import { UPDATE_PRODUCTS } from '../mutations';
import IProductReducerState from '../../Types/IProductReducerState';
import IProduct from '../../Types/IProduct';
import IReducerPayload from '../../Types/IReducerPayload';

const initialState: IProductReducerState = {
    list: []
};

export default function productReducer(state = initialState, action: IReducerPayload<Array<IProduct>>) {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return { ...state, list: action.payload };
        default:
            return state;
    }
};
