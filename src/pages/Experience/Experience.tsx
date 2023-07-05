import './Experience.css';
import { 
    Timeline, 
    TimelineOppositeContent,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
    TimelineItem
 } from '@mui/lab';
import Snowfalls from 'react-snowfall';
import { List } from '@mui/material';
import Profile from '../../statics/images/my-picture.jpeg';
import { useInView } from "react-intersection-observer";


const Experience: React.FC<{}> = () => {
    return (
        <div className='Experience'>
          <Snowfalls />
          <div className='header'>My Experience</div>
            <Timeline position="alternate">
            <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Feb 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='experience-box'>
            <h2>Indonesian Science Project Olympiad</h2>
            <div>Finalist</div>
            <List>
            Research to introduce a new foot structure for legged robots that has a large surface area that resembles the rolling motion of a wheel, which is uncommon for legged robots. I designed, simulated, and optimized the model by coding it using C++ and Particle Swarm Optimization method.
            </List>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Sept 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='experience-box'>
            <h2>Brilliant Competition 13</h2>
            <div>Coordinator of Multimedia</div>
            <List>
            Coordinated 5 team members to complete tasks related to technology. For example, promoting the competition, creating the website, and
            providing zoom meetings for the competition. I delegated tasks to team and checked up on them everyday
            </List>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Sept 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='experience-box'>
          <h2>National Competitive Programming Olympiad</h2>
          <div>Bronze Medalist</div>
          <List>
            National Competitive Programming Olympiad using C++
          </List>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Apr 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='experience-box'>
          <h2>Beasiswa Indonesia Maju</h2>
          <div>Full scholarship in UBC</div>
          <List>
          Got offered a scholarship that provides complete coverage of tuition fees and living expenses for a duration of four years for undergraduate studies.
          </List>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Jan - Apr 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='experience-box'>
          <h2>UBC Game Development Club</h2>
          <div>Game Developer</div>
          <List>
            The team consists of 10 members. We increased productivity with a team of 6 C# engineers by utilizing Agile methodology. We used Trello and Discord to have standup every week. The game won the audience choice award.
          </List>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Mar 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='experience-box'>
          <h2>BizInnovate 2023, Pacific Conference in A.I</h2>
          <div>Second Place</div>
          <List>
          Using water quality, social, and geographical data, along with satellite images, our objective was to assess the water quality in a specific area.
          </List>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Apr 2023 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='experience-box'>
          <h2>UBC Visual Coginition Lab</h2>
          <div>Co-pilot in the coding team</div>
          <List>
            Work in a team of software developers to create a website using React and MongoDB
          </List>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Coming Soon
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>More things</TimelineContent>
      </TimelineItem>
    </Timeline>
        </div>
    )
}

export default Experience;