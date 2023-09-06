import { PiHeart, PiHeartBreak, PiMicrophoneStage, PiPlus } from "react-icons/pi";

export default function PlayingBarTrack() {
  return (
    <div className="px-18 flex flex-1 flex-col gap-1 text-white">
      <div className="flex justify-between gap-1">
        <div className="flex gap-2">
          <img
            draggable={false}
            className="select-none"
            width={32}
            height={32}
            src="https://i.scdn.co/image/ab67616d0000485181fccd758776d16b87721b17"
          />
          <div className="flex flex-col">
            <div>BANANA SHAKE (SPEED UP)</div>
            <div>HUS</div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-base">
          <button className="rounded-[50%] p-2 hover:bg-[#404053]">
            <PiMicrophoneStage />
          </button>
          <button className="rounded-[50%] p-2 hover:bg-[#404053]">
            <PiHeart />
          </button>
          <button className="rounded-[50%] p-2 hover:bg-[#404053]">
            <PiHeartBreak />
          </button>
          <button className="rounded-[50%] p-2 hover:bg-[#404053]">
            <PiPlus />
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="select-none">00:00</div>
        <input className="flex-1" type="range" />
        <div className="select-none">00:30</div>
      </div>
    </div>
  );
}
