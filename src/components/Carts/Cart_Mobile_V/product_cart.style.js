import { createStyles } from "@mantine/core";



export const useStyles = createStyles((theme , _params, getRef) => ({

    cart_area_wrapper: {
        display: 'flex',
        borderBottom: `2px solid ${theme.colorScheme === 'dark' ? '#fff' : theme.colors.gray[3]}`,
        marginBottom: '10px',
        paddingBottom: '10px',
        [`&:hover .${getRef('product_cart_rm')}`]: {
             visibility: 'visible !important',
        }
    },
    image_container: {
        width: '25%',
    },
    image_wrapper: {
        width: '80px',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '13px'
    },

    product_cart_rm: {
        ref: getRef('product_cart_rm'),
        visibility: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        background: '#00000045',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition : '.3s all ease-in-out',
    },

    cart_context: {
        width: '75%',
    },
    cart_counter_area: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '10px',

    },
    cart_content_area: {
        width: '65%',
        p: {
            margin: '0px',

        }
    },
    cart_btn_area: {
        display: 'flex',
        width: '35%',
        alignItems: 'end',
        flexDirection: 'column',
    },
    cart_counter: {
        width: '105px',
        marginTop: '10px',
    },

    sub_cost_area: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    }

}));