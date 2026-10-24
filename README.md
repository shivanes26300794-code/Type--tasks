# TypeTasks

A simple, type-safe task tracker built using TypeScript.

## Features

- Define tasks using a TypeScript interface.
- Restrict task status to `todo`, `in-progress`, or `done`.
- Add new tasks.
- Mark tasks as complete.
- Filter tasks by status.

## Technologies Used

- TypeScript
- Node.js and npm
- Git and GitHub

## Task Model

Each task contains three properties:

- `id`: A number that uniquely identifies the task.
- `title`: A string describing the task.
- `status`: One of `todo`, `in-progress`, or `done`.

## Functions

- `addTask()` — Adds a new task with the default status `todo`.
- `completeTask()` — Marks a task as done using its ID.
- `filterByStatus()` — Returns tasks matching a given status.

## How to Compile

Make sure TypeScript is installed, then run:

```bash
npx tsc
```

## Project Structure

```text
Type-tasks/
├── model.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Learning Goal

This project demonstrates TypeScript interfaces, literal union types, typed functions, and compile-time type checking.
