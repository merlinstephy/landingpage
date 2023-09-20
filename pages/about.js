import React from 'react';

const About = () => {
  return (
    <div style= {{
      backgroundImage:
 "url('./car9.jpg')",
      backgroundColor : 'aliceblue',
      height : '100%',
      width : '100%',
      color : 'white'
    }}>
      <h1 style ={{color: 'white'}}><center><u><i>OUR COMPANY</i></u></center></h1>
      <p>Nissan continues its quest to optimize product development and deliver highly innovative technology. Today, in various countries and regions around the world, 
        we enjoy a stellar reputation for creating truly innovative vehicles and service programs.
        </p>
        <ol>
          <li><b><i><u>Electrification</u></i></b></li>
          <p>A pioneer in electric vehicles, Nissan has not only made them affordable but also more practical by investing in charging infrastructure and energy management. We'll 
            continue to offer a variety of exciting EVs by accelerating electrification and technological innovation.</p>
          <li><b><u><i>Advanced Driver Assistance Systems (ADAS) & autonomous driving</i></u></b></li>
          <p>Through the development of advanced driver-assistance technologies, we aim to diversify transportation and ultimately
             aim </p>
          <li><b><u><i>Mobility Service & Connected Technology</i></u></b></li>
          <p>Nissan is advancing initiatives that utilize mobility to realize a sustainable society.
             We'll continue to provide services that connect vehicles with people and society.</p>
          <li><b><i><u>Design</u></i></b></li>
          <p>Nissan’s designs turn our vision of enriching people’s lives into reality.</p>
          <li><b><u><i>Safety</i></u></b></li>
          <p>Aiming for virtually zero fatalities in traffic accidents .</p>
        </ol>
        </div>
    
  );
};

export default About;