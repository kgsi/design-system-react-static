import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from '@reach/router'
import FancyDiv from 'components/FancyDiv'
import Dynamic from 'containers/Dynamic'
import { GlobalStyle } from './styles/GlobalStyle'
import '@exampledev/new.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <GlobalStyle />
      <header>
        <h1>SmartHR Design System</h1>
        <nav>
          <Link to="/">Home</Link>
          <span>&nbsp;/&nbsp;</span>
          <Link to="/about">About</Link>
          <span>&nbsp;/&nbsp;</span>
          <Link to="/components">Components</Link>
          {/* <span>&nbsp;/&nbsp;</span>
          <Link to="/blog">Blog</Link>
          <span>&nbsp;/&nbsp;</span>
          <Link to="/dynamic">Dynamic</Link> */}
        </nav>
      </header>
      <div className="content">
        <FancyDiv>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </FancyDiv>
      </div>
    </Root>
  )
}

export default App
