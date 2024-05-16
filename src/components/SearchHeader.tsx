import React, { useEffect, useState } from "react";
import { Link, Params, useNavigate, useParams } from "react-router-dom";
import { BsSearch, BsYoutube } from "react-icons/bs";

export default function SearchHeader(): React.FC {
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
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
