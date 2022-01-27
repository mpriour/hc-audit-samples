import Form from "react-bootstrap/Form";
export function App(props) {
  return (
    <>
      <h1>React Bootstrap</h1>
      <main>
        <Form>
          <article class="flex">
            <div>Radio button</div>
            <div class="grid grid-rb">
              <div>Enabled</div>
              <div>Disabled</div>
              <div>
                <Form.Check
                  type="radio"
                  label="React"
                  value="react"
                  name="framework"
                  defaultChecked
                />
                <Form.Check
                  type="radio"
                  label="Angular"
                  value="angular"
                  name="framework"
                />
                <Form.Check
                  type="radio"
                  label="Vue"
                  value="vue"
                  name="framework"
                />
              </div>
              <div>
                <Form.Check
                  type="radio"
                  disabled
                  label="React"
                  value="react"
                  name="framework-disabled"
                />
                <Form.Check
                  type="radio"
                  disabled
                  label="Angular"
                  value="angular"
                  name="framework-disabled"
                />
                <Form.Check
                  type="radio"
                  disabled
                  label="Vue"
                  value="vue"
                  name="framework-disabled"
                  defaultChecked
                />
              </div>
            </div>
          </article>
          <article class="flex">
            <div>Switch</div>
            <div class="grid grid-switch">
              <div>Off</div>
              <div>
                Off
                <br />
                disabled
              </div>
              <div>On</div>
              <div>
                On
                <br />
                disabled
              </div>
              <Form.Check type="switch" />
              <Form.Check type="switch" disabled />
              <Form.Check type="switch" defaultChecked />
              <Form.Check type="switch" defaultChecked disabled />
            </div>
          </article>
        </Form>
      </main>
    </>
  );
}
