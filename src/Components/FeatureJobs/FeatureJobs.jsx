import { useEffect, useState } from "react";
import Job from "../Job/job";


const FeatureJobs = () => {

    const [jobs,setJobs]=useState([]);
    const [datalength,setDatalength]=useState(4);

    useEffect(()=>{
        fetch('jobs.json')
       .then(res=>res.json())
       .then(data=>setJobs(data));
    },[])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl"> Featured Jobs:{jobs.length}</h2>
                <p>Explore thousends of job orrourtunetites with all the information you need.</p>

            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0,datalength).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={datalength===jobs.length &&  'hidden'}>
                <button 
                onClick={()=>setDatalength(jobs.length)}
                className="btn btn-primary">Show all jobs</button>
            </div>
        </div>
    );
};

export default FeatureJobs;