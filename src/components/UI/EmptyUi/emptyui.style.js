import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
    // price: {
    //     color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    // },

    empty_ui_wrapper : {
        width:'100%',
        height:'85vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }

   

}));