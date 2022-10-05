import spinner from "./assets/spinner.svg";

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        className="text-center mx-auto"
        width={75}
        src={spinner}
        alt="loading..."
      />
    </div>
  );
};

export default Spinner;
