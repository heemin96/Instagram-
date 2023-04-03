import { RiBookmarkFill } from "react-icons/ri";

type Props = {
  className?: string;
};

export default function BookmarkIcon({ className }: Props) {
  return <RiBookmarkFill className={className || "w-6 h-6 "} />;
}
