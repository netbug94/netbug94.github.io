import { useState } from 'react';

export const useWindowLever = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return {
        isActive,
        toggleActive
    };
};
