import Reviews from "./reviews";
import { revs } from "./rev";

function ReviewsSection() {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className=" w-[50px] h-[2px] bg-gray-600 rounded-full"></div>
          <div className=" w-[60px] h-[2px] bg-gray-600 my-[1px] rounded-full"></div>
        </div>
        <h1 className="text-center text-xl m-10 font-bold">Customer Reviews</h1>
        <div className="flex flex-col items-center">
          <div className=" w-[50px] h-[2px] bg-gray-600 rounded-full"></div>
          <div className=" w-[60px] h-[2px] bg-gray-600 my-[1px] rounded-full"></div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute h-full bg-sectionColor w-full top-[60px]  rounded-xl"></div>
        <div className="flex flex-col sm:flex-row">
          {revs.map((rev, index) => (
            <Reviews
              key={index}
              title={rev.title}
              description={rev.description}
              reviewer={rev.reviewer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewsSection;
