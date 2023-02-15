import { Dispatch } from "redux";
import { APIResponse } from "../../Types/APIResponse";
import IProduct from "../../Types/IProduct";
import HttpService from "../../network/HttpService";
import { UPDATE_PRODUCTS } from "../mutations";

export function getProducts() {
    return async function (dispatch: Dispatch) {
        // dispatch({ type: SHOW_LOADING, payload: true });
        try {
            const { products } = await HttpService.get<APIResponse<Array<IProduct>>>({ action: 'products' });
            dispatch({ type: UPDATE_PRODUCTS, payload: products })
        } catch (err: any) {
            // Implement global error handling
        } finally {
            // dispatch({ type: SHOW_LOADING, payload: false });
        }
    };
}