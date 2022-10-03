import React, { useState } from 'react';
import Modal from 'react-modal';
import * as Styles from './style';

const SignPage = () => {
    return(
      <Modal isOpen={true}>
        <Styles.Wrapper>
            <Styles.ContentBox>
            <Styles.SignText>SIGN UP</Styles.SignText>

                <Styles.SignText2>아이디
                  <Styles.InputBox><Styles.Input/></Styles.InputBox>
                  <Styles.UserGreenBtn>중복확인</Styles.UserGreenBtn>
                </Styles.SignText2>

                <Styles.SignText2>비밀번호
                  <Styles.InputBox><Styles.Input/></Styles.InputBox>
                </Styles.SignText2>

                <Styles.SignText2>비밀번호 확인
                  <Styles.InputBox><Styles.Input/></Styles.InputBox>
                  </Styles.SignText2>

                <Styles.SignText2>이름
                  <Styles.InputBox><Styles.Input/></Styles.InputBox>
                </Styles.SignText2>

                <Styles.SignText2>이메일
                  <Styles.InputBox><Styles.Input/></Styles.InputBox>
                <Styles.UserGreenBtn>중복확인</Styles.UserGreenBtn></Styles.SignText2>

                <Styles.SignText2>연락처
                  <Styles.InputBox><Styles.Input/></Styles.InputBox>
                </Styles.SignText2>

                <Styles.SignText2>생년월일
                  <Styles.InputBox><Styles.Input/></Styles.InputBox>
                </Styles.SignText2>

                <Styles.SignText2>성별<Styles.RadioBtn/><Styles.RadioBtn/></Styles.SignText2>

                <Styles.UserGreenBtn>가입하기</Styles.UserGreenBtn>
            </Styles.ContentBox>
        </Styles.Wrapper>
        </Modal>
    )
}
export default SignPage;





// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import * as Styles from './style';

// const SignPage = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//     return(
//       <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
//         <Styles.Wrapper>
//             <Styles.ContentBox>
//             <Styles.SignText>SIGN UP</Styles.SignText>
//             <Styles.SignText2>아이디<Styles.InputBox/><Styles.UserGreenBtn>중복확인</Styles.UserGreenBtn></Styles.SignText2>
//                 <Styles.SignText2>비밀번호<Styles.InputBox/></Styles.SignText2>
//                 <Styles.SignText2>비밀번호 확인<Styles.InputBox/></Styles.SignText2>
//                 <Styles.SignText2>이름<Styles.InputBox/></Styles.SignText2>
//                 <Styles.SignText2>이메일<Styles.InputBox/><Styles.UserGreenBtn>중복확인</Styles.UserGreenBtn></Styles.SignText2>
//                 <Styles.SignText2>연락처<Styles.InputBox/></Styles.SignText2>
//                 <Styles.SignText2>생년월일<Styles.InputBox/></Styles.SignText2>
//                 <Styles.SignText2>성별<Styles.RadioBtn/><Styles.RadioBtn/></Styles.SignText2>
//                 <Styles.UserGreenBtn>가입하기</Styles.UserGreenBtn>
//             </Styles.ContentBox>
//         </Styles.Wrapper>
//         </Modal>
//     )
// }

//export default SignPage;








// import React from 'react';
// import { useForm } from 'react-hook-form';
// import * as Styles from './style';

// export default function App() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);
  
//   return (
//     <Styles.Wrapper>
//       <Styles.ContentBox onSubmit={handleSubmit(onSubmit)}>
//         <Styles.SignText>SIGN UP</Styles.SignText>
//           <Styles.SignText2>아이디
//             <Styles.InputBox type="text" placeholder="이름" {...register("이름", {required: true, max: 8, min: 2, maxLength: 8})} />
//           </Styles.SignText2>

//           <Styles.SignText2>비밀번호
//           <input type="password" placeholder="비밀번호" {...register("비밀번호", {required: true, max: 16, min: 6, maxLength: 16})} />
//           </Styles.SignText2>

//           <Styles.SignText2>연락처
//           <input type="tel" placeholder="연락처" {...register("연락처", {required: true, maxLength: 12})} />
//           </Styles.SignText2>

//           <Styles.SignText2>이메일
//           <input type="text" placeholder="이메일" {...register("이메일", {required: true, pattern: /^\S+@\S+$/i})} />
//           </Styles.SignText2>

//           <Styles.SignText2>성별
//           <input {...register("성별", { required: true })} type="radio" value="남" />
//           <input {...register("성별", { required: true })} type="radio" value="여" />
//           </Styles.SignText2>
//           <input type="submit" />

//       </Styles.ContentBox>
//     </Styles.Wrapper>
//   );
// }