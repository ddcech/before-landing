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

    return (
      <Fragment>
        <Header />
        <Container>
          <SectionWrap>
            <FeaturedCaseStudy image="" name="Scheuermann" actionText="see case study ->" />
            <BriefAboutSection text="Small design studio helping brands being understood by a viewer on the other side of the screen." />
            <FeaturedFour caseStudies={caseStudies} />
          </SectionWrap>
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

const caseStudies = [
  { brandName: 'ease', workType: 'Full-scale branding'},
  { brandName: 'EMCO', workType: 'Eshop'},
  { brandName: 'IBM', workType: 'Explanation Video'},
  { brandName: 'Axe Capital', workType: 'Website'},
]

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
  }
`

export default Landing
