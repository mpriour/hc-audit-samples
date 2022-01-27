import { Radio, Space, Switch } from "antd";
import { useState } from "preact/hooks";

export function App(props) {
  const [value, setValue] = useState("react");
  const onChange = (evt) => {
    setValue(evt.target.value);
  };
  return (
    <>
      <h1>Ant Design</h1>
      <main>
        <article class="flex">
          <div>Radio button</div>
          <div class="grid grid-rb">
            <div>Enabled</div>
            <div>Disabled</div>
            <div>
              <Radio.Group onChange={onChange} value={value} name="framework">
                <Space direction="vertical">
                  <Radio value="react">React</Radio>
                  <Radio value="angular">Angular</Radio>
                  <Radio value="vue">Vue</Radio>
                </Space>
              </Radio.Group>
            </div>
            <div>
              <Radio.Group value={"vue"} name="framework-disabled">
                <Space direction="vertical">
                  <Radio disabled value="react">
                    React
                  </Radio>
                  <Radio disabled value="angular">
                    Angular
                  </Radio>
                  <Radio disabled value="vue">
                    Vue
                  </Radio>
                </Space>
              </Radio.Group>
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
            <Switch disabled />
            <Switch defaultChecked />
            <Switch disabled defaultChecked />
          </div>
        </article>
      </main>
    </>
  );
}
