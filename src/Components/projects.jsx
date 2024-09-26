import ReactPlayer from 'react-player'
import './css/projects.css'
import mamaLogo from '../assets/MamaLogo.png'
import hammoudBanner from '../assets/Pics/HammoudBoualemBanner.jpg'
import mamaBanner from '../assets/Pics/MamaSopiBanner.jpg'
import mostaLogo from '../assets/MostaLogo.png'

export default function Projects(){

    return (
        <div className='projects'>
            <ProjectOne></ProjectOne>
            <ProjectTwo></ProjectTwo>
            <ProjectThree></ProjectThree>
        </div>
    )
}


function ProjectOne(){

    return (
        <div className='projectOne'>
            <div  className='projectOneUp'>
                <div className='projectOneHeader'>
                    <div className='projectOneTitle'>
                        Hammoud Boualem AD
                    </div>
                    <div className='projectOneText'>
                        Hamoud Boualem's commercial celebrates Algerian heritage with scenes of family and tradition, emphasizing the quality and authenticity of their products. It highlights the brand’s commitment to preserving traditional flavors while fostering a sense of cultural pride. The warm and inviting presentation appeals to viewers' nostalgia and connection to local craftsmanship.
                    </div>
                    <div className='projectOneTags'>
                        <div className='projectOneTag'>
                            Chill
                        </div>
                        <div className='projectOneTag'>
                            Tradition
                        </div>
                        <div className='projectOneTag'>
                            Drink
                        </div>
                    </div>
                </div>
                <div className='projectOneVideo'>
                    <ReactPlayer url='https://vimeo.com/1012201432?share=copy#t=0' controls={true} playIcon={true} loop={true} height='100%' width='100%' ></ReactPlayer>
                </div>
            </div>

            <div className='projectOneBanner'>
                <div className='projectOneBannerItem'>
                    <ReactPlayer url='https://vimeo.com/1012204679?share=copy#t=0&autoplay=1&loop=1&background=1' playsInline loop={true} controls={false} playing={true} muted={true}  height='100%' width='100%'></ReactPlayer>
                </div>
                    <img src={hammoudBanner} ></img>
            </div>
        </div>
    )
}



function ProjectTwo(){

    return (
        <div className='projectTwo'>
        <div  className='projectTwoUp'>
            <div className='projectTwoHeader'>
                <div className='projectTwoTitle'>
                    <img src={mamaLogo} draggable='false' height='100px'></img>
                </div>
                <div className='projectTwoText'>
                Our new Mama Spaghetti ad showcases its perfect al dente texture and delicious versatility. With mouthwatering visuals of family meals, we highlight the authentic taste that makes Mama the top choice for creating memorable dishes.                </div>
                <div className='projectTwoTags'>
                    <div className='projectTwoTag'>
                        Spaghetti
                    </div>
                    <div className='projectTwoTag'>
                        Cozy
                    </div>
                    <div className='projectTwoTag'>
                        Italian
                    </div>
                </div>
            </div>
            <div className='projectTwoVideo'>
                <ReactPlayer url='https://vimeo.com/1012745197?share=copy#t=0' controls={true} loop={true} height='100%' width='100%'></ReactPlayer>
            </div>
        </div>
            <div className='projectTwoBanner'>
                <img src={mamaBanner}></img>
            </div>

        </div>
    )
}

function ProjectThree(){

    return (
        <div className='projectThree'>
        <div  className='projectThreeUp'>
            <div className='projectThreeHeader'>
                <div className='projectThreeTitle'>
                    <img src={mostaLogo} draggable='false' height='100px'></img>
                </div>
                <div className='projectThreeText'>
                Mosta Glaces celebrates the essence of Algerian craftsmanship, showcasing its commitment to producing fresh, locally made ice creams. With a focus on quality and authenticity, it highlights the brand's dedication to preserving the rich flavors of Algeria. The vibrant presentation evokes a sense of pride and connection to homegrown traditions, inviting consumers to indulge in the freshness of a truly Algerian product.
                </div>
                <div className='projectThreeTags'>
                    <div className='projectThreeTag'>
                        Fresh
                    </div>
                    <div className='projectThreeTag'>
                        Ice Cream
                    </div>
                    <div className='projectThreeTag'>
                        Authentic
                    </div>
                </div>
            </div>
            <div className='projectThreeVideo'>
                <ReactPlayer url='https://vimeo.com/1012730790?share=copy#t=0' controls={true} playIcon={true} loop={true} height='100%' width='100%' ></ReactPlayer>
            </div>
        </div>

        <div className='projectThreeBanner'>
            <div className='projectThreeBannerItem'>
                <ReactPlayer url='https://vimeo.com/1012738129?share=copy#t=0&autoplay=1&loop=1&background=1' playsInline loop={true} controls={false} playing={true} muted={true}  width='100%' height='100%'></ReactPlayer>
            </div>
            <div className='projectThreeBannerItem'>
                <ReactPlayer url='https://vimeo.com/1012740785?share=copy#t=0&autoplay=1&loop=1&background=1' playsInline loop={true} controls={false} playing={true} muted={true}  width='100%' height='100%'></ReactPlayer>
            </div>

        </div>
    </div>
    )
}