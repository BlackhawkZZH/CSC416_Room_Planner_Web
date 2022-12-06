import React from "react"
import { Chrono } from "react-chrono";
import { CloseOutlined } from "ant-design/icons"

import "./timeline.less"

const Timeline = (props) => {
  const items = [{
    title: "May 1940",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  }];

  return (
    <div className="timeline">
      {/* <Chrono items={items} mode="VERTICAL_ALTERNATING" /> */}
      <CloseOutlined />
    </div>
  )
}

export default Timeline