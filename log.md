# passos seguidos no nlw returns

Lembrete: para preview de md usar: ctrl+shift+v 
ou "ctrl+k v"

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

14. O widget foi refatorado usando *popover* e a aula concluída.

15. Agora vou commitar na dev e mergear pra master e por fim vou adicionar o repo ao github.


## Aula 2

1. Começamos criando o WidgetForm.tsx e implementamos responsividade com tailwind usando w-[calc(100vw-2rem)] para telas mobile e md:w-auto para telas medias-md ou larges-lg dentro do WidgetForm
2. Inserimos o componente WidgetForm no componente Widget

3. Construímos o header, footer e botão de fechar do widget, sendo o botão de fechar como CloseButton.tsx, um componente separado, já que seria reutilizado.

4. Após concluir o botão fomos a parte de construir o conteúdo dos tipos de feedback do widget form.

5. Construímos os cardzinhos de opções em objeto javascript. importamos as imagens em svg para assets

6. Para chamar os objetos utilizamos *{ Object.entries(feedbackTypes) }* que monta e retorna uma estrutura da seguinte forma: 


`[
    [['BUG'], {...}],
    [['IDEA'], {...}],
    [['THOUGHT'], {...}],
]`

7. Com a criação desses vetores eu consigo percorrê-los com Map. assim montamos 3 cards com 1 bloco de código

8. Começamos a construir os estados dos botões e a condicional para selecionar o botão.

9. Começamos o conteúdo do feedback em si, quebrando em módulos e pasta.


### aula 3 - criando backend

1. ajustei as pastas do projeto para ficarem todas no mesmo git

2. commitei todas as branchs pro github

3. Criar a pasta server para o backend
3.1 dentro dela no terminal rodar o comando *npm init -y* para criar o package.json
3.2 instalar dependencias de type script e ts-node-dev pra que as alteracoes acontecam em tempo real, para fazer tudo instalar com *npm i typescript @types/node ts-node-dev -D* seguido do *npx tsc --init* para criar o arquivo tsconfig.json com as configurações para o typescript com o js 

4. configurando tsconfig.json alteramos versao do javascript no "target": "es2016" para "target": "es2020". E adicionamos "rootDir": "./src", "outDir": "./dist"
4.1 com o comando *npx tsc* ele mesmo cria a pasta dist já com o arquivo server.js dentro mostrando a conversão do ts pro js.

5. Montamos o script dev em package.json com a linha *"dev": "ts-node-dev src/server/ts"*

6. Instalar o express pra montar as rotas com *npm i express* porém o express não trabalha nativamente com o typescript, então precisamos instalar uma biblioteca adicional como dependencia de desenvolvimento com *npm i -D @types/express*

7. A partir dai criamos a aplicação, colocando no ar e testando a primeira rota /users com "curl http://localhost:3333/users"
no gitbash

8. passamos então a avaliar o prisma, que é um ORM para falar com o banco de dados. Como um JPA no caso do java. A vantagem disso é que durante o desenvolvimento vamos usar sqlite, porém no momento do deploy podemos alterar o banco para postgree sem impactar na aplicação
Decidi fazer um commit nesse ponto como forma de backup do estado atual da aplicação