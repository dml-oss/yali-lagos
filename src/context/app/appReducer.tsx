"use client";

import {
    SET_LOADING,
    UNSET_LOADING,
    SET_ITEMS,
    SET_LOADER,
} from "../types";

const AppReducer = (state: any, action: any) => {
    switch (action.type) {
            
        case SET_ITEMS:
            return {
                ...state,
                items: action.payload,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SET_LOADER:
            return {
                ...state,
                loader: action.payload,
            };
        case UNSET_LOADING:
            return {
                ...state,
                loading: false,
                message: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default AppReducer;
