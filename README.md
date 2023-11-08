# mdslides.github.io

Jamstack-powered landing page for MdSlides, a Markdown slides editor.

## Development

There are no special prerequisites other than the `node@14` environment. Once the project repository is cloned and the dependencies are installed, the development server can be started with the `develop` script (see [package.json](./package.json)).

## Deployment

![GitHub workflow status](https://img.shields.io/github/actions/workflow/status/mdslides/mdslides.github.io/github-pages-deploy.yml)
[![Website state](https://img.shields.io/website?url=https%3A%2F%2Fmdslides.github.io%2F&label=mdslides.github.io)](https://mdslides.github.io/app/)

There is a [GitHub Actions workflow](.github/workflows/github-pages-deploy.yml) configured for the automated build and deployment to GitHub Pages when a push to `main` branch occurs. The site is reachable at https://mdslides.github.io/.
