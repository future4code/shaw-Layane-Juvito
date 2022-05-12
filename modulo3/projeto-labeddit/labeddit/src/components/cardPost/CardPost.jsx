import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined'
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined'
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp'
import { BodyContainer, CardContainer, CommentsContainer, PostStatusContainer, SendBy, VoteDown, VotesContainer, VoteUp, CommentButton, BodyText, TitleText } from './style'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const CardPost = ({ post, voteUp, voteDown, showTitle, showBody, showComments }) => {

    const navigate = useNavigate()
    const goToPost = () => {
        navigate(`/post/${post.id}`)
    }

    return (

        <CardContainer>

            <SendBy> Enviado por: {post.username} </SendBy>

            <BodyContainer >
                {showTitle && <TitleText onClick={goToPost}>{post.title}</TitleText>}
                {showBody && <BodyText> {post.body} </BodyText>}
            </BodyContainer>

            <PostStatusContainer>

                <VotesContainer>

                    <VoteUp
                        onClick={() => voteUp(post.id, post.userVote)}
                        color={post.userVote}
                    >
                        <KeyboardDoubleArrowUpOutlinedIcon />
                    </VoteUp>

                    <span>{post.voteSum}</span>

                    <VoteDown
                        onClick={() => voteDown(post.id, post.userVote)}
                        color={post.userVote}
                    >
                        <KeyboardDoubleArrowDownOutlinedIcon />
                    </VoteDown>

                </VotesContainer>

                {
                    showComments && <CommentsContainer>

                        <CommentButton onClick={goToPost}>
                            <ChatBubbleOutlineSharpIcon />
                        </CommentButton>

                        <span>{post.commentCount}</span>

                    </CommentsContainer>
                }

            </PostStatusContainer>

        </CardContainer>
    )
}

export default CardPost