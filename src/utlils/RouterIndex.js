import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import About from "../pages/About";
import CreatePost from "../pages/CreatePost";
import SinglePost from "../pages/SinglePost";
import NotFound from "../pages/NotFound";

const RouterIndex = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/posts/:id`} element={<SinglePost />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default RouterIndex;
