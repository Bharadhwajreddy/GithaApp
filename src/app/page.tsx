import HomePage from "@/components/HomePage";
import { allChapters } from "@/data";

export default function Page() {
  return <HomePage chapters={allChapters} />;
}
