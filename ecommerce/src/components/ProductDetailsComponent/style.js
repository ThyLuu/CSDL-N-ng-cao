import styled from "styled-components";

export const WrapperStyleNameProduct = styled.h1`
    color:rgb(36,36,36);
    font-size:80px;
    font-weight:300;
    line-weight:32px;
    word-break: break-word;
   

`
export const WrapperStyleTextSell = styled.span`
    color:rgb(120,120,120);
    font-size:15px;
    line-height:24px;
`
export const WrapperPriceProduct = styled.div`
    background: rgb(250,250,250);
    border-radius:4px;
    margin-top:50px;
`

export const WrapperContentProduct = styled.div`
    font-size:16px;
    line-height:24px;
    font-weight:500;
    margin-top:40px;
    margin-bottom:30px;

`

export const WrapperPriceTextProduct = styled.h1`
    font-size:32px;
    line-height:40px;
    margin-right:8px;
    font-weight:500;
    padding:10px;
    margin-top:20px;
`
export const WrapperAddressProduct = styled.div`
    
    span.address{
        text-decoration:underline;
        font-size:15px;
        line-height:24px;
        font-weight:500;
        white-space:nowrap;
        overflow:hiddden;
        text-overflow: ellipsisl;
    },
    span.change-address{
        font-size:16px;
        line-height:24px;
        font-weight:500;
    }
`

export const WrapperQualityProduct = styled.div`
    display:flex;
    gap:4px;
    align-items:center;
    border-radius:2px;
    width:100px;
    cursor:pointer;
  
   
`



// export const WrapperInputNumber = styled(InputNumber)`
//     &(css-dev-only-do-not-override-zcfrx9).ant-input-number.ant-input-number-sm {
//         width: 40px;
//         border-top: none;
//         border-bottom: none;
//         .ant-input-number-handler-wrap {
//             display: none !important;
//         }
//     };
// `
// // ant-input-number.ant-input-number-sm.(css-dev-only-do-not-override-zcfrx9)