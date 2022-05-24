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
    const { form, onChange, cleanFields } = useForm({
        body: ''
    })
    const [currentPost, setCurrentPost] = useState({})
    const [allComments, setAllComments] = useState([])
    const { states, setters, requests, functions } = useContext(GlobalContext)
    const { getRequest, postRequest} = requests
    const { allPosts, loading, reloadData, currentPage } = states
    const { setAllPosts } = setters
    const { handleVote } = functions

    const [currentPageComments, setCurrentPageComments] = useState(1);
    const [count, setCount] = useState(1)

    useEffect(() => {
       allPosts.length === 0 && getRequest(`posts?page=${currentPage}`, setAllPosts)
    }, [])
    
    useEffect(() => {
        getRequest(`posts/${params.id}/comments?page=${currentPageComments}`, setAllComments)
    }, [currentPageComments, reloadData])
    
    useEffect(() => {
        let curPost
        allPosts.forEach((post) => {
            if (post.id === params.id) {
                curPost = post
            }
        })
        let count
        allPosts.length > 0 ?  count = Math.ceil(curPost.commentCount / 10) : count = 1 ;
        setCount(count)
        setCurrentPost(curPost)
    }, [allPosts])

    useProtectedPage(logout)

    const handleChangePage = (event, value) => {
        setCurrentPageComments(value);
    };

    const createComment = (event) => {
        event.preventDefault()
        postRequest(`posts/${params.id}/comments`, form)
        cleanFields()
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
                            voteUp={() => handleVote(`posts/${currentPost.id}/votes`, currentPost.userVote, 1)}
                            voteDown={() => handleVote(`posts/${currentPost.id}/votes`, currentPost.userVote, -1)}
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
                                        voteUp={() => handleVote(`comments/${item.id}/votes`, item.userVote, 1)}
                                        voteDown={() => handleVote(`comments/${item.id}/votes`, item.userVote, -1)}
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