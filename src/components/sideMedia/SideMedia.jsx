
const SideMedia = () => {
  return (
    <div className="side-container bg-gradient-to-r from-blue-600 to-blue-400 rounded-[10px_0px_0px_10px] w-[auto] right-0 fixed mt-28 z-50">
      <div className="media-icons p-2 pl-3 flex flex-col gap-2">
        <div className="hover:bg-gradient-to-r from-blue-100 to-blue-150 hover:rounded hover:scale-105 transition duration-220 ease-in-out w-150px h-auto">
          <img
            className="h-auto w-[40px]"
            src="../images/homepage/maincall.png"
            alt=""
          />
          <p className="text-white text-center text-xs">Call</p>
        </div>

        <div className="hover:bg-gradient-to-r from-blue-100 to-blue-150 hover:scale-105 hover:rounded transition duration-220 ease-in-out w-150px h-auto">
          <img
            className="h-auto w-[40px]"
            src="../images/homepage/whatsappside.png"
            alt=""
          />
          <p className="text-white text-center text-xs">Whatsapp</p>
        </div>

        <div className="hover:bg-gradient-to-r from-blue-100 to-blue-150 hover:rounded hover:scale-105 transition duration-220 ease-in-out w-150px h-auto">
          <img
            className="h-auto w-[40px]"
            src="../images/homepage/letstalk.png"
            alt=""
          />
          <p className="text-white text-center text-xs">Let's talk</p>
        </div>

        <div className="hover:bg-gradient-to-r from-blue-100 to-blue-150 hover:rounded hover:scale-105 transition duration-220 ease-in-out w-150px h-auto">
          <img
            className="h-auto w-[40px]"
            src="../images/homepage/mailus.png"
            alt=""
          />
          <p className="text-white text-center text-xs">Mail us</p>
        </div>
      </div>
    </div>
  );
};

export default SideMedia;