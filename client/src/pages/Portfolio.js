import React, { useState, useEffect } from "react";
import RepoCard from "../components/RepoCard";
import API from "../utils/API";
import styled from "styled-components";
import Loading from "../components/Loading";
import Navigation from "../components/Navigation";
import SideNav from "../components/SideNav";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import "./style.css";

const Portfolio = () => {
  const [loadWheel, setLoadWheel] = useState(true);
  const [repoState, setRepoState] = useState([]);
  const [[page, direction], setPage] = useState([0, 0]);

  let repos = [];

  const getRepos = () => {
    API.getRepos().then((response) => {
      repos = response.data;
      setRepoState(repos);
    });
  };
  useEffect(() => {
    getRepos();
    setTimeout(() => {
      setLoadWheel(false);
    }, 1500);
  }, []);

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 5000 : -5000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const repoIndex = wrap(0, repoState.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  if (loadWheel === true) {
    return (
      <LoadContainer>
        <Loading />
      </LoadContainer>
    );
  } else {
    return (
      <>
        {/* <SideNavContainer>
          <SideNav />
        </SideNavContainer> */}
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
        {/* <PortfolioWrapper> */}
          <PortfolioContainer className="container-fluid">
            {/* <PortfolioRow className="row mt-3 mb-3">
              <div className="col">
                <PortfolioHeader>Portfolio</PortfolioHeader>
              </div>
            </PortfolioRow> */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "smooth", stiffness: 400, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              >
                <RepoCard value={repoState[repoIndex]} id={repoState[repoIndex]._id} className="repo-card" />
              </motion.div>
            </AnimatePresence>
            <div className="next" onClick={() => paginate(1)}>
              <i className="fas fa-chevron-circle-right" />
            </div>
            <div className="prev" onClick={() => paginate(-1)}>
              <i className="fas fa-chevron-circle-right" />
            </div>
            {/* <PortfolioRow className="row mt-0 mb-5 row-cols-3 justify-content-center">
              {repoState.map((repo) => {
                return <RepoCard value={repo} key={repo._id} />;
              })}
            </PortfolioRow> */}
          </PortfolioContainer>
        {/* </PortfolioWrapper> */}
      </>
    );
  }
};

const NavigationContainer = styled.div`
  position: absolute;
  top: 0%;
  right: 0%;
  z-index: 9999;
`;

const PortfolioWrapper = styled.div`
  // position: relative;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // overflow: hidden;
`;

const PortfolioContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    color: #f2f2f2;
  }
  .next,
  .prev {
    top: calc(50% - 20px);
    position: absolute;
    background: white;
    border-radius: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    z-index: 2;
  }
  .next {
    right: 10px;
  }
  .prev {
    left: 10px;
    transform: scale(-1);
  }
  
  
`;

const PortfolioRow = styled.div`
  margin-top: 11%;
`;

const LoadContainer = styled.div``;

// const SideNavContainer = styled.div`
//   i{
//     color: #182628;
//   }
//   @media (min-width: 576px) {
//   }
//   @media (min-width: 768px) {
//   }
//   @media (min-width: 992px) {
//   }
//   @media (min-width: 1200px) {
//   }
// `

const PortfolioHeader = styled.h1`
  color: #f2f2f2;
  border-bottom: 0.5px solid #3b945e;
`;

export default Portfolio;
