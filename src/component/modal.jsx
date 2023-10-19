export default function Modal({ title, children, isOpen,onClose,maxwidth=27 }) {
  return (
    <>
      {title == isOpen && (
        <>
          <div
            className=" fixed inset-0 bg-white opacity-70 z-20"
            onClick={onClose}
          ></div>
          <div className=" fixed inset-0 z-30">
            <div className=" flex justify-center items-center min-h-full  p-4 ">
              <div
                className=" bg-white rounded-lg w-full shadow-inner-2xl border "
                style={{ maxWidth: `${maxwidth}rem` }}
              >
                <div className="flex justify-between p-4 text-xl border-b">
                  <div className=" invisible">x</div>
                  <div className=" font-bold">{title}</div>
                  <div
                    className=" text-gray-500 cursor-pointer"
                    onClick={onClose}
                  >
                    X
                  </div>
                </div>
                <div className=" p-4">{children}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
