# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Запуск десктопної версії

1. Завантажити NW.js (SDK-версію) з офіційного сайту.
2. Розпакувати вміст архіву в папку `C:\nwjs\`.
3. Для збірки проєкту перейти в папку `frontend/` та виконати команду: `npm run build`.
4. Для запуску перейти в папку `dist/` (`cd dist`) та виконати: `C:\nwjs\nw.exe .` (або `/c/nwjs/nw.exe .` у Git Bash).

### Швидкий запуск (команда desktop)

У папці `frontend/` також доступна команда:
`npm run desktop`

Вона автоматично виконує збірку `vite build` та одразу запускає застосунок у контейнері NW.js.

> **Примітка:** Шлях до `nw.exe` у скрипті (`C:\nwjs\nw.exe`) прив'язаний до конкретного ПК, тому команда не є універсальною.
