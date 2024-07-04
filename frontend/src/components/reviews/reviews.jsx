const Reviews = ({ title, description, reviewer }) => {
  return (
    <div className="bg-cardColor p-4 pb-2 rounded-lg w-56 m-auto mb-5 sm:mb-0 border-[1px] border-black relative">
      <div>
        <h1 className=" font-bold text-lg mb-2">{title}</h1>
        <p>{description}</p>
        <h1 className="font-bold mt-5">{reviewer}</h1>
      </div>
    </div>
  );
};

export default Reviews;
