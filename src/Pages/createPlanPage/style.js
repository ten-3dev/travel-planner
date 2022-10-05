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