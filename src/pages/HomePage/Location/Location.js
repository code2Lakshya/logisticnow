import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import './Location.css';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';

const Location = () => {


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    })

    return (
        <div className="location">
            {isLoaded &&
                <GoogleMap zoom={10} center={{ lat: 22.57785, lng: 88.46238 }} mapContainerClassName='map-container'>
                    <Marker position={{ lat: 22.57785, lng: 88.46238 }} />
                </GoogleMap>}
            <div className="location-details">
                    <p>Webel IT Park, Module 101, 1st Floor, DH Block(Newtown), Action Area I, Newtown, New Town, Chakpachuria, West Bengal 700156</p>
                <div className="card">
                    <span><BiPhoneCall /></span>
                    <span>+91 8282829955</span>
                </div>
                <div className="card">
                    <span><AiOutlineMail /></span>
                    <span>info@adslogistic.in</span>
                </div>
                <div className="card">
                    <span><AiOutlineMail /></span>
                    <span>sales@adslogistic.in</span>
                </div>
            </div>
        </div>
    );
}
export default Location;