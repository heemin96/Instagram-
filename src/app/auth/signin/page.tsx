import React from "react";
import { Metadata } from "next";
import SignIn from "@/components/SignIn";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Signup or Login to Instantgram",
};

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

async function page({ searchParams: { callbackUrl } }: Props) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center mt-24">
      <SignIn providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
}

export default page;
