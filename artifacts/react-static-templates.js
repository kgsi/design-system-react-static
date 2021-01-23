

import React from 'react'
import universal, { setHasBabelPlugin } from 'react-universal-component'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('__react_static_root__/src/contents/404.tsx'), universalOptions)
      t_0.template = '__react_static_root__/src/contents/404.tsx'
      
const t_1 = universal(import('__react_static_root__/src/contents/about.mdx'), universalOptions)
      t_1.template = '__react_static_root__/src/contents/about.mdx'
      
const t_2 = universal(import('__react_static_root__/src/contents/blog.tsx'), universalOptions)
      t_2.template = '__react_static_root__/src/contents/blog.tsx'
      
const t_3 = universal(import('__react_static_root__/src/contents/components/button.mdx'), universalOptions)
      t_3.template = '__react_static_root__/src/contents/components/button.mdx'
      
const t_4 = universal(import('__react_static_root__/src/contents/components/calender.mdx'), universalOptions)
      t_4.template = '__react_static_root__/src/contents/components/calender.mdx'
      
const t_5 = universal(import('__react_static_root__/src/contents/components/index.tsx'), universalOptions)
      t_5.template = '__react_static_root__/src/contents/components/index.tsx'
      
const t_6 = universal(import('__react_static_root__/src/contents/index.tsx'), universalOptions)
      t_6.template = '__react_static_root__/src/contents/index.tsx'
      
const t_7 = universal(import('__react_static_root__/src/containers/Post'), universalOptions)
      t_7.template = '__react_static_root__/src/containers/Post'
      

// Template Map
export default {
  '__react_static_root__/src/contents/404.tsx': t_0,
'__react_static_root__/src/contents/about.mdx': t_1,
'__react_static_root__/src/contents/blog.tsx': t_2,
'__react_static_root__/src/contents/components/button.mdx': t_3,
'__react_static_root__/src/contents/components/calender.mdx': t_4,
'__react_static_root__/src/contents/components/index.tsx': t_5,
'__react_static_root__/src/contents/index.tsx': t_6,
'__react_static_root__/src/containers/Post': t_7
}
// Not Found Template
export const notFoundTemplate = "__react_static_root__/src/contents/404.tsx"

