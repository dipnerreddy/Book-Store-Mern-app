import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";



const AddBooks = () => {
  const [Data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    image: "",
    price: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1000/bookStore/add", Data)
      .then((res) => alert(res.data.message));
      setData({
        bookname: "",
        author: "",
        description: "",
        image: "",
        price: "",
    })
  };
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  console.log(Data);
  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: "93vh" }}
    >
      <div className="container p-4">
        <div className="mb-3 ">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Book Name"
            name="bookname"
            value={Data.bookname}
            onChange={change}
          />
        </div>

        <div className="mb-3 ">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter The Name Of Author"
            name="author"
            value={Data.author}
            onChange={change}
          />
        </div>

        <div className="mb-3 ">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Description Of The Book"
            name="description"
            value={Data.description}
            onChange={change}
          />
        </div>

        <div className="mb-3 ">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter The Image URL"
            name="image"
            value={Data.image}
            onChange={change}
          />
        </div>

        <div className="mb-3 ">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter The Book Price"
            name="price"
            value={Data.price}
            onChange={change}
          />
        </div>
        <button className="btn btn-success" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddBooks;
