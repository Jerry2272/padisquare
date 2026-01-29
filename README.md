**Padisquare - Multi-Vendor Marketplace**

**Live Demo:** https://padisquare-weld.vercel.app 

Padisquare is a Next.js 14+ multi-vendor marketplace that allows vendors to create their own storefronts. Users can browse, search, sort, and paginate products from multiple vendors.

**Features**

Multi-vendor storefronts (/site/[vendorSlug])

Vendor hero banner, logo, and product grid

Product search and sorting (price, newest)

Pagination for large product catalogs

Loading, empty, and error states

Fully responsive UI with TailwindCSS

SEO-friendly metadata per vendor page

dark mode (toggleable theme)

**Getting Started**

Clone the repository:

git clone https://github.com/Jerry2272/padisquare.git
cd padisquare


Install dependencies:

npm install
# or
yarn
# or
pnpm install


Start the development server:

npm run dev
# or
yarn dev
# or
pnpm dev


Open http://localhost:3000
 in your browser to view the app.

Project Structure
app/
  site/[vendorSlug]/       # Dynamic vendor pages
  page.tsx                 # Home page
  layout.tsx               # Global layout 
public/                    # Static assets (images, logos)
data/                      # Mock vendors & products
components/                # Reusable components (Button, ProductGrid, Navbar, Footer)

Technologies Used

Next.js 14+
 (App Router)

React 18+

TailwindCSS

TypeScript


This project is deployed on Vercel:

https://padisquare-weld.vercel.app

To deploy your own version:
