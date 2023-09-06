import { PiPlayFill, PiPauseFill, PiSkipBackFill, PiSkipForwardFill } from "react-icons/pi";

export default function PlayingBarButtons() {
  return (
    <div className="flex items-center justify-center gap-1 text-base text-white">
      <button className="rounded-[50%] p-2 hover:bg-[#404053]">
        <PiSkipBackFill />
      </button>
      <button className="rounded-[50%] p-3 text-2xl hover:bg-[#404053]">
        <PiPlayFill />
      </button>
      <button className="rounded-[50%] p-2 hover:bg-[#404053]">
        <PiSkipForwardFill />
      </button>
    </div>
  );
}
