import { XMarkIcon } from "@heroicons/react/24/solid";

function Modal({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="relative z-40">
      <dir
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur flex justify-center items-center "
        onClick={() => onClose()}
      >
        <div className="flex flex-col">
          <XMarkIcon
            className="h-8 w-8 text-white self-end translate-x-1/2"
            onClick={() => onClose()}
          />
          <div className=" border-4 bg-[#000000]  text-[#9CA2A9] border-[#33353F] rounded-xl px-6 py-6  ">
            <h1 className=" text-2xl pb-3">Message sent!</h1>
            <p>
              Thanks for reaching out we will get back to you as soon as
              possible!
            </p>
          </div>
        </div>
      </dir>
    </div>
  );
}

export default Modal;
