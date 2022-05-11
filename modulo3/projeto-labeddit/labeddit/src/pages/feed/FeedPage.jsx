import { Button, CircularProgress, Pagination, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { useContext, useEffect, useState } from 'react'
import CardPost from '../../components/cardPost/CardPost'
import Header from '../../components/header/Header'
import { GlobalContext } from '../../global/GlobalContext'
import { useForm } from '../../hooks/useForm'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { CreatePostArea, Hr, MainContainer, CardsContainer, LoaderContainer } from './style'


const FeedPage = () => {
    const [logout, setLogout] = useState(false)
    const { form, onChange } = useForm({
        title: '',
        body: ''
    })

    const { states, setters,  requests } = useContext(GlobalContext)
    const { postRequest, putRequest, deleteRequest } = requests
    const { allPosts, loading, currentPage } = states
    const { setCurrentPage } = setters

    

    useProtectedPage(logout)

    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };

    const votePostUp = (id, userVote) => {
        const body = {
            direction: 1
        }
        userVote === 1 ?
            deleteRequest(`posts/${id}/votes`)
           
            :
            postRequest(`posts/${id}/votes`, body)
    }
    const votePostDown = (id, userVote) => {
        const body = {
            direction: -1
        }
        userVote === -1 ?
            deleteRequest(`posts/${id}/votes`)
        :
            putRequest(`posts/${id}/votes`, body)
    }


    const createPost = (event) => {
        event.preventDefault()
        postRequest('posts', form)
    }


    const userLogout = () => {
        window.sessionStorage.clear('token')
        setLogout(true)
    }


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
                        onSubmit={createPost}
                    >
                        <TextField
                            size="small"
                            label="Título do seu post"
                            sx={{
                                width: '100%',
                                background: '#EDEDED',
                            }}
                            required
                            fullWidth
                            id="title"
                            name="title"
                            autoFocus
                            value={form.title}
                            onChange={onChange}
                        />
                        <TextField
                            label="Escreva seu post..."
                            multiline
                            required
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
                <Pagination
                    count={50}
                    onChange={handleChangePage}
                    page={currentPage}
                />
                {
                    loading ?

                        <LoaderContainer>
                            <CircularProgress color="secondary" />
                        </LoaderContainer>

                        :
                        <CardsContainer>
                            {
                                allPosts.map((item) => {
                                    return <CardPost
                                        key={item.id}
                                        post={item}
                                        voteUp={votePostUp}
                                        voteDown={votePostDown}
                                        showComments
                                        showTitle />
                                })
                            }
                        </CardsContainer>
                }
            </MainContainer>
        </>
    )
}

export default FeedPage