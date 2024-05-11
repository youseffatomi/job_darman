import "./style.scss";

export const Button = ({ children, color, className, ...props }) => (
  <button
    style={{ backgroundColor: color || "#ccc" }}
    {...props}
    className={className + " py-[12px] w-full rounded-full text-[18px]"}
  >
    {children}
  </button>
);

export const Input = ({ label, setValue, ...props }) => (
  <div>
    {label && <label>{label}</label>}
    <input
      className="font-bold placeholder-[#15143966] text-[18px] px-[24px] py-[12px] rounded-full block w-full border-2 border-solid border-[#EBEAED] focus:border-[#cecdcf] transition-all"
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  </div>
);
