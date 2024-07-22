# Tik-tak-toe-online

Онлайн игра 'tik tak toe' на React

# Запуск проекта

npm run start

# Установка зависимостей

npm ci

## Настройка ESLint

npx next lint

## Настройка Prettier

npm install --save-dev --save-exact prettier

node --eval "fs.writeFileSync('.prettierrc','{}\n')"

node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"

npx prettier . --write
