import NewChat from "./NewChat";
const SideBar = () => {
  return (
    <div className="p-2 fle flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat/>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SideBar;
