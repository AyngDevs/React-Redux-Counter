import { RESET, THICK, } from '../constants/counter';

const initialState = {
    value: 10,
};

const counter = (state = initialState, action) => {
    switch(action.type) {
        case RESET:
            return { value: 10, };
        case THICK:
            return { value: state.value - 1, };
        default:
            return state;
    }; //cierre del 'switch-case'
}; //fin de la función 'counter'

export default counter;