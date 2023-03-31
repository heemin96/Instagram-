"use client";

import { SearchUser } from "@/model/user";
import React, { useState, FormEvent } from "react";
import useSWR from "swr";
import GridSpinner from "./ui/GridSpinner";
import UserCard from "./UserCard";
import useDebounce from "@/hooks/debounc";

function UserSearch() {
  const [keyword, setKeyword] = useState("");
  const debouncedkeyword = useDebounce(keyword);
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<SearchUser[]>(`/api/search/${debouncedkeyword}`);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full max-w-2xl my-4 flex flex-col items-center">
      <form className="w-full mb-4" onSubmit={onSubmit}>
        <input
          className="w-full text-xl p-3 outline-none border border-gray-400 "
          type="text"
          autoFocus
          placeholder="Search for a username or name"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        ></input>
      </form>
      {error && <p>errorrrrrr</p>}
      {isLoading && <GridSpinner />}
      {!isLoading && !error && users?.length === 0 && <p>찾는 사용자가 없음</p>}
      <ul className="w-full p-4">
        {users &&
          users.map((user) => (
            <li key={user.username}>
              <UserCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  );
}

export default UserSearch;
