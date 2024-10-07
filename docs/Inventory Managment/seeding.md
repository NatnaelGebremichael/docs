# DB Seeding Instructions

## Prepare your DATABASE_URL

1. Go to https://www.urlencoder.org/
2. Paste your database password into the encoder
3. Copy the encoded password
4. Update your `.env` file with the encoded password in the DATABASE_URL: `DATABASE_URL="postgresql://postgres:<encoded-password>@localhost:5432/inventorymanagment"` Replace `<encoded-password>` with the actual encoded password.

## Seeding Steps

1. Generate Prisma client: `npx prisma generate`
2. If you're starting fresh or want to reset the database: `npx prisma migrate reset` 
3. If the database schema already exists and you want to apply new changes: `npx prisma migrate dev --name init_new_schema`
4. Run the seeding script: `npm run seed`

# Updated Schema Relationships and Logic
## Core Entities

### 1. User

- Central entity representing employees or system users
- Relationships:

  - One-to-Many with Sale (as seller)
  - One-to-Many with Purchase (as purchaser)
  - One-to-Many with Expense (as expense creator)
  - One-to-One with Employment

- Includes soft delete and timestamp fields


### 2. Product

-  Represents items sold by the business
-  Relationships:

   - One-to-Many with Sale
   - One-to-Many with Purchase
   - One-to-Many with Waste


- Includes soft delete and timestamp fields


### 3. Category

- Represents expense categories
- Relationships:

   - One-to-Many with Expense
   - One-to-Many with ExpenseCategoryBreakdown


- Includes soft delete and timestamp fields



## Transactional Entities

### 4. Sale

- Represents individual sales transactions
- Relationships:

   - Many-to-One with User (seller)
   - Many-to-One with Product

- Includes soft delete and timestamp fields


### 5. Purchase

- Represents inventory purchases
- Relationships:

   - Many-to-One with User (purchaser)
   - Many-to-One with Product

- Includes payment type (DEBT/PAID) and payment status
- Includes soft delete and timestamp fields


### 6. Expense

- Represents business expenses
- Relationships:

   - Many-to-One with User (expense creator)
   - Many-to-One with Category

- Includes soft delete and timestamp fields


### 7. Waste

- Tracks product waste
- Relationships:

   - Many-to-One with Product

- Includes soft delete and timestamp fields

## Employee Management

Employment

### 8. Stores employee contract details

- Relationships:

   - One-to-One with User
   - One-to-Many with Leave

- Includes soft delete and timestamp fields


### 9. Leave

- Tracks employee leave
- Relationships:

   - Many-to-One with Employment

- Includes soft delete and timestamp fields



## Summary Entities

### 10. SalesSummary

- Aggregates sales data for reporting
- Includes sourceDataHash for data integrity
- Includes timestamp fields


### 11. PurchaseSummary

- Aggregates purchase data for reporting
- Includes sourceDataHash for data integrity
- Includes timestamp fields


### 12. ExpenseSummary

- Aggregates expense data for reporting
- Relationships:

  - One-to-Many with ExpenseCategoryBreakdown
- Includes sourceDataHash for data integrity
- Includes timestamp fields


### 13. ExpenseCategoryBreakdown

- Provides detailed expense breakdown by category
- Relationships:

  - Many-to-One with ExpenseSummary
  - Many-to-One with Category


## Key Changes

- All entities now include createdAt, updatedAt, and deletedAt fields for better auditing and soft delete functionality
- Summary tables include sourceDataHash for data integrity verification
- All monetary values are assumed to be in Ethiopian Birr (no separate currency field needed)