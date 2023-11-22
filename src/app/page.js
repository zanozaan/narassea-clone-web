import Timeline from "./components/Timeline/Timeline";
import Aside_left from "./components/Aside/Aside_left";
import Aside_right from "./components/Aside/Aside_right";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-4 lg:px-80 lg:py-5 bg-white justify-between xs:px-10 grid-cols-1">
      <Aside_left />
      <Timeline className="hidden lg:w-full xs:w-auto" />
      <Aside_right />
    </div>
  );
}
