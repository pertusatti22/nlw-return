# passos seguidos no nlw returns

## Aula 1
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
6. Diego explorou os detalhes do tailwind e vou passar pro git agora como branch estudos para manter essa versão e começar o nlw numa nova branch
7. Criei a branch estudos, mantive a branch master e criei a branch dev, onde vou trabalhar a partir de agora, vou manter a branch estudos com o primeiro commit para acessá-la futuramente, e a partir desse ponto estou editando na branch dev.
8. Criamos a pasta components dentro de src e criamos dentro dela o arquivo widget. Diego mostrou como exportar funções nomeadas pra evitar confusão de editar nomes na hora de importar
9. Instalamos biblioteca de icones com *npm install phosphor-react* e iniciamos a importação direta dos icones no widget.
10. para continuar a aula foi desenvolvido o código do widget.tsx e incluido as classes extendidas no tailwind, mostrando como podemos configurar nosso design system usando tailwind.
11. o Diego chamou atenção para a utilização da classe *group* que permite aplicar css de hover por exemplo a um determinado grupo de tags para fazer a animação do botão de feedback
12. depois que o botão estava pronto começamos a estudar os ~estados do react. a importância do estado é porque o react fica observando a situacao do componente com estado, para atualizar esse componente caso ele tenha alguma alteração.

13. Após concluir o componente o Diego passou a questão da acessibilidade. Mostrou 3 bibliotecas de acessibilidade: ariakit, radix e a headlessui que foi instalada com *npm install @headlessui/react* porque é do pessoal da tailwind então já fica compatível com tailwind.

14. O widget foi refatorado usando popover e a aula concluída.

15. Agora vou commitar na dev e mergear pra master e por fim vou adicionar o repo ao github.