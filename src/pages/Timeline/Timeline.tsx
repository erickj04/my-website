import './Timeline.css';
import { useState } from 'react';
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
import { List, Checkbox, FormControlLabel } from '@mui/material';

interface ItemProps {
  date: String,
  title: String,
  position: String,
  description: String,
  show: boolean,
}

const Item: React.FC<ItemProps> = ({...props}) => {
  return (
    <>
      {props.show && (
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          {props.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timeline-box'>
            <h2>{props.title}</h2>
            <div>{props.position}</div>
            <List>
            {props.description}
            </List>
        </TimelineContent>
      </TimelineItem>
      )}
    </>
  )
}

const Timelines: React.FC<{}> = () => {
  const [experience, setExperience] = useState(true);
  const handleChangeExperience = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExperience(event.target.checked);
  };

  const [awards, setAwards] = useState(true);
  const handleChangeAwards = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAwards(event.target.checked);
  };

    return (
        <div className='Timeline'>
          <Snowfalls />
          <div className='header'>My Timeline</div>
          <div className='selection'>
            <div className='select-timeline'>Select Timeline Content</div>
            <div className='checkbox'>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={experience}
                    onChange={handleChangeExperience}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                  />
                }
                label="Experience"
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={awards}
                    onChange={handleChangeAwards}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                  />
                }
                label="Awards"
              />
            </div>
          </div>
          <Timeline position="alternate">
            <Item 
              date="Feb 2021"
              title="Indonesian Science Project Olympiad"
              position="Finalist"
              description="Research to introduce a new foot structure for legged robots that has a large surface area that resembles the rolling motion of a wheel, which is uncommon for legged robots. I designed, simulated, and optimized the model by coding it using C++ and Particle Swarm Optimization method."
              show={awards}
            />
            <Item 
              date="Sept 2021"
              title="Brilliant Competition 13"
              position="Coordinator of Multimedia"
              description="Coordinated 5 team members to complete tasks related to technology. For example, promoting the competition, creating the website, and providing zoom meetings for the competition."
              show={experience}
            />
            <Item 
              date="Sept 2021"
              title="National Competitive Programming Olympiad"
              position="Bronze Medalist"
              description="An annual competition for high school-level students organized by the Ministry of Education, Culture, Research, and Technology of the Republic of Indonesia. The competition assesses problem-solving skills through programming problems (competitive programming). Students need school selection to compete at the regional level, and the best performers proceed to the provincial then national levels."
              show={awards}
            />
            <Item 
              date="Apr 2022"
              title="Full scholarship in UBC from Beasiswa Indonesia Maju"
              position="Awardee BIM S1"
              description="Got offered a scholarship that provides complete coverage of tuition fees and living expenses for a duration of four years for undergraduate studies."
              show={awards}
            />
            <Item 
              date="Jan - Apr 2023"
              title="UBC Game Development Club"
              position="Software Engineer"
              description="The team consists of 10 members. We increased productivity with a team of 6 C# engineers by utilizing Agile methodology. We used Trello and Discord to have standup every week. The game won the audience choice award."
              show={experience}
            />
            <Item 
              date="Mar 2023"
              title="BizInnovate 2023, Pacific Conference in A.I"
              position="Second Place"
              description="Using water quality, social, and geographical data, along with satellite images, our objective was to assess the water quality in a specific area."
              show={awards}
            />
            <Item 
              date="Apr 2023 - Present"
              title="UBC Visual Coginition Lab"
              position="Co-pilot in the coding team"
              description="Work in a team of software developers to create a website using React and MongoDB"
              show={experience}
            />
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

export default Timelines;