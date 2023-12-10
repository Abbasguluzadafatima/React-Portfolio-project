import { useState } from "react";
import { Navigation } from "../../components";
import { About } from "../About";
import { Education } from "../Education";
import { Experience } from "../Experience";
import { Skill } from "../Skill";
import { Portfolio } from "../Portfolio";
import { Contact } from "../Contacts";
import { Feedback } from "../Feedback";
import './inner.css'

export const Inner = () => {
  const [navVisible, showNavbar] = useState(false);
  return (
    <div className="container">
    <Navigation visible={navVisible} show={showNavbar}/>
    <div className={!navVisible ? "page" : "page page-with-navbar"}>

    <About  />
    <Education />
    <Experience/>
    <Skill/>
    <Portfolio/>
    <Contact/>
    <Feedback/>
    </div>
    </div>
  )
}
