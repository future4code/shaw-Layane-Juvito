import styled from 'styled-components'

export const CardContainer = styled.div`
    background-color: #E0E0E0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 9px 10px;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    width: 100%;
`
export const SendBy = styled.span`
    color:#6F6F6F;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

`
export const BodyContainer = styled.p`
    padding: 18px 0px;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`
export const PostStatusContainer = styled.div`
    display:flex;
    gap:11px
`
export const VotesContainer = styled.div`
    min-width:98px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.8px solid #ECECEC;
    border-radius: 28px;
    padding: 5px;
    line-height: 12px;
    text-align: center;
    font-size: 9.56098px;
    font-weight: bold;
    color:#6F6F6F;

`
export const CommentsContainer = styled.div`
    min-width:65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.8px solid #ECECEC;
    border-radius: 28px;
    padding: 5px 10px;
    font-size: 9.56098px;
    color:#6F6F6F;
    
`
export const VoteUp = styled.span`

`
export const VoteDown = styled.span`

`