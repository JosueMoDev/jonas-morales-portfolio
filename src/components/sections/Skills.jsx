import React from "react";
import { Tab } from "@mui/material";
import useUi from "../../hooks/useUI";
import MyTechStack from "../MyTechStack";
import Box from "@mui/material/Box";
import DevelopmentSkills from "../DevelopmentSkills";
import { styled } from "@mui/material/styles";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const AntTabs = styled(TabList)({
  borderBottom: "0.5px solid #d4d4d4",
  "& .MuiTabs-indicator": {
    backgroundColor: "currentColor",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "rgb(75 85 99 / 0.5)",
    fontFamily: ["monospace", "Fira Code"].join(","),
    "&:hover": {
      color: "rgb(#a1a1aa / 0.5)",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "currentColor",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

const Skills = ({ contenfulSkills }) => {
  const {skillsData, stackData } = contenfulSkills;
  const { isEnLanguage } = useUi();

  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="w-full h-auto mt-[4rem]" id="skills">
      {/* Wrapper */}
      {/*  */}
      <div className="flex m-[auto]  p-[1.25rem] md:p-[2.5rem] min-h-full mb-[3rem] font-mono flex-row justify-between w-full h-auto text-black dark:text-white md:flex-col">
        <div className="flex flex-wrap md:flex-nowrap xl:mt-[4rem] mt-[3rem] w-full  md:space-x-10">
          <div className="flex-col space-y-[1rem] w-max-[50%] w-full justify-start ">
            <p className="text-3xl font-semibold md:text-4xl lg:text-6xl">
              {isEnLanguage ? "Skills" : "Habilidades"}
            </p>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box
                  className="hidden lg:block"
                  sx={{ borderBottom: 1, borderColor: "divider" }}
                >
                  <AntTabs onChange={handleChange} centered>
                    <AntTab
                      label={
                        isEnLanguage
                          ? "Development Skills"
                          : "Habilidades de desarrollo"
                      }
                      value="1"
                    />
                    <AntTab
                      label={
                        isEnLanguage
                          ? "My favorite tech"
                          : "Mi tecnología favorita"
                      }
                      value="2"
                    />
                  </AntTabs>
                </Box>
                <Box
                  className="block lg:hidden"
                  sx={{ borderBottom: 1, borderColor: "divider" }}
                >
                  <AntTabs onChange={handleChange} centered>
                    <AntTab
                      label={
                        isEnLanguage
                          ? "👨🏻‍💻 Skills"
                          : "👨🏻‍💻 Habilidades"
                      }
                      value="1"
                    />
                    <AntTab
                      label="🎨 Stack"
                      value="2"
                    />
                  </AntTabs>
                </Box>
                <TabPanel value="1">
                  <DevelopmentSkills skillsData={skillsData} />
                </TabPanel>
                <TabPanel value="2">
                  <MyTechStack stackData={stackData} />
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
