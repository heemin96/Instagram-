import { notFound } from "next/navigation";
import { Metadata } from "next";
import { cache } from "react";
import UserProfile from "../../../components/UserProfile";
import UserPosts from "../../../components/UserPosts";
import { getUserForProfile } from "../../../service/user";

type Props = { params: { username: string } };

const getUser = cache(async (username: string) => getUserForProfile(username));

export default async function UserPage({ params: { username } }: Props) {
  const user = await getUser(username);

  if (!user) {
    notFound();
  }
  return (
    <section className="w-full">
      <UserProfile user={user} />
      <UserPosts user={user} />
    </section>
  );
}

export async function generateMetadata({
  params: { username },
}: Props): Promise<Metadata> {
  const user = await getUser(username);
  return {
    title: `${user?.name} (@${user?.username}) | instantgram Photos)`,
    description: `${user?.name}'s all Instantgram photos`,
  };
}
