import React, { Fragment, Component } from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import { FeaturedFour } from './LandingPage/FeaturedFour'

class Work extends Component<{ data: any }> {
  render() {
    const { caseStudies } = this.props.data.work.edges[0].node

    return (
      <Fragment>
        <Header />
        <Container>
          <SectionWrap>
            <FeaturedFour caseStudies={caseStudies} />
          </SectionWrap>
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

// const caseStudies = [
//   { brandName: 'ease', workType: 'Full-scale branding'},
//   { brandName: 'EMCO', workType: 'Eshop'},
//   { brandName: 'IBM', workType: 'Explanation Video'},
//   { brandName: 'Axe Capital', workType: 'Website'},
//   { brandName: 'Trime', workType: 'Eshop & Packaging'},
//   { brandName: 'Scheuermann', workType: 'Branding & Website'},
//   { brandName: 'Party Gods', workType: 'Mobile Game'},
//   { brandName: 'Tribes of Mokha', workType: 'Eshop'},
//   { brandName: 'Metronome Festival', workType: 'Website'},
//   { brandName: 'ESTEN', workType: 'Branding & Website'},
// ]

export const query = graphql`
  query WorkQuery {
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

export default Work
