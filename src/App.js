import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./Component/Navbar";
import Homepage from "./Component/Homepage";
import CryptoCurrency from "./Component/CryptoCurrency";
import CryptoDetails from "./Component/CryptoDetails";
import Exchanges from "./Component/Exchanges";
import News from "./Component/News";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<CryptoCurrency />}
              />
              <Route exact path="crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CryptoApp <br />
            © All rights reserved <br/>
            Made by <span>
            <a href="https://www.linkedin.com/in/shubham-gupta-5588a6200/"
            target="_blank">Shubham Gupta</a>
            </span>
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
