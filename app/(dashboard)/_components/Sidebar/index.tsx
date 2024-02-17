import { NewButton } from "./new-button"

export const Sidebar=()=>{
    return(
        <aside className="fixed z-[1] left-0 h-full w-[60px] flex p-3 flex-col gap-y-4 bg-blue-700 text-white">
            <NewButton />
        </aside>
    )
}