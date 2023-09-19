
export const Button =({text}:{text: string})=>{

    return(
        <button className="w-40 border border-primary rounded-3xl p-2 text-primary font-bold hover:bg-orange-500 active:scale-90 transition-all">
            {text}
        </button>
    )
}