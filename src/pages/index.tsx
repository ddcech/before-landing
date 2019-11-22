import React, { Fragment, Component } from 'react'
import { graphql } from 'gatsby'
import Header from 'components/Header'
import Quote from 'components/Quote'
import About from 'components/About'
// import Portfolio from 'components/Portfolio'
import EndQuote from 'components/EndQuote'
import EndNote from 'components/EndNote'
import Footer from 'components/Footer'

class Landing extends Component {
  render() {
    const { title, intro, quote, about, endQuote, endNote, social } = this.props.data.landing.edges[0].node

    return (
      <Fragment>
        <Header title={title} intro={intro} social={social} />
        <Quote text={quote} />
        <About text={about} />
        {/* <Portfolio /> */}
        <EndQuote text={endQuote} />
        <EndNote text={endNote} />
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
  }
`

export default Landing
