import React from "react";
import { Metadata } from "next";
import UserSearch from "../../components/UserSearch";

export const metadata: Metadata = {
  title: "User Search",
  description: "Signup users to follow",
};

export const dynamic = "force-dynamic";

function page() {
  return <UserSearch />;
}

export default page;
