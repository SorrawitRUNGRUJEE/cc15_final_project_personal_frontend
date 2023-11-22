export default function Modal({ title, children, isOpen, onClose, maxwidth = 100 }) {
  return (
    <>
      {title == isOpen && (
        <>
          <div
            className=" fixed inset-0 bg-slate-800 opacity-70 z-20"
            onClick={onClose}
          ></div>
          <div className=" fixed inset-0 z-30">
            <div className=" flex justify-center items-center min-h-full  p-4 ">
              <div
                className=" bg-slate-950 rounded-lg w-full shadow-inner-2xl border-none max-h-[600px] overflow-auto  min-w-fit "
                style={{ maxWidth: `${maxwidth}rem`, }}
              >
                <div className="flex justify-between p-4 text-xl border-b">
                  <div className=" invisible ">x</div>
                  <div className=" font-bold text-white">{title}</div>
                  <div
                    className=" text-gray-400 cursor-pointer"
                    onClick={onClose}
                  >
                    X
                  </div>
                </div>
                <div className=" p-4 text-sky-700 font-semibold">{children}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
