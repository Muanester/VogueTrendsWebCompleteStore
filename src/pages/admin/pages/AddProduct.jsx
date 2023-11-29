import React, { useContext, useEffect, useRef, useState } from "react";
import myContext from "../../../context/data/myContext";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../../firebase/FirebaseConfig";

function AddProduct() {
  const context = useContext(myContext);
  const { products, setProducts, addProduct } = context;

  const [imageUpload, setImageUpload] = useState(null);

  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, "images/");

  // Add Product Onclick
  const uploadProduct = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);

        // Create a new product object with the imageUrl and other properties
        const newProduct = {
          ...products,
          imageUrl: url,
        };

        // Set the new product object as the state
        setProducts(newProduct);

        // setTimeout(() => {
        addProduct(newProduct);

        // }, 2000);
      });
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  // Onchange
  const addUpload = (e) => {
    setImageUpload(e.target.files[0]);
    // setProducts({ ...products, imageUrl: e.target.value });
  };

  return (
    <div>
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-gray-800 px-10 py-5 rounded-xl ">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Add Product
            </h1>
          </div>
          <div>
            <input
              type="text"
              value={products.title}
              onChange={(e) =>
                setProducts({ ...products, title: e.target.value })
              }
              name="title"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product title"
            />
          </div>
          <div>
            <input
              type="text"
              value={products.price}
              onChange={(e) =>
                setProducts({ ...products, price: e.target.value })
              }
              name="price"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product price"
            />
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={addUpload}
              name="imageurl"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product imageUrl"
            />
          </div>
          <div>
            <input
              type="text"
              value={products.category}
              onChange={(e) =>
                setProducts({ ...products, category: e.target.value })
              }
              name="category"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="10"
              name="title"
              value={products.description}
              onChange={(e) =>
                setProducts({ ...products, description: e.target.value })
              }
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Description"
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={uploadProduct}
              className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
