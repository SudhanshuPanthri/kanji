"use client"
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import {Dialog,DialogContent,DialogTrigger} from "@/components/ui/dialog";

export const NewButton=()=>{
    return(
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <button className="bg-white/25 flex justify-center items-center h-full w-full rounded-md opacity-60 hover:opacity-100 transition">
                        <Plus className="text-white"/>
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                <CreateOrganization />
            </DialogContent>
        </Dialog>
    )
}