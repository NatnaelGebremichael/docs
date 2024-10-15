import { F as Fragment, _ as __astro_tag_component__, c as createVNode } from './astro/server_B6NmzAU1.mjs';
import { $ as $$Image } from './_astro_assets_CQb2b-8C.mjs';
import './Code_D_CQ-K6r.mjs';
import 'clsx';

const frontmatter = {
  "title": "Start Here",
  "description": "Starting Instructions."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "build-a-fullstack-inventory-management-dashboard",
    "text": "Build a Fullstack Inventory Management Dashboard"
  }, {
    "depth": 2,
    "slug": "tutorial",
    "text": "Tutorial"
  }, {
    "depth": 2,
    "slug": "tech-stack",
    "text": "Tech Stack"
  }, {
    "depth": 2,
    "slug": "resources-and-links",
    "text": "Resources and Links"
  }, {
    "depth": 3,
    "slug": "image-files",
    "text": "Image Files"
  }, {
    "depth": 3,
    "slug": "configuration-and-code",
    "text": "Configuration and Code"
  }, {
    "depth": 3,
    "slug": "additional-resources",
    "text": "Additional Resources"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<h2 id=\"build-a-fullstack-inventory-management-dashboard\">Build a Fullstack Inventory Management Dashboard</h2>\n<p>Starting Tutorial</p>\n<p><a href=\"https://www.youtube.com/watch?v=ddKQ8sZo_v8\"><img src=\"https://img.youtube.com/vi/ddKQ8sZo_v8/0.jpg\" alt=\"Tutorial Video\"></a></p>\n<p>Link to related video: <a href=\"https://www.youtube.com/watch?v=ddKQ8sZo_v8\">https://www.youtube.com/watch?v=ddKQ8sZo_v8</a></p>\n<h2 id=\"tutorial\">Tutorial</h2>\n<p>This repository contains the code corresponding to an in-depth tutorial available on my YouTube channel. It is highly suggested to watch the <a href=\"https://www.youtube.com/watch?v=ddKQ8sZo_v8\">tutorial video</a> as it includes detailed instructions on how to set up everything, including deploying AWS. This tutorial is designed for both beginners and experts.</p>\n<p>Join our <a href=\"https://discord.com/channels/1070200085440376872/1267499814678171698\">Discord community</a> for discussions about this specific app.</p>\n<h2 id=\"tech-stack\">Tech Stack</h2>\n<ul>\n<li><strong>Next JS</strong></li>\n<li><strong>Tailwind</strong></li>\n<li><strong>Redux Toolkit</strong></li>\n<li><strong>Redux Toolkit Query</strong></li>\n<li><strong>Material UI Data Grid</strong></li>\n<li><strong>Node.js</strong></li>\n<li><strong>Prisma</strong></li>\n<li><strong>AWS EC2</strong></li>\n<li><strong>AWS RDS</strong></li>\n<li><strong>AWS API Gateway</strong></li>\n<li><strong>AWS Amplify</strong></li>\n<li><strong>AWS S3</strong></li>\n</ul>\n<h2 id=\"resources-and-links\">Resources and Links</h2>\n<h3 id=\"image-files\">Image Files</h3>\n<ul>\n<li><a href=\"https://github.com/ed-roh/inventory-management/tree/master/server/assets\">Server assets to download</a></li>\n</ul>\n<h3 id=\"configuration-and-code\">Configuration and Code</h3>\n<ul>\n<li><a href=\"https://github.com/ed-roh/inventory-management/blob/master/client/tailwind.config.ts\">tailwind.config.ts</a> (to copy)</li>\n<li><a href=\"https://github.com/ed-roh/inventory-management/blob/master/client/src/app/redux.tsx\">Redux store file</a> (to copy)</li>\n<li><a href=\"https://github.com/ed-roh/inventory-management/blob/master/server/prisma/seed.ts\">Seed files for database</a> (to copy)</li>\n<li><a href=\"https://github.com/ed-roh/inventory-management/tree/master/server/prisma/seedData\">Seed data files</a> (to download)</li>\n</ul>\n<h3 id=\"additional-resources\">Additional Resources</h3>\n<ul>\n<li><a href=\"https://drawsql.app/teams/team-3023/diagrams/56-inventorymanagement\">Data model diagram</a></li>\n<li><a href=\"https://github.com/ed-roh/inventory-management/blob/master/server/prisma/schema.prisma\">Prisma schema file</a></li>\n<li><a href=\"https://github.com/ed-roh/inventory-management/blob/master/server/aws-ec2-instructions.md\">AWS commands</a></li>\n</ul>"
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const url = "src/content/docs/inventory-managment/start-here.mdx";
const file = "C:/Personal projects/docs/src/content/docs/inventory-managment/start-here.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Personal projects/docs/src/content/docs/inventory-managment/start-here.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
