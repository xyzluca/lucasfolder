# Lucasfolder Portfolio

Astro + Tailwind portfolio website deployed on Vercel.

## 🚀 Deployment Setup

### Microsite Integration

This project integrates the "Are You Here" microsite under the main domain:

- **Main site**: `https://lucakursawe.xyz`
- **Microsite path**: `https://lucakursawe.xyz/areyouhere`
- **Microsite deployment**: `https://areyouhere.vercel.app`

#### How it works

The `vercel.json` configuration uses Vercel's rewrites feature to proxy all requests to `/areyouhere/*` to the separate microsite deployment while maintaining the main domain URL.

```json
{
  "rewrites": [
    {
      "source": "/areyouhere/:path*",
      "destination": "https://areyouhere.vercel.app/:path*"
    }
  ]
}
```

This allows both projects to:
- Remain separate deployments
- Use independent tech stacks (main: Astro, microsite: Vite)
- Deploy independently
- Share the same domain namespace

#### Optional: Subdomain Setup

To set up `areyouhere.lucakursawe.xyz` as a subdomain:

1. **DNS Configuration**: Add a CNAME record
   ```
   areyouhere  CNAME  cname.vercel-dns.com
   ```

2. **Vercel Dashboard**: 
   - Navigate to the areyouhere project → Settings → Domains
   - Add domain: `areyouhere.lucakursawe.xyz`
   - Wait for DNS propagation and SSL provisioning

3. **Result**: The microsite will be accessible at both:
   - `https://lucakursawe.xyz/areyouhere`
   - `https://areyouhere.lucakursawe.xyz`

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm run dev`            | Starts local dev server at `localhost:4321`      |
| `pnpm run build`          | Build your production site to `./dist/`          |
| `pnpm run preview`        | Preview your build locally, before deploying     |
| `pnpm run lint`           | Lint the project                                 |
| `pnpm run lint:fix`       | Fix linting issues                               |
| `pnpm run format`         | Format code with Prettier                        |
| `pnpm run new`            | Create a new post                                |

## 📦 Tech Stack

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [MDX](https://mdxjs.com)
- Deployed on [Vercel](https://vercel.com)

## 📝 License

MIT
