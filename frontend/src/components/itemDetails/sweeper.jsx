function Sweeper() {
  return (
    <div className="flex items-end">
      <div className="flex items-end">
        <div className="bg-btnColor h-7 w-7 rounded-full text-center">
          {"<"}
        </div>
        <div className="m-2 h-20 w-16 border-[1px] border-black rounded-lg"></div>
        <div className="m-2  h-28 w-20 border-[1px] border-black rounded-lg"></div>
        <div className="m-2 h-20 w-16 border-[1px] border-black rounded-lg"></div>
      </div>
      <div>{">"}</div>
    </div>
  );
}

export default Sweeper;
