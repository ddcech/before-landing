import React from 'react'
import Container from '../../components/Container'
import styled from 'styled-components'
import theme from '../../styles/theme'

const StyledFeaturedFour = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const CaseStudyWrap = styled.div`
  width: 50%;
  margin-bottom: 8rem;
`

const CaseStudyImage = styled.img`
  width: 100%;
  height: 300px;
  margin-bottom: 3.2rem;
`

const CaseStudyFoot = styled.div`
  display: flex;
  font-size: 3.2rem;
`

const BrandName = styled.div`
  color: ${theme.colors.black};
`

const Splitter = styled.div`
  color: ${theme.colors.grey};
`

const WorkType = styled.div`
  color: ${theme.colors.grey};
`

interface ICaseStudy {
  brandName: string;
  workType: string;
}

interface IFeaturedFourProps {
  caseStudies: ICaseStudy[]
}

export const FeaturedFour = ({ caseStudies }: IFeaturedFourProps) => (
  <Container>
    <StyledFeaturedFour>
      {caseStudies.map((caseStudy) => (
        <CaseStudyWrap>
          <CaseStudyImage />
          <CaseStudyFoot>
            <BrandName>{caseStudy.brandName}</BrandName>
            <Splitter>/</Splitter>
            <WorkType>{caseStudy.workType}</WorkType>
          </CaseStudyFoot>
        </CaseStudyWrap>
      ))}
    </StyledFeaturedFour>
  </Container>
)