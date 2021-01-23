// import path from 'path'
import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'

export default () => {
  const { components } = useRouteData() //渡したデータを受け取る

  return (
    <div>
      <h1>Components</h1>
      <ul>
        {components &&
          components.map((component: { title: string; slug: string }) => {
            return (
              <li key={component.slug}>
                <Link to={`/components/${component.slug}/`}>{component.title}</Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
