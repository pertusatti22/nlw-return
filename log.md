# passos seguidos no nlw returns

Lembrete: para preview de md usar: ctrl+shift+v
ou "ctrl+k v"

## Aula 1

1. Instalar o Node mais recente
2. Rodar o comando: _npm create vite@latest_
   2.1 O vite permite rodar a aplicação em diferentes navegadores. Substitui o uso do webpackage
   2.2 Nas configurações desse comando Project name nomeia a pasta onde ficam os arquivos, aqui no caso foi nomeado como "web"
   2.3 No framework e variante selecionamos react e react-ts que é o react utilizando typescript.
   2.4 Acessamos a pasta com _CD web_
   2.5 Rodamos _npm install_ para adicionar o node*modules
   2.6 Então \_npm run dev* para colocar a aplicação online na porta 3000
3. Apagamos todos os itens da pasta src exceto o App.tsx, main.tsx e vite-env.d.ts
4. Alteramos o arquivo App.tsx para exibir um hello world dentro de tag H1.
5. Abrimos um novo terminal, mantendo a aplicação rodando no outro e rodamos _npm install -D tailwindcss_ pra instalar o tailwind que é um framework de css, com -D para dependência de desenvolvimento.
   5.1 Em seguida para configurar utilizamos o comando _npx tailwindcss init_ que cria um arquivo tailwind.config.js
   5.2 Dentro do arquivo tailwind.config.js alteramos o parâmetro content para 'content: ["./src/**/*.tsx"]'
   5.3 Dentro da pasta src criar o arquivo global.css e adicionar 3 linhas: @tailwind base; @tailwind components; @tailwind utilities;
6. Diego explorou os detalhes do tailwind e vou passar pro git agora como branch estudos para manter essa versão e começar o nlw numa nova branch
7. Criei a branch estudos, mantive a branch master e criei a branch dev, onde vou trabalhar a partir de agora, vou manter a branch estudos com o primeiro commit para acessá-la futuramente, e a partir desse ponto estou editando na branch dev.
8. Criamos a pasta components dentro de src e criamos dentro dela o arquivo widget. Diego mostrou como exportar funções nomeadas pra evitar confusão de editar nomes na hora de importar
9. Instalamos biblioteca de icones com _npm install phosphor-react_ e iniciamos a importação direta dos icones no widget.
10. para continuar a aula foi desenvolvido o código do widget.tsx e incluido as classes extendidas no tailwind, mostrando como podemos configurar nosso design system usando tailwind.
11. o Diego chamou atenção para a utilização da classe _group_ que permite aplicar css de hover por exemplo a um determinado grupo de tags para fazer a animação do botão de feedback
12. depois que o botão estava pronto começamos a estudar os ~estados do react. a importância do estado é porque o react fica observando a situacao do componente com estado, para atualizar esse componente caso ele tenha alguma alteração.

13. Após concluir o componente o Diego passou a questão da acessibilidade. Mostrou 3 bibliotecas de acessibilidade: ariakit, radix e a headlessui que foi instalada com _npm install @headlessui/react_ porque é do pessoal da tailwind então já fica compatível com tailwind.

14. O widget foi refatorado usando _popover_ e a aula concluída.

15. Agora vou commitar na dev e mergear pra master e por fim vou adicionar o repo ao github.

## Aula 2

1. Começamos criando o WidgetForm.tsx e implementamos responsividade com tailwind usando w-[calc(100vw-2rem)] para telas mobile e md:w-auto para telas medias-md ou larges-lg dentro do WidgetForm
2. Inserimos o componente WidgetForm no componente Widget

3. Construímos o header, footer e botão de fechar do widget, sendo o botão de fechar como CloseButton.tsx, um componente separado, já que seria reutilizado.

4. Após concluir o botão fomos a parte de construir o conteúdo dos tipos de feedback do widget form.

5. Construímos os cardzinhos de opções em objeto javascript. importamos as imagens em svg para assets

6. Para chamar os objetos utilizamos _{ Object.entries(feedbackTypes) }_ que monta e retorna uma estrutura da seguinte forma:

`[ [['BUG'], {...}], [['IDEA'], {...}], [['THOUGHT'], {...}], ]`

7. Com a criação desses vetores eu consigo percorrê-los com Map. assim montamos 3 cards com 1 bloco de código

8. Começamos a construir os estados dos botões e a condicional para selecionar o botão.

9. Começamos o conteúdo do feedback em si, quebrando em módulos e pasta.

