import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home";
import Profile from "./pages/profile";
import ChangeInformation from "./pages/profile/ChangeInformation";
import Avatars from "./pages/profile/Avatars";

const App = () => {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div className='bg-1e1f24 main_layout py-[30px] px-[30px]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile/' element={<Profile />}>
              <Route index element={<ChangeInformation />} />
              <Route path='avatars' element={<Avatars />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
