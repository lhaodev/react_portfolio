import React, { Component } from 'react';
import "./style.css";

// import { BrowserRouter as Router,Link } from 'react-router-dom';
class Portfolio extends Component {
    portfolioData = {
        "portfolio": [
            {
                "name": "Employee Director",
                "description": "The ability to view non-sensitive data about employees in a company, particularly by their first or last name.",
                "img": "./assets/employee_director.png",
                "repolink": "https://github.com/lhaodev/employee_directory",
                "tech": "React.js, JavaScript, Bootstrap, HTML, CSS"
            },
            {
                "name": "Online/Offline Budget Tracker",
                "description": "A fast and easy way to track money, and accessing that information anytime online or offline.",
                "img": "./assets/budget_tracker.png",
                "repolink": "https://github.com/lhaodev/Budget_Trackers",
                "tech": "JavaScript, Express.js, Node.js, Mongoose, IndexedDB"

            },
            {
                "name": "Workout Tracker",
                "description": "A workout tracker using Mongo database with a Mongoose schema to handle routes with Express.",
                "img": "./assets/fitness_tracker.png",
                "repolink": "https://github.com/lhaodev/fitness_tracker",
                "tech": "JavaScript, Node.js, Express, MongoDB, Mongoose"

            },
            {
                "name": "Weather Dashboard",
                "description": "A weather dashboard application with search functionality to find current weather conditions and the future weather outlook for multiple cities.",
                "img": "./assets/weather_dashboard.png",
                "repolink": "https://github.com/lhaodev/weather_dashboard"

            },
            {
                "name": "Project Management App - Sprinter",
                "description": "Sprinter is designed with you and your development sprints in mind. Use the app to add sprints, add employees and managers to sprints, and keep track of your progress and division of labor as your project progresses.",
                "img": "./assets/project_management.png",
                "repolink": "https://github.com/lhaodev/Project_Management_App",
                "tech": "Node.js, Javascript, MySQL, MySQL2, Sequelize, Handlebars, Express, HTML, CSS, Dotenv"
            },
            {
                "name": "Food N' Film",
                "description": "SWhat this app will do is take a list of ingredients that are input and the app will generate a list of dishes that you can make. From sauces to full course meals. Now, let’s make it date night! Movie theaters closed? That’s ok, because with each recipe generated, a recommended movie will be paired with the meal!",
                "img": "./assets/project1.png",
                "repolink": "https://github.com/lhaodev/Group1Project",
                "tech": "HTLM, CSS, JavaScript, JQuery, UIKit, Materialize, external API"
            },

        ]

    }

    render() {

        return (
            <container id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Portfolio</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {
                                this.portfolioData.portfolio.map((item) => {
                                    return (
                                        <card>
                                            <div className="columns">
                                                <div className="item-wrap">
                                                    <img src={item.img} alt="portfolio" className="item-img" />
                                                    <div className="overlay">
                                                        {/* <Link to={item.repolink}> */}
                                                        <div className="portfolio-item-meta">
                                                            <h5>{item.name}</h5>
                                                            <p>{item.description}</p>
                                                            <p>{item.tech}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </card>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </container>
        );
    }
}

export default Portfolio;