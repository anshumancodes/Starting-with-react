import { AiOutlineClose } from "react-icons/ai";
function AddcontactModal({ onClose, isOpen, children }) {
  return (
    <>
      {isOpen && (
        <div className="flex items-center justify-center"> 
        {/* parent container */}
          <div className="h-36 bg-white w-96 cursor-default  flex flex-col  gap-6">

            <span className="flex justify-end items-end w-full flex-row "><AiOutlineClose className="text-2xl" onClick={onClose} /></span>

            <label htmlFor="name">Name</label>
            <input type="text" className="w-80 border-2 border-black outline-none"/>
            

          </div>
          {/*  */}
        </div>
      )}
    </>
  );
}

export default AddcontactModal;
