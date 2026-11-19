

import AppContext from "@/context/app/appContext";
import { IAppContext } from "@/utils/interfaces.util";
import { ResourceType } from "@/utils/types.util";
import { useContext, useEffect, useState } from "react";


const useContextType = (resource?: ResourceType) => {

    const appContext = useContext<IAppContext>(AppContext);
    const [contextType, setContextType] = useState<string>('')

    useEffect(() => {
        getType(resource)
    }, [])

    const getType = (resource?: ResourceType) => {

        switch (resource) {
            default:
                setContextType('')

        }
    }

    return { contextType, appContext}
};

export default useContextType;
