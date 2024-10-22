import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import auth from 'auth-astro';

import node from '@astrojs/node';
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
  integrations: [auth({
    injectEndpoints: false
  }), starlight({
    title: 'Starlight Auth',
    components: {
      Search: './src/components/starlight/Search.astro'
    },
    social: {
      github: 'https://github.com/TheOtterlord/starlight-auth'
    },
    sidebar: [
      {
        label: "Inventory Managment",
        items: [
          { label: "Start Here", link: "inventory-managment/start-here" },
          { label: "AWS Guide", link: "inventory-managment/aws-guide" },
          { label: "Database Schema", link: "inventory-managment/db-schema" },
          { label: "Seeding", link: "inventory-managment/seeding" },
          {
            label: "Trouble Shooting",
            link: "inventory-managment/trouble-shooting",
          },
        ],
      },
    ]
  })],
  output: 'server',

  // Enable the correct adapter for your deployment (note: netlify is untested at the moment)
  // adapter: node({ mode: 'middleware' }),
  // adapter: netlify()
  adapter: vercel()
});
