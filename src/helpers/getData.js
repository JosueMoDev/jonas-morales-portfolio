export const getAllAboutMeContentfulData = (data) => {
    const allAboutMeContentfulData = data.edges
    const allAboutMeData = allAboutMeContentfulData.map(({ node }) => ({
        aboutMeData: {
            shortName: node.shortName,
            descriptionEn: node.aboutMeDescriptionEn.aboutMeDescriptionEn,
            descriptionEs: node.aboutMeDescriptionEs.aboutMeDescriptionEs,
            photo: node.aboutMePhoto.gatsbyImageData,
            buttonLabel: {
                En: node.aboutMeAssets.buttonsLabels.download,
                valueEn: node.aboutMeAssets.cvEn,
                Es: node.aboutMeAssets.buttonsLabels.descargar,
                valueEs: node.aboutMeAssets.cvEs
            }
        },
        skillsData: {
            skills: node.techStack.techs,
            shownItems:node.techStack.shownItems
        },
        socialNetworks: node.socialNetworks.socialnetwoksdata,
        contactMe: {
            name: node.name,
            email: node.aboutMeAssets.email,
            profession: node.aboutMeAssets.profession,
            telephone: node.aboutMeAssets.telephone,
            photo:node.contactMePhoto.gatsbyImageData
        }
    }));
    const [ aboutMeData, skillsData, socialNetworks, contactMe ] = allAboutMeData;
    return { ...aboutMeData, ...skillsData, ...socialNetworks, ...contactMe } 
}
export const getAllMainContentfulData = (data) => {
    const allMainContentfulData = data.edges
    const allMainData = allMainContentfulData.map(({ node }) => ({
        logos: {
            lightLogo: node.logos[0].gatsbyImageData,
            darkLogo: node.logos[1].gatsbyImageData
        },
        navigation: {
            menuEn: node.navigation.menuEn,
            menuEs: node.navigation.menuEs,
        },
        buttonsLabelMainEn: {
            close: node.navigation.buttonsLabel.close,
            setDart: node.navigation.buttonsLabel.themeDarkEn,
            setLight: node.navigation.buttonsLabel.themeLightEn
        },
        buttonsLabelMainEs: {
            close: node.navigation.buttonsLabel.cerrar,
            setDart: node.navigation.buttonsLabel.activarOscuro,
            setLight: node.navigation.buttonsLabel.activarClaro
        }
    }))
    const [logos, navigation, buttonsLabelMainEn, buttonsLabelMainEs] = allMainData;
    return { ...logos, ...navigation, ...buttonsLabelMainEn, ...buttonsLabelMainEs}
}

export const getAllProjectsContentfulData = (data) => {
    const allProjectsContentfulData = data.edges
    const allProjectsData = allProjectsContentfulData.map(({ node }) => ({
        projectDetails: {
            name: node.name,
            descriptionEn: node.descriptionEn.descriptionEn,
            descriptionEs: node.descriptionEs.descriptionEs,
            techs: node.techs
        },
        buttonsLabelEn: {
            repositoryLabel: node.assets.buttonsLabel.repositoryEn,
            back: node.assets.buttonsLabel.backEn,
            next: node.assets.buttonsLabel.nextEn
        },
        buttonsLabelEs: {
            repositoryLabel: node.assets.buttonsLabel.repositoryEs,
            back: node.assets.buttonsLabel.backEs,
            next: node.assets.buttonsLabel.nextEs
        },
        buttonsValue: {
            repository: node.assets.repositoryGithub,
            deploy:node.assets.deployDemo
        },
        projectPhotos: node.photos
    }))

    return allProjectsData 
}