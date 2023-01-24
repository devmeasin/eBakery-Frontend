import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({

    //  color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    shoppingCart: {
        // opacity: .7,
        cursor: 'pointer',
        position: 'fixed',
        width: 'auto',
        height: 'auto',
        background: theme.colorScheme === 'dark' ? theme.colors.gray[9] : '#fff',
        right: 0,
        top: 'calc(110px + 30%)',
        boxShadow: 'rgb(0 0 0 / 16%) 0px 21px 36px',
        transition: '.1s ease-in-out',
        zIndex: 99999999,
        borderRadius: '10px 0px 0px 10px',
        border: '0px',
        outline: '0px',
        padding: '8px 13px',
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        
    },
    bag_area : {
        width: '40px',
    },
    bag_item : {
        p : {
            margin: '0px',
            fontWeight: '600',
            fontSize: '14px',
        }
    }


}));