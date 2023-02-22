import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School'
import ComputerIcon from '@mui/icons-material/Computer';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2010 - 2019'
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>
                Rustomjee International School
            </h3>
            <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2019 - 2021'
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>
                Nirmala Memorial Foundation
            </h3>
            <p>Science - HSC</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2021 - present'
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>
                Dwarkadas J. Sanghvi College of Engineering
            </h3>
            <p>B.E. Computer Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element'
        date='May 2021 - present'
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<RocketLaunchIcon />}>
            <h3 className='vertical-timeline-element-title'>
                DJS Antariksh Member
            </h3>
            <p>Science Team</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element'
        date='Sept 2021 - present'
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<ComputerIcon />}>
            <h3 className='vertical-timeline-element-title'>
                DJS Synapse Member
            </h3>
            <p>ML Department</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element'
        date='Sept 2021 - present'
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<ComputerIcon />}>
            <h3 className='vertical-timeline-element-title'>
                DJS Unicode Member
            </h3>
            <p>FullStack Member</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
