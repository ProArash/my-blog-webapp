<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
use only shadcn and tailwindcss for UI, do not install external library these are enough, for responsiveness use breakpoints and flex row and flex col
the project is about personal blog, admin can do CRUD for blogs, this is the swagger json for api and create api-routes.ts in lib directory for backend routes with its METHOD as comment above it, use tanstack react query for client requests to have control over states, use fetch for SSR requests, also i have already axios client inside lib use it for client requests.
<!-- END:nextjs-agent-rules -->
