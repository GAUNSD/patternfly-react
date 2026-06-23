---
id: Tearsheet
section: components
cssPrefix: pf-v6-c-tearsheet
propComponents: [ 'Tearsheet', 'TearsheetGroup' ]
---
import { Fragment, useState } from 'react';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';

Tearsheet is used for ...

## Examples

### Basic

```ts file="./TearsheetBasic.tsx"
```

### Stacked

```ts file="./TearsheetStacked.tsx"
```

### Tearsheet group (infinite stacking)

Use a `TearsheetGroup` to manage an unbounded number of stacked tearsheets. Render order determines stacking priority — later children stack in front of earlier ones. Only the top 3 open tearsheets are visible; earlier ones hide behind the stack and reappear as front tearsheets are closed.

```ts file="./TearsheetGroup.tsx"
```

### Tearsheet layouts

```ts file="./TearsheetLayouts.tsx"
```
