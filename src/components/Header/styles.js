import styled from "styled-components";



export const Container = styled.div`
position: fixed;
z-index: 99;
top: 0;
display: flex;
padding: 10px 50px;
justify-content: space-between;   //ele afasta um do outro...
align-items: center;

img{
    width: 28%;
}
`

export const Menu = styled.ul`
display: flex;
list-style-type: none;
gap: 30px;
`

export const Li = styled.li`
font-weight:600 ;
cursor: pointer;
font-size: 25px;
position: relative;

a{
    text-decoration: none;
    color: #ffffff;
}

    &::after{
        content: '';
        height: 3px;
        width: ${(props) => props.$isActive ? '100%' : 0};
        background-color: #189b20;
        position: absolute;
        bottom: -10px;
        
        transition: width 0.5s ease-in-out;

        left: 50%;
        transform: translateX(-50%);

    }
    &:hover::after{
        width: 100%;

    
    }

`
