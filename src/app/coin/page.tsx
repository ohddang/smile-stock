import Chart from "../_components/Chart";
import Contents from "../_components/Contetns";
import HotList from "../_components/HotList";

export default function CoinPage() {
  return (
    <Contents>
      <div className="flex flex-row w-full h-full p-5 gap-5">
        <Chart />
        <HotList />
      </div>
      <p>Coin Page</p>
    </Contents>
  );
}
