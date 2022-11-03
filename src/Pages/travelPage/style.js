import styled from "styled-components";
export const ContentBox = styled.div`
    width: 100%;
    display: flex;
`
export const ContentBox1 = styled.div`
    width: 1200px;
`
export const InputBox = styled.div`
    width: 75%;
    height: 48px;
    background-color: white;
    box-sizing: border-box;
    padding: 0 0 0 7px;
    display: flex;
    margin-top: 250px;
    border-bottom: 1px solid #000000;
    border-bottom-width: 2.3px;
`
export const ListSumBox = styled.div`
    width: 100%;
    height: 48px;
    background-color: white;
    box-sizing: border-box;
    padding: 0 0 0 7px;
    display: flex;
    font-size: 32px;
    margin: 10px;
    margin-bottom: 30px;
    font-weight: bold
`
export const Input = styled.input`
    margin: 0;
    padding: 0;
    border: 0;
    flex: 1;
    outline: none;
    font-size: 35px;
    box-sizing: border-box;
    padding-left: 9px;
    font-weight: 450;
    opacity: 0.5;
    
`
export const TravelListBox = styled.div`
    width: 100%;
`
export const TravelFilterTag = styled.div`
    width: 330px;
    height: 590px;
    background: rgba(0, 150, 100, 0.5);
    margin: 20px auto 0 auto;
    border-radius: 20px;
    padding: 30px 0 30px 0;
      
`
export const GridTagBoxItem = styled.div`
    grid-column : 1;
    grid-row: 1;
    background-color: white;
    margin: 10px 10px 10px 10px;
    border-radius: 20px;
`
export const FilterBoxSticky = styled.div`
    position: sticky;
    top: 90px;
    margin-left: 40px;
    margin-bottom: 20px;
`
export const TravelFilterBox = styled.div`
    display: flex;
    width: 70%;
    margin-top: 15px;   
`
export const TravelFilterTagBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(9, minmax(60px, auto));
    grid-gap: 20px;
   
`
export const SteamListButtonBox = styled.div`
    width: 1200px;
    height: 100px;
    text-align: end;
   
`
export const TravelWrapper = styled.div`
    width: 900px;
    height: 160px; 
    padding: 20px 0 20px 0;
    display: flex;
    border-bottom: 1px solid #eeeeef;
    border-bottom: 1px solid #9ea4ad ;
`
export const Image = styled.img`
    width: 200;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
`
export const Title = styled.div`
    overflow: hidden;
    display: inline-block;
    width: 100%;
    font-weight: bold;
    font-size: 20px;
    color: #000;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 10px;
    
`
export const Txt = styled.div`
    display: flex;
    width: 65%;
    height: 100%;
    margin-left: 15px;
    flex-direction: column;
    
`
export const PlaceTitle = styled.div`
    overflow: hidden;
    display: inline-block;
    width: 100%;
    font-weight: bold;
    font-size: 20px;
    color: #000;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 10px;
    cursor: pointer;

    
`
export const Text = styled.div`
    width: 100%; 
    font-size: 30px;
    text-align: center;
    font-weight: bold
 `
 export const Address = styled.div`
    margin-top: 5px;
    font-size: 15px;
 `

 export const Tel = styled.div`
    margin-top: 5px;
    font-size: 14px;
 `

 export const SteamListButtonImg = styled.img`
    width: 150px;
    height: 150px;
    cursor: pointer;
    position: sticky;
    top: 80%;
    left: 100%;
`
export const Like = styled.button`
    border: none;
    background: ${props => {
        return props.dibs ? "rgba(0, 150, 100, 0.5)" : "rgba(255, 0, 100, 0.5)"
    }};
    color: white;
    border-radius: 10px;
    margin-left: 15px;
    cursor: pointer;
    width: 80px;
    height: 100%;
 `
 export const LikeBox = styled.div`
     display: flex;
     justify-content: center;
     align-content: center;
     align-items: flex-start;
     margin-top: 150px;
     height: 25px;
 `