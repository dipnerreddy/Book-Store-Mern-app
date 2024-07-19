import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import BooksSection from "../components/BooksSection";

const Books = () => {
  const [Data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:1000/bookStore/getBooks")
        .then((res) => setData(res.data.books));
    };
    fetch();
  });

  return (
    <div className="bg-dark" style={{ minHeight: "93vh" }}>
      <div className="d-flex justify-content-center align-items-center py-3">
        <h4 className="text-white">Books Section</h4>
      </div>
      {Data ? (
        <BooksSection data={Data}/>
      ) : (
        <div className="text-white">Loading...</div>
      )}
    </div>
  );
};

export default Books;
