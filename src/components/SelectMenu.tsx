import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { LoaderBox } from 'pages/Issue/Issue';
import { SelectProps } from 'utils/Type';

const SelectMenu = ({ title, onSelect, content, value }: SelectProps) => {
  return (
    <LoaderBox>
      <FormControl sx={{ width: '10rem' }}>
        <InputLabel id={title}>{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={e => onSelect(e)}
        >
          {content.map((v: string, i: number) => (
            <MenuItem key={i} value={v || ''}>
              {v || ''}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </LoaderBox>
  );
};

export default SelectMenu;
