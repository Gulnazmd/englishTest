import React, { useState } from 'react';
import Checkbox from '../../components/Checkbox/Checkbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import FormBox from '../../components/FormBox/FormBox';


function MyForm () {

  const [ answers, setAnswers ] = useState([])
  const [ value, setValue ] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value);
    setAnswers( answers.push({ value }))
  }

  return (
    <div className='myForm'>
      <FormBox>
          <h4>Question</h4>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value={value}/>
              <label class="form-check-label" for="gridRadios1">
                Answer1
              </label>
          </div>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value={ value}/>
              <label class="form-check-label" for="gridRadios2">
                Answer2
              </label>
          </div>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value={ value}/>
              <label class="form-check-label" for="gridRadios3">
                Answer3
              </label>
          </div>
            <p>Your answer is <h3>{ value }</h3></p>
          <Button onClick={handleChange} type="submit">Answer</Button>

        </FormBox>

      <Checkbox />



      {//<FormBox>
        //<div class="input-group mb-3">
          //<div class="input-group-prepend">
            //<div class="input-group-text">
              //<input type="checkbox" aria-label="Checkbox for following text input" />
            //</div>
         // </div>
          //<input type="text" class="form-control" aria-label="Text input with checkbox" />
      //  </div>
     // </FormBox>
     // <FormBox>
       // <div class="input-group">
          //<div class="input-group-prepend">
            //<div class="input-group-text">
              //<input type="radio" aria-label="Radio button for following text input" />
           // </div>
         // </div>
         // <input type="text" class="form-control" aria-label="Text input with radio button" />
       // </div>
        //  </FormBox>
      }
    </div>
  )};

export default MyForm;
