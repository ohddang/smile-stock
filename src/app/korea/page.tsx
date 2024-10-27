import Chart from "../_components/Chart";
import Contents from "../_components/Contetns";
import HotList from "../_components/HotList";

export default function KoreaPage() {
  return (
    <Contents>
      <div className="flex flex-row w-full h-full p-5 gap-5">
        <Chart />
        <HotList />
      </div>
      <p>Korea Page</p>
    </Contents>
  );
}
