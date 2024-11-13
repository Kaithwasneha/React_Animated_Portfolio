import React from 'react'
import project from '../data/projects.json'


const Project = () => {
    return (
        <>
            <div className="container projects my-3" id='projects'>
                <h1>PROJECTS</h1>
                <div className="row d-flex justify-content-center align-items-center">
                    {
                        project.map((data) => (
                            <>
                                <div key={data.id} className='my-3 col-sm-6 col-md-4 col-lg-3 mx-4'>
                                    <div className="card bg-dark text-light" style={{
                                        width: "18rem",
                                        borderRadius: "10px",
                                        border: '1px solid #00b4ff',
                                        boxShadow: '5px 5px 10px 10px rgba(0, 180, 255, 0.5)'
                                    }}
                                        data-aos="flip-right"
                                        data-aos-duration="1000"
                                    >
                                        <div className='img d-flex justify-content-center align-items-center p-3'>
                                            <img src={data.imageSrc} className="card-img-top" alt="..."
                                                style={{
                                                    width: "200px", height: "200px",
                                                    borderRadius: "10px",
                                                    border: '2px solid #00b4ff',

                                                }} />
                                        </div>

                                        <div className="card-body text-center ">
                                            <h5 className="card-title">
                                                {data.title}
                                            </h5>
                                            <p className="card-text">{data.description}</p>
                                            <a href={data.demo} className="btn btn-outline-warning mx-3">Demo</a>

                                            <a href={data.source} className="btn btn-outline-success">Code</a>
                                        </div>
                                    </div>
                                </div>

                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Project