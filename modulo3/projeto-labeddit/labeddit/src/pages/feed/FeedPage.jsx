import { Button, CircularProgress, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardPost from '../../components/cardPost/CardPost'
import Header from '../../components/header/Header'
import { GlobalContext } from '../../global/GlobalContext'
import { useForm } from '../../hooks/useForm'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { CreatePostArea, Hr, MainContainer, CardsContainer, LoaderContainer } from './style'


const FeedPage = () => {
    const [logout, setLogout] = useState(false)
    const [reload, setReload] = useState(false)
    const { form, onChange } = useForm({
        title: '',
        body: ''
    })
    const [allPosts, setAllPosts] = useState([])
    const { states, requests } = useContext(GlobalContext)
    const { postRequest, getRequest } = requests
    const { loading } = states

    useEffect(() => {
        getRequest('posts', setAllPosts)
    }, [reload])

    useProtectedPage(logout)

    const createPost = (event) => {
        event.preventDefault()
        postRequest('posts', form, null)
        
    }

    const userLogout = () => {
        window.localStorage.clear('token')
        setLogout(true)
    }

    // /posts
    return (
        <>
            <Header
                buttonContent={'Sair'}
                buttonClick={() => userLogout()}
            />
            <MainContainer>
                <CreatePostArea>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            width: '85%',
                            height: '80%',

                        }}
                        autoComplete="off"
                        onSubmit={createPost}
                    >
                        <TextField
                            size="small"
                            label="Título do seu post"
                            sx={{
                                width: '100%',
                                background: '#EDEDED',
                            }}
                            // required
                            fullWidth
                            id="title"
                            name="title"
                            autoComplete="title"
                            autoFocus
                            value={form.title}
                            onChange={onChange}
                        />
                        <TextField
                            label="Escreva seu post..."
                            multiline
                            // required
                            sx={{
                                width: '100%',
                                background: '#EDEDED',
                            }}
                            name={'body'}
                            maxRows={4}
                            value={form.body}
                            onChange={onChange}

                        />
                        <Button
                            type="submit"
                            variant={'primary'}
                            fullWidth
                            sx={{ mb: 1 }}
                        >
                            Postar
                        </Button>
                        <Hr />
                    </Box>
                </CreatePostArea>
                {
                    loading ?

                        <LoaderContainer>
                            <CircularProgress color="secondary" />
                        </LoaderContainer>

                        :
                        <CardsContainer>
                            {
                                allPosts.map((item) => {
                                    return <CardPost post={item} key={item.id} />
                                })
                            }
                        </CardsContainer>
                }
            </MainContainer>
        </>
    )
}

export default FeedPage