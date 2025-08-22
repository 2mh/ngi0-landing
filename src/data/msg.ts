import {ProjectCardType, ProjectPageType, DossierType} from "../types";
import {ASSOCIATED_NGI0_PROJECTS, SIMILAR_CLOSED_SOURCE_PROJECTS, SIMILAR_NGI0_PROJECTS} from "./commonStrings";
import {ngi0Projects} from "./ngi0Projects";
import {corporateProjects} from "./corporateProjects";

const MSG_CARDS: ProjectCardType[] = [
    ngi0Projects.Dino, ngi0Projects.BriarDesktop
];

const MSG_TAGS: string[] = [];

const MSG_PROJECTS: ProjectPageType = {
    pageTitle: "Privacy-Enhancing Messaging Dossier",
    menuTitle: "Privacy-Enhancing Messaging",
    projectDescription: [
        {
            header: "Introduction to Privacy-Enhancing Messaging tools",
            text: `
The area of messaging, which here includes instant forms of communication (resembling a chat in the physical world) as well as email (resembling more to letters), is today characterized by a massive centralization of power in the hands of specific entities. This also applies specifically to email which is designed as a federated system. Privacy is not always addressed by default and/or not easily available. Meta data of who's communicating with whom, at which time and possibly even from where, is usually not protected with the widespread systems in place today.
	`,
            associatedProjects: [
                {
                    heading: SIMILAR_NGI0_PROJECTS,
                    carousel: [ngi0Projects.Dino, ngi0Projects.BriarDesktop]
                }
            ]
        },
    ]
};

const Dino: ProjectPageType = {
    pageTitle: "Dino",
    menuTitle: "Dino",
    projectDescription: [
        {
            header: "Dino",
            text: `
Dino is a modern open-source chat client for the desktop. It focuses on providing a clean and reliable Jabber/XMPP experience while having your privacy in mind.
`
        },
   ]
};

const BriarDesktop: ProjectPageType = {
    pageTitle: "Briar Desktop",
    menuTitle: "Briar Desktop",
    projectDescription: [
        {
            header: "Briar Desktop",
            text: `
Briar Desktop (as of now: beta versions available) is a messaging app designed for activists, journalists, and anyone else who needs a safe, easy and robust way to communicate. Unlike traditional messaging apps, Briar doesn’t rely on a central server – messages are synchronized directly between the users’ devices. If the Internet’s down, Briar can sync via Bluetooth, Wi-Fi or memory cards, keeping the information flowing in a crisis. If the Internet’s up, Briar can sync via the Tor network, protecting users and their relationships from surveillance.
`
        },
    ]
};

const comparison: ProjectPageType = {
    pageTitle: "Privacy-Enhancing Messaging Tools Comparison",
    menuTitle: "Privacy-Enhancing Messaging Tools Comparison",
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
                    carousel: [ngi0Projects.Dino, ngi0Projects.BriarDesktop]
                },
                {
                    heading: SIMILAR_CLOSED_SOURCE_PROJECTS,
                    carousel: [corporateProjects.WhatsApp]
                }
            ]
        }
    ]
};

export const MSG_DOSSIER_PATHNAME = "msg";

export const DOSSIER: DossierType = {
    pathName: MSG_DOSSIER_PATHNAME,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Message-icon-transparent.png",
    header: "Messaging",
    subheader: "Privacy-Enhancing Messaging",
    tags: ["Chat", "IM", "Messaging", "Privacy", "Messengers", "Email"],
    link: `/ngi0/${MSG_DOSSIER_PATHNAME}`,
    cards: MSG_CARDS,
    tagsDossierDetail: MSG_TAGS,
    projects: MSG_PROJECTS,
    detailedProjects: {
        Dino,
        BriarDesktop,
    },
    comparisons: {
        comparison
    }
};
