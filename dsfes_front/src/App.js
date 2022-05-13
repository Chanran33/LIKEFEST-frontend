import Menubar from "./pages/Menubar";
import Main from "./pages/Main";
import Notice from "./pages/Notice";
import TimeTable from "./pages/TimeTable";
import Event from "./pages/Event";
import Board from "./pages/Board";
import NoticeManage from "./pages/NoticeManage";
import { Routes, Route } from "react-router-dom";
import AdminNotice from "./pages/AdminNotice";
import NoticeListV1 from "./components/NoticeListV1";
import NoticeListV2 from "./components/NoticeListV2";
import NoticeListV3 from "./components/NoticeListV3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route index element={<Main />}></Route>
        <Route path="/Notice" element={<Notice />}></Route>
        <Route path="/Notice1" element={<NoticeListV1 />}></Route>
        <Route path="/Notice2" element={<NoticeListV2 />}></Route>
        <Route path="/Notice3" element={<NoticeListV3 />}></Route>
        <Route path="/timetable" element={<TimeTable />}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route path="/manager" element={<NoticeManage />}></Route>
        <Route path="/adminntc" element={<AdminNotice />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
