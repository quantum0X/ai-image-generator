import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { preview } from '../assets'
import { useRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    promt: "",
    photo: "",
  });

  const [generatingImage, setGeneratingImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = () => {};

  const handleSubmit = () => {};

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleSurpriseMe = () => {
    const randomPromt = randomPromt(form.promt)
    setForm({...form, promt: randomPromt})
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div className=" font-medium text-2xl text-center">
        <h1 className="font-bold text-gray-800 text-[32px]">Create</h1>
        <p className="mt-2 text-gray-600">
          Create imaginative and visually stunning images throught DALL-E AI and
          share them with the Community
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placehoder="Alex Carter"
            value={form.value}
            onChange={handleChange}
          />
          <FormField
            labelName="prompt"
            type="text"
            name="prompt"
            placehoder="Alex Carter"
            value={form.promt}
            onChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative bg-gray-50 border">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.promt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}
            {generatingImage && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="my-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className="text-white bg-black font-medium rounded-md text-center px-4 py-1"
          >
            {generatingImage ? "Generating..." : "Generate"}
          </button>
        </div>
        <div className="my-5">
          <p className="my-2">
            Once you hace created the image you want, you share it with other in
            the community
          </p>
          <button
            className="text-white bg-emerald-300 text-black font-medium rounded-md text-center px-4 py-1 my-2"
            type="submit"
          >
            {loading ? "sharing..." : "share with community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
