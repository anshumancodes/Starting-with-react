import { AiOutlineClose } from "react-icons/ai";
function AddcontactModal({ onClose, isOpen, children }) {
  return (
    <>
      {isOpen && (
        <div className="flex items-center justify-center "> 
        {/* parent container */}
          <div className="object-contain bg-white w-96 cursor-default  flex flex-col  gap-6 z-50">

            <span className="flex justify-end items-end w-full flex-row my-3 "><AiOutlineClose className="text-2xl mr-6" onClick={onClose} /></span>
             

             <form action="" className="ml-5 flex flex-col gap-3 mb-6">


            <label htmlFor="name">Name</label>
            <input type="text" className="w-80 border-2 border-black outline-none h-8 "/>
            <label htmlFor="email">Email</label> 
            <input type="email" className="w-80 border-2 border-black outline-none h-8" />


             </form>


             <span className="flex justify-end items-end w-full flex-row my-5"><button className=" bg-yellow-400 w-1/3 mr-6 py-3 font-light">Add conatct</button></span>
            

          </div>
          {/*  */}
          <div className="backdrop-blur top-0 absolute w-screen h-screen z-40" onClick={onClose}/>
        </div>
      )}
    </>
  );
}

export default AddcontactModal;
