import Jobs from "./Jobs"

export default function JobContainer({listing, filtering}) {

    return (

        <div style={{marginTop: '40px'}}>
            <Jobs
                key={listing.id}
                logo={listing.logo}
                company={listing.company}
                new={listing.new}
                role={listing.role}
                level={listing.level}
                featured={listing.featured}
                position={listing.position}
                postedAt={listing.postedAt}
                contract={listing.contract}
                languages={listing.languages}
                tools={listing.tools}
                location={listing.location}
                filter_f={filtering}
            />

        </div>

    )
}


// import React, {useEffect, useState} from "react";

// const Job = (props) => {
//     const {
//         company,
//         contract,
//         featured,
//         id,
//         languages,
//         level,
//         location,
//         logo,
//         position,
//         postedAt,
//         role,
//         tools,
//     } = props.data;

//     return <div className="job-container">{props.data.company}</div>

// }


//     } = props.data;

//     let keywords = [role, level, ...languages, ...tools];

//     const [icon, setIcon] = useState("");

//     const importSvgs = () => {
//         const logoSvg = import(`${logo}`).then((d) => {
//             setIcon(d.default)
//         });
//     };

//     useEffect(() => {
//         importSvgs();
//     }, [logo]);

//     return (
//         <div className="job-container">
//             <div className="logo">
//                 <img src={icon} alt=""></img>
//             </div>
//             <div className="part1"></div>
//             <div className="part2">
//                 {keywords.map((key, id) => (
//                     <button onClick={()=> props.setKeywords} key={id}>{key}</button>
//                 ))}
//             </div>

//         </div>
//     )
// };
// export default Job;