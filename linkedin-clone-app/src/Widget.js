import React from 'react'
import './Widget.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widget = () => {

    const widgetArticle = (heading,subtitle) => {
        return(
            <div className='widgets-article'>
                <div className='widgets-articleLeft'>
                    <FiberManualRecordIcon />
                </div>
                <div className='widgets-articleRight'>
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }

    return (
        <div className='widgets'>
            <div className='widgets-header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {widgetArticle('ReactJS Job hirings','Top News - React Dev jobs are getting increased day by day')}
            {widgetArticle('SpaceX - StarShip Update','Elon Musks SpaceX is making a series of prototype of starship')}
            {widgetArticle('Ola Electric Scooter','Ola makes 22,000 pre-registrations in 24 hours')}
            {widgetArticle('Dogecoin','Dogecoin share hits skyrocket, as market seems to be after dogecoin in future')}

        </div>
    )
}

export default Widget
