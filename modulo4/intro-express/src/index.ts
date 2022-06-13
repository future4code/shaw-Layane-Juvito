import express from "express";

import { AddressInfo } from "net";
import { send } from "process";

const app = express();

app.use(express.json());

type User = {
    id:number,
    name:string,
    phone: string,
    email:string,
    website:string
}
type Post = {
    id:number,
    title:string,
    body:string,
    userId:number
}

// criando o array de posts 
const users:User[] = [
    {
        id:1,
        name:'Layane',
        phone: '9 1111-1111',
        email:'lay@email.com',
        website:'aiai.org'
    },
    {
        id:2,
        name:'Matheus',
        phone: '9 2222-2222',
        email:'maths@email.com',
        website:'granola.org'
    },
    {
        id:3,
        name:'Rani',
        phone: '9 3333-333',
        email:'rani@email.com',
        website:'universo.org'
    },
    {
        id:4,
        name:'Natã',
        phone: '9 4444-4444',
        email:'natã@email.com',
        website:'altasViagens.org'
    },
    {
        id:5,
        name:'Will',
        phone: '9 5555-5555',
        email:'will@email.com',
        website:'chinatemc.org'
    },
]

// criando o array de posts : separar responsabilidades
const posts:Post[] = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        userId: 2,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        userId: 2,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        userId: 2,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      },
      {
        userId: 3,
        id: 6,
        title: "dolorem eum magni eos aperiam quia",
        body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
      },
      {
        userId: 3,
        id: 7,
        title: "magnam facilis autem",
        body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
      },
      {
        userId: 3,
        id: 8,
        title: "dolorem dolore est ipsam",
        body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
      },
      {
        userId: 4,
        id: 9,
        title: "nesciunt iure omnis dolorem tempora et accusantium",
        body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
      },
      {
        userId: 4,
        id: 10,
        title: "optio molestias id quia eum",
        body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
      },
      {
        userId: 4,
        id: 11,
        title: "et ea vero quia laudantium autem",
        body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
      },
      {
        userId: 5,
        id: 12,
        title: "in quibusdam tempore odit est dolorem",
        body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
      },
      {
        userId: 5,
        id: 13,
        title: "dolorum ut in voluptas mollitia et saepe quo animi",
        body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
      },
      {
        userId: 5,
        id: 14,
        title: "voluptatem eligendi optio",
        body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
      },
]

app.get("/users", (req, res) => {          
    res.send(users)
})
app.get("/posts", (req, res) => {          
    res.send(posts)
})

app.get('/users/:userId', (req,res) => {
    const userId:number = Number(req.params.userId)

    const index:number = users.findIndex(user => user.id===userId)
    index >=0 ? res.send(users[index]) : res.send('Usuário não encontado.')
})

app.get('/users/:userId/posts', (req,res)=>{
    const userId:number = Number(req.params.userId)
    const index:number = users.findIndex(user => user.id===userId)

    if(index>=0){
        const userPosts:Post[] = posts.filter(post=>post.userId === userId)
        res.send(userPosts)
    }else{
        res.send("O usuário não existe.")
    }
})

app.delete('/users/:userId/posts/:postId', (req,res) => {
    const postId = Number(req.params.postId)
    const userId = Number(req.params.userId)

    const index:number = posts.findIndex(post=>post.id === postId)
    if(index>=0){

        const post:Post = posts[index]
    
        if(userId !== post.userId){
            res.send('Usuário não autorizado!')
        } else {
            posts.splice(index,1)
            res.send({
                message: 'Post excluído com sucesso!',
                post: post,
                posts:posts
            })
        }
    }else {
        res.send("Post não encontrado!")
    }
    
})

app.delete('/users/:userId', (req,res) => {
    const userId = Number(req.params.userId)
    const index = users.findIndex(user => user.id === userId)

    if(index>=0){

        const user = users[index]
        users.splice(index,1)
    
        res.send({
            message: 'Usuário excluído com sucesso!',
            user: user
        })
    }else{
        res.send('Usuário não encontrado!')
    }
})


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;