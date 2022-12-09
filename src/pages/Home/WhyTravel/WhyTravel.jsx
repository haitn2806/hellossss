import React, { useEffect } from "react";
import { ImScissors } from "react-icons/im";
import "./WhyTravel.css";
import Aos from "aos";
import "aos/dist/aos.css";

import a from "../../../data/images/bvmt-blackwhihe.jpg";
// import a from "../../../data/images/bvmt-modified.jpg";

import b from "../../../data/images/natural.jpg";
import c from "../../../data/images/BVMT2.jpg";

const WhyTravel = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="WhyTravel">
            <div className="WhyTravel-title main-home">
                Why travel with VNXpedia?
            </div>
            <div className="WhyTravel-content">
                {/* <div className="container-img">
          <div className="img-content">
            <img src={b} alt="a" />
          </div>
          <div className="img-content">
            <img src={c} alt="a" />
          </div>
        </div> */}
                <div className="title-home">
                    Throughout the operation guideline and shown on each
                    product, VNX aims at sustainability, supporting the
                    community and developing green tourism.
                </div>
                <div className="container-card">
                    <div className="content" data-aos="fade-down">
                        <div className="img-content">
                            <img
                                src="https://th.bing.com/th/id/R.0e87376fc560ca5065cdb45d06e234d9?rik=kqZ993ImvZvD6A&pid=ImgRaw&r=0"
                                alt="a"
                            />
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <ImScissors className="icon" />
                            </div>
                            <div className="text">100% Tailor made</div>
                            <ul>
                                <li>
                                    10% of the annual net profit is used for
                                    funding for environmental protection,
                                    humanitarian and gender equality purposes.
                                    With a developing country like Vietnam,
                                    problems such as destruction of the natural
                                    environment (deforestation, water pollution,
                                    emissions, use of plastic bags, etc.),
                                    victims of social evils especially the issue
                                    of gender equality, along with the
                                    consequences of natural disasters (flood,
                                    drought, fire, explosion,...) are becoming
                                    more and more serious and difficult to
                                    control. The consequences are also a problem
                                    and a burden for the country. The founders
                                    of VNxpedia started participating in charity
                                    programs very early. Being aware of the
                                    seriousness of the above consequences,
                                    empathizing with difficult situations.
                                    VNXpedia has accompanied many charity
                                    programs, worked closely with environmental
                                    and humanitarian organizations, and
                                    contributed from strength to finance to show
                                    humanity in its activities. In the ecosystem
                                    and throughout the operation of our
                                    products. After more than 30 years of
                                    operation, we always actively deduct 10% of
                                    the net profit of the entire business to
                                    contribute to the direct activities of
                                    individuals and organizations for the
                                    purpose of environmental protection,
                                    humanitarian purposes and related to gender
                                    equality. Travel responsibly with the
                                    environment and landscape on each tour. Join
                                    hands to build and develop the community
                                    such as preserving indigenous culture,
                                    supporting with environmental and
                                    humanitarian organizations, and contributed
                                    from strength to finance to show humanity in
                                    its activities. In the ecosystem and
                                    throughout the operation of our products.
                                    After more than 30 years of operation, we
                                    always actively deduct 10% of the net profit
                                    of the entire business to contribute to the
                                    direct activities of individuals and
                                    organizations for the purpose of
                                    environmental protection, humanitarian
                                    purposes and related to gender equality.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content" data-aos="fade-up">
                        <div className="img-content">
                            <img
                                src="https://static.thenounproject.com/png/408576-200.png"
                                alt="a"
                            />
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <ImScissors className="icon" />
                            </div>
                            <div className="text">100% Tailor made</div>
                            <ul>
                                <li>
                                    Travel responsibly with the environment and
                                    landscape on each tour. Join hands to build
                                    and develop the community such as preserving
                                    indigenous culture, supporting with
                                    humanitarian programs for local people.
                                    After thousands of trips have been
                                    organized, VNX's enthusiastic experts with a
                                    predetermined mind - have cleverly designed
                                    in each program, in each of their products,
                                    there is the presence of responsibility like
                                    no other. Use plastic bags, use food from
                                    local farming communities. Stop and support
                                    at souvenir shops produced by the disabled
                                    and disabled locally. In addition, there are
                                    many programs associated with landscape
                                    protection activities such as cleaning
                                    garbage on Ha Long Bay, collecting waste at
                                    some scenic spots, repairing houses after
                                    floods at Hoi An ruins, the ancient capital.
                                    Hue,... More specifically, we have
                                    successfully participated in a number of
                                    projects such as working with teachers in
                                    building schools and classrooms in some
                                    remote areas in the Northwest and South West
                                    regions. original.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content" data-aos="fade-down">
                        <div className="img-content">
                            <img src={b} alt="b" />
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <ImScissors className="icon" />
                            </div>
                            <div className="text">100% Tailor made</div>
                            <ul>
                                <li>
                                    As for VNX's, also successfully implemented
                                    the tour "One tree for each visitor for Da
                                    Lat" to help spread the message "When you
                                    plant a tree by yourself at a tourist
                                    destination, each visitor will actively
                                    contribute to preserving, embellish the
                                    environment”. These tours have in common
                                    that they attract a lot of young people and
                                    foreigners. Not only travel agencies, even
                                    tourist destinations have been organizing
                                    attractive activities, attracting tourists
                                    and visitors to participate in environmental
                                    protection. For example, Ly Son island has
                                    soon exploited models of green tourism
                                    experiences, also known as eco-tourism, in
                                    order to limit adverse impacts on the
                                    environment such as smoke emission, waste,
                                    destruction of ecosystems, etc. plant and
                                    animal behavior…
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyTravel;
