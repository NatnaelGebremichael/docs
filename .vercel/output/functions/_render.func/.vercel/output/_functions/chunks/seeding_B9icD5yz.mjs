import { F as Fragment, _ as __astro_tag_component__, c as createVNode } from './astro/server_B6NmzAU1.mjs';
import { $ as $$Image } from './_astro_assets_CQb2b-8C.mjs';
import { b as $$Steps } from './Code_D_CQ-K6r.mjs';
import 'clsx';

const frontmatter = {
  "title": "How to Seed"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "prepare-your-database_url",
    "text": "Prepare your DATABASE_URL"
  }, {
    "depth": 3,
    "slug": "seeding-steps",
    "text": "Seeding Steps"
  }, {
    "depth": 3,
    "slug": "updated-schema-relationships-and-logic",
    "text": "Updated Schema Relationships and Logic"
  }, {
    "depth": 5,
    "slug": "1-user",
    "text": "1. User"
  }, {
    "depth": 5,
    "slug": "2-product",
    "text": "2. Product"
  }, {
    "depth": 5,
    "slug": "3-category",
    "text": "3. Category"
  }, {
    "depth": 3,
    "slug": "transactional-entities",
    "text": "Transactional Entities"
  }, {
    "depth": 5,
    "slug": "4-sale",
    "text": "4. Sale"
  }, {
    "depth": 5,
    "slug": "5-purchase",
    "text": "5. Purchase"
  }, {
    "depth": 5,
    "slug": "6-expense",
    "text": "6. Expense"
  }, {
    "depth": 5,
    "slug": "7-waste",
    "text": "7. Waste"
  }, {
    "depth": 3,
    "slug": "employee-management",
    "text": "Employee Management"
  }, {
    "depth": 5,
    "slug": "8-stores-employee-contract-details",
    "text": "8. Stores employee contract details"
  }, {
    "depth": 5,
    "slug": "9-leave",
    "text": "9. Leave"
  }, {
    "depth": 3,
    "slug": "summary-entities",
    "text": "Summary Entities"
  }, {
    "depth": 5,
    "slug": "10-salessummary",
    "text": "10. SalesSummary"
  }, {
    "depth": 5,
    "slug": "11-purchasesummary",
    "text": "11. PurchaseSummary"
  }, {
    "depth": 5,
    "slug": "12-expensesummary",
    "text": "12. ExpenseSummary"
  }, {
    "depth": 5,
    "slug": "13-expensecategorybreakdown",
    "text": "13. ExpenseCategoryBreakdown"
  }, {
    "depth": 3,
    "slug": "key-changes",
    "text": "Key Changes"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<h2 id=\"prepare-your-database_url\">Prepare your DATABASE_URL</h2>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>Go to <a href=\"https://www.urlencoder.org/\">https://www.urlencoder.org/</a></li>\n<li>Paste your database password into the encoder</li>\n<li>Copy the encoded password</li>\n<li>DATABASE_URL: <code dir=\"auto\">DATABASE_URL=\"postgresql://postgres:&#x3C;encoded-password>@localhost:5432/inventorymanagment\"</code></li>\n<li>Update your <code dir=\"auto\">.env</code> with DB URL. Replace <code dir=\"auto\">&#x3C;encoded-password></code> with the encoded password.</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h3 id=\"seeding-steps\">Seeding Steps</h3>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>Generate Prisma client: <code dir=\"auto\">npx prisma generate</code></li>\n<li>If you’re starting fresh or want to reset the database: <code dir=\"auto\">npx prisma migrate reset</code></li>\n<li>If the database schema already exists and you want to apply new changes: <code dir=\"auto\">npx prisma migrate dev --name init_new_schema</code></li>\n<li>Run the seeding script: <code dir=\"auto\">npm run seed</code></li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h3 id=\"updated-schema-relationships-and-logic\">Updated Schema Relationships and Logic</h3>\n<h5 id=\"1-user\">1. User</h5>\n<ul>\n<li>\n<p>Central entity representing employees or system users</p>\n</li>\n<li>\n<p>Relationships:</p>\n<ul>\n<li>One-to-Many with Sale (as seller)</li>\n<li>One-to-Many with Purchase (as purchaser)</li>\n<li>One-to-Many with Expense (as expense creator)</li>\n<li>One-to-One with Employment</li>\n</ul>\n</li>\n<li>\n<p>Includes soft delete and timestamp fields</p>\n</li>\n</ul>\n<h5 id=\"2-product\">2. Product</h5>\n<ul>\n<li>\n<p>Represents items sold by the business</p>\n</li>\n<li>\n<p>Relationships:</p>\n<ul>\n<li>One-to-Many with Sale</li>\n<li>One-to-Many with Purchase</li>\n<li>One-to-Many with Waste</li>\n</ul>\n</li>\n<li>\n<p>Includes soft delete and timestamp fields</p>\n</li>\n</ul>\n<h5 id=\"3-category\">3. Category</h5>\n<ul>\n<li>\n<p>Represents expense categories</p>\n</li>\n<li>\n<p>Relationships:</p>\n<ul>\n<li>One-to-Many with Expense</li>\n<li>One-to-Many with ExpenseCategoryBreakdown</li>\n</ul>\n</li>\n<li>\n<p>Includes soft delete and timestamp fields</p>\n</li>\n</ul>\n<h3 id=\"transactional-entities\">Transactional Entities</h3>\n<h5 id=\"4-sale\">4. Sale</h5>\n<ul>\n<li>\n<p>Represents individual sales transactions</p>\n</li>\n<li>\n<p>Relationships:</p>\n<ul>\n<li>Many-to-One with User (seller)</li>\n<li>Many-to-One with Product</li>\n</ul>\n</li>\n<li>\n<p>Includes soft delete and timestamp fields</p>\n</li>\n</ul>\n<h5 id=\"5-purchase\">5. Purchase</h5>\n<ul>\n<li>\n<p>Represents inventory purchases</p>\n</li>\n<li>\n<p>Relationships:</p>\n<ul>\n<li>Many-to-One with User (purchaser)</li>\n<li>Many-to-One with Product</li>\n</ul>\n</li>\n<li>\n<p>Includes payment type (DEBT/PAID) and payment status</p>\n</li>\n<li>\n<p>Includes soft delete and timestamp fields</p>\n</li>\n</ul>\n<h5 id=\"6-expense\">6. Expense</h5>\n<ul>\n<li>\n<p>Represents business expenses</p>\n</li>\n<li>\n<p>Relationships:</p>\n<ul>\n<li>Many-to-One with User (expense creator)</li>\n<li>Many-to-One with Category</li>\n</ul>\n</li>\n<li>\n<p>Includes soft delete and timestamp fields</p>\n</li>\n</ul>\n<h5 id=\"7-waste\">7. Waste</h5>\n<ul>\n<li>\n<p>Tracks product waste</p>\n</li>\n<li>\n<p>Relationships:</p>\n<ul>\n<li>Many-to-One with Product</li>\n</ul>\n</li>\n<li>\n<p>Includes soft delete and timestamp fields</p>\n</li>\n</ul>\n<h3 id=\"employee-management\">Employee Management</h3>\n<p>Employment</p>\n<h5 id=\"8-stores-employee-contract-details\">8. Stores employee contract details</h5>\n<ul>\n<li>\n<p>Relationships:</p>\n<ul>\n<li>One-to-One with User</li>\n<li>One-to-Many with Leave</li>\n</ul>\n</li>\n<li>\n<p>Includes soft delete and timestamp fields</p>\n</li>\n</ul>\n<h5 id=\"9-leave\">9. Leave</h5>\n<ul>\n<li>\n<p>Tracks employee leave</p>\n</li>\n<li>\n<p>Relationships:</p>\n<ul>\n<li>Many-to-One with Employment</li>\n</ul>\n</li>\n<li>\n<p>Includes soft delete and timestamp fields</p>\n</li>\n</ul>\n<h3 id=\"summary-entities\">Summary Entities</h3>\n<h5 id=\"10-salessummary\">10. SalesSummary</h5>\n<ul>\n<li>Aggregates sales data for reporting</li>\n<li>Includes sourceDataHash for data integrity</li>\n<li>Includes timestamp fields</li>\n</ul>\n<h5 id=\"11-purchasesummary\">11. PurchaseSummary</h5>\n<ul>\n<li>Aggregates purchase data for reporting</li>\n<li>Includes sourceDataHash for data integrity</li>\n<li>Includes timestamp fields</li>\n</ul>\n<h5 id=\"12-expensesummary\">12. ExpenseSummary</h5>\n<ul>\n<li>\n<p>Aggregates expense data for reporting</p>\n</li>\n<li>\n<p>Relationships:</p>\n<ul>\n<li>One-to-Many with ExpenseCategoryBreakdown</li>\n</ul>\n</li>\n<li>\n<p>Includes sourceDataHash for data integrity</p>\n</li>\n<li>\n<p>Includes timestamp fields</p>\n</li>\n</ul>\n<h5 id=\"13-expensecategorybreakdown\">13. ExpenseCategoryBreakdown</h5>\n<ul>\n<li>\n<p>Provides detailed expense breakdown by category</p>\n</li>\n<li>\n<p>Relationships:</p>\n<ul>\n<li>Many-to-One with ExpenseSummary</li>\n<li>Many-to-One with Category</li>\n</ul>\n</li>\n</ul>\n<h3 id=\"key-changes\">Key Changes</h3>\n<ul>\n<li>All entities now include createdAt, updatedAt, and deletedAt fields for better auditing and soft delete functionality</li>\n<li>Summary tables include sourceDataHash for data integrity verification</li>\n<li>All monetary values are assumed to be in Ethiopian Birr (no separate currency field needed)</li>\n</ul>"
    })]
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

const url = "src/content/docs/inventory-managment/seeding.mdx";
const file = "C:/Personal projects/docs/src/content/docs/inventory-managment/seeding.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Personal projects/docs/src/content/docs/inventory-managment/seeding.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
