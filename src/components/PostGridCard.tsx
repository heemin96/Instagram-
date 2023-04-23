"use client";


import Image from "next/image";
import React, { useState } from "react";
import ModalPortal from "./ui/ModalPortal";

import PostDetail from "./PostDetail";
import { signIn, useSession } from "next-auth/react";
import PostModal from "./PostModal";
import { SimplePost } from '../model/post';

type Props = {
  post: SimplePost;
  priority: boolean;
};

function PostGridCard({ post, priority = false }: Props) {
  const { image, username } = post;
  const [openModal, setOpenModal] = useState(false);
  const { data: session } = useSession();
  const handleOpenPost = () => {
    if (!session?.user) {
      return signIn();
    }
    setOpenModal(true);
  };
  return (
    <div className="relative w-full aspect-square">
      <Image
        className="object-cover"
        src={image}
        alt={`photo by ${username}`}
        fill
        sizes="650px"
        priority={priority}
        onClick={handleOpenPost}
      />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </div>
  );
}

export default PostGridCard;
