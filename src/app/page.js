import Timeline from "./components/Timeline/Timeline";
import Aside_left from "./components/Aside/Aside_left";
import Aside_right from "./components/Aside/Aside_right";

export default function Home() {
  return (
    <div className="mx-[280px] flex justify-between">
      <Aside_left />
      <Timeline />
      <Aside_right />
    </div>
  );
}
