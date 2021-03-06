import React from 'react'
import Intro from '../Intro'
import { Wrapper, InfoWrapper, Content, StyledWeekDistance, StyledImage } from './style'

const ProfileIntroSection = ({ content }) => 
  <Wrapper>
    <InfoWrapper>
      <Intro fixed={false} />
      <Content>{content()}</Content>
    </InfoWrapper>
    <StyledWeekDistance />
    <StyledImage 
      src="/images/profile/michele-mazzucco-portrait.jpg"
      alt="Michele Mazzucco - Interdisciplinary Designer"
      sources={[{
        media: 'max-width: 40rem',
        srcset: [
          '/images/profile/michele-mazzucco-portrait-square.jpg 1x',
          '/images/profile/michele-mazzucco-portrait-square-2x.jpg 2x',
          '/images/profile/michele-mazzucco-portrait-square-3x.jpg 3x'
        ]
      },{
        srcset: [
          '/images/profile/michele-mazzucco-portrait.jpg 1x',
          '/images/profile/michele-mazzucco-portrait-2x.jpg 2x',
          '/images/profile/michele-mazzucco-portrait-3x.jpg 3x'
        ]       
      }]}
    />
  </Wrapper>

export default ProfileIntroSection
