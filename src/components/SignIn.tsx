"use client";

import React from "react";
import { ClientSafeProvider, signIn } from "next-auth/react";
import ColorButton from "./ui/ColorButton";

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

function SignIn({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorButton
          key={id}
          text={`sign in with ${name}`}
          onClick={() => signIn(id, { callbackUrl })}
          size="big"
        ></ColorButton>
      ))}
    </>
  );
}

export default SignIn;
