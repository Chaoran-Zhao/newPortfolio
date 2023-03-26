import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:250px;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
padding-bottom: 40px;
@media screen and (max-width: 640px) {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
  &:hover{
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #457b9d;
  padding: .1rem 0;
  font-size: ${(props) => props.title ? '2rem' : '1rem'};
`;

export const Hr = styled.hr`
  width: 100%;
  height: 6px;
  margin: 0 auto;
  border: 0;
  background: ${(props) => props.color};
`;



export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const DescriptContent = styled.div`
  height:120px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: ${(props) => props.color};
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media screen and (max-width: 640px) {
    padding:.3rem 
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: white;
  font-size: 1.7rem;
  padding-top: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background: #457b9d;
  border-radius: 15px;
  transition: 0.5s;
  &:hover{
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding:1.2rem;
  list-style-type: none;
  `
export const Tag = styled.li`
  font-size: 0.8rem;
  padding: 0.3rem;
  background: rgba(5,150,105,0.65);
  border-radius: 8px;
  `