import React from "react";
import {
  Box,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useUi from "../hooks/useUI";

const DevelopmentSkills = ({ skillsData }) => {
  const { isEnLanguage } = useUi();

  return (
    <div>
      {skillsData.map(({ titulo, title, description, descripcion, banner }, index) => (
        <Box key={index} sx={{ width: "100%", paddingTop:5, paddingRight:10, paddingLeft:10 }}>
          <Stack spacing={2}>
            <Card
              sx={{ width: "100%" }}
            >
              <div >
              <GatsbyImage
                className="z-[1] pointer-events-none rounded-md"
                image={getImage(banner)}
                loading="lazy"
                alt="banner"
              />
              </div>
              <CardContent className="text-current bg-white dark:bg-black">
                <Typography gutterBottom variant="h5" component="div">
                  {(isEnLanguage)?title:titulo}
                </Typography>
                <Typography variant="body2">
                  {(isEnLanguage)?description:descripcion}
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      ))}
    </div>
  );
};

export default DevelopmentSkills;
