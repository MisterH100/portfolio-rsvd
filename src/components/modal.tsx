

interface IModal{
    modalHeading: string,
    modalMessage: string,
    modalAction: string,
    modalStatus(arg: boolean) : any 

}

const Modal = ({ modalHeading,modalMessage,modalAction,modalStatus}:IModal) =>{
    return (
        <article className="absolute backdrop-blur-sm w-full h-full top-0 text-black flex justify-center items-center">
            <div className=" bg-secondary w-[50%] h-[200px] flex flex-col justify-center items-center shadow-lg">
                <h1 className="text-red text-[2rem]">{modalHeading}</h1>
                <p className="text-black text-[1rem]">{modalMessage}</p>
                <button
                    onClick={() =>modalStatus(false)}
                    className="bg-primary hover:bg-primaryLight transition ease-in-out duration-300 w-[100px] h-[50px] my-10 text-secondary text-center">
                    {modalAction}
                </button>
            </div>
        </article>
    )
}

export default Modal;