import React from 'react';
import {BsList} from 'react-icons/bs';
import OutsideClickHandler from 'react-outside-click-handler';

const Iconmenumobile = ({cla,cli,clickout}) => {
  return (
    <OutsideClickHandler className={cla}
    onOutsideClick={() => {
      clickout('hidden')
    }}
  > 
    <BsList  onClick={cli}></BsList>
    </OutsideClickHandler>
    
  )
}

export default Iconmenumobile