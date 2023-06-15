# Vue 3 + Vite

- Чтобы стилизовать компонент range slider (UiRange) не используя сторонние библиотеки пришлось использовать "нестадартный" псевдоэлемент ::-webkit-slider-runnable-track. [На MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-slider-runnable-track) о нем написано что его не следует использовать, но при тестировании, проблем с ним не возникло ни в одном браузере.
- Применил анимацию на stroke у иконок в блоке "Офорлмение заказа", из-за чего они теперь несколько толще чем на макете.
- Валидация на элементах формы показана в демонстрационной версии (отправка происходит без проверки обязательности полей)

Данный проект не было необходимости реализовывать на Vue 3. Этим я показал, что имею навыки для работы с ним.

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```