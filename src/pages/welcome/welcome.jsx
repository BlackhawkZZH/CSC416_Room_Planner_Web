import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading } from 'rebass';
import ModalVideo from 'react-modal-video'
import ReactCircleModal from 'react-circle-modal'
import { Hero, Flex, CallToAction } from 'react-landing-page';

import Timeline from '../timeline/timeline';

import 'tachyons';
import '../../../node_modules/react-modal-video/scss/modal-video.scss'
import "./welcome.less"


const Welcome = () => {
  let nav = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <ModalVideo className="demo-video" channel='youtube' isOpen={isOpen} videoId='_v2oVUL5XlU' onClose={() => setIsOpen(false)} />
      <Hero
        color="white"
        backgroundImage="https://www.mymove.com/wp-content/uploads/2022/07/mm-best-free-online-virtual-room-programs-and-tools-hero.jpg"
        bg="black"
        bgOpacity={0.1}
      >
        <Heading fontSize={150}>AR Room Planner</Heading>
        <div className='sub-header'>By @Zhenhao_Zhang @Yuze_Wang @Haiyan_Huang @Lichen_Qin </div>
        <Flex mt={3}>
          <ReactCircleModal
            toogleComponent={onClick => (
              <CallToAction bg="grey" mr={3} style={{ width: "300px" }} onClick={onClick}>
                Project Timeline
              </CallToAction>
            )}
            offsetX={0}
            offsetY={0}
          >
            {(onClick) => (<Timeline close={onClick} />)}
          </ReactCircleModal>
          <CallToAction style={{ width: "300px" }} onClick={() => setIsOpen(true)}>Demo Video</CallToAction>
        </Flex>
      </Hero>
    </>
  )
}

export default Welcome