import { Button, CircularProgress, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardPost from '../../components/cardPost/CardPost'
import Header from '../../components/header/Header'
import { GlobalContext } from '../../global/GlobalContext'
import { useForm } from '../../hooks/useForm'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { CreatePostArea, Hr, MainContainer, CardsContainer, LoaderContainer } from './style'


const PostPage = () => {
    const params = useParams()
    const [logout, setLogout] = useState(false)
    const [reload, setReload] = useState(false)
    const { form, onChange } = useForm({
        body: ''
    })
    const [currentPost, setCurrentPost] = useState({})
    const [allComments, setAllComments] = useState([])
    const [changeColor, setChangeColor] = useState(0)
    const { states, requests } = useContext(GlobalContext)
    const { postRequest, getRequest, putRequest } = requests
    const { loading } = states

    useEffect(() => {
        getRequest(`posts/${params.id}/comments`, setAllComments)
    }, [reload, changeColor])

    useEffect(()=>{
        const post = window.localStorage.getItem('post')
        setCurrentPost(JSON.parse(post))
    }, [])

    useProtectedPage(logout)

    const voteCommentUp = (id) => {
        const body = {
            direction: 1
        }
        postRequest(`posts/${id}/votes`, body, null, null, getRequest(`posts/${params.id}/comments`, setAllComments))
    }
    const voteCommentDown = (id) => {
        const body = {
            direction: -1
        }
        putRequest(`posts/${id}/votes`, body, null, null, getRequest(`posts/${params.id}/comments`, setAllComments))
    }

    const votePost = ( id, number) => {
        const body = {
            direction: number
        }
        postRequest(`posts/${id}/votes`, body)
    }

    const createComment = (event) => {
        event.preventDefault()
        postRequest(`posts/${params.id}/comments`, form, null, setReload)
        setReload(!reload)
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
                        onSubmit={createComment}
                        >
                            {currentPost && <CardPost
                                 key={2}
                                 post={currentPost}
                                 votePost={votePost}
                                 showBody = {true}
                                 showTitle
                                 showComments

                             />}
                      
                        <TextField
                            label="Escreva seu comentário..."
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
                            Responder
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
                                allComments.map((item) => {
                                    return <CardPost
                                        key={item.id}
                                        post={item}
                                        voteUp={voteCommentUp}
                                        voteDown={voteCommentDown}
                                        showBody
                                    />
                                })
                            }
                        </CardsContainer>
                }
            </MainContainer>
        </>
    )
}

export default PostPage