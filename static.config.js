import axios from 'axios'
import path, { extname, basename } from 'path'
import { promises } from 'fs'
import globby from 'globby'
import fm from 'front-matter'
import remarkFrontMatter from 'remark-frontmatter'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!
export const src = (...paths) => path.join(__dirname, 'src', ...paths)

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  // getRoutes: async () => {
  //   const { data: posts } /* :{ data: Post[] } */ = await axios.get(
  //     'https://jsonplaceholder.typicode.com/posts',
  //   )
  //   return [
  //     {
  //       path: '/blog',
  //       getData: () => ({
  //         posts,
  //       }),
  //       children: posts.map((post /* : Post */) => ({
  //         path: `/post/${post.id}`,
  //         template: 'src/containers/Post',
  //         getData: () => ({
  //           post,
  //         }),
  //       })),
  //     },
  //   ]
  // },
  getRoutes: () =>
    // 参考:
    // https://github.com/benadamstyles/benadamstyles/blob/master/static.config.js
    Promise.resolve([
      {
        path: 'components',
        template: src('contents', 'components.tsx'),

        /**
         * @returns {Promise<{ posts: import('./src/pages/blog').BlogPost[] }>}
         */
        async getData() {
          const files = await globby(src('contents', 'components', '!(index.tsx)'))

          console.log(files.frontMatter)

          const contents = await Promise.all(
            files.map(async (path) => ({
              path,
              content: await promises.readFile(path, 'utf-8'),
            })),
          )

          const components = contents.map(({ path, content }) => ({
            .../** @type {object} */ (fm(content).attributes),
            slug: basename(path, extname(path)),
          }))
          // .map(validateBlogPostFrontMatter)

          return { components }
        },
      },
    ]),
  plugins: [
    'react-static-plugin-typescript',
    [
      'react-static-plugin-mdx',
      {
        extensions: ['.md', '.mdx'],
        mdxOptions: {
          remarkPlugins: [remarkFrontMatter],
        },
        parseFrontMatter: true,
      },
    ],
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/contents'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
