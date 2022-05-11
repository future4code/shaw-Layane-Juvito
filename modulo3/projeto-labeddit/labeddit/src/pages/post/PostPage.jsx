import { Button, CircularProgress, Pagination, TextField } from '@mui/material'
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
    const { states, setters, requests } = useContext(GlobalContext)
    const { getRequest, postRequest, putRequest, deleteRequest } = requests
    const { allPosts, loading, reloadData, currentPage } = states
    const { setAllPosts } = setters
    const [currentPageComments, setCurrentPageComments] = useState(1);
    const [count, setCount] = useState(1)

    useEffect(() => {
       allPosts.length === 0 && getRequest(`posts?page=${currentPage}`, setAllPosts)
    }, [])
    useEffect(() => {
        getRequest(`posts/${params.id}/comments?page=${currentPageComments}`, setAllComments)
    }, [reload, currentPageComments, reloadData])
    
    useEffect(() => {
        let curPost
        allPosts.forEach((post) => {
            if (post.id === params.id) {
                curPost = post
            }
        })
        let count
        allPosts.length > 0 ?  count = Math.round(curPost.commentCount / 10) : count = 1 ;
        setCount(count)
        setCurrentPost(curPost)
    }, [allPosts])

    useProtectedPage(logout)

    const handleChangePage = (event, value) => {
        setCurrentPageComments(value);
    };

    const voteCommentUp = (id, userVote) => {
        console.log(id)
        const body = {
            direction: 1
        }
        userVote===1 ?
            deleteRequest(`comments/${id}/votes`)
            :
            postRequest(`comments/${id}/votes`, body)
    }
    const voteCommentDown = (id, userVote) => {
        const body = {
            direction: -1
        }
        userVote=== -1 ?
            deleteRequest(`comments/${id}/votes`)
            :
            putRequest(`comments/${id}/votes`, body)
    }

    const votePostUp = (id, userVote) => {
        const body = {
            direction: 1
        }
        userVote===1 ?
            deleteRequest(`posts/${id}/votes`)

            :
            postRequest(`posts/${id}/votes`, body)
    }
    const votePostDown = (id, userVote) => {
        const body = {
            direction: -1
        }
        userVote=== -1 ?
            deleteRequest(`posts/${id}/votes`)
            :
            putRequest(`posts/${id}/votes`, body)
    }

    const createComment = (event) => {
        event.preventDefault()
        postRequest(`posts/${params.id}/comments`, form, null, setReload)
        setReload(!reload)
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
                            voteUp={votePostUp}
                            voteDown={votePostDown}
                            showBody={true}
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

                {count > 1 && <Pagination
                    count={count}
                    onChange={handleChangePage}
                    page={currentPageComments}
                />}
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