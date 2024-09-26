import "./css/contactUs.css";
import facebook from "../assets/icons/icons8-facebook.svg";
import instagram from "../assets/icons/icons8-instagram.svg";
import linkedin from "../assets/icons/icons8-linkedin.svg";
import youtube from "../assets/icons/icons8-youtube.svg";

export default function ContactUs() {
  return (
    <div className="contactUs">
      <div className="contactUsLeft">
        <div className="contactUsLeftTitle">Booking Service</div>
        <div className="contactUsInputs">
          <form action="https://api.staticforms.xyz/submit" method="post">
            <input
              type="hidden"
              value="460ff287-edc7-47b3-8f4a-4690b9454529"
              name="accessKey"
            ></input>
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="name"
              required
            ></input>
            <input
              type="email"
              className="input"
              placeholder="E-mail"
              name="email"
              required
            ></input>
            <input
              type="text"
              className="input"
              placeholder="Phone"
              name="phone"
            ></input>
            <input
              type="hidden"
              name="redirectTo"
              value="https://pelorus-production.netlify.app"
            ></input>
            <select className="input" placeholder="" name="client">
              <option value="Business" className="option">
                Business
              </option>
              <option value="Business" className="option">
                Personal
              </option>
            </select>
            <textarea
              name="message"
              className="input"
              id="message"
              placeholder="Hi, I wanted to book..."
              height="100px"
            ></textarea>
            <input type="submit" className="submit" value="Book"></input>
          </form>
        </div>
      </div>
      <div className="contactUsRight">
        <div className="quote">FORM YOUR VISION TO REALITY</div>
        <div className="socials">
          <img
            src={instagram}
            height="75px"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.instagram.com/pelorus_production";
            }}
          ></img>
          <img
            src={facebook}
            height="75px"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.facebook.com/profile.php?id=61564649318397&mibextid=LQQJ4d";
            }}
          ></img>
          <img
            src={linkedin}
            height="75px"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://google.com";
            }}
          ></img>
          {/* <img src={youtube} height='100px'></img> */}
        </div>
      </div>
      <div className="footer">Copyright &copy; Pelorus 2024</div>
    </div>
  );
}
