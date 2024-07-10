function ContactForm() {
  return (
    <div className="bg-cardColor rounded-lg flex sm:flex-row flex-col justify-between items-center z-10 mx-auto">
      <form action="" className="p-10 h-full w-full ">
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Name"
          className="w-full h-8 bg-sectionColor rounded-lg p-2 mb-2"
        />
        <label htmlFor="">E-mail</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full h-8 bg-sectionColor rounded-lg p-2 mb-2"
        />
        <label htmlFor="">Message</label>
        <textarea
          name=""
          id=""
          placeholder="Message"
          className="w-full h-20 bg-sectionColor rounded-lg p-2 mb-2"
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className="w-full h-8 bg-btnColor rounded-lg font-extrabold"
        />
      </form>
      <div
        className="w-full h-64 sm:h-full bg-cover bg-center  sm:rounded-r-lg rounded-b-lg sm:rounded-bl-none "
        style={{
          backgroundImage: `url(https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2NvZmZlZS01NzEyNDU1NzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiMTIwMCJ9fX0=)`,
        }}
      ></div>
    </div>
  );
}

export default ContactForm;
