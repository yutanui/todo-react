import React, { FC, ReactElement} from 'react';
import { Avatar,Box, Typography } from '@mui/material';

// check type at runtime
import  PropTypes from 'prop-types';

// check type at compile time
interface IProfile {
    name : string;
}

export const Profile: FC<IProfile> = (props): ReactElement => {

    const { name } = props;

    return(
        <Box display="flex" 
        flexDirection="column"
        justifyContent="center"
        alignItems="center">
            <Avatar
            sx={{
                width: '96px',
                height: '96px',
                backgroundColor: 'primary.main',
                marginBottom: '16px',
            }}>
                <Typography variant="h4" color="text.primary">
                    {`${ name.substring(0,1)}`}
                </Typography>
            </Avatar>
            <Typography variant="h6" color="text.primary">
                 {`Welcome, ${name}`}
            </Typography>
            <Typography variant="body1" color="text.primary">
                This is your personal task manager
            </Typography>
        </Box>
    );
}

 Profile.propTypes = {
     name : PropTypes.string.isRequired,
 }
