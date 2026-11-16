import { memories } from "../data/memories";
import Memories from "../components/Memories";

export default function MemoriesPage() {
  return <Memories memories={memories} />;
}
