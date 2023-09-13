import React from "react"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import PurchaseButton from "../buttons/PurchaseButton"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design <br />
            and code React apps
          </Title>
          <Description>
            Don’t skip design. Learn design and code, by building real apps with
            React and Swift. Complete courses about the best tools.
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  max-height: 100vh;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 0px 30px;
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`

const Title = styled(H1)`
  /* color: white; */
  color: ${themes.dark.text1};
  font-size: 20px;
`
const Description = styled(MediumText)``
