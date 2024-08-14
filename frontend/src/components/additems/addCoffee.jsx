import AddForm from "./addForm";

function AddCoffeeForm() {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className=" w-[50px] h-[2px] bg-gray-600 rounded-full"></div>
          <div className=" w-[60px] h-[2px] bg-gray-600 my-[1px] rounded-full"></div>
        </div>
        <h1 className="text-center text-xl m-10 font-bold">Add item</h1>
        <div className="flex flex-col items-center">
          <div className=" w-[50px] h-[2px] bg-gray-600 rounded-full"></div>
          <div className=" w-[60px] h-[2px] bg-gray-600 my-[1px] rounded-full"></div>
        </div>
      </div>
      <div className="relative ">
        <div className="absolute h-full bg-sectionColor top-[60px] w-[100%]  rounded-xl"></div>
        <div className="flex flex-col sm:flex-row max-w-[1200px] m-auto px-3">
          <AddForm />
        </div>
      </div>
    </div>
  );
}

export default AddCoffeeForm;
