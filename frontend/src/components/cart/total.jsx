function Total() {
  return (
    <div>
      <div className="h-[1px] w-[90%] m-auto  bg-black opacity-25 z-0"></div>
      <div className="bg-cardColor p-4 rounded-lg w-64 m-auto mb-5 border-black relative z-10 mt-5  px-5">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>$25</p>
        </div>
        <div className="flex justify-between">
          <p>Discount</p>
          <p>$0</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery</p>
          <p>$4</p>
        </div>

        <div className="h-[1px] m-auto my-3 bg-black opacity-25 z-0"></div>
        <div className="flex justify-between">
          <p className="font-bold">Total</p>
          <p className="font-bold">$29</p>
        </div>
        <div className="flex flex-col">
          <button className=" bg-btnColor h-8 pt-1 rounded-md font-bold my-4 hover:bg-opacity-70">
            PAY
          </button>
          <button className=" flex items-center pt-1 justify-center border border-black h-8 rounded-md font-bold hover:bg-white">
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default Total;
