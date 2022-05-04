passos seguidos no nlw

1. Instalar o Node mais recente
2. Rodar o comando: *npm create vite@latest*
2.1 O vite permite rodar a aplicação em diferentes navegadores. Substitui o uso do webpackage
2.2 Nas configurações desse comando Project name nomeia a pasta onde ficam os arquivos, aqui no caso foi nomeado como "web"
2.3 No framework e variante selecionamos react e react-ts que é o react utilizando typescript.
2.4 Acessamos a pasta com *CD web*
2.5 Rodamos *npm install* para adicionar o node_modules
2.6 Então *npm run dev* para colocar a aplicação online na porta 3000
3. Apagamos todos os itens da pasta src exceto o App.tsx, main.tsx e vite-env.d.ts
4. Alteramos o arquivo App.tsx para exibir um hello world dentro de tag H1.
5. Abrimos um novo terminal, mantendo a aplicação rodando no outro e rodamos *npm install -D tailwindcss* pra instalar o tailwind que é um framework de css, com -D para dependência de desenvolvimento. 
5.1 Em seguida para configurar utilizamos o comando *npx tailwindcss init* que cria um arquivo tailwind.config.js
5.2 Dentro do arquivo tailwind.config.js alteramos o parâmetro content para 'content: ["./src/**/*.tsx"]'
5.3 Dentro da pasta src criar o arquivo global.css e adicionar 3 linhas: @tailwind base; @tailwind components; @tailwind utilities;
6 - Diego explorou os detalhes do tailwind e vou passar pro git agora como branch estudos para manter essa versão e começar o nlw numa nova branch