import React from 'react';

const AboutUsPage = (props) => {
    return ( 
        <div>
         <div className='faq'>
          <h1 className='faq-text'>ABOUT US</h1>
        </div>
        <div>
            <h2>Hello! I'm Devin</h2>
            <p>My name is Devin. I decided to build Local Locator to help the community I know and love thrive and 
                make it much more convenient for others to locate local tournaments around their area.
                I've been apart of the Fighting Game Community for almost 7 years now, but have loved Fighting Games
                ever since I was a child. I'm a Web Developer with many projects in mind, and this is one I've always wanted to make.
            </p>
            <a href='github.com/devinrojas'>My Github</a>
            <h2>Building Back the Offline Community</h2>
            <p>Local Locator was built to make it more convenient for players of all type
                to find local tournaments near them. Before Local Locator, the means to find 
                your locals was hearing it from mutual friends and social media groups, buried 
                in multiple threads. Now, it is much easier to submit a Local you go to (or you have created).
            </p>
        </div>
        </div>
     );
}
 
export default AboutUsPage;