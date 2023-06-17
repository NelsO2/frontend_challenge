import classes from './background.module.css'
export default function Background() {
    return (
        <div className={classes.background}>
            <svg width="1330" height="156" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M0 0h1440v156H0z"/></defs><g fill="none" fillRule="evenodd"><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><use xlinkHref="#a"/><g mask="url(#b)" fill="#63BABA"><path d="M495.73 563.419c-51.439-48.795-53.583-130.05-4.788-181.489a128.377 128.377 0 0 1 4.789-4.789l418.16-396.66c55.045-52.215 141.329-52.215 196.374 0 50.418 47.825 53.478 126.835 7.634 178.39l188.06-178.39c55.045-52.215 141.328-52.215 196.373 0 51.44 48.794 53.583 130.049 4.789 181.488a128.377 128.377 0 0 1-4.789 4.789l-418.158 396.658c-55.045 52.215-141.329 52.215-196.374 0-50.418-47.825-53.478-126.835-7.634-178.39L692.104 563.42c-55.045 52.215-141.328 52.215-196.373 0ZM360.464 45.523c-51.44-48.794-53.583-130.05-4.789-181.488a128.377 128.377 0 0 1 4.789-4.79l418.163-396.663c55.046-52.215 141.33-52.215 196.374 0 51.44 48.794 53.583 130.05 4.789 181.488a128.376 128.376 0 0 1-4.789 4.79L556.837 45.522c-55.045 52.215-141.328 52.215-196.373 0Zm-468.795 71.832c-51.439-48.795-53.583-130.05-4.789-181.489a128.377 128.377 0 0 1 4.79-4.788l418.16-396.661c55.045-52.215 141.328-52.215 196.373 0 51.44 48.794 53.583 130.05 4.79 181.488a128.378 128.378 0 0 1-4.79 4.789l-418.16 396.66c-55.045 52.216-141.329 52.216-196.374 0Z"/></g></g></svg>
        </div>
    )
}

// import React from "react";
// import close from "./images/icon-remove.svg";
// const Header = ({keywords, removeKeywords}) =>{
//     return (
//         <div className="header-container">
//             <ul>
//                 {keywords.map((key, id) => {
//                     return (
//                         <li key={id}>
//                             {key}
//                             <button onClick={ () => removeKeywords(key)}>
//                             <img src={close} alt="" />
//                         </button>
//                         </li>
//                     )
//                 })}
//                 <a href="#" onClick={() => clearAll()}>Clear</a>
//             </ul>
//         </div>
//     )
// }

// export default Header;