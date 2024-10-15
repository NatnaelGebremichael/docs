// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Inventory Managment",
          items: [
            { label: "Start Here", slug: "inventory-managment/start-here" },
            { label: "AWS Guide", slug: "inventory-managment/aws-guide" },
            { label: "Database Schema", slug: "inventory-managment/db-schema" },
            { label: "Seeding", slug: "inventory-managment/seeding" },
            {
              label: "Trouble Shooting",
              slug: "inventory-managment/trouble-shooting",
            },
          ],
        },
      ],
    }),
  ],
});
