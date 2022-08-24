import React from 'react';
const Search = (props) => {
    return (
      <div className='grid-container'>
          <div className='grid-x grid-padding-x'>
            <div className='all-locals card cell medium-5'>
               <a href="/locals"><p className='card-text'>ALL LOCALS</p></a>
            </div>
           <div className='submit-local card cell medium-5'>
               <a href='/locals/new'><p className='card-text'>SUBMIT A LOCAL</p></a>
             </div>
          </div>
          <div className='grid-x grid-padding-x'>
          <div className=' faq-panel card cell medium-5'>
                <a href='/faq' ><p className='card-text'>FAQ</p></a>
          </div>
         <div className='your-profile card cell medium-5'>
                <a href="" ><p className='card-text'>YOUR PROFILE</p></a>
          </div>
          </div>
      </div>

     );
}
 
export default Search;