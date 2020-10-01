import React, { useState } from "react";
import Layout from "../components/Layout";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

const TodoPage = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<String[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodoList([...todoList, inputValue]);
    setInputValue("");
  };

  return (
    <Layout title="Todo">
      <h1>Todo</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="task"
          label="Task"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
      </form>

      <List component="nav" aria-label="secondary mailbox folders">
        {todoList.map((todo) => (
          <ListItem>
            <ListItemText primary={todo} />
          </ListItem>
        ))}
      </List>
    </Layout>
  );
};

export default TodoPage;
