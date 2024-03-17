"use client";

import { useEffect,useState } from "react";

import { RenameModal } from "@/components/modals/rename-modal";

export const ModalProvider=()=>{
    const [isMounted,setIsMounted]=useState(false);
    
    useEffect(()=>{
        setIsMounted(true);
    },[])

    //kyuki useffect tabhi call hota when we are in the client side and once we are loaded then we can set this value as true.

    if(!isMounted){
        return null;
    }

    return(
        <>
            <RenameModal />
        </>
    )
}

//we created this to save ourself from hydration error