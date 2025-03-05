# Learn React.js

I am learning React.js from different Video Courses, Books, and Websites.

## Reference(s)

> 1. <https://v3.tailwindcss.com/docs/guides/vite>
> 1. <https://react.dev/learn>
> 1. <https://tailwindcss.com/>
> 1. <https://vite.dev/>
> 1. <https://nextjs.org/docs>

## Project Setup

```powershell
npm create vite@latest
npm create vite@latest react-heroes

npm install -D tailwindcss@3 postcss autoprefixer
npm install -D tailwindcss@latest

npx tailwindcss init -p
node node_modules/tailwindcss/dist/cli.js init -p

```

## Trouble shooting

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

npm install

Get-ChildItem .\node_modules\.bin\

```
