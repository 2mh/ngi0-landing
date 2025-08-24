import {ProjectCardType, ProjectPageType, DossierType} from "../types";
import {ASSOCIATED_NGI0_PROJECTS, SIMILAR_CLOSED_SOURCE_PROJECTS, SIMILAR_NGI0_PROJECTS} from "./commonStrings";
import {ngi0Projects} from "./ngi0Projects";
import {corporateProjects} from "./corporateProjects";

const SM_CARDS: ProjectCardType[] = [
    ngi0Projects.Bana, ngi0Projects.Spritely
];

const SM_TAGS: string[] = [];

const SM_PROJECTS: ProjectPageType = {
    pageTitle: "Decentralized Social Media Dossier",
    menuTitle: "Social Media",
    projectDescription: [
        {
            header: "Introduction to Decentralized Social Media tools",
            text: `
The Social Media space is characterized by a massive centralization of power
where it can also be assumed that serious impact on the free and democratic
society is being excerted. While on the one hand, state censorship cannot be
the solution, alternatives can be used where the various parts of society can
set up and run their own instances, be that in a peer-to-peer or federated
context such that a group's social rules can be applied without any single
point of control and always with the possibility to switch instance(s).
	`,
            associatedProjects: [
                {
                    heading: SIMILAR_NGI0_PROJECTS,
                    carousel: [ngi0Projects.Bana, ngi0Projects.Spritely]
                }
            ]
        },
    ]
};

const Bana: ProjectPageType = {
    pageTitle: "Bana",
    menuTitle: "Bana",
    projectDescription: [
        {
            header: "Bana",
            text: `
Bana is aimed at private social networking. It is both a server and a mobile Web app, and is federated: anyone can operate a server and people on one server can communicate with people on any other Bana server. Bana uses ActivityPub, ActivityStreams, and the Activity Vocabulary protocols.
`
        },
   ]
};

const Spritely: ProjectPageType = {
    pageTitle: "Spritely",
    menuTitle: "Spritely",
    projectDescription: [
        {
            header: "Spritely",
            text: `
Spritely is a project to advance the federated social network by adding richer communication and privacy/security features to the network. This particular sub-project aims to demonstrate how user interfaces can and should play an important role in user security.
`
        },
    ]
};

const comparison: ProjectPageType = {
    pageTitle: "Decentralized Social Media comparison",
    menuTitle: "Decentralized Social Media comparison",
    projectDescription: [
        {
            header: "Tools Comparison",
            text: `
	    TBD
	    `
        },
        {
            header: "Summary",
            text: `TBD
	    `
        },
        {
            header: "Final Recommendation",
            text: `
	    TBD
            `,
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: [ngi0Projects.Bana, ngi0Projects.Spritely]
                },
                {
                    heading: SIMILAR_CLOSED_SOURCE_PROJECTS,
                    carousel: [corporateProjects.Facebook]
                }
            ]
        }
    ]
};

export const SM_DOSSIER_PATHNAME = "sm";

export const DOSSIER: DossierType = {
    pathName: SM_DOSSIER_PATHNAME,
    image: "/ngi0/img/default.svg",
    header: "Social Media",
    subheader: "Social Media",
    tags: ["ActivityPub", "Fediverse", "Social Network", "Social Media", "Social", "Media", "Decentralization", "Federation"],
    link: `/ngi0/${SM_DOSSIER_PATHNAME}`,
    cards: SM_CARDS,
    tagsDossierDetail: SM_TAGS,
    projects: SM_PROJECTS,
    detailedProjects: {
        Bana,
        Spritely,
    },
    comparisons: {
        comparison
    }
};
