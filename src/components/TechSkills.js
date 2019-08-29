import React from 'react';
import {  Typography, Divider } from '@material-ui/core';
import { SkillElement } from './SkillElements'
import ContentArea from './ContentArea'

const skills = {
  languages: [
    'Javascript',
    'Python',
    'C#',
    'Kotlin',
    'Scala',
    'Java',
    'Clojure',
    'C++',
    'SQL',
    'HTML',
    'CSS'
  ],
  tools: [
    'Amazon Web Services (AWS)',
    'API Gateway',
    'Lambda',
    'Relational Database Service (RDS)',
    'DynamoDB',
    'Docker',
    'Git',
    'Cloud Formation',
    'Terraform',
    'Serverless (SLS)',
    'Hadoop',
    'Spark',
    'Jupyter Notebooks',
    'Visual Studio Code'
  ],
  frameworks: [
    'React',
    'React-Native',
    'Redux',
    'Unity',
    'Express',
    'OpenGL',
    'Qt',
    'Flask',
    'Android',
    'Arduino',
  ]
}

const TechSkills = () => {
  return (
    <ContentArea title="Technical Experience">
      {Object.keys(skills).map((skillKey,index) => (
        <React.Fragment key={skillKey}>
          {index!==0 && <Divider />}
          <div>
            <Typography variant="subtitle2">
              {skillKey.toUpperCase()}
            </Typography>
            {skills[skillKey].map((name) => (
              <SkillElement name={name} toolType={skillKey} key={name}/>
            ))}
          </div>
        </React.Fragment>
      ))}
    </ContentArea>
  )
}

export default TechSkills