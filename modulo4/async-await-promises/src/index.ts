import { baseUrl } from './constants'
import axios from 'axios'


// 1- 
// a) /subscribes
// b) Promise<any[]>
// c)
async function getAllSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data;
};

// 2 -

// a) a posição do async sempre vem antes dos (), como na arrow function eu preciso criar uma variável o async fica apos o nome da função, na função nomeada o async vem antes da declaração da função.

// b)
const getAllSubscribers2 = async (): Promise<any[]> => {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data;
};

// 3-

type User = {
    id: string;
    name: string;
    email: string;
}
// a) não

//b) pq a promise pode retornar qualquer coisa..

// c)
const getAllSubscribers3 = async (): Promise<User[]> => {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data.map((res: any): User => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
};

// 4-

// a) função assycrona porque irá precisar se conectar com uma fonte externa, no caso a api

// b)

type News = {
    title: string,
    content: string,
    date: number
}

const news: News = {
    title: "Digimon Survive: Game Tem trailer apresentando a história, personagens e gameplay",
    content: "O jogo vai ser lançado para PlayStation 4 e Nintendo Switch no Japão em 28 de Julho e para PS4, Switch, Xbox One e PC via Steam em todo o mundo em 29 de Julho.",
    date: Date.now()
}
const createNews = async (news: News) => {
    await axios.put(`${baseUrl}/news`, news)
}

// 5-

const substcribersId = (subscribers: User[]): string[] => {
    return subscribers.map((subscribers: User): string => subscribers.id)
}

const notifyAll = async (subscribers: User[], message: string): Promise<void> => {
    try {
        for (const subscriber of subscribers) {
             await axios.post(`${baseUrl}/notifications`, {
                subscriberId: subscriber.id,
                message: message
            })
        }
        console.log("Notificações enviadas com sucesso!")
    } catch (error) {
        console.log("Oops, algo deu errado.")
    }

}

// 6-
// a) ele não espera um requisição ser respondida antes de enviar outra, ele recebe um array de promises e retorna outra promise que resolve um array de resposta.

//b) tempo

//c)
const notifyAll6 = async (subscribers: User[], message: string): Promise<void> => {
    try {
        const requests =  subscribers.map(subscriber =>
             axios.post(`${baseUrl}/notifications`, {
                subscriberId: subscriber.id,
                message: message
            })
        )
        await Promise.all(requests)
        console.log("Notificações enviadas com sucesso!")
    } catch (error) {
        console.log("Oops, algo deu errado.")
    }

}

const main = async () => {
    try {
        const subscribers = await getAllSubscribers3()
        await createNews(news)
        await notifyAll6(subscribers, "Mais uma ein galerinha, novinhaaaaa?")

    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()