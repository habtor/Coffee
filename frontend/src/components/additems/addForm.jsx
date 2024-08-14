function AddForm() {
  return (
    <div className=" bg-cardColor rounded-lg flex sm:flex-row flex-col justify-between items-center z-10 mx-auto">
      <div
        className="w-full h-96 sm:h-full bg-cover bg-center  sm:rounded-l-lg rounded-t-lg sm:rounded-tr-none "
        style={{
          backgroundImage: `url(https://media01.stockfood.com/largepreviews/MzAzNTYwNjg=/00979228-Coffee-beans-in-a-jute-sack.jpg)`,
        }}
      ></div>
      <form action="" className="p-10 h-full w-full ">
        <label htmlFor="">Product name</label>
        <input
          type="text"
          placeholder="Name"
          className="w-full h-8 bg-sectionColor rounded-lg p-2 mb-2"
        />
        <label htmlFor="">Price</label>
        <input
          type="number"
          placeholder="Price"
          step="0.01"
          className="w-full h-8 bg-sectionColor rounded-lg p-2 mb-2"
        />
        <label htmlFor="">Image URL</label>
        <input
          type="text"
          placeholder="URL"
          className="w-full h-8 bg-sectionColor rounded-lg p-2 mb-2"
        />
        <label htmlFor="">Count</label>
        <input
          type="number"
          placeholder="item count"
          className="w-full h-8 bg-sectionColor rounded-lg p-2 mb-2"
        />
        <label htmlFor="">Descreption</label>
        <textarea
          name="descreption"
          id="descreption"
          placeholder="Descreption"
          className="w-full h-20 bg-sectionColor rounded-lg p-2 mb-2"
        ></textarea>
        <button
          type="submit"
          value="Submit"
          className="w-full h-8 bg-btnColor rounded-lg font-extrabold hover:bg-opacity-70 hover:text-coffeeColor"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddForm;
