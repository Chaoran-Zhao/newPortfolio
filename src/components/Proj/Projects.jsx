import React from 'react'
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, DescriptContent } from './ProjectStyles';
import { projects } from '../../texts/const';
import {  useTheme,  Button} from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { useContext, useState } from "react";

import { T } from "@tolgee/react"
import { useTolgee } from '@tolgee/react';
// const {  siGithub,  } = require('simple-icons');
import  { SiGithub } from 'react-icons/si';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import './Project.css'

const Projects = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const tolgee = useTolgee(['language']);

  const [proj, setProj] = useState(projects)
  const [status, setStatus] = useState('All')


  const returnFrontend = (color) => {
    let front = []
    projects.forEach(element => {
      if (color === null){
        front.push(element)
      }else{
        if (element.color === color){
        front.push(element)}
      }     
    });
    console.log(front)
    setProj(front)
  }

  return (
    <>
    <h1 className='title'> <T keyName='nav_projects' /></h1>
    <div className='topButton'>
      <Button className='view' style={{backgroundColor: status==='Front' ? "#457b9d" : colors.grey[500], color: colors.primary[100]}}  onClick={()=>{setStatus('Front'); returnFrontend('#457b9d')}}> <T keyName='Frontend' /> </Button>
      <Button className='view' style={{backgroundColor: status==='Full' ? "#457b9d" : colors.grey[500], color: colors.primary[100]}}  onClick={()=>{setStatus('Full');returnFrontend('#d0bb57')}}> <T keyName='Full-Stack' /> </Button> 
      <Button className='view' style={{backgroundColor: status==='Others' ? "#457b9d" : colors.grey[500], color: colors.primary[100]}}  onClick={()=>{setStatus('Others');returnFrontend('#58201e')}}> <T keyName='Others' /> </Button> 
      <Button className='view' style={{backgroundColor: status==='All' ? "#457b9d" : colors.grey[500], color: colors.primary[100]}}  onClick={()=>{setStatus('All');returnFrontend(null)}}> <T keyName='All' /> </Button> 
    </div>
    
    <GridContainer>
      {proj.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Hr color={p.color} />
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>

            </TitleContent>
            <DescriptContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
            </DescriptContent>

            <div>
              {/* <TitleContent>Stack</TitleContent> */}
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.source}> <SiGithub /> </ExternalLinks>
              {p.visit !== "" ?
              <ExternalLinks href={p.visit}> <BsFillArrowUpRightCircleFill /></ExternalLinks>
            : <></>}
              
            </UtilityList>
          </BlogCard>
        );
      })}

    </GridContainer><div style={{ height: '40px' }}></div></>
    
  )
}

export default Projects