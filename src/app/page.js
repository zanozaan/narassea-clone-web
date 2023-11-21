import Timeline from "./components/Timeline/Timeline";
import Aside_left from "./components/Aside/Aside_left";
import Aside_right from "./components/Aside/Aside_right";

export default function Home() {
  return (
    <div className="grid grid-cols-4 px-80 py-5 bg-white justify-between">
      <Aside_left />
      <Timeline className="hidden w-full sm:block sm:w-auto" />
      <Aside_right />
    </div>
  );
}
