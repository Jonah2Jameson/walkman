import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const CategoryTemplate = ({ pageContext, data, location }) => {
  const { category } = pageContext
  const { nodes, totalCount } = data.allMarkdownRemark
  
  return (
    <Layout location={location} title={`${category} 카테고리`}>
      <h2>{category} (글 {totalCount}개)</h2>
      <ul>
        {nodes.map(post => (
          <li key={post.fields.slug}>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query($category: String) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      nodes {
        fields { slug }
        frontmatter { title }
      }
    }
  }
`
export default CategoryTemplate