import React, { useEffect, useState } from "react";
import { Link, Params, useNavigate, useParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

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
    <header className="w-full flex px-4 text-2xl sticky top-0 z-10 bg-zinc-900 ">
      <Link to="/" className="flex items-center">
        <img className="w-48" src="/images/youtubelogo.png" alt="Youtube" />
      </Link>
      <form className="w-full flex justify-center py-3" onSubmit={handleSubmit}>
        <input
          className="w-6/12 px-4 py-2 outline-none bg-black text-gray-50 rounded-l-3xl border-2"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="mr-10 bg-zinc-600 px-4 rounded-r-3xl border-y-2 border-r-2">
          <BsSearch />
        </button>
      </form>
    </header>
  );
};
export default SearchHeader;
