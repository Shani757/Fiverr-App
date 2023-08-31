import CatCard from "../../components/catCard/CatCard";
import Featured from "../../components/featured/Featured";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";

import { cards, projects } from "../../data";
import "./Home.scss";
import React from "react";
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card=>(
          <CatCard  key={card.id} item={card}/>
        ))}
      </Slide>
      <div className="faetures">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips.</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high quality services at every price tags. No hourly rates, just project based work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high quality services at every price tags. No hourly rates, just project based work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high quality services at every price tags. No hourly rates, just project based work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high quality services at every price tags. No hourly rates, just project based work.
            </p>
          </div>
          <div className="item">
            <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" controls></video>
          </div>
        </div>
      </div>
      <div className="faetures dark">
        <div className="container">
          <div className="item">
            <h1>fiverr Business</h1>
            <h1>A solution built for <i>business</i></h1>
            <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Talent matching
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Dedicated account management
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Team collaboration tools
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Business payment solutions
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" className="large-img" />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map(card=>(
          <ProjectCard  key={card.id} item={card}/>
        ))}
      </Slide>
    </div>
  );
};

export default Home;
