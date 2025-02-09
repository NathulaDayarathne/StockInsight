import React, { ChangeEvent, SyntheticEvent, useState } from "react";

interface Props {
  handleSubmit: (e:SyntheticEvent) => void;
  search: string | undefined;
  handleChange: (e: ChangeEvent <HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({handleChange, search, handleSubmit} : Props): JSX.Element => {
  // const [search, setSearch] = useState<string>("");

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value);
  //   console.log(e);
  // };

  // const handleSubmit = (e: SyntheticEvent) => {
  //   console.log(e);
  // };

  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)} />
      <button onClick={(e) => handleSubmit(e)}>Click This</button>
      <p>you are typing..{search}</p>
    </div>
  );
};

export default Search;
