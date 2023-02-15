export default interface IReducerPayload<T> {
    type: string;
    payload: T;
}