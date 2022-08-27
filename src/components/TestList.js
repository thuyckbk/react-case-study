// import React , {useState} from "react";
// import { useSelector } from "react-redux";
// import {Formik} from 'formik'

// function TestList() {

//  const questions = useSelector(state => state.users);
//     //console.log(users);
//     const [inputVal, setInputVal] = useState({});
//     const [result, setResult] = useState({users});

//     function handleChange(event){
//         setInputVal({...inputVal, [event.target.name]: event.target.value});
//         console.log(inputVal);
//     }

//     function finish(){
//         let count = 0;
//         let a = Object.values(inputVal);
//         let c=[] ;

//         users.map(function(item){
//             c[item.id-1] = item.answer ;        
//         })

//         for(let i = 0; i<10;i++){
//             if(a[i]===c[i]){
//             count++;            
//         }
//         }
//         document.getElementById('result').innerHTML=('Ket qua cua ban la '+count+"/10");
//         console.log(a);
//         console.log(c)
//         console.log(count)
//         }


//     return (
//         <div style={{ margin: "15px" }}>
//             <h1>Đề số 1</h1>
//             <form>
//             <table >
//                 <thead>
//                     <tr>
//                         <th>Số thứ tự</th>
//                         <th>Nội dung</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.id} style={{ border: "1px black solid" }} id={user.id}>
//                             <td style={{ border: "1px black solid" }}>

//                                 <p>Câu số {user.id}</p>
//                                 <p id={user.id}></p>
//                             </td>
//                             <td style={{ border: "1px black solid" }}>
//                                 <p>{user.question}</p>
//                                 <hr/>
//                                 <p><input type="radio" className={user.id} name={"question-" + user.id} value="A" onChange={handleChange} /> {user.A}</p>
//                                 <p><input type="radio" className={user.id} name={"question-" + user.id} value="B" onChange={handleChange} /> {user.B}</p>
//                                 <p><input type="radio" className={user.id} name={"question-" + user.id} value="C" onChange={handleChange} /> {user.C}</p>
//                                 <p><input type="radio" className={user.id} name={"question-" + user.id} value="D" onChange={handleChange} /> {user.D}</p>
//                             </td>

//                         </tr>
//                          ))}
//                 </tbody>
//             </table>
//             </form>

//             <h2 id="result"></h2>
//             <button onClick={finish} >Hoan thanh</button>
//         </div>
//     );
// }

// export default TestList;

//import logo from './logo.svg';
//import './App.css';
import { Formik, Field, Form } from 'formik';
import React from "react";
import { useSelector } from "react-redux";

function TestList() {

  const questions = useSelector(state => state.users);
  

  const initialValues = {}
  questions.forEach((question, index) => {
    initialValues[`question${question.id}`] = question.answer
  })
  console.log(initialValues)

  function questionAnswer(id) {
    document.getElementById(id).style.color = "green";
        console.log(id)
  }
  function userAnswer(id) {
    document.getElementById(id).style.color = "red";
        console.log(id)
  }
  function results(id,result){
    alert()
    document.getElementById(id).innerHTML = result;

  }
  return (
    <div>
      <h1>ĐỀ SỐ 1</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          let question_answer = [];
          let user_answer = Object.values(values)
          let count = 0;
          questions.map(question => (
            question_answer[question.id - 1] = question.answer
          ))
          
          for (let i = 0; i < question_answer.length; i++) {
            
            if (Array.isArray(question_answer[i])) {
              console.log(Array.isArray(question_answer[i]))
              let a = question_answer[i].sort()
              let b = user_answer[i].sort()
              console.log(a,b);
              if (a.toString()===b.toString())
                count++;
                
            } else if (question_answer[i] === user_answer[i]) {
              count++;
              let idQuestionAnswer = (i+1)+question_answer[i];
              questionAnswer(idQuestionAnswer);
              let result = "True";
              results((i+1),result);

            }else{
              let idQuestionAnswer = (i+1)+question_answer[i];
              let idUserAnswer = (i+1)+user_answer[i];
              questionAnswer(idQuestionAnswer);
             userAnswer(idUserAnswer);
             let result = "False";
              results((i+1),result);
            }
            
          }
          document.getElementById('result').innerHTML = ('Ket qua cua ban la ' + count + "/10");
          console.log(question_answer)
          console.log(user_answer)
          console.log(values)

        }}
        

      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form>
            {questions.map(question => (
              <div key={question.id} style={{ border: "1px black solid" }} >
                <div style={{ border: "1px black solid" }}>
                  <p>Câu số {question.id}</p>
                  <p id={question.id}></p>
                </div>
                <div style={{ border: "1px black solid" }}>
                  <p>{question.question}</p>
                  <hr />
                  {question.answers.map((answer, index) => (
                    <label key={index}>
                      <Field  type={question.type} name={"question" + question.id} value={answer.value} onChange={handleChange} /> <span id={question.id+answer.value}>{answer.title}</span>
                    </label>
                  ))}
                  {/* <hr />*/}
                  {/*{question.answer !== question.user_answer &&*/}
                  {/*    <p style={{color: "red"}}>Câu trả lời đúng nên là: {question.answer}</p>*/}
                  {/*} */}

                  {/* <span className={question.user_answer == answer.value && question.answer != question.user_answer ? 'error' : null}>{answer.title}</span> */}
                </div>
              </div>
            ))}
            <div>
              <h2 id="result"></h2>
            </div>
            <button type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TestList;
