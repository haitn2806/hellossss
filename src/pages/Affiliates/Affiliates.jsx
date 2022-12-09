// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Images from "../../components/Slick/Image";
import ImageSlider from "../../components/Slick/Slick";
import "./Affiliates.css";

export default function Affiliates() {
  // Chô này là tạo biến hiển thị 2 cái thẻ p
  const [high, sethigh] = useState("none");
  const [high1, sethigh1] = useState("none");
  const [high2, sethigh2] = useState("none");
  const [high3, sethigh3] = useState("none");

  // thêm class xử lí animation
  const [clicked, setclicked] = useState("");
  const [clicked1, setclicked1] = useState("");
  const [clicked2, setclicked2] = useState("");
  const [clicked3, setclicked3] = useState("");

  //Hàm này là đẻ nếu bấm vào thì đặt caid biến đó là block hoạc none , nếu high=block thì đặt nó làm none, ko thì ng lại
  const Sethight = () => {
    {
      high == "block" ? sethigh("none") : sethigh("block");
      clicked == "clicked" ? setclicked("") : setclicked("clicked");
    }
  };
  const Sethight1 = () => {
    {
      high1 == "block" ? sethigh1("none") : sethigh1("block");
      clicked1 == "clicked" ? setclicked1("") : setclicked1("clicked");
    }
  };
  const Sethight2 = () => {
    {
      high2 == "block" ? sethigh2("none") : sethigh2("block");
      clicked2 == "clicked" ? setclicked2("") : setclicked2("clicked");
    }
  };
  const Sethight3 = () => {
    {
      high3 == "block" ? sethigh3("none") : sethigh3("block");
      clicked3 == "clicked" ? setclicked3("") : setclicked3("clicked");
    }
  };

  return (
    <>
      <div className="affiliates-container">
        <div className="affiliates-banner">
          <h1 className="affiliates-jss22">Work With US</h1>
        </div>
        <div className="affiliates-wrapper">
          <h3 className="txt01 affiliates-banner-title">JOIN OUR TEAM</h3>
          <p
            style={{
              fontSize: "17px",
              marginTop: "17px",
              fontFamily: "Roboto ",
            }}
            className="affiliates-p affiliates-banner-text"
          >
            Butterfield & Robinson is always on the lookout for creative,
            talented and detailed-oriented people to join our team. Our team
            members put their heart and soul into every job that they do to
            ensure that our travellers have the most memorable trip of their
            lives. B&R is a place where you can build a career, and we have
            created a culture where people can succeed and develop.
          </p>
        </div>
      </div>
      <div className="affiliates-container01">
        <div className="affiliates-wrapper">
          <h3
            style={{ paddingTop: "30px" }}
            className="txt0 affiliates-banner-title"
          >
            OUR VALUES
          </h3>
          <p
            style={{
              fontSize: "17px",
              marginTop: "17px",
              fontFamily: "Montserrat",
            }}
            className="affiliates-p affiliates-banner-text"
          >
            These are the principles that guide our team and translate into the
            type of business we operate and the experiences we offer.
          </p>
        </div>
        <div
          style={{ marginTop: "17px" }}
          className={`mui-expansion-panel-summary ${clicked}`}
          onClick={() => Sethight()}
        >
          <div className="txttitle">
            <div className="asdf">
              <p
                style={{ fontSize: "18px", fontFamily: "Lora" }}
                className="affiliates-p edit-p "
              >
                Passion & Creativity{" "}
                <div
                  style={{ float: "right", alignItems: "right" }}
                  className={`plus-icon ${clicked}`}
                />
              </p>
            </div>
            {/* 2 cái thẻ dưới cho giá trị display của nó là theo cái biến high ở trên , nếu bấm vào h1 sẽ thay đỏi high => display thay đổi =>mất đi hoặc hiện ra */}
            <p
              style={{
                fontSize: "17px",
                display: `${high}`,
                fontFamily: "Montserrat",
                fontWeight: "300",
              }}
              className="affiliates-p affiliates-pp"
            >
              <br />
              From our guides to our office teams, our independent contractors
              (region managers) to our travellers, our suppliers, and the people
              we meet on the road, everyone connected to a B&R trip is part of
              our community. Within this group, we celebrate diversity as an
              accurate representation of our travellers and the trip experiences
              we offer.
            </p>
          </div>
        </div>
        <div
          className={`mui-expansion-panel-summary ${clicked1}`}
          onClick={() => Sethight1()}
        >
          {/* gán cái hàm mà nếu bấm vào nó chạy đó  vô cái h1 */}
          <div className="txttitle">
            <div className="asdf">
              <p
                style={{ fontSize: "18px", fontFamily: "Lora" }}
                className="affiliates-p edit-p"
              >
                Community & Connection{" "}
                <div
                  style={{ float: "right", alignItems: "right" }}
                  className={`plus-icon ${clicked1}`}
                />
              </p>
            </div>

            {/* 2 cái thẻ dưới cho giá trị display của nó là theo cái biến high ở trên , nếu bấm vào h1 sẽ thay đỏi high => display thay đổi =>mất đi hoặc hiện ra */}
            <p
              style={{
                fontSize: "17px",
                display: `${high1}`,
                fontFamily: "Montserrat",
                fontWeight: "300",
              }}
              className="affiliates-p affiliates-pp"
            >
              <br />
              Every member of our team has a passion for their craft and a level
              of creativity required to deliver the type of experiences we do.
              These principles apply to our trip planning, on-the-ground
              research, guiding, marketing, operations — to all that we do.
            </p>
          </div>
        </div>
        <div
          className={`mui-expansion-panel-summary ${clicked2}`}
          onClick={() => Sethight2()}
        >
          {/* gán cái hàm mà nếu bấm vào nó chạy đó  vô cái h1 */}
          <div className="txttitle">
            <div className="asdf">
              <p
                style={{ fontSize: "17px", fontFamily: "Lora" }}
                className="affiliates-p edit-p"
              >
                Growth & Innovation{" "}
                <div
                  style={{ float: "right", alignItems: "right" }}
                  className={`plus-icon ${clicked2}`}
                />
              </p>
            </div>
            {/* 2 cái thẻ dưới cho giá trị display của nó là theo cái biến high ở trên , nếu bấm vào h1 sẽ thay đỏi high => display thay đổi =>mất đi hoặc hiện ra */}
            <p
              style={{
                fontSize: "17px",
                display: `${high2}`,
                fontFamily: "Montserrat",
                fontWeight: "300",
              }}
              className="affiliates-p affiliates-pp"
            >
              <br />
              We only made it this far by reiterating our processes and
              developing our product. We are always seeking new ways to travel
              that stay in line with our values. Evolution is what makes us a
              healthy, viable and ever-growing business.
            </p>
          </div>
        </div>
        <div
          className={`mui-expansion-panel-summary ani`}
          onClick={() => Sethight3()}
        >
          {/* gán cái hàm mà nếu bấm vào nó chạy đó  vô cái h1 */}
          <div className="txttitle">
            <div className="asdf">
              <p
                style={{
                  fontSize: "17px",
                  fontFamily: "Lora",
                  fontWeight: "200",
                }}
                className="affiliates-p edit-p"
              >
                Integrity & Trust
                <div
                  style={{ float: "right", alignItems: "right" }}
                  className={`plus-icon ${clicked3}`}
                />
              </p>
            </div>
            {/* 2 cái thẻ dưới cho giá trị display của nó là theo cái biến high ở trên , nếu bấm vào h1 sẽ thay đỏi high => display thay đổi =>mất đi hoặc hiện ra */}
            <p
              style={{
                fontSize: "17px",
                display: `${high3}`,
                fontFamily: "Montserrat",
                fontWeight: "300",
              }}
              className="affiliates-p affiliates-pp"
            >
              <br />
              We slow down to get it right, aiming to do the right thing in
              everything we do. We only service where we can provide value and
              are transparent in our actions.
            </p>
          </div>
        </div>
      </div>
      <div className="affiliates-container01">
        <div className="affiliates-wrapper">
          <h3 className="txt00 affiliates-banner-title">CURRENT OPENINGS</h3>
          <div className="txt00-content">
            <p style={{ fontSize: "22px" }} className="affiliates-p txt00-p">
              Toronto, Canada
            </p>
            <ul className="affiliates-ul">
              <li className="affiliates-li">
                {" "}
                <a className="affiliates-a" href="#">
                  {" "}
                  AGILE PROJECT COORDINATOR
                </a>
              </li>
              <li className="affiliates-li">
                {" "}
                <a className="affiliates-a" href="#">
                  {" "}
                  DIRECTOR, SALES & TRIP DESIGN (2 POSITIONS)
                </a>
              </li>
              <li className="affiliates-li">
                {" "}
                <a className="affiliates-a" href="#">
                  {" "}
                  director marketing
                </a>
              </li>
              <li className="affiliates-li">
                {" "}
                <a className="affiliates-a" href="#">
                  {" "}
                  TRIP OPERATIONS SPECIALIST
                </a>
              </li>
            </ul>
          </div>
          <div className="affiliates-jss8">
            <p
              style={{ fontSize: "17px", fontFamily: "Roboto" }}
              className="affiliates-p affiliates-banner-text"
            >
              <br />
              If you’re interested in joining our team and didn’t find a
              suitable position under current openings, send a copy of your
              resume to{" "}
              <a className="affiliates-a" href="#">
                employment@butterfield.com
              </a>
              . We look forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
      <div className="affiliates-container02">
        <div className="affiliates-wrapper">
          <h3 className="affiliates-banner-title txt">B&R Guides</h3>
          <h4
            className="txt03"
            style={{ textAlign: "center", color: "#3E739B" }}
          >
            Think you have what it takes?
          </h4>

          <div className="affiliates-slide-banner">
            <ImageSlider images={Images} />
          </div>

          <div className="affiliates-jss8">
            <p
              style={{
                fontSize: "17px",
                fontFamily: "Lora sanserif",
                marginTop: "30px",
                color: "rgba(0, 0, 0, 0.87)",
              }}
              className="affiliates-p affiliates-banner-text"
            >
              <br />
              At Butterfield & Robinson, we are always seeking new faces to fill
              the multi-faceted role of a B&R Guide. B&R Guides are an
              exceptional group. They are architects, lawyers, musicians,
              athletes, art historians, teachers, students, chefs, writers… all
              taking a few months (or years!) from their careers to share their
              love of travel. We believe that the best guides are people who
              bring with them a great attitude: a passion for the region or
              country in which they are guiding, lots of energy, character,
              charisma, confidence and creativity.
              <br />
              <br />
              Ideal candidates are:
              <br />
              <br />
              Local experts, Detail-oriented, Confident, Creative, Athletic,
              Outdoor enthusiasts, Seasoned travellers, Problem solvers,
              Outgoing, Personable, Quick thinkers, Experienced in the service
              industry
              <br />
              <br />
              All B&R guides must also meet these required skills and
              qualifications in order to be considered for our team:
              <br />
              <br />
              Deep knowledge of where they guide, Strong physical condition,
              Fluent in the language of the region(s) where they guide, Valid
              driver’s license, Ability to drive a standard transmission
              vehicle, Valid first aid/CPR certification, Good knowledge of
              bicycle mechanics
              <br />
              <br />
              Although our search for world-class guides is ongoing, we conduct
              most of our recruiting during the winter and early spring as we
              prepare for the upcoming season. To be considered for a position
              as a guide, applicants must be available for work and travel
              during our European season, which runs from May to October
              inclusive. We thank all applicants for their interest in B&R, but
              only those candidates with the required skills and qualifications
              noted here will be contacted for an interview.
            </p>
          </div>
        </div>
        <div className="affiliates-btn affiliates-wrapper">
          <button className="affiliates-btn-apply">APPLY NOW</button>
        </div>
      </div>

      <div className="affiliates-cont">
        <div className="txt04 affiliates-wrapper banner-title">
          Statement for Diversity And Inclusion
        </div>
        <div className="affiliates-wrapper affiliates-jss8 ">
          <p
            style={{ fontSize: "17px", textAlign: "start" }}
            className="affiliates-p affiliates-jjs08"
          >
            Travel is the act of celebrating differences. As a company built
            upon this act, our mission at B&R is to foster a diverse and
            inclusive environment that reflects what we represent.
            <br />
            <br />
            We unite people from all walks of life, whether it be in our offices
            or on the road. We encourage our team and stakeholders to show up
            fully and confidently exactly as they are, knowing that having a
            variety of voices and perspectives contributing to our business
            goals helps us deliver better experiences to our travellers.
            <br />
            <br />
            Butterfield & Robinson is an equal opportunity employer committed to
            creating a diverse and inclusive environment. We consider qualified
            applicants regardless of race, colour, religion, gender, national
            origin, sexual orientation, age, citizenship, disability, gender
            identity, or any other grounds prohibited by law. This meets the
            Ontario and Canadian Human Rights Codes list of prohibited grounds.
            <br />
          </p>
        </div>
      </div>
    </>
  );
}
