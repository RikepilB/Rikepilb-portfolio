import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: '#fff', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Sep 2024 – Apr 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Vice-President Internal</h3>
            <h4 className="vertical-timeline-element-subtitle">Latin American Student Association</h4>
            <p>
              Managed social media and coordinated with other student clubs<br />
              Optimized event planning under union guidelines, reducing costs
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#fff', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Jan 2024 – Apr 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">University of British Columbia</h4>
            <p>
              Explored technical debt in AI-assisted vs. human code using SonarQube and PyRef<br />
              Generated insight reports on maintainability and refactoring patterns
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#fff', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Aug 2023 – Apr 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Customer Service Representative</h3>
            <h4 className="vertical-timeline-element-subtitle">UBC Campus Administration</h4>
            <p>
              Addressed 80+ inquiries weekly, improving satisfaction and retention<br />
              Managed peak traffic periods, reducing service delays
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#fff', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Aug 2023 – Apr 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Founder</h3>
            <h4 className="vertical-timeline-element-subtitle">Football Enthusiast Student Club</h4>
            <p>
              Managed $2,500 budget; increased event attendance via strategic planning
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#fff', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date="Nov 2023 – Feb 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Ambassador</h3>
            <h4 className="vertical-timeline-element-subtitle">Okanagan Tech Industry Night</h4>
            <p>
              Organized tech event for 200+ attendees, managing invites, sponsors, and logistics
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;