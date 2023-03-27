
import { Cloud } from "react-icon-cloud";
import { Box, IconButton, useTheme, Button, } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { renderSimpleIcon, ICloud, SimpleIcon } from "react-icon-cloud";


const {  siPython, siTailwindcss,  siCplusplus, siTypescript, siC, siCss3, siHtml5, siLatex, siReact, siNodedotjs, siJquery, siVuedotjs, siExpress,  siApachehadoop, siApachespark, siFigma, siMysql, siPostgresql,siGit, siGithub, siJavascript, siMongodb, siDocker, siJira, siEslint, siBootstrap, siMui, siRedux, siThreedotjs, siCbs, siAntdesign } = require('simple-icons');



const icons = [siJavascript, siPython, siTailwindcss, siCplusplus, siTypescript, siCss3, siHtml5, siLatex, siReact, siJquery, siVuedotjs, siExpress,  siApachehadoop, siApachespark,siNodedotjs,siFigma, siMysql,siPostgresql, siGit, siGithub, siMongodb, siDocker, siJira, siEslint, siBootstrap, siMui, siC, siRedux, siThreedotjs, siAntdesign].map(icon => {
  return renderSimpleIcon({
    icon,
    size: 42,
    aProps: {
      onClick: e => e.preventDefault()
    }
  })
})


export const StaticCloud = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return <Cloud>
    {icons}
  </Cloud>
}