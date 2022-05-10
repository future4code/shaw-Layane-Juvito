import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined'
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined'
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp';
import { BodyContainer, CardContainer, CommentsContainer, PostStatusContainer, SendBy, VoteDown, VotesContainer, VoteUp, BodyText } from './style';
import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardPost = ({ post, voteUp, voteDown, showTitle, showBody, showComments }) => {

    const navigate = useNavigate()

    const goToPost = () => {
        window.localStorage.setItem('post', JSON.stringify(post))
        navigate(`/post/${post.id}`)
    }
    return (
        <CardContainer>
            <SendBy> Enviado por: {post.username} </SendBy>
            <BodyContainer onClick={goToPost}>
                {showTitle && <p>{post.title}</p>}
                {showBody && <BodyText> {post.body} </BodyText>}
            </BodyContainer>

            <PostStatusContainer>
                <VotesContainer>

                    <VoteUp
                        onClick={() => voteUp(post.id)} 
                        color={post.userVote}
                    >
                        <KeyboardDoubleArrowUpOutlinedIcon />
                    </VoteUp>
                    <span>{post.voteSum}</span>
                    <VoteDown
                        onClick={() => voteDown(post.id)}
                        color={post.userVote}
                    >
                        <KeyboardDoubleArrowDownOutlinedIcon />
                    </VoteDown>
                </VotesContainer>
                {
                    showComments && <CommentsContainer>
                        <span onClick={goToPost}><ChatBubbleOutlineSharpIcon /></span>
                        <span>{post.commentCount}</span>

                    </CommentsContainer>
                }

            </PostStatusContainer>

        </CardContainer>
    )
}

export default CardPost