# monthend

Get the last day of any month and handles leap years automatically.

## Installation

```sh
npm install monthend
```

## Usage

```ts
import monthend from 'monthend';

// return last day of current month
monthend();

// return last data of April 2018
monthend(4, 2018);
```

## Notes

This module assumes the input arguments are of the right type (e.g number) and within expected boundaries (for month and year).
This module does not manage years below 1900 or nearing JavaScript limits.
