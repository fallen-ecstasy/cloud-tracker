import React, { useState } from 'react';
import './App.css';
import bg from './assets/02.png';
import Logo from './assets/LOGO.png';
import dataRaw from './util/data.json';

function App() {
  const [count, setCount] = useState(0)
  dataRaw.sort((a,b)=>{
    return ((b['#ofSkillBadgesCompleted']+b['#ofCoursesCompleted']) - (a['#ofCoursesCompleted']+a['#ofSkillBadgesCompleted']));
  })

  const data =dataRaw

  return (
    <div className='App' style={{
      backgroundImage: `url(${bg})`,
      width:"100vw",
      height:"fit-content",
      backgroundSize:"cover",
      display:"flex",
      flexDirection:"column",
      alignItems:"center"

    }}>
        <div className='Navbar'>
          <img src={Logo} alt='logo' className='logo'/>
        </div>
        <div className='title'>
          <div className='t1'>
            Google Cloud Study Jam
          </div>
          <div className='t2'>
            2023
          </div>
        </div>
        <div className='buttonContainer'>
          <div className='button1'>
            Rank List
          </div>
          {/* <div className='button2'>
            Resources
          </div> */}
        </div>

        <div className='glassCard'>
          <div className='headerRow'>
            <span className='rank'>Rank</span>
            <span className='name'>Name</span>
            <span className='redeem'>Redeemed</span>
            <span className='course'>Courses Done</span>
            <span className='badges'>Badges Earned</span>
            <span className='genai'>GenAI Status</span>
          </div>
          <div className='dataRows'>
            {data.map((user,i)=>(
              <div className='row'>
              <span className='rank'>{i+1}</span>
              <span className='name'>{user.StudentName}</span>
              <span className='redeem'>{user.RedemptionStatus=="Yes"?"✅":"⚠️"}</span>
              <span className='course'>{user['#ofCoursesCompleted']}</span>
              <span className='badges'>{user['#ofSkillBadgesCompleted']}</span>
              <span className='genai'>{user['#ofGenAIGameCompleted']==0?"⚠️":user['#ofGenAIGameCompleted']}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='footer'>

        </div>
    </div>
  )
}

export default App
