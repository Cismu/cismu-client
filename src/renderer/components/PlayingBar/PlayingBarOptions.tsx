import { PiShuffle, PiSliders, PiQueue, PiArrowsClockwise, PiSpeakerHigh, PiWaveform } from "react-icons/pi";

export default function PlayingBarOptions() {
  return (
    <div className="flex items-center gap-1 text-white">
      <div className="flex gap-1 text-base">
        <button className="rounded-[50%] p-2 hover:bg-[#404053]">
          <PiArrowsClockwise />
        </button>
        <button className="rounded-[50%] p-2 hover:bg-[#404053]">
          <PiShuffle />
        </button>
        <button className="rounded-[50%] p-2 hover:bg-[#404053]">
          <PiSpeakerHigh />
        </button>
        <button className="rounded-[50%] p-2 hover:bg-[#404053]">
          <PiSliders />
        </button>
        <button className="rounded-[50%] p-2 hover:bg-[#404053]">
          <PiWaveform />
        </button>
      </div>
      <div className="h-7 w-[1px] bg-white"></div>
      <button className="flex items-center gap-2 rounded p-2">
        <div className="text-base">
          <PiQueue />
        </div>
        <div>Reproduciendo</div>
      </button>
    </div>
  );
}
