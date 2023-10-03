const Contact = () => {
  return (
    <div className="text-center my-5">
      <span className=" font-bold text-2xl text-green-500">
        Contact Us Page
      </span>
      <form className="m-5">
        <input placeholder="Name" className="border p-1 mx-4" type="text" />

        <input placeholder="Message" className="border p-1 mx-4" type="text" />
        <button className="border bg-gray-100 round p-1">Submit</button>
      </form>
      <div>
        <address className="font-semibold p-5">
          <span>+91 9738349261</span>
          <p>react@gamil.com</p>
        </address>
      </div>
    </div>
  );
};
export default Contact;
