"use client";

import { useCallback, useMemo, useReducer } from "react";
import AppReducer from "./appReducer";
import { SET_ITEMS, SET_LOADER, SET_LOADING, UNSET_LOADING } from "../types";
import AppContext from "./appContext";
import { ICollection, ISetLoading, IUnsetLoading } from "@/utils/interfaces.util";
import { collection } from "@/_data/seed";

const AppState = (props: any) => {

    const initialState = {
        items: [],
        loading: false,
        loader: false,
        
    };

    const [state, dispatch] = useReducer(AppReducer, initialState);

    /**
     * @name setLoading
     */
    const setLoading = useCallback(async (data: ISetLoading) => {
        if (data.option === "default") {
            dispatch({
                type: SET_LOADING
            });
        }

        if (data.option === "loader") {
            dispatch({
                type: SET_LOADER,
                payload: true
            });
        }

        if (data.option === "resource" && data.type) {
            const { loading, ...rest } = collection;

            dispatch({
                type: data.type,
                payload: {
                    ...rest,
                    loading: true,
                },
            });
        }
    }, []);

    /**
     * @name unsetLoading
     */
    const unsetLoading = useCallback(async (data: IUnsetLoading) => {
        if (data.option === "default") {
            dispatch({
                type: UNSET_LOADING,
                payload: data.message,
            });
        }

        if (data.option === "loader") {
            dispatch({
                type: SET_LOADER,
                payload: false
            });
        }

        if (data.option === "resource" && data.type) {
            const { loading, message, ...rest } = collection;

            dispatch({
                type: data.type,
                payload: {
                    ...rest,
                    loading: false,
                    message: data.message,
                },
            });
        }
    }, []);

    /**
     * @name setCollection
     * @param type
     * @param data
     */
    const setCollection = (type: string, data: ICollection) => {
        dispatch({
            type: type,
            payload: data,
        });
    };

    /**
     * @name setItems
     * @param data
     */
    const setItems = (data: Array<any>) => {
        dispatch({
            type: SET_ITEMS,
            payload: data,
        });
    };

    const setResource = (type: string, data: any) => {
        dispatch({
            type: type,
            payload: data,
        });
    };

    
    /**
     * Context Values
     * Uses useMemo from react
     */
    const contextValue = useMemo(
        () => ({
            items: state.items,
            loading: state.loading,
            loader: state.loader,
            setItems,
            setCollection,
            setResource,
            setLoading,
            unsetLoading,
        }),
        [
            state.loading,
            state.loader,
            state.items,
            setItems,
            setCollection,
            setResource,
            setLoading,
            unsetLoading,
        ],
    );

    return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>;
};
export default AppState;
