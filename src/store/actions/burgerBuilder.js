import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = name =>{
    return {
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:name
    };
};

export const removeIngredient = name =>{
    return {
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:name
    }
}
export const initIngredients=()=>{
    return dispatch=>{
        axios.get('ingredients.json')
        .then(res=>{
            dispatch({
                type:actionTypes.SET_INGREDIENTS,
                ingredients: res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:actionTypes.FETCH_INGREDIENTS_FAILED
            })
        })
    }
}