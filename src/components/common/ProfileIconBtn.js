import React from 'react';
import ProfileIcon from '../../assets/icons/747376.svg'

const ProfileIconBtn = ({margin,padding}) => {

    
    const styleProfileIcon = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '6rem',
        width: '6rem',
        backgroundColor: 'trasparent',
        borderRadius: '1.5rem',
        margin: '2rem'
    }

    const styleIcon = {
        height: '3rem',
    }

    return (
        <div style={styleProfileIcon}>
            <img style={styleIcon} src={ProfileIcon} alt='people'></img>
        </div>
    );
};

export default ProfileIconBtn;