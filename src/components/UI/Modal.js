import { CloseModalIcon } from "../icons/icons";
import { motion } from "framer-motion";
function Modal({ show, onClose, children }) {

  return (
    <>
      <motion.div
        className="fixed z-50 inset-0 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        key="modal">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose} />
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true">
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="relative">
              <button
                type="button"
                className="absolute -top-4 -right-4 md:top-0 md:right-0 m-4 text-gray-600 hover:text-gray-800"
                onClick={onClose}>
                <CloseModalIcon />
              </button>

              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {children}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Modal;