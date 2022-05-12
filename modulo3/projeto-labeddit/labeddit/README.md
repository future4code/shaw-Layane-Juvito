# 📄 LabEddit : Social bookmarks baseado no reedit

### :dart: Objetivo do projeto
Último projeto individual da trilha front-end do bootcamp de desenvolvimento web fullstack da Labenu.  Seu intuito é rever todos os conteúdos do curso de maneira prática e fazer uma aplicação completa. É importante destacar que esse é uma aplicação do tipo Mobile First.

### :small_blue_diamond: Os requisitos do projeto são:
- **Login** 
    * Ao efetuar o login, o usuário deve ser redirecionado para a página de feed
    * Também devera ter um botão que leva a página de cadastro
    *  O token deve ser salvo no LocalStorage

- **Cadastro**
    * Após cadastrar, o usuário deverá ser redirecionado para a página de feed
    *  O token deve ser salvo no LocalStorage

- **Feed**
    *  Deve mostrar todos os posts
    *  Deve permitir a criação de um novo post
    *  Só pode ser acessada por usuários logados
    *  Quando o usuário clicar em um post, ele deverá ser redirecionado para a página do respectivo post. 
    * Quando um usuário clicar em votar (positiva ou negativamente), uma requisição deverá ser feita indicando a "direção" do voto. 

- **Post**
    *  Mostra as informações do post que foi clicado
    *  Deve permitir a criação de comentários
    *  Só pode ser acessada por usuários logados
    *  Deve mostrar todos os comentários do post
    *  Cada comentário também deverá ter a lógica dos votos
   

## ✔️ Funcionalidades
- Navegação entre as páginas utilizando o react-router-dom
- Autenticação e Proteção das páginas privadas
- Usuários não logados são redirecionados para a página de login
- Pessoas autenticadas (logadas) conseguem acessar as páginas de feed e post
- Loadings nas telas que fazem as requisições
- Formulários com validações
- A lógica dos votos nos post e comentários
-  Realizar a votação ou a criação de um novo post ou comentário a lista com todos são atualizadas
-  Paginação no feed e nos comentários
- Botão de logout
- Responsividade

## :books: Bibliotecas utilizadas
- [styled-components](https://styled-components.com/)
- [axios](https://github.com/axios/axios)
- [react-router-dom](https://v5.reactrouter.com/)
- [material ui](https://mui.com/pt/)

## 🔗 Link Surge 
[Acesse a página do LabEddit](https://labeddit-layaneb-shaw.surge.sh/)

##  :computer: DevaDiva

|[Layane Bastos](https://github.com/LayaneB) |
| :---: |

## 📷 Imagens
#### MOBILE (Usando como modelo o iphone 12 Pro)
![image](https://user-images.githubusercontent.com/50851374/167972947-1915e75a-78b5-42b6-9894-9a5e7b90a61c.png)
![image](https://user-images.githubusercontent.com/50851374/167973002-cb92651c-fba4-4d96-83eb-5b9a1c808e8c.png)
![image](https://user-images.githubusercontent.com/50851374/167974101-0df0359f-d3cd-468c-a470-3d786467516b.png)
![image](https://user-images.githubusercontent.com/50851374/167974585-e23e73d7-334c-441a-bbeb-6b10df2946f5.png)
![image](https://user-images.githubusercontent.com/50851374/167975206-b119c22f-7811-40c7-869f-9704b8278e29.png)

#### DESKTOP
![image](https://user-images.githubusercontent.com/50851374/167975059-68f26499-bf8d-4376-b9aa-522c9191a51b.png)
![image](https://user-images.githubusercontent.com/50851374/167975100-5dbab007-1282-4be1-b00d-b04f415dc1eb.png)
![image](https://user-images.githubusercontent.com/50851374/167975003-17d2cd81-4bbe-4631-836f-744848df5b70.png)
![image](https://user-images.githubusercontent.com/50851374/167974946-58fea8d2-87b1-4f53-8583-65bf1f42599b.png)
![image](https://user-images.githubusercontent.com/50851374/167975156-08993200-d493-4807-bb6b-4975abd52891.png)
