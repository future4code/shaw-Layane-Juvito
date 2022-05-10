import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined'
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined'
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp';
import { BodyContainer, CardContainer, CommentsContainer, PostStatusContainer, SendBy, VoteDown, VotesContainer, VoteUp } from './style';

const CardPost = ({post}) => {
    return(
        <CardContainer>
            <SendBy> Enviado por: {post.username} </SendBy>
            <BodyContainer>{post.title}</BodyContainer>
            <PostStatusContainer>
                <VotesContainer>

                    <VoteUp><KeyboardDoubleArrowUpOutlinedIcon /></VoteUp>
                    <span>{post.voteSum}</span>
                    <VoteDown><KeyboardDoubleArrowDownOutlinedIcon /></VoteDown>
                </VotesContainer>
                <CommentsContainer>
                    <span><ChatBubbleOutlineSharpIcon /></span>
                    <span>{post.commentCount}</span>

                </CommentsContainer>
            </PostStatusContainer>

        </CardContainer>
    )
}

export default CardPost