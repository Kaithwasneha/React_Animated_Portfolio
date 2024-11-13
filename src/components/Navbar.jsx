import React from 'react'
// navbar for other device 

const Navbar = () => {
    return (
        <div class="container nav_bar"
            data-aos="fade-down"
            data-aos-duration="1000"
        >
            <div className="left nav_items text-bg">Portfolio</div>
            <div className="right">
                <a href="#home" className="nav_items">Home</a>
                <a href="#experience" className="nav_items">Experience</a>
                <a href="#skills" className="nav_items">Skills</a>
                <a href="#projects" className="nav_items">Projects</a>
                <a href="#contact" className="nav_items">Contact</a>
            </div>
        </div>
    )
}

export default Navbar





