import styled from "styled-components";
import Modal from 'react-modal';
import Calendar from 'react-calendar';

export const ModalCustom = styled(Modal)`
    width: 600px;
    background-color: white;
    border: 1px solid gray;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${props => {
        if(props.filter){
            return {
                boxSizing: "border-box",
                padding: "20px"
            }
        }
    }}
`

export const BtnBox = styled.div`
    width: 100%;
    border-top: 1px solid gray;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 0 25px;
`

export const Btn = styled.div`
    display: inline-block;
    box-sizing: border-box;
    padding: 3px 5px;
    height: 30px;
    border: 1px solid rgba(95, 95, 95, 0.5);
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    cursor: pointer;
`

export const CalendarCustom = styled(Calendar)`
    width: 100%;
    background-color: white;
    margin-bottom: 100px;
    /* ~~~ container styles ~~~ */
    .react-calendar__navigation {
        display: flex;
        .react-calendar__navigation__label {
            font-weight: bold;
        }
        .react-calendar__navigation__arrow {
            flex-grow: 0.333;
        }
    }
    /* ~~~ label styles ~~~ */
    .react-calendar__month-view__weekdays {
        text-align: center;
    }
    /* ~~~ button styles ~~~ */
    button {
        background-color: white;
        border: 0;
        color: black;
        padding: 8px 0;
        &:hover {
            background-color: #D6D6D6;
        }
    }
    /* ~~~ day grid styles ~~~ */
    .react-calendar__month-view__days {
        display: grid !important;
        grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 

        .react-calendar__tile--range {
            background-color: #9F9F9F;
            color: white;
        }
    }
    /* ~~~ other view styles ~~~ */
  .react-calendar__year-view__months, .react-calendar__decade-view__years, .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;
    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }
  }
  abbr{
    text-decoration: none;
  }
`

/////////////////////////////////////////////////////////////////

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`

export const Map = styled.div`
    width: 100%;
    height: 100vh;
    background-color: green;
    position: relative;
`

export const ControlBox = styled.div`
    width: 350px;
    height: 100vh;
    background-color: white;
    position:fixed;
    top: 0;
    bottom:0;
    left: ${props => {
        return props.open ? "0" : "-350px"
    }};
    z-index: 2;
    transition: all .5s;
    overflow-y: scroll;
`

export const TravelBox = styled.div`
    width: 500px;
    height: 100vh;
    background-color: white;
    top: 0;
    position:fixed;
    margin-right: ${props => {
        return props.open ? "0" : "-500px"
    }};
    right: 0;
    z-index: 1;
    transition: all .5s;
    overflow-y: scroll;

`

export const ContentBox = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    box-sizing: border-box;
    padding: 40px 20px;
`

export const OpenBtn = styled.div`
    width: 50px;
    height: 50px;
    background-color: blanchedalmond;
    position: absolute;
    left: 0%;
    font-size: 25px;
    display: ${props => {
        return props.open ? "none" : "flex"
    }};
    align-items: center;
    justify-content: center;
    top: 0;
    cursor: pointer;
    z-index: 2;
`

export const DateBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 30px;
`

export const TravelDate = styled.div`
    font-size: 14px;
`

export const TravelCalendar = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 10px;
    cursor: pointer;
`

export const DayTitle = styled.div`
    width: 100%;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 15px;
`

export const DayItem = styled.div`
    height: 70px;
    width: 100%;
    /* background-color: red; */
    box-sizing: border-box;
    padding: 5px 0;
    display: flex;
    border-bottom: 2px solid gray;
`

export const DayItemImg = styled.img`
    cursor: pointer;
    height: 100%;
    width: 90px;
    margin-right: 5px;
`
export const DayItemSubTextBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DayItemTextBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: ${props => {
        return props.notcolumn ? "column" : ""
    }};;
    justify-content: space-between;
`

export const DayItemTitle = styled.div`
    cursor: pointer;
    font-size: 13px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const DayItemText = styled.div`
    font-size: 12px;
    flex: 1;
`

export const DayItemRemove = styled.div`
    color: red;
`

export const PlanAddBtnBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`

export const PlanAddBtn = styled.div`
    width: 100px;
    height: 30px;
    border-radius: 5px;
    background-color: ${props => {
        return props.updated ? "#FF5757" : "#6FCB71"
    }};

    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-top: 20px;
    cursor: pointer;
`

export const CloseBtn = styled.img`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 10px;
    cursor: pointer;
    ${props => {
        if(props.right) return "right: 20px;"
        if(props.left) return "left: 20;"
    }}
`

export const TravelInputBox = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    margin-bottom: 30px;
`

export const TravelInput = styled.input`
    width: 100%;
    height: 40px;
    flex: 1;
    border: 0;
    outline: 0;
    font-size: 17px;
    box-sizing: border-box;
    padding-left: 10px;
    border-radius: 5px;
    background-color: #e8e8e8;
`

export const TravelInputBtn = styled.div`
    width: 70px;
    height: 100%;
    background-color: #6FCB71;
    margin-left: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    font-weight: 500;
    color: white;
    cursor: pointer;
`

export const ListBox = styled.div`
    width: 100%;
    height: 650px;
    /* background-color: azure; */
    margin-bottom: 50px;
    box-sizing: border-box;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
`

export const ScrollBox = styled.div`
    box-sizing: border-box;
    padding: 0 10px;
`

export const ListTitleBox = styled.div`
    display: flex;
    border-bottom: 2px solid gray;
    box-sizing: border-box;
    padding-bottom: 10px;
`

export const ListTitle = styled.div`
    width: 100%;
    font-size: 25px;
    font-weight: 550;
`

export const ListFilter = styled.div`
    width: 70px;
    height: 30px;
    border-radius: 5px;
    background-color: #6FCB71;
    cursor: pointer;
    font-size: 17px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ItemBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

export const ItemBtn = styled.button`
    width: 60px;
    height: 25px;
    border-radius: 5px;
    /* background-color: #6FCB71; */
    background-color: ${props => {
        return props.remove ? "#DF5151" : "#6FCB71"
    }};
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-left: 10px;
    border: none;
    outline: none;
    cursor: pointer;

`

export const ListItemBox = styled.div`
`

export const FilterItemBox = styled.div`
    border-radius: 5px;
    display: flex;
    width: 110px;
    box-sizing: border-box;
    padding: 5px 0;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    cursor: pointer;
`

export const FilterBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    row-gap: 15px;
`

export const FilterCheckBox = styled.input`
    margin-right: 7px;
`

export const FilterItemText = styled.div`
`

export const FilterBtnBox = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`

export const FilterBtn = styled.div`
    margin: 0 15px;
    cursor: pointer;
    :hover{
        text-decoration: underline;
    }
`

export const PlanApplyBtn = styled.button`
    border:  none;
    outline: none;
    width: 180px;
    height: 50px;
    background-color: greenyellow;
    position: absolute;
    z-index: 2;
    bottom: 50px;
    left: 50%;
    margin-left: -90px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`

export const LocationImg = styled.button`
    border: none;
    outline: none;
    border-radius: 10px;
    cursor: pointer;
    background: ${props => {
        return (props.open ? "url(/assets/image35_1.png) " : "url(/assets/image35.png) ") + "no-repeat scroll 0 0 transparent"
    }};
    background-size: contain ;
    width: 25px;
    height: 25px;

`