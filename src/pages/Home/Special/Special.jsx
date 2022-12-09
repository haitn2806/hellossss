import React from 'react';
import './Special.css';
import Data from '../../../data/stylelist.json';

const Special = () => {
    
  return (
    <div className='sp-grid'>
        <div className='item-big'>
          
            <div className='box-tittle'>
            <h1 className='box-h1'>WELLES</h1>
            <hr className='box-hr'/>
            </div>
            <p className='box-p'>{Data[9].content}</p>
        </div>
        <div className='grid-mini'>

            <div className='grid-min'>
            <div className='item-small is1' >
            <div className='box-tittle'>
            <h1 className='box-h1'>M.I.C.E</h1>
            <hr className='box-hr'/>
            </div>
            <p className='box-p'>{Text}</p>
            </div>
            <div className='item-small is2'>
            <div className='box-tittle'>
            <h1 className='box-h1'>LUXURY</h1>
            <hr className='box-hr'/>
            </div>
            <p className='box-p'>{Text}</p>
            </div>
            </div>

            <div className='grid-min'>
            <div className='item-small is3'>
            <div className='box-tittle'>
            <h1 className='box-h1'>HERITAGES</h1>
            <hr className='box-hr'/>
            </div>
            <p className='box-p'>{Text}</p>
            </div>
            <div className='item-small is4'>
            <div className='box-tittle'>
            <h1 className='box-h1'>REPONSIBLE TRAVEL</h1>
            <hr className='box-hr'/>
            </div>
            <p className='box-p'>{Text}</p>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Special