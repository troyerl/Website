import React from 'react'
import { Link } from 'react-scroll'
import IosLaptop from 'react-ionicons/lib/IosLaptop'
import IosPerson from "react-ionicons/lib/IosPerson";
import IosText from "react-ionicons/lib/IosText";
import MdHome from "react-ionicons/lib/MdHome";


const Navbar = () =>{
    return (
        <div className="nav justify-content-center">
            <Link activeClass="active"
                  className = "element first"
                  to="mainScreen"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
            >
                Home
              <MdHome className="ml-2 mb-1" color="white" fontSize="30px"/>
            </Link>
            <Link activeClass="active"
                  className = "element"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-32}
                  duration={800}
            >
                About
              <IosPerson className="ml-2 mb-1" color="white" fontSize="30px"/>
            </Link>
            <Link activeClass="active"
                  className = "element"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={800}
            >
              Projects
              <IosLaptop className="ml-2 mb-1" color="white" fontSize="30px"/>
            </Link>
            <Link activeClass="active"
                  className = "element"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={800}
            >
              Contact
              <IosText className="ml-2 mb-1" color="white" fontSize="30px"/>
            </Link>
        </div>
    )
}

export default Navbar