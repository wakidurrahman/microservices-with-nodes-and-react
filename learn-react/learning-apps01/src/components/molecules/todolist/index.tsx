import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { ReactNode } from 'react';

type FilteringPeopleProps = {
  id?: number;
  name: string;
  profession: string;
  accomplishment?: string;
  imageId: string;
};

// Declaring type of props
type TodoListProps = {
  children: ReactNode;
  peoples?: string[];
  filteringPeoples?: FilteringPeopleProps[];
  peoplesSecond?: FilteringPeopleProps[];
};

export function getImageUrl(person: { imageId: string }) {
  return 'https://i.imgur.com/' + person.imageId + 's.jpg';
}

const TodoList: React.FC<TodoListProps> = ({
  children,
  peoples,
  filteringPeoples,
  peoplesSecond,
}) => {
  // Filtering data
  const chemists = filteringPeoples?.filter(
    (item) => item.profession === 'chemist'
  );
  return (
    <div className="m-todolist">
      <Typography component="h1" variant="h1" color="primary">
        {children}
      </Typography>
      {/* JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, */}
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        {/* wrapping tags like <li>oranges must be written as <li>oranges</li>. */}
        <li key={1}>Invent new traffic lights</li>
        <li key={2}>Rehearse a movie scene</li>
        <li key={3}>Improve the spectrum technology</li>
      </ul>
      <List
        sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.default' }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="./images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="./images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="./images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>

      {/* Rendering Lists */}
      <List>
        {peoples?.map((person, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText
              primaryTypographyProps={{
                color: 'primary',
                fontWeight: 'medium',
                variant: 'body2',
              }}
              primary={person}
            />
          </ListItem>
        ))}
      </List>

      <Typography component="h2" variant="h2" color="primary">
        Filtering arrays of items
      </Typography>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {chemists?.length &&
          chemists.map((item, index) => (
            <Box key={item.imageId}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={item.name} src={getImageUrl(item)} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.profession}
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Box>
          ))}
      </List>

      <Typography component="h3" variant="h3" color="secondary">
        Keeping list items in order with key
      </Typography>

      <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
        {peoplesSecond &&
          peoplesSecond.map((item) => (
            // Displaying several DOM nodes for each list item
            <Box key={item.imageId}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={item.name} src={getImageUrl(item)} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.profession}
                      </Typography>
                      {' ' + item.profession + ' '}
                      known for {item.accomplishment}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Box>
          ))}
      </List>
    </div>
  );
};

export default TodoList;
