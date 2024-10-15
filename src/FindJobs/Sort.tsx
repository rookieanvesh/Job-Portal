import { Button, Combobox, useCombobox } from "@mantine/core";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import { useState } from "react";

const opt = [
    "Relevant",
    "Most Recent",
    "Salary(Low to High)",
    "Salary(High to Low)",
];

const Sort = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevant');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option className='!text-xs' value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      width={150}
      position="bottom-start"
      onOptionSubmit={(val) => {
        setSelectedItem(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <div onClick={()=>combobox.toggleDropdown()} className='cursor-pointer 
        transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-coral-red-900 
        border border-coral-red-500 px-2 py-1 rounded-full flex px-2 py-1 items-center'>
            {selectedItem} <IconAdjustmentsHorizontal className="h-5 w-5 text-coral-red-500"/>
        </div>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
export default Sort;