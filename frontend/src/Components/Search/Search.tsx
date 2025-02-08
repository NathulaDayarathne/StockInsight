import React, { ChangeEvent, SyntheticEvent, useState } from "react";

type Props = {};

const Search: React.FC<Props> = (props: Props): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    console.log(e);
  };

  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)} />
      <button onClick={(e) => handleSubmit(e)}>Click This</button>
      <p>you are typing..{search}</p>
    </div>
  );
};

export default Search;
