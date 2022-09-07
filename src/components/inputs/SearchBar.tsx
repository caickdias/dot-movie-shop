import React from 'react'

import { AiOutlineSearch } from 'react-icons/ai';

type Props = {
  onChangeInput: (event: any) => void;
}

const SearchBar = ({ onChangeInput }: Props) => {
  return (
    <div className="flex items-center rounded-full w-1/3 h-8 p-2 bg-white">
        <input 
          className=' bg-white rounded-full border-full h-8 w-full outline-none p-2' 
          type="text" 
          placeholder="Pesquisa"
          onChange={onChangeInput}
        ></input>

        <button>
            <AiOutlineSearch color="gray" size={24} />
        </button>
    </div>
  )
}

export default SearchBar