import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { CreatePostArea, Hr, MainContainer } from './style'


const FeedPage = () => {
    const [logout, setLogout] = useState(false)
    const [post, setPost] = useState('')
    useProtectedPage(logout)
    const handleChange = (event) => {
        setPost(event.target.value)
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
                            display:'flex',
                            flexDirection:'column',
                            gap:'10px',
                            width: '85%',
                            height:'80%',
                            
                        }}
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Escreva seu post..."
                            multiline
                            sx={{
                                width: '100%',
                                background:'#EDEDED',
                            }}
                            maxRows={4}
                            value={post}
                            onChange={handleChange}
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
            </MainContainer>
        </>
    )
}

export default FeedPage