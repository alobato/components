# Components

> React components

## Install

```sh
yarn add @alobato/components
```

## Usage

```js
import { Select }  from '@alobato/components'
...
<Select placeholder='Select...' value={status} onChange={e => setStatus(e.target.value)}>
  <option>Item 1</option>
  <option>Item 2</option>
</Select>
```