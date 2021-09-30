import gitviz from './img/gitviz1.png'
import commitment from './img/commitment.png'
import lamp from './img/lamp.png'
import uelect from './img/uelect.png'

const ProjectsData = [
    {
        name: "gitviz",
        imgSrc: gitviz,
        alt: "screenshot of gitviz application",
        description: "gitviz is a desktop application powered by electrion.js, electron-builder, d3, and gitlog that provides a visualization of git commit history.",
        linkHref: "https://github.com/patrickjamesmardis/gitviz",
        linkText: "GitHub Repo"
    },
    {
        name: "commitment",
        imgSrc: commitment,
        alt: "screenshot of commitment animation",
        description: "commitment is a web animation powered by Greensock's GSAP that brings a \"stream-of-consciousness\" approach to the gsap timeline method.",
        linkHref: "https://github.com/patrickjamesmardis/commitment",
        linkText: "GitHub Repo"
    },
    {
        name: "long distance lamp",
        imgSrc: lamp,
        alt: "screenshot of long distance lamp web interface",
        description: "This project is a solution that provides long-distance couples with a communication tool outside of our standard text or voice-based communications. Two lamps use an ESP8266 WiFi Module connected to Arduino's IoT Cloud. Each lamp uses an Ultrasonic Distance Sensor to activate a light with the most recent color saved to the cloud.",
        linkHref: "https://github.com/patrickjamesmardis/longDistanceLamp",
        linkText: "GitHub Repo"
    },
    {
        name: "u-elect",
        imgSrc: uelect,
        alt: "screenshots of u-elect prototype screens",
        description: "u-elect is a UX prototype that solves the plethora of issues faced during the 2020 election by bringing the election experience to the voters’ hands. In order to bring an efficient and convenient election process, u-elect incorporates u-id, an identification system that uses NFC enabled physical ID cards to authenticate account activity and facial analysis to ensure the client is the authenticated user.",
        linkHref: "https://www.figma.com/proto/FtcXWYPWzE4vcGHhGazpbA/u-elect?node-id=300%3A10380&page-id=300%3A5802&scaling=scale-down&viewport=554%2C402%2C0.06754765659570694",
        linkText: "Figma Prototype"
    },
]

export default ProjectsData