import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined'
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined'
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp'
import ThumbDownAltSharpIcon from '@mui/icons-material/ThumbDownAltSharp';
import { BodyContainer, CardContainer, CommentsContainer, PostStatusContainer, SendBy, VoteDown, VotesContainer, VoteUp, CommentButton, BodyText, TitleText } from './style'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ForumSharpIcon from '@mui/icons-material/ForumSharp';


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
                        onClick={voteUp}
                        color={post.userVote}
                    >
                        <ThumbUpAltSharpIcon />
                    </VoteUp>

                    <span>{post.voteSum ? post.voteSum : 0}</span>

                    <VoteDown
                        onClick={voteDown}
                        color={post.userVote}
                    >
                        <ThumbDownAltSharpIcon />
                    </VoteDown>

                </VotesContainer>

                {
                    showComments && <CommentsContainer>

                        <CommentButton onClick={goToPost}>
                            <ForumSharpIcon />
                        </CommentButton>

                        <span>{post.commentCount ? post.commentCount : 0}</span>

                    </CommentsContainer>
                }

            </PostStatusContainer>

        </CardContainer>
    )
}

export default CardPost