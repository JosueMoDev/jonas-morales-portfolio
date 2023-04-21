export const getAllAboutMeContentfulData = (data) => {
  const allAboutMeContentfulData = data.edges;
  const allAboutMeData = allAboutMeContentfulData.map(({ node }) => ({
    aboutMeData: {
      shortName: node.shortName,
      photo: node.aboutMePhoto.gatsbyImageData,
    },
    localEn: {
      greeting: "Hello",
      person: "I'm",
      contact: "Contact me here 👇🏻",
      description: node.aboutMeDescriptionEn.aboutMeDescriptionEn,
      buttons: {
        label: node.aboutMeAssets.buttonsLabels.download,
        value: node.aboutMeAssets.cvEn,
      },
    },
    localEs: {
      greeting: "Hola",
      person: "soy",
      contact: "Contáctame aquí 👇🏻",
      description: node.aboutMeDescriptionEs.aboutMeDescriptionEs,
      buttons: {
        label: node.aboutMeAssets.buttonsLabels.descargar,
        value: node.aboutMeAssets.cvEs,
      },
    },
    stackData: {
      techs: node.myStack.techs,
      shownItems: node.myStack.shownItems,
    },
    socialNetworks: node.socialNetworks.socialnetwoksdata,
    contactMe: {
      name: node.name,
      email: node.aboutMeAssets.email,
      profession: node.aboutMeAssets.profession,
      telephone: node.aboutMeAssets.telephone,
      photo: node.contactMePhoto.gatsbyImageData,
    },
  }));
  const [aboutMeData, localEn, localEs, stackData, socialNetworks, contactMe] =
    allAboutMeData;
  return {
    ...aboutMeData,
    ...stackData,
    ...localEn,
    ...localEs,
    ...socialNetworks,
    ...contactMe,
  };
};
export const getAllSkillsContentfulData = (data) => {
  const allSkillsContentfulData = data.edges;
  const allSkillsData = allSkillsContentfulData.map(({ node }) => ({
    titulo: node.titulo,
    title: node.title,
    description: node.description.description,
    descripcion: node.descripcion.descripcion,
    banner: node.banner.gatsbyImageData,
  }));
  const [...skillsData] = allSkillsData;
  return skillsData;
};

export const getAllMainContentfulData = (data) => {
  const allMainContentfulData = data.edges;
  const allMainData = allMainContentfulData.map(({ node }) => ({
    logos: {
      lightLogo: node.logos[0].gatsbyImageData,
      darkLogo: node.logos[1].gatsbyImageData,
    },
    navigation: {
      menuEn: node.navigation.menuEn,
      menuEs: node.navigation.menuEs,
    },
    buttonsLabelMainEn: {
      close: node.navigation.buttonsLabel.close,
      setDark: node.navigation.buttonsLabel.themeDarkEn,
      setLight: node.navigation.buttonsLabel.themeLightEn,
    },
    buttonsLabelMainEs: {
      close: node.navigation.buttonsLabel.cerrar,
      setDark: node.navigation.buttonsLabel.themeDarkEs,
      setLight: node.navigation.buttonsLabel.themeLightEs,
    },
  }));
  const [logos, navigation, buttonsLabelMainEn, buttonsLabelMainEs] =
    allMainData;
  return {
    ...logos,
    ...navigation,
    ...buttonsLabelMainEn,
    ...buttonsLabelMainEs,
  };
};

export const getAllProjectsContentfulData = (data) => {
  const allProjectsContentfulData = data.edges;
  const allProjectsData = allProjectsContentfulData.map(({ node }) => ({
    projectDetails: {
      name: node.name,
      descriptionEn: node.descriptionEn.descriptionEn,
      descriptionEs: node.descriptionEs.descriptionEs,
      techs: node.techs,
    },
    buttonsLabelEn: "Reposotory",
    buttonsLabelEs: "Repositorio",
    buttonsValue: {
      repository: node.assets.repositoryGithub,
      deploy: node.assets.deployDemo,
    },
    projectPhotos: node.photos,
  }));

  return allProjectsData;
};
