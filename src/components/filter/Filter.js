function Filter({ filter, filterChange }) {
  return (
    <div>
      <p>Find contacts by name:</p>
      <input
        type="tel"
        autoComplete="off"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={filterChange}
        value={filter}
      />
    </div>
  );
}

export default Filter;
