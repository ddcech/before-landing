import React, { Fragment, Component } from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FeaturedCaseStudy } from './LandingPage/FeaturedCaseStudy'
import { BriefAboutSection } from './LandingPage/BriefAboutSection'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import { FeaturedFour } from './LandingPage/FeaturedFour'

class Landing extends Component<{ data: any }> {
  render() {
    const { title, intro, quote, about, endQuote, endNote, social } = this.props.data.landing.edges[0].node
    const { caseStudies } = this.props.data.work.edges[0].node

    return (
      <Fragment>
        <Header />
        <Container>
          <SectionWrap>
            <FeaturedCaseStudy image="" name="Scheuermann" actionText="see case study ->" />
            <BriefAboutSection text="Small design studio helping brands being understood by a viewer on the other side of the screen." />
            <FeaturedFour caseStudies={caseStudies.slice(0, 4)} />
          </SectionWrap>
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    landing: allPagesJson(filter: {pageName: {eq: "landing"}}) {
      edges {
        node {
          id
          title
          intro
          quote
          about
          endQuote
          endNote
          social {
            network
            link
          }
        }
      }
    }
    work: allPagesJson(filter: {pageName: {eq: "work"}}) {
      edges {
        node {
          id
          title
          caseStudies {
            brandName
            workType
          }
        }
      }
    }
  }
`

export default Landing
