import React from "react"
import { Chrono } from "react-chrono";
import { BsXLg } from "react-icons/bs"

import "./timeline.less"

const Timeline = (props) => {
  // const items = [{
  //   title: "May 1940",
  //   cardTitle: "Dunkirk",
  //   url: "http://www.history.com",
  //   cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
  //   cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  //   media: {
  //     type: "IMAGE",
  //     source: {
  //       url: "http://someurl/image.jpg"
  //     }
  //   }
  // }];

  const items = [{
    title: "Week 1",
    cardTitle: "10.31 - 11.4",
    cardSubtitle: "Design and Planning",
    cardDetailedText: (
      <div>
        <div>1. Prepare the develop environment</div>
        <div>2. Allocate task to each group member</div>
        <div>3. Discuss and find solutions of the problems may encounter in the design and future development</div>
      </div>
    ),
  },
  {
    title: "Week 2",
    cardTitle: "11.7 - 11.11",
    cardSubtitle: "Get start to Development",
    cardDetailedText: (
      <div>
        <div>1. Implement a simple version which can achieve place furniture and edit the size of it.</div>
        <div>2. Based on the simple version, refining and upgrading app functions to make the system intuitive and user friendly.</div>
      </div>
    ),
  },
  {
    title: "Week 3",
    cardTitle: "11.14 - 11.18",
    cardSubtitle: "Refining Development",
    cardDetailedText: (
      <div>
        <div>1. Add overlap detection to the app.</div>
        <div>2. Add placeholder editor to the app.</div>
        <div>3. Deploy and test app in Apple devices.</div>
      </div>
    ),
  },
  {
    title: "Week 4",
    cardTitle: "11.21 - 11.25",
    cardSubtitle: "User Study and Evaluation",
    cardDetailedText: (
      <div>
        <div>1. Test in room under different surface and evaluate the robustness of the app</div>
        <div>2. Invite 3 users to test our app and record their feedback to evaluate whether the app is user friendly and analyze which parts need to be modified.</div>
      </div>
    ),
  },
  {
    title: "Week 5",
    cardTitle: "11.28 - 12.2",
    cardSubtitle: "Summarization",
    cardDetailedText: (
      <div>
        <div>1. Summary the results of implementation and testing.</div>
        <div>2. Preparing the slides and poster of final presentation.</div>
      </div>
    ),
  }]

  return (
    <div className="back-page">
      <div className="timeline">
        <Chrono items={items} mode="VERTICAL_ALTERNATING" />
        <BsXLg className="close-btn" onClick={props.close} />
      </div>
    </div>
  )
}

export default Timeline