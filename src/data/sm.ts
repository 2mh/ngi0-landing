import {ProjectCardType, ProjectPageType, DossierType} from "../types";
import {ASSOCIATED_NGI0_PROJECTS, SIMILAR_CLOSED_SOURCE_PROJECTS, SIMILAR_NGI0_PROJECTS} from "./commonStrings";
import {ngi0Projects} from "./ngi0Projects";
import {corporateProjects} from "./corporateProjects";

const SM_CARDS: ProjectCardType[] = [
    ngi0Projects.Bana, ngi0Projects.FediverseTestFramework, ngi0Projects.ForgeFlux, ngi0Projects.Spritely
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
                    carousel: [ngi0Projects.Bana, ngi0Projects.FediverseTestFramework, ngi0Projects.ForgeFlux, ngi0Projects.Spritely]
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

const ForgeFlux: ProjectPageType = {
    pageTitle: "ForgeFlux",
    menuTitle: "ForgeFlux",
    projectDescription: [
        {
            header: "ForgeFlux",
            text: `
ForgeFlux is a project in the forge federation domain that is trying to make forges federate by building external adapters. We use the forge's native APIs and create a translation layer to talk to other nodes on the federating forge network. We aim to make Forgejo and GitHub federate for the first stable release.
`
        },
    ]
};

const FediverseTestFramework: ProjectPageType = {
    pageTitle: "Fediverse Test Framework",
    menuTitle: "Fediverse Test Framework",
    projectDescription: [
        {
            header: "Fediverse Test Framework",
            text: `
The Fediverse consists of individual servers, possibly running different software, that talk to each other. One of the challenges in developing for the Fediverse is to stay interoperable with all the different deployed software. As the message format standard, ActivityStreams, is extensible through JSON-LD, judging how a message is parsed, can be a hard task.

By using ideas from automated testing, we provide an application that determines a baseline how messages are processed and rendered. The process being simply: run end to end tests and record their result. From the test results a webpage is generated that provides developers the information how a message is rendered in different applications. We aim to make the framework extensible so new applications can be included.

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
                    carousel: [ngi0Projects.Bana, ngi0Projects.FediverseTestFramework, ngi0Projects.ForgeFlux, ngi0Projects.Spritely]
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
        ForgeFlux,
        Spritely,
    },
    comparisons: {
        comparison
    }
};
