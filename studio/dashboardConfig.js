export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '609186f99d797e0c0401ed13',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-g3c3i85d',
                  apiId: '32166815-7122-44e8-a13b-f979300e8689'
                },
                {
                  buildHookId: '609186f9784fb40b58c651c1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hkf27vxv',
                  apiId: '6e140bb2-4f88-42ff-b993-66b597b1abec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/santiliaudat/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hkf27vxv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
