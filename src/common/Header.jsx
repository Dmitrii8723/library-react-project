/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useState } from 'react';
import Dropdown from './Dropdown';
const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    return (<div css={css`
    display: flex;
    height: 5em; 
    background: white;
    box-shadow: 2px 3px 5px grey;
    width: 100%;
    position: relative;
    justify-content: flex-end;
    align-items: center;`}>
        <button
        type="button"
        css={css`
        width: 10em; 
        border: none;
        height: 70%; 
        background: #E4E6EB;
        border-radius: 5px;
        position: relative;
        font-size: 1em;
        font-weight: 700;
        @media screen and (max-width: 1600px) {
            right: 5em;
          }
        @media screen and (min-width: 1700px) {
            right: 10em;
          }
        &:hover { 
            cursor: pointer;
        }`}
        onClick={() => setShowDropdown(!showDropdown)}
        // TODO: Handle dropdown clicks as well
        onBlur={() => setShowDropdown(false)}
        >
            Add new resource
        </button>
        {showDropdown &&(<Dropdown />)}
    </div>);
};

export default Header;