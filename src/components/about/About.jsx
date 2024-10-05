import './About.css'
import about_img from '../../assets/about.jpg'
// import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            {/* <img src={play_icon} alt="" className='play-icon' /> */}
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrows's Leaders Today</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Voluptates ipsam accusamus vitae corporis numquam quos et
                 laudantium quas amet enim quibusdam fugit, unde vero, dolor
                  velit repellat ut dolores nobis?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>

            <p>
            Quibusdam veritatis explicabo tempore reiciendis aliquam quo
             id quisquam facilis magni odio esse voluptate ad, placeat 
             debitis possimus ut obcaecati distinctio aperiam cum necessitatibus! 
             Voluptates esse similique, dolorum voluptatibus eum debitis ipsa
              maiores modi, officia ducimus cumque facilis quo voluptatum nam
               deserunt. Aliquam consequatur laudantium officia, dolore tempore, 
               sed itaque veniam praesentium eaque suscipit vel quibusdam nisi 
               expedita inventore doloremque ex quae modi aperiam quis repellat. 
               Odit magnam modi ratione amet dolore at nostrum aliquid quae error 
               inventore aliquam tempore illo iure ullam unde quam fuga, laborum,
                placeat eligendi! Corporis, rem autem?

            </p>
        </div>

    </div>
  )
}

export default About