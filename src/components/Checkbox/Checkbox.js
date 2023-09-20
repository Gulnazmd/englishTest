import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button } from 'react-bootstrap';
import FormBox from '../FormBox/FormBox';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Checkbox = () => (
  <div>

    <FormBox>
      <h4>Question</h4>
        <Formik
          initialValues={{
            toggle: false,
            checked: [],
          }}
          onSubmit={async (values) => {
            await sleep(500);
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ values }) => (

            <Form>
              {/*
                This first checkbox will result in a boolean value being stored. Note that the `value` prop
                on the <Field/> is omitted
              */}
              <label>
                <Field type="checkbox" name="toggle" />
                {`${values.toggle}`}
              </label>

              {/*
                Multiple checkboxes with the same name attribute, but different
                value attributes will be considered a "checkbox group". Formik will automagically
                bind the checked values to a single array for your benefit. All the add and remove
                logic will be taken care of for you.
              */}
              <div role="group" aria-labelledby="checkbox-group">
                <label>
                  <Field type="checkbox" name="checked" value="One" />
                  One
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="Two" />
                  Two
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="Three" />
                  Three
                </label>
              </div>

              <Button type="submit">Answer</Button>
            </Form>
          )}
            </Formik>
        </FormBox>
  </div>
);

export default Checkbox;