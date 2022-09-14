import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectProps } from 'utils/Type';

const SelectMenu = ({ title, onSelect, content }: SelectProps) => {
  return (
    <>
      <FormControl sx={{ width: '10rem' }}>
        <InputLabel id={title}>{title}</InputLabel>
        <Select onChange={e => onSelect(e)}>
          {content.map((v: string, i: number) => (
            <MenuItem key={i} value={v || ''}>
              {v || ''}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectMenu;
