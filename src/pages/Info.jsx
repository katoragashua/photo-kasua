import {useParams} from  "react-router-dom"
import {Context} from "../Context"
import {useContext} from "react"
import useLogic from "../useLogic"


const Info = (props) => {
    const {img_query} = useParams();
    const {images, photos, query} = props;

    // Dynamically choosing what state array to use if you're coming from Home or Photo pages.
    const arr = query? photos : images;

    // Find the photo clicked on
    const info = arr.find(img => img.id === img_query)
    console.log(info)
    return (
        <div className="info-page container">
            <figure className="info-fig">
                <img src={info.urls.regular} alt="" className="img-info" />
            </figure>
            <div className="info">
                <p>Views: {info.views.toLocaleString()}</p>
                <p>Price: ${info.price}</p>
                <p>Likes: {info.likes}</p>
                <p>Photographer: <span>{info.user.first_name} {info.user.last_name}</span></p>
                <p>Username: {info.user.username}</p>
                <p>For hire: {info.user.for_hire? "Yes": "No"}</p>
                <p>Location: {info.location.title}</p>
                <p>Description: {info.description}</p>
                <a href={info.urls.regular} download target="_blank"><small className="download">Download Image</small></a>
            </div>
            
        </div>
    )
}

export default Info