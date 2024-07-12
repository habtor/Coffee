import { FiMinusCircle } from "react-icons/fi";

function Item() {
  return (
    <div className="bg-cardColor p-4 rounded-lg w-64 m-auto mb-5 border-black relative">
      <div className="flex items-center justify-between  w-full">
        <img
          src="https://media.istockphoto.com/id/509212479/photo/coffee-bag.jpg?s=612x612&w=0&k=20&c=eSXNWae92Fo71T84FxjOt3vilwS4NRWe6hzrNmbLOTU="
          alt=""
          className="rounded-lg h-28 w-20 border border-black"
        />
        <div>
          <p>Vanilla Late</p>
          <p>$12.3</p>
          <div className="bg-btnColor h-5 w-16 flex items-center justify-center rounded-lg">
            <div className="flex justify-between w-full font-bold text-xs p-1 pt-2">
              <p>+</p>
              <p>1</p>
              <p>-</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className=" opacity-0">a</p>
          <p className="font-bold">$12.5</p>
          <div className="bg-btnColor h-6 w-6 flex items-center justify-center rounded-lg">
            <FiMinusCircle className="text-black text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
