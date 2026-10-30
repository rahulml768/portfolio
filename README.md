# Rahul Mittal, portfolio

Career portfolio built with Next.js.

## Editing content

Everything on the site comes from [src/data/portfolio.ts](src/data/portfolio.ts): profile, projects, ERP modules, experience, education, skills and contact links. Each project gets its own page at `/work/<id>`, and project screenshots live in `public/work/`.

## Local development

```bash
npm install
npm run dev
```


## AI agent

The "Ask my agent" section holds a short conversation, opens project pages and drafts emails that the visitor sends from their own Gmail. It calls the API route in `src/app/api/ask/route.ts`, which answers from `src/data/portfolio.ts` using the Cerebras API.

Put `CEREBRAS_API_KEY` in `.env.local` for local development, and in the host's environment variables for production. Never put the key in the code, because this repo is public. Set `ASK_MODEL` to change the model.

## Deploying

The site runs on Vercel. Import the repo, add `CEREBRAS_API_KEY` under Environment Variables, and deploy. No other settings are needed.

Link previews and the sitemap use Vercel's production address automatically. With a custom domain, set `NEXT_PUBLIC_SITE_URL` to it.
