import styled from 'styled-components';
import Background from './Assets/Background1.svg';

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;
`;

export const Image = styled.img`
    margin-top: 30px;
    
`;

export const ContainerItems = styled.div`
    background: linear-gradient(
        157deg, 
        rgba(255, 255, 255, 0.60) 0.84%, 
        rgba(255, 255, 255, 0.60) 0.85%, 
        rgba(255, 255, 255, 0.15) 100%
    );
    border-radius: 61px 61px 0px 0px;    
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin-bottom: 50px;    
`;

export const H1 = styled.h1`
    color: #FFFFFF;
    font-size: 34px;
    font-style: normal;
    font-weight: bold;
    line-height: 40px;
    text-align: center;
    margin-bottom: 80px;
`;

export const InputLabel = styled.p`
    color: #EEEEEE;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    line-height: 22px;
    letter-spacing: -0.408px;
    margin-left: 25px;
`;

export const Input = styled.input`
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    padding-left: 25px;
    color: #FFFFFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 34px;
`;

export const Button = styled.button`
    border-radius: 14px;
    background: rgba(0, 0, 0, 0.80);
    width: 342px;
    height: 74px;
    border: none;
    color: #FFFFFF;
    font-size: 17px;
    font-style: normal;
    font-weight: bold;
    line-height: 28px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }
`;


