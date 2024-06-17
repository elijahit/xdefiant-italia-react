import PenalitaJump from './posts/PenalitaJump.jsx';
import {Routes, Route, Outlet} from "react-router-dom";

const Posts = () => {
  return (
    <>
    <h1>test</h1>
      <Routes>
        <Route path="/penalita-spamming" element={<PenalitaJump/>} />
      </Routes>
    <Outlet/>
    </>
  );
};

export default Posts;