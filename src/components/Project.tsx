import React from "react";
import aiResearchImg from '../assets/images/ai_research.png';
import bikeNetworkImg from '../assets/images/bike_network.png';
import examUiImg from '../assets/images/exam_ui_2.png';
import superstoreImg from '../assets/images/superstore_dashboard.png';
import hr from '../assets/images/hr.png';   /* HR dashboard */
import nortwind from '../assets/images/nortwind_ER.png'; /* nortwind */
import Ticketplatform from '../assets/images/Ticket_platform.png'; /* 5. Event Ticketing Platform */
import Regression from '../assets/images/mock05.png';/* Multiple Regression Analysis */
import '../assets/styles/Project.scss';

function Projects() {
  const imgStyle: React.CSSProperties = { width: '100%', maxHeight: '506px', objectFit: 'cover' };

  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">

        {/* 1. AI-Assisted Code Generation Research */}
        <div className="project">
          <img
            src={aiResearchImg}
            className="zoom"
            alt="Technical Debt in AI-Assisted Code"
            style={imgStyle}
          />
          <a href="#" target="_blank" rel="noreferrer">
            <h2>Exploring Technical Debt in AI-Assisted Code Generation</h2>
          </a>
          <p>
            Deep-dive research comparing code smells and technical debt metrics
            in AI-generated vs. human-written repositories using SonarQube and
            PyRef—revealing maintainability challenges and refactoring patterns.
          </p>
        </div>

        {/* 2. Bike-Share Network Optimization */}
        <div className="project">
          <img
            src={bikeNetworkImg}
            className="zoom"
            alt="Bike-Share Network Optimization"
            style={imgStyle}
          />
          <a href="#" target="_blank" rel="noreferrer">
            <h2>Bike-Share Network Optimization Analysis</h2>
          </a>
          <p>
            Applied graph-theory (centrality, clustering) with Python, R, and
            Tableau to identify critical stations and improve resource
            allocation in Vancouver's bike-share network.
          </p>
        </div>

        {/* 3. Exam Generation & Analysis System */}
        <div className="project">
          <img
            src={examUiImg}
            className="zoom"
            alt="Exam Generation & Analysis UI"
            style={imgStyle}
          />
          <a href="#" target="_blank" rel="noreferrer">
            <h2>Exam Generation & Analysis System</h2>
          </a>
          <p>
            Full-stack web app for creating, scanning, and analyzing OMR exams.
            Instructors generate variants, upload results, and view detailed
            performance analytics in real time.
          </p>
        </div>

        {/* 4. Superstore Sales Analytics */}
        <div className="project">
          <img
            src={superstoreImg}
            className="zoom"
            alt="Superstore Sales Analytics Dashboard"
            style={imgStyle}
          />
          <a
            href="https://github.com/RikepilB/Sales_Analysis-Python-SQL-Tableau"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Superstore Sales Analytics Dashboard</h2>
          </a>
          <p>
            End-to-end BI solution using Python, SQL, and Tableau. Cleaned &
            modeled Superstore sales data, then built a dashboard to track
            orders, revenue, and regional performance.
          </p>
        </div>

        {/* 5. Event Ticketing Platform */}
        <div className="project">
          <img
            src={Ticketplatform}
            className="zoom"
            alt="Event Ticketing Platform"
            style={imgStyle}
          />
          <a href="#" target="_blank" rel="noreferrer">
            <h2>Event Ticketing Platform</h2>
          </a>
          <p>
            Django + MySQL backend with REST APIs, Stripe payment integration,
            and AWS deployment. Served as Scrum Master coordinating sprints
            and checkout flows.
          </p>
        </div>

        {/* 6. HR Analytics Dashboard */}
        <div className="project">
          <img
            src={hr}
            className="zoom"
            alt="HR Analytics Dashboard"
            style={imgStyle}
          />
          <a href="#" target="_blank" rel="noreferrer">
            <h2>HR Analytics Dashboard</h2>
          </a>
          <p>
            Power BI dashboard visualizing employee demographics, tenure, and
            turnover metrics for data-driven HR decision making.
          </p>
          <div className="project-links">
            <a href="https://github.com/RikepilB/HR-Analytics-Dashboard/raw/main/HR_Dashboard.pbix" 
               target="_blank" rel="noreferrer">
              📥 Download .pbix
            </a>
            <a href="https://github.com/RikepilB/HR-Analytics-Dashboard/raw/main/HR_Dashboard.pdf" 
               target="_blank" rel="noreferrer">
              📄 View PDF
            </a>
          </div>
        </div>

        {/* 7. Northwind BI Report */}
        <div className="project">
          <img
            src={nortwind}
            className="zoom"
            alt="Northwind BI Report"
            style={imgStyle}
          />
          <a href="#" target="_blank" rel="noreferrer">
            <h2>Northwind BI Report</h2>
          </a>
          <p>
            Analyzed the classic Northwind dataset in Power BI to surface sales
            trends, inventory insights, and top-performing regions.
          </p>
          <div className="project-links">
            <a href="https://github.com/RikepilB/Northwind-Analysis/raw/main/Northwind_Report.pdf" 
               target="_blank" rel="noreferrer">
              📄 View PDF
            </a>
            <a href="https://github.com/RikepilB/Northwind-Analysis/raw/main/Northwind_Report.pbix" 
               target="_blank" rel="noreferrer">
              📥 Download .pbix
            </a>
          </div>
        </div>

        {/* 8. Multiple Regression Analysis */}
        <div className="project">
          <img
            src={Regression}
            className="zoom"
            alt="Multiple Regression Analysis"
            style={imgStyle}
          />
          <a href="#" target="_blank" rel="noreferrer">
            <h2>Multiple Regression Analysis</h2>
          </a>
          <p>
            Statistical analysis project using R and Python to model relationships
            between variables and predict outcomes with comprehensive data
            visualization and interpretation.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Projects;