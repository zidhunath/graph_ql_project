
export default function ProjectCard ({project}) {
    return( 
        <div className="col-md-6">  
            <div className="card  mb-3">    
                <div className="cardbody">
                        <div className="d-flex justify-content-between-alignitems-center">
                            <h5 className="card-title"> 
                                {project.name}
                            </h5>
                            <h5>    
                                <a className="btn btn-light" href={`/projects/${project.id}`}>View</a>
                            </h5>
                        </div> 
                        <p className="small">Status: <strong>{project.status}</strong></p> 
                </div>
            </div>
        </div>
    )
}