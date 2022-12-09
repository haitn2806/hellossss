import "./SpecialTour.css";
import Data from '../../data/stylelist.json';
import TourStyleCard from "../TourStyleCard/TourStyleCard";
import { Link } from 'react-router-dom'

import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"

function SpecialTour() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="wrapper-special">
      <div className="special-tour">
        <div className="main-home special-title ">
          Special Tour
          <hr className="hrt" />
        </div>
        <p className="title-home">
          We know that every traveller is different, so our experts have
          meticulously designed different Vietnam touring styles to help you
          explore Vietnam in a way that suits you the best. Want to see the
          highlights of Vietnam, take a look on our Classic Vietnam Tours; want
          to have unforgettable experiences with your children, Vietnam Family
          Tours can't be missed; want to soak up the sun-and-sea, choose one
          best beach tour from our Vietnam Beach Holidays theme. No matter what
          kind of traveller you are, our Best Vietnam Tours by Styles collection
          got a tour (or probably dozen) that will fit you just right.
        </p>
      </div>
      <div className='sp-grid'>
        <div className='item-big' data-aos="fade-down">
          <Link to={`/${Data[11].title}`} >

            <TourStyleCard data={Data[11]} />
          </Link>
        </div>
        <div className='grid-mini'>

          <div className='grid-min'>
            <div className='item-small is1' data-aos="fade-down" >
              <Link to={`/${Data[10].title}`} >
                <TourStyleCard data={Data[10]} />
              </Link>
            </div>
            <div className='item-small is2' data-aos="fade-up">
              <Link to={`/${Data[9].title}`} >
                <TourStyleCard data={Data[9]} />
              </Link>
            </div>
          </div>

          <div className='grid-min'>
            <div className='item-small is3' data-aos="fade-up">
              <Link to={`/${Data[8].title}`} >
                <TourStyleCard data={Data[8]} />
              </Link>
            </div>
            <div className='item-small is4' data-aos="fade-up" >
              <Link to={`/${Data[12].title}`} >
                <TourStyleCard data={Data[12]} />
              </Link>
            </div>
            <div className='item-small is5' data-aos="fade-up" >
              <Link to={`/${Data[7].title}`} >
                <TourStyleCard data={Data[7]} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SpecialTour;