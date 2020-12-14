import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import NavButton from "../components/NavButton";
import Navigation from "../components/Navigation";

const Landing = () => {
    const [loadWheel, setLoadWheel] = useState(true);
    console.log(loadWheel);


    useEffect(() => {
        const myVar = setTimeout(() => {
            setLoadWheel(false);
            console.log(loadWheel);
        }, 3500)
    }, [])

    if (loadWheel === true) {
        return (
            <div>
                <Loading/>
            </div>
        )
    } else {
        return (
          <div>
            <NavButton>
              <Navigation />
            </NavButton>
            <p>Hello World</p>
          </div>
        );
    }
}

export default Landing;