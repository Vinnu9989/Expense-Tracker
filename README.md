# Expense Tracker

A web app for logging expenses and tracking spending, built with vanilla JavaScript.

## Features

- Add expense entries (e.g. amount, category, description)
- View a running list of logged expenses
- See a running total of expenses

## Tech Stack

- HTML5
- CSS3
- JavaScript (DOM manipulation, event handling, array operations)

## Project Structure

```
index.html    # page markup and structure
style.css     # styling
script.js     # expense logic — add entries, calculate totals, render list
```

## How It Works

`script.js` maintains an in-memory array of expense entries. Each time a new expense is added through the form, the script updates the array, recalculates the total, and re-renders the expense list and summary in the DOM.

## Setup & Run

This is a static front-end project with no build step.

1. Clone the repo:
   ```bash
   git clone https://github.com/Vinnu9989/Expense-Tracker.git
   ```
2. Open `index.html` directly in a browser, or serve it locally:
   ```bash
   npx serve .
   ```

## Notes

Expense data currently lives in memory and resets on page reload (no `localStorage` or backend persistence is used). This project focuses on core DOM manipulation, event handling, and working with arrays of structured data in JavaScript.
