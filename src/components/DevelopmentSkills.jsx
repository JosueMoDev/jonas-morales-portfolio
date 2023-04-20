import React from "react";
import { Box, Stack, Card, CardContent } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useUi from "../hooks/useUI";
import { motion } from "framer-motion";

const DevelopmentSkills = ({ skillsData }) => {
  const { isEnLanguage } = useUi();

  return (
    <div>
      {skillsData.map(
        ({ titulo, title, description, descripcion, banner }, index) => (
          <Box
            key={index}
            className="px-0 py-3 lg:px-10 lg:py-5"
            sx={{ width: "100%" }}
          >
            <Stack spacing={2}>
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
              >
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    boxShadow: "0 1px 2px 0 rgb(53 57 59)",
                  }}
                >
                  <div>
                    <GatsbyImage
                      className="z-[1] pointer-events-none  object-fill"
                      image={getImage(banner)}
                      loading="lazy"
                      alt="banner"
                    />
                  </div>
                  <CardContent className="bg-white dark:bg-black">
                    <p className="font-mono text-2xl font-semibold text-black lg:text-4xl dark:text-white">
                      {isEnLanguage ? title : titulo}
                    </p>
                    <p className="font-mono text-xl text-black lg:text-2xl dark:text-white">
                      {isEnLanguage ? description : descripcion}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </Stack>
          </Box>
        )
      )}
    </div>
  );
};

export default DevelopmentSkills;
