import Select from "react-select";

const options = [
  { value: "ar", label: "Arabic" },
  { value: "en", label: "English" },
];

export default () => {
  return (
    <>
      <Select
        styles={{
          indicatorSeparator() {
            return { display: "none" };
          },
          control: (provided) => ({
            ...provided,
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            width: "150px",
          }),
          singleValue: (provided) => ({
            ...provided,
            color: "white",
            margin: "0px",
            width: "100%",
          }),

          valueContainer: (provided) => ({
            ...provided,
            width: "100px",
          }),
          container: (provided) => ({
            ...provided,
            color: "black",
            margin: "10px",
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
            color: "white",
          }),
        }}
        placeholder="Select a language..." // Set a fallback placeholder
        defaultValue={options[0]}
        isClearable={false}
        isRtl={true}
        isSearchable={false}
        name="lang"
        options={options}
      />
    </>
  );
};
