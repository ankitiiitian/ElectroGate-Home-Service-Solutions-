import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Blog from "./Blog";
import Team from "./Team";
import Register from "./Register";
import Home_App from "./Home_App";
import Student_App from "./Student_App";
import Decor from "./Decor";
import Kitchen from "./Kitchen";
import Ins_form from "./Ins_form";
import AC from "./AC";
import Vacum from "./Vacum";
import Fan from "./Fan";
import Television from "./Television";
import Washing from "./Washing";
import WaterPure from "./WaterPure";
import Mobile from "./Mobile";
import Laptop from "./Laptop";
import DeskLamp from "./DeskLamp";
import Gaming from "./Gaming";
import Speaker  from "./Speaker";
import ComputerAcc from "./ComputerAcc";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import { useStateValue } from "./StateProvider";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Microwave from "./Microwave";
import Kettle from "./Kettle";
import Dishwasher from "./Dishwasher";
import MixerG from "./MixerG";
import Refrigerator from "./Refrigerator";
import KitchenHood from "./KitchenHood";
import Bulb from "./Bulb";
import StringLED from "./StringLED";
import Clock from "./Clock";
import Lamp from "./Lamp";
import Projector from "./Projector";
import CCTV from "./CCTV";
import Order from "./Order";
import Comments from "./comments/Comments";
import AntiBill from "./AntiBill";
import Ins_page from "./Ins_page";
import  VideoCall  from "./VideoCall";
import  Video_page  from "./Video_page";
import Video_form from "./Video_form";
import Warranty from "./Warranty";
import Testimonials from "./components/Testimonials";
import Who from "./Who";

function App() {
  
  return (
    <AuthProvider>
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={[<Header />,<Home />]} />
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/Team" element={[<Header />,<Team />]}/>
          <Route exact path="/Register" element={<Register/>} />
          <Route exact path="/Home_App" element={<Home_App/>} />
          <Route exact path="/Student_App" element={<Student_App/>} />
          <Route exact path="/Decor" element={<Decor />} />
          <Route exact path="/Kitchen" element={<Kitchen />} />
          <Route exact path="/Ins_form" element={<Ins_form />} />
          <Route exact path="/AC" element={<AC />} />
          <Route exact path="/Vacum" element={<Vacum />} />
          <Route exact path="/Fan" element={<Fan />} />
          <Route exact path="/Television" element={<Television />} />
          <Route exact path="/Washing" element={<Washing />} />
          <Route exact path="/WaterPure" element={<WaterPure />} />
          <Route exact path="/Mobile" element={<Mobile />} />
          <Route exact path="/Laptop" element={<Laptop />} />
          <Route exact path="/DeskLamp" element={<DeskLamp />} />
          <Route exact path="/Gaming" element={<Gaming />} />
          <Route exact path="/Speaker" element={<Speaker />} />
          <Route exact path="/ComputerAcc" element={<ComputerAcc />} />
          <Route exact path="/Microwave" element={<Microwave />} />
          <Route exact path="/Kettle" element={<Kettle />} />
          <Route exact path="/Dishwasher" element={<Dishwasher />} />
          <Route exact path="/MixerG" element={<MixerG />} />
          <Route exact path="/Refrigerator" element={<Refrigerator />} />
          <Route exact path="/KitchenHood" element={<KitchenHood />} />
          <Route exact path="/Bulb" element={<Bulb />} />
          <Route exact path="/StringLED" element={<StringLED />} />
          <Route exact path="/Clock" element={<Clock />} />
          <Route exact path="/Lamp" element={<Lamp />} />
          <Route exact path="/Projector" element={<Projector />} />
          <Route exact path="/CCTV" element={<CCTV />} />
          <Route exact path="/Order" element={<Order />} />
          <Route exact path="/Comments" element={<Comments
            commentsUrl="http://localhost:3004/comments"
            currentUserId="1"
          />} />
          <Route exact path="/AntiBill" element={[<Header />,<AntiBill />]} />
          <Route exact path="/Ins_page" element={<Ins_page />} />
          <Route exact path="/VideoCall" element={<VideoCall />} />
          <Route exact path="/Video_page" element={<Video_page />} />
          <Route exact path="/Video_form" element={<Video_form />} />
          <Route exact path="/Warranty" element={[<Header />,<Warranty />]} />
          <Route exact path="/Testimonials" element={[<Header />,<Testimonials />]} />
          <Route exact path="/Who" element={<Who />} />
          {/* <ThemeProvider theme={theme}> */}
          <Route exact path="/Blog" element={[<Header />,<Blog/>]}/>
          {/* </ThemeProvider> */}
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
