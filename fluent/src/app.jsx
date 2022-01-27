import { Checkbox, RadioGroup } from '@fluentui/react-northstar'
export function App(props) {
  const getRadioItems = (disabled)=>{
    return [
      {
        name: disabled ? "framework-disabled" : "framework",
        key: "react",
        label: "React",
        value: "react",
        disabled: disabled,
      },
      {
        name: disabled ? "framework-disabled" : "framework",
        key: "angular",
        label: "Angular",
        value: "angular",
        disabled: disabled,
      },
      {
        name: disabled ? "framework-disabled" : "framework",
        key: "vue",
        label: "Vue",
        value: "vue",
        disabled: disabled,
      },
    ];
  }
  return (
    <>
      <h1>Fluent UI</h1>
      <main>
        <article class="flex">
          <div>Radio button</div>
          <div class="grid grid-rb">
            <div>Enabled</div>
            <div>Disabled</div>
            <div>
            <RadioGroup
          vertical
          defaultCheckedValue="react"
          items={getRadioItems()}
        />
            </div>
            <div>
            <RadioGroup
          vertical
          defaultCheckedValue="vue"
          items={getRadioItems(true)}
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
            <Checkbox toggle />
            <Checkbox toggle disabled />
            <Checkbox toggle defaultChecked />
            <Checkbox toggle defaultChecked disabled />
          </div>
        </article>
      </main>
    </>
  );
}
