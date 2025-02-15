import { TbCurrentLocation } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,
        job_type,salary,job_description,job_responsibility,
        educational_requirements,experiences,contact_information}=job;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={logo}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div >
        <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe] mr-4">{remote_or_onsite}</button>
        <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe] ml-4">{job_type}</button>
    </div>
    <div className="mt-4 flex mr-4">
        <h2 className="flex mr-2"><TbCurrentLocation className="text-2xl"></TbCurrentLocation>{location}</h2>
        <h2 className="flex"><FaSackDollar className="text-2xl"></FaSackDollar>{salary}</h2>
    </div>
    <div className="card-actions">
      <Link to={`/job/${id}`}>
      <button className="btn btn-primary">View Details</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Job;