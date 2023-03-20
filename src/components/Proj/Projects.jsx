import React from 'react'
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectStyles';
import { projects } from '../../texts/const';
import { Box, IconButton, useTheme, Button, } from "@mui/material";


const Projects = () => {
  const theme = useTheme();
  return (
    <>
    <h1 className='title'> Projects</h1>
    <GridContainer>
    {projects.map((p, i) => {
      return (
        <BlogCard key={i}>
        <Hr color={p.color}/>
        <Img src={p.image} />
          <TitleContent>
            <HeaderThree title>{p.title}</HeaderThree>
            
          </TitleContent>
          <CardInfo className="card-info">{p.description}</CardInfo>
          <div>
            {/* <TitleContent>Stack</TitleContent> */}
            <TagList>
              {p.tags.map((t, i) => {
                return <Tag key={i}>{t}</Tag>;
              })}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={p.visit}>Code</ExternalLinks>
            <ExternalLinks href={p.source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      );
    })}
    </GridContainer>
    </>
  )
}

export default Projects