import './Welcome.css'

import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

function Welcome() {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
      <div id='welcome'>
          <h2>Seja Bem Vindo</h2>
          <p>Clique no boão abaixo para começar:</p>
          <button onClick={() => dispatch({type: "CHANGE_STATE"})}>INICIAR</button>
    </div>
  )
}

export default Welcome