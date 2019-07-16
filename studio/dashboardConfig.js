export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d2d70cd520af62327765b97',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vih4nvm6',
                  apiId: '95ac246c-165f-49cb-bd94-266a1bac99cf'
                },
                {
                  buildHookId: '5d2d70ce444c4efa5ea1a303',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-sp5zjfyw',
                  apiId: '556c326f-1daa-4011-bd9f-5543065a621d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tormi/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-sp5zjfyw.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
