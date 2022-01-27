import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export function App(props) {
  return (
    <>
      <h1>MUI</h1>
      <main>
        <article class="flex">
          <div>Radio button</div>
          <div class="grid grid-rb">
            <div>Enabled</div>
            <div>Disabled</div>
            <div>
              <RadioGroup
                aria-label="framework"
                defaultValue="react"
                name="framework"
              >
                <FormControlLabel
                  value="react"
                  control={<Radio />}
                  label="React"
                />
                <FormControlLabel
                  value="angular"
                  control={<Radio />}
                  label="Angular"
                />
                <FormControlLabel value="vue" control={<Radio />} label="Vue" />
              </RadioGroup>
            </div>
            <div>
              <RadioGroup
                aria-label="framework"
                defaultValue="vue"
                name="framework-disabled"
              >
                <FormControlLabel
                  value="react"
                  control={<Radio disabled={true} />}
                  label="React"
                />
                <FormControlLabel
                  value="angular"
                  control={<Radio disabled={true} />}
                  label="Angular"
                />
                <FormControlLabel value="vue" control={<Radio disabled={true} />} label="Vue" />
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
            <Switch disabled />
            <Switch defaultChecked />
            <Switch disabled defaultChecked />
          </div>
        </article>
      </main>
    </>
  );
}
