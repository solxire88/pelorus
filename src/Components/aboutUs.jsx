import './css/aboutUs.css'
import ReactPlayer from 'react-player'

export default function AboutUs(){


    return (
        <div className="aboutUs">
            <div className='aboutUsLeft'>
                <div className='aboutUsLeftTitle'>
                    ABOUT US
                </div>
                <p className='aboutUsLeftText'>
                A production team based in Algeria. We concentrate in the creation of visual content. Our approach includes Commercials, Events, Real Estate showcase, Short Films and Interviews. The Production team work also involves professional Photography capturing Models, Properties, Events and Products with precision. We are equipped to deliver visuals that enhance and elevate the final presentation with a careful approach and attention to detail. We ensure each project is executed with high standard quality.
                </p>
            </div>
            <div className='aboutUsRight'>
                <div className='aboutUsVideo'> 
                    <ReactPlayer  url='https://vimeo.com/1012185692?share=copy#t=0' controls={true} width='100%' loop={true}></ReactPlayer>
                </div>
            </div>
            
        </div>
    )
}