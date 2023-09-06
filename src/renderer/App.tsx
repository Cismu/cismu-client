import { HashRouter } from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";
import PlayingBar from "./components/PlayingBar";
import ReactDOM from "react-dom/client";

export default function App() {
  return (
    <div className="absolute flex h-full w-full flex-col overflow-hidden bg-[#1c1c24]">
      <div className="cismu-skeleton grid h-full w-full bg-[#1c1c24] p-2 text-xs">
        <LeftSidebar />
        <div className="skeleton-main-view pointer-events-none z-20 m-2 my-0 h-16">
          <div className="flex h-full w-full rounded-t-lg"></div>
        </div>

        <div className="skeleton-main-view m-2 my-0 flex overflow-hidden rounded-lg bg-[#23232d] text-white">
          <div className="relative flex-1">
            <div className="h-full w-full overflow-y-auto"></div>
          </div>
        </div>

        <div className="skeleton-right-sidebar w-58 rounded-lg bg-[#23232d] p-2 text-base text-white">
          right-sidebar
        </div>
        <PlayingBar />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);