### aula 3 - criando backend

1. ajustei as pastas do projeto para ficarem todas no mesmo git

2. commitei todas as branchs pro github

3. Criar a pasta server para o backend
   3.1 dentro dela no terminal rodar o comando _npm init -y_ para criar o package.json
   3.2 instalar dependencias de type script e ts-node-dev pra que as alteracoes acontecam em tempo real, para fazer tudo instalar com _npm i typescript @types/node ts-node-dev -D_ seguido do _npx tsc --init_ para criar o arquivo tsconfig.json com as configurações para o typescript com o js

4. configurando tsconfig.json alteramos versao do javascript no "target": "es2016" para "target": "es2020". E adicionamos "rootDir": "./src", "outDir": "./dist"
   4.1 com o comando _npx tsc_ ele mesmo cria a pasta dist já com o arquivo server.js dentro mostrando a conversão do ts pro js.

5. Montamos o script dev em package.json com a linha _"dev": "ts-node-dev src/server/ts"_

6. Instalar o express pra montar as rotas com _npm i express_ porém o express não trabalha nativamente com o typescript, então precisamos instalar uma biblioteca adicional como dependencia de desenvolvimento com _npm i -D @types/express_

7. A partir dai criamos a aplicação, colocando no ar e testando a primeira rota /users com "curl http://localhost:3333/users"
   no gitbash

8. passamos então a avaliar o prisma, que é um ORM para falar com o banco de dados. Como um JPA no caso do java. A vantagem disso é que durante o desenvolvimento vamos usar sqlite, porém no momento do deploy podemos alterar o banco para postgree sem impactar na aplicação
   Decidi fazer um commit nesse ponto como forma de backup do estado atual da aplicação.

9. Seguindo instalamos o prisma para desenv e para prod com os seguintes comandos _npm i prisma -D_ e _npm i @prisma/client_ e por fim _npx prisma init_ para fazer a configuração inicial.

10. depois de montar a tabela em schema.prisma, vamos no terminal e rodamos _npx prisma migrate dev_ , com esse comando precisamos nomear a ação que realizamos, fizemos isso escrevendo create feedbacks

11. O prisma possui uma feature visual e web para gerenciar o banco de dados, acessível com _npx prisma studio_

12. Em seguida Diego explicou o conceito de migrations, que são uma forma de mantermos um versionamento do nosso banco de dados. Todas vez que criamos uma nova tabela, alteramos um indice e tal cria-se uma nova migration, permitindo recuperar bancos antigos caso algo de errado

13. com banco configurado partimos para criação do feedback no backend

14. depois de montar a função app.post montamos o envio de e-mail para o responsável pelo feedback ler os feedbacks recebidos, usando uma biblioteca com _npm install nodemailer_ e _npm install @types/nodemailer -D_ e para poder testar com smtp em desenv vamos utilizar o mailtrap.io

15. depois de funcionar o e-mail passamos para o estudo do

##### SOLID

- S - Single Responsability Principle -> Cada classe tem uma responsabilidade única. Se ela cria feedback ela deve apenas criar feedback
- O - Open/Closed Principle -> As classes da aplicação devem ser abertas para extensão mas fechadas para modificação
- L - Liskov Substitution Principle -> Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando
- I - Interface Segregation Principle -> exemplo da super impressora que escaneia e tal pra separar as implementações
- D - Dependency Inversion Principle ->
  ao invés da classe buscar as dependencias que ela precisa, o contexto sinaliza pra elas as dependencias que ela necessita.

16. criamos o routes.ts para começar aplicar o solid e fizemos os ajustes em app.post para routes.post

17. começamos a implementar no repository o contrato no feedbacks repository onde diz pra minha aplicação nas rotas e casos de uso, quais operações podemos implementar no banco de dados. Mas sem implementá-las, separando a implementação da operação. Isso permite trocar o prisma repository por qualquer outra implementação, como typeORM, sequelize entre outros. E tendo o contrato basta ter outra implementação que implemente todos os métodos deste contrato e a aplicação vai continuar funcionando normalmente.

18. aplicamos as inversões de dependencia nas funcoes do banco de dados e envio de email. vou fazer um commit nesse ponto, mandar tudo pra main e abrir uma branch test para começar a parte de teste unitario.

19. Tive um baita problema, não consigo mais alterar entre as branchs devido a parte do banco de dados, vou ter que seguir nessa branch mesmo pra parte do teste e aguardar pra ver se nas próximas aulas vai ensinar o deploy
