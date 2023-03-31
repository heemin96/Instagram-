import { AuthUser } from "@/model/user";
import React from "react";
import Avatar from "./Avatar";

type Props = {
  user: AuthUser;
};

function SideBar({ user: { name, username, image } }: Props) {
  return (
    <>
      <div className="flex items-center">
        {image && <Avatar image={image} />}
        <div className="ml-4">
          <p className="font-bold leading-4">{username}</p>
          <p className="text-lg text-neutral-500">{name}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-500 mt-8">
        About | help | press | API | Jobs | privacy| Terms | Location | Language
      </p>
      <p className="font-bold text-sm mt-8 text-neutral-500">
        @Copyright INSTANTGRAM
      </p>
    </>
  );
}

export default SideBar;
