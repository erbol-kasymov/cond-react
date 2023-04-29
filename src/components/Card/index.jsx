import React from "react"
import './Card.css'

export const Card = ({data}) => {
    // return(
    // <div className="card" style={{backgroundColor: data.color}}>
    //     {data.title}
    // </div>
    // )
    // if(data.color){
    //     return(
    //         <div className="card" style={{backgroundColor: data.color}}>
    //             {data.title}
    //         </div>
    //         )
    // }else{
    //     return(
    //         <div className="card" style={{backgroundImage: `url(${data.img})`}}>
    //             {data.title}
    //         </div>
    //     )
    // }

    // 2-case
    // switch (data.color) {
    //     case null:
    //         return(
    //             <div className="card" style={{backgroundImage: `url(${data.img})`}}>
    //                 <ul>
    //                     <li>{data.title}</li>
    //                 </ul> 
    //             </div>
    //         )
    //         break;
    
    //     default:
    //         return(
    //             <div className="card" style={{backgroundColor: data.color}}>
    //                 <ul>
    //                     <li>{data.title}</li>
    //                 </ul>
    //             </div>
    //         )
    //         break;
    // }

    // 3-case
    // return(
    //     <>
    //     {
    //         data.color
    //         ?
    //         <div className="card" style={{backgroundColor: data.color}}>
    //             <ul>
    //                 <li>{data.title}</li>
    //             </ul>
    //         </div>
    //         :
    //         <div className="card" style={{backgroundImage: `url(${data.img})`}}>
    //             <ul>
    //                 <li>{data.title}</li>
    //             </ul>
    //         </div>
    //     }
    //     </>
    // )

    // 4-case
    return(<>
        {
            data.color && <div className="card" style={{backgroundColor: data.color}}>
                                <ul>
                                    <li>{data.title}</li>
                                </ul>
                            </div>
        }
        {
            data.color === null && <div className="card" style={{backgroundImage: `url(${data.img})`}}>
                                <ul>
                                    <li>{data.title}</li>
                                </ul>
                            </div>
        }
    </>
    )
}