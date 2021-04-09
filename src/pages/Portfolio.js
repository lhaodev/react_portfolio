import React, { Component } from 'react';
import "../components/portfolio.css";
import employee_director from '../assets/employee_director.png';
import project1 from '../assets/project1.png';
import project_management from '../assets/project_management.png';
import weather_dashboard from '../assets/weather_dashboard.png';
import budget_tracker from '../assets/budget_tracker.png';
import fitness_tracker from '../assets/fitness_tracker.png';


// import { BrowserRouter as Router, Link } from 'react-router-dom';
class Portfolio extends Component {
    portfolioData = {
        "portfolio": [
            {
                "name": "Employee Director",
                "description": "The ability to view non-sensitive data about employees in a company, particularly by their first or last name.",
                "img": employee_director,
                "repolink": "https://github.com/lhaodev/employee_directory",
                "tech": "React.js, JavaScript, Bootstrap, HTML, CSS"
            },
            {
                "name": "Online/Offline Budget Tracker",
                "description": "A fast and easy way to track money, and accessing that information anytime online or offline.",
                "img": budget_tracker,
                "repolink": "https://github.com/lhaodev/Budget_Trackers",
                "tech": "JavaScript, Express.js, Node.js, Mongoose, IndexedDB"

            },
            {
                "name": "Fitness Tracker",
                "description": "A workout tracker using Mongo database with a Mongoose schema to handle routes with Express.",
                "img": fitness_tracker,
                "repolink": "https://github.com/lhaodev/fitness_tracker",
                "tech": "JavaScript, Node.js, Express, MongoDB, Mongoose"

            },
            {
                "name": "Weather Dashboard",
                "description": "A weather dashboard application with search functionality to find current weather conditions and the future weather outlook for multiple cities.",
                "img": weather_dashboard,
                "repolink": "https://github.com/lhaodev/weather_dashboard",
                "tech": "HTML, CSS, Bootstrap, Javascript, jQuery, Server-side APIs"

            },
            {
                "name": "Project Management App - Sprinter",
                "description": "Use the app to add sprints, add employees and managers to sprints, and keep track of your progress and employees as your project progresses.",
                "img": project_management,
                "repolink": "https://github.com/lhaodev/Project_Management_App",
                "tech": "Node.js, Javascript, MySQL, Sequelize, Handlebars, Express, HTML, CSS"
            },
            {
                "name": "Food N' Film",
                "description": "Don't know what to do for the stay at home night? This app will take a list of ingredients as input and generate recipes. You can also generate a movie to watch!",
                "img": project1,
                "repolink": "https://github.com/lhaodev/Group1Project",
                "tech": "HTLM, CSS, JavaScript, JQuery, UIKit, Materialize, external API"
            },

        ]

    }


    render() {
        return (

            <div id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h3>Portfolio</h3>
                        <hr class="divider" />
                        <div className="card-deck" id="portfolio-wrapper">
                            {
                                this.portfolioData.portfolio.map((item) => {
                                    return (
                                        < div className="col-lg-4 col-sm-6 portfoliocards" >
                                            <div className="card">
                                                {/* <div className="card-block"> */}
                                                <img className="card-img-top" src={item.img} alt="portfolio" />
                                                <h4 className="card-title">{item.name}</h4>
                                                <p className="card-text">{item.description}</p>
                                                <div className="twoButtons">
                                                    <a href={item.repolink} className="btn btn-outline-primary btn-sm"
                                                        id="github" role="button">View GitHub Repo</a>
                                                    <div className="builtWith">{item.tech}</div>
                                                </div>

                                                {/* </div> */}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Portfolio;