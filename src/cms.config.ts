const config = {
  backend: {
    // Use netlify identity as backend
    name: 'github',
    branch: 'master',
    repo: 'Frikadellios/wtf-cms'
  },

  media_folder: 'src/assets',
  public_folder: 'src/assets/',
  media_library: {
    max_file_size: 2012000,
    folder_support: true
  },

  // Please run "npx @staticcms/proxy-server" for local backend
  locale: 'en',
  site_url: 'https://salo-cms-pwa.pages.dev',
  logo_url: 'https://salo-cms-pwa.pages.dev/logo.ico',
  local_backend: false,

  // publish_mode: editorial_workflow
  collections: [
    {
      label: 'Blog',
      name: 'blog',
      folder: 'src/content/blog',
      create: true,
      editor: {
        preview: true
      },
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'string' },
        { label: 'Author', name: 'author', widget: 'string' },
        { label: 'Publish Date', name: 'date', widget: 'datetime' },
        { label: 'Body', name: 'body', widget: 'markdown' }
      ]
    },
    {
      label: 'Services',
      name: 'services',
      folder: 'src/assets/',
      create: true,
      editor: {
        preview: true
      },
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'string' },
        { label: 'Author', name: 'author', widget: 'string' },
        { label: 'Publish Date', name: 'date', widget: 'datetime' },
        { label: 'Body', name: 'body', widget: 'markdown' }
      ]
    }
  ]
}

export default config
