// Importing project component.
import { ProjectPage as Project } from "../components/Project";

// Page: Checkers Pizza project page.
export default function GameList() {
  const images = [
    require("../images/game-list/game-list-home.jpg"),
    require("../images/game-list/game-list-sort.jpg"),
    require("../images/game-list/game-list-search.jpg"),
    require("../images/game-list/game-list-game-info.jpg"),
    require("../images/game-list/game-list-edit.jpg"),
    require("../images/game-list/game-list-edit2.jpg"),
    require("../images/game-list/game-list-edit3.jpg"),
    require("../images/game-list/game-list-add.jpg"),
  ];

  // This MERN Stack application is a catalog of games that I have played and have yet to play. It allows me to input and display some information about each and rate them based on my subjective opinion. Working on this project has allowed me to learn a few things like importing react components, React Router, Environmental Variables, HTTP Requests, useNavigate(), useState(), React Icons, Database Schemas, and more.
  return (
    <div>
      <Project
        img={images}
        title="Game Rating App"
        desc={`This application allows you to save game titles along with useful information such as the series it belongs to, developers, release date, genres, consoles it's available on, and more. It's great for creating a list of your favorite games as well as those you wish to play in the future.

        The app is divided into two parts: the client side and the server side. I used Create React App to build the Front-End, Node.js and Express.js for the Back-End, and a MongoDB Atlas database to store the information.
        
        I'm currently working on integrating the IGDB's API (video game database) to make the addition of games easier and an account system to allow multiple users to have their own unique lists and ratings. Some features like the searching and sorting system are temporarily disabled.

        `}
        btn1={"https://ludi-eight.vercel.app/"}
        btn1Text={"See Web Page"}
        btn2={"https://github.com/EnriqueSaracho/game-list"}
        btn2Text={"See Code"}
        field="Full-Stack Web development"
        skills={["mongoDB", "Express.js", "React", "Node.js"]}
      />
    </div>
  );
}
