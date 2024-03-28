import logo from "../assets/logo.svg";

function Header() {
  return (
    <div className="flex w-full items-center justify-between rounded-2xl bg-SoftRed p-6 md:px-8 md:py-[1.5625rem]">
      <div>
        <h2 className="text-Cream">My Balance</h2>
        <p className="text-2xl font-bold leading-[1.5em] text-VeryPaleOrange md:text-[2rem]">
          $921.48
        </p>
      </div>
      <div>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}
export default Header;
