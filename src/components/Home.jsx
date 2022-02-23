// import Fade from 'react-reveal/Fade'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Styles/Home.scss";


const Home = () => {
    return ( 
      <div className="container">
      <div className="text_section">
        <div className="text_content">
          
            <h1>
              Welcome <br />
              to the &lt;Creek /&gt;
            </h1>
            <p>
              TechCreek is a habitat for the teeming population of youths making
              sense of their lives with their digital skills and competencies,
              and actively involved in the development of the ‘new economy’ from
              Rivers State.
            </p>
          
            <button className="btn">About Us</button>
          

             
              <div className="color_outline">

              </div>
              <div className="color_outline_two">

              </div> 
            
        </div>
      </div>

      <div className="image_section">
        <div className="img">{}</div>

        <div className="color_two"></div>
      </div>
      
        <footer>
          <div className="footer_text">
            <p>
               <h4>Location</h4>
               Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port
               Harcourt. <br /> Rivers State, Nigeria. talk@techcreek.ng
               09030003185, 09030003180
            </p>
          </div>
          <div className="socials">
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>

              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </footer>
    </div>
    );
}
 
export default Home;