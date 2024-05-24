import React, { useEffect, useState } from "react";
import { Link, Params, useNavigate, useParams } from "react-router-dom";
import { BsSearch, BsYoutube } from "react-icons/bs";

const SearchHeader: React.FC = () => {
  const { keyword } = useParams<Params>();
  const [text, setText] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setText("");
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header className="w-full flex  px-6 py-4 text-2xl sticky top-0 z-10 bg-zinc-900 ">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-6/12 p-2 outline-none bg-black text-gray-50 rounded-l-3xl border-2"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-zinc-600 px-4 rounded-r-3xl border-y-2 border-r-2">
          <BsSearch />
        </button>
      </form>
    </header>
  );
};
export default SearchHeader;
