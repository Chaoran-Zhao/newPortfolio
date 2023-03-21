import React from 'react'
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, DescriptContent } from './ProjectStyles';
import { projects } from '../../texts/const';
import {  useTheme,  } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { useContext, useState } from "react";

import { T } from "@tolgee/react"
import { useTolgee } from '@tolgee/react';
// const {  siGithub,  } = require('simple-icons');
import  { SiGithub } from 'react-icons/si';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'


const Projects = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const tolgee = useTolgee(['language']);

  return (
    <>
    <h1 className='title'> <T keyName='nav_projects' /></h1><GridContainer>
      {projects.map((p, i) => {
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
              <ExternalLinks href={p.visit}> <SiGithub /> </ExternalLinks>
              <ExternalLinks href={p.source}> <BsFillArrowUpRightCircleFill /></ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}

    </GridContainer><div style={{ height: '40px' }}></div></>
    
  )
}

export default Projects