import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      
      {/* 사이드바와 메인을 감싸는 그리드 컨테이너 추가 */}
      <div className="content-container"> 
        <main>{children}</main>
        
        <aside className="sidebar">
          <section>
            <h3>Categories</h3>
            <ul>
              <li><Link to="/category/hardware">Hardware</Link></li>
              <li><Link to="/category/software">Software</Link></li>
              {/* 나중에 자동으로 카테고리를 가져오게 할 수 있습니다 */}
            </ul>
          </section>
        </aside>
      </div>

      <footer className="global-footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout