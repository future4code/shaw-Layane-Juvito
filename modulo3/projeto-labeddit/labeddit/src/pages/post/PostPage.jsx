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
    const { states, requests } = useContext(GlobalContext)
    const { getRequest, postRequest, putRequest, deleteRequest } = requests
    const { loading } = states

    useEffect(() => {
        getRequest(`posts/${params.id}/comments`, setAllComments)
    }, [reload])

    useEffect(()=>{
        const post = window.localStorage.getItem('post')
        setCurrentPost(JSON.parse(post))
    }, [])

    useProtectedPage(logout)

    const voteCommentUp = (id, userVote) => {
        console.log(id)
        const body = {
            direction: 1
        }
        userVote ?
        deleteRequest(`comments/${id}/votes`, body)
        :
        postRequest(`comments/${id}/votes`, body)
    }
    const voteCommentDown = (id, userVote) => {
        const body = {
            direction: -1
        }
        userVote ?
        deleteRequest(`comments/${id}/votes`, body)
        :
        postRequest(`comments/${id}/votes`, body)
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
                page={'post'}
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
                                 voteUp={votePost}
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