import { Radio, RadioGroup, Switch, Stack } from "@chakra-ui/react";
import { useState } from 'preact/hooks';

export function App(props) {
  const [val, setVal] = useState('react');
  return (
    <>
      <h1>ChakraUI</h1>
      <main>
        <article class="flex">
          <div>Radio button</div>
          <div class="grid grid-rb">
            <div>Enabled</div>
            <div>Disabled</div>
            <div>
              <RadioGroup value={val} onChange={setVal} name="framework">
                <Stack direction="column">
                  <Radio value="react">React</Radio>
                  <Radio value="angular">Angular</Radio>
                  <Radio value="vue">Vue</Radio>
                </Stack>
              </RadioGroup>
            </div>
            <div>
              <RadioGroup value={"vue"} name="framework-disabled">
                <Stack direction="column">
                  <Radio isDisabled value="react">
                    React
                  </Radio>
                  <Radio isDisabled value="angular">
                    Angular
                  </Radio>
                  <Radio isDisabled value="vue">
                    Vue
                  </Radio>
                </Stack>
              </RadioGroup>
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
            <Switch />
            <Switch isDisabled />
            <Switch defaultChecked />
            <Switch isDisabled defaultChecked />
          </div>
        </article>
      </main>
    </>
  );
}
