import React, { useEffect, useState } from 'react';
import classes from './Checkbox.module.scss';

const Checkbox = ({ label, onChangeCallback, isCheckedByDefault = false }) => {
  const [isChecked, setIsChecked] = useState();

  const toggleCheckbox = () => {
    const newValue = !isChecked;

    setIsChecked(newValue);
    onChangeCallback(newValue);
  };

  useEffect(() => {
    setIsChecked(isCheckedByDefault);
  }, []);

  return (
    <div className={classes.label} onClick={toggleCheckbox}>
      <svg className={classes.checkbox} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="17" height="17" rx="2.5"/>
        {
          isChecked && <path d="M7.52709 12.8574C7.46538 12.8574 7.40366 12.8338 7.35641 12.787L3.49923 8.92981C3.40521 8.83579 3.40521 8.68295 3.49923 8.58893C3.59324 8.49492 3.74609 8.49492 3.8401 8.58893L7.52709 12.2754L14.5886 5.21341C14.6827 5.11939 14.8355 5.11939 14.9295 5.21341C15.0235 5.30743 15.0235 5.46027 14.9295 5.55429L7.69729 12.7865C7.65052 12.8338 7.58881 12.8574 7.52709 12.8574Z"/>
        }
      </svg>

      {label}
    </div>
  );
};

export default Checkbox;
