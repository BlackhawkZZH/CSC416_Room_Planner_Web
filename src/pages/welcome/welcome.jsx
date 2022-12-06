import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading } from 'rebass';
import ModalVideo from 'react-modal-video'
import ReactCircleModal from 'react-circle-modal'
import { Hero, Flex, CallToAction } from 'react-landing-page';

import 'tachyons';
import '../../../node_modules/react-modal-video/scss/modal-video.scss'


const Welcome = (props) => {
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
        <Flex mt={3}>
          <ReactCircleModal
            backgroundColor="#97349a"
            toogleComponent={onClick => (
              <CallToAction bg="grey" mr={3} style={{ width: "300px" }} onClick={onClick}>
                Project Timeline
              </CallToAction>
            )}
            // Optional fields and their default values
            offsetX={0}
            offsetY={0}
          >
            {(onClick) => (
              <div style={{ backgroundColor: '#fff', padding: '1em' }}>
                <p>
                  Content inside of modal
                </p>
                <button onClick={onClick}>
                  Click here to close modal
                </button>
              </div>
            )}
          </ReactCircleModal>
          <CallToAction style={{ width: "300px" }} onClick={() => setIsOpen(true)}>Demo Video</CallToAction>
        </Flex>
      </Hero>
    </>
  )
}

export default Welcome